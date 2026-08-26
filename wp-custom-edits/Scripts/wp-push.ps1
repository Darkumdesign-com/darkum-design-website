<#
.SYNOPSIS
  Push a local file's content live to a WordPress post_content field over SSH,
  without ever writing shell-quoted content and without staging the file inside
  the public web root (~/html).

.DESCRIPTION
  Standing safe-push method for this project (see
  docs/handoff/wp-cli-workflow-and-tooling.md). Uploads the target content file
  plus wp-eval-push.php to a private, non-web-accessible staging directory on
  the server (~/wp-push-tmp, created if missing), runs `wp eval-file` with
  --path pointed at the WordPress install so WP-CLI doesn't need to run from
  inside ~/html, verifies the write with a compact SQL query, then deletes the
  staged files from the server.

  Requires PowerShell 7 (pwsh), not Windows PowerShell 5.1 (powershell.exe):
  Posh-SSH was installed under pwsh's CurrentUser module scope
  (Documents\PowerShell\Modules), which powershell.exe does not read from
  (it reads Documents\WindowsPowerShell\Modules instead). Always invoke this
  script with `pwsh -NoProfile -File`, not the plain `powershell` alias.

  Note on Set-SFTPItem: it uploads INTO a destination directory and always
  keeps the source file's own name, there is no rename-on-upload parameter.
  Passing a full target file path that doesn't already exist as -Destination
  fails outright, this script uploads to a directory and then references
  each file's own original basename in the wp eval-file call below.

  Note on paths: this SFTP account is NOT chrooted, Get-SFTPLocation returns
  the real absolute home directory (/home/<user>), and a leading slash means
  the true filesystem root, not the SFTP home. Use paths relative to the
  session's starting location (no leading slash) for anything under the
  home directory, confirmed via Test-SFTPPath during this project's setup.

.PARAMETER LocalFile
  Path to the local file whose content should become the post's post_content.

.PARAMETER PostId
  Target WordPress post ID. 83 = Additional CSS (custom_css). 35 = Home page.

.PARAMETER VerifyString
  Optional. A short, unique substring expected in the new content. If given,
  the script confirms it's present at the live database level (LOCATE) after
  the push, not just trusting wp-eval-push.php's own success message.

.EXAMPLE
  pwsh -NoProfile -File wp-push.ps1 -LocalFile "..\CSS\additional-css.css" -PostId 83 -VerifyString "some unique comment text"
#>

param(
    [Parameter(Mandatory = $true)][string]$LocalFile,
    [Parameter(Mandatory = $true)][int]$PostId,
    [string]$VerifyString
)

$ErrorActionPreference = "Stop"
Import-Module Posh-SSH -ErrorAction Stop

if (-not (Test-Path $LocalFile)) {
    throw "Local file not found: $LocalFile"
}

# .env lives at the repo root, two levels up from this script's folder
# (wp-custom-edits\Scripts\wp-push.ps1 -> repo root).
$repoRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$envPath = Join-Path $repoRoot ".env"
$envFile = Get-Content $envPath -Raw
$sshHost = (($envFile -split "`n" | Where-Object { $_ -match "^FTP Host:" }) -replace "FTP Host:\s*", "").Trim()
$sshUser = (($envFile -split "`n" | Where-Object { $_ -match "^Username:" }) -replace "Username:\s*", "").Trim()
$sshPass = (($envFile -split "`n" | Where-Object { $_ -match "^Password:" }) -replace "Password:\s*", "").Trim()

$secpasswd = ConvertTo-SecureString $sshPass -AsPlainText -Force
$cred = New-Object System.Management.Automation.PSCredential ($sshUser, $secpasswd)

$phpHelperLocal = Join-Path $PSScriptRoot "wp-eval-push.php"
$stagingDir = "wp-push-tmp"                 # relative to the SFTP/SSH home dir, NOT inside html
$wpRoot = "/home/$sshUser/html"
$remoteContentName = Split-Path -Leaf $LocalFile
$remotePhpName = "wp-eval-push.php"

Write-Host "Connecting..."
$sshSession = New-SSHSession -ComputerName $sshHost -Credential $cred -AcceptKey -Port 22 -ConnectionTimeout 30

Write-Host "Ensuring private staging directory exists (not under ~/html)..."
Invoke-SSHCommand -SSHSession $sshSession -Command "mkdir -p ~/$stagingDir" -TimeOut 30 | Out-Null

Write-Host "Uploading via SFTP..."
$sftpSession = New-SFTPSession -ComputerName $sshHost -Credential $cred -AcceptKey -Port 22 -ConnectionTimeout 30
Set-SFTPItem -SFTPSession $sftpSession -Path $LocalFile -Destination "$stagingDir/" -Force
Set-SFTPItem -SFTPSession $sftpSession -Path $phpHelperLocal -Destination "$stagingDir/" -Force
Remove-SFTPSession -SFTPSession $sftpSession | Out-Null

Write-Host "Confirming both files landed under the expected names..."
$lsRes = Invoke-SSHCommand -SSHSession $sshSession -Command "ls -la ~/$stagingDir/$remoteContentName ~/$stagingDir/$remotePhpName" -TimeOut 30
$lsRes.Output | ForEach-Object { Write-Host "LS: $_" }
if ($lsRes.ExitStatus -ne 0) {
    throw "Upload verification failed, one or both files did not land as expected. See LS output above."
}

Write-Host "Running wp eval-file (post $PostId)..."
$cmd = "cd ~/$stagingDir && wp eval-file $remotePhpName $remoteContentName $PostId --path=$wpRoot"
$res = Invoke-SSHCommand -SSHSession $sshSession -Command $cmd -TimeOut 30
Write-Host "ExitStatus: $($res.ExitStatus)"
$res.Output | ForEach-Object { Write-Host "EVAL: $_" }
if ($res.ExitStatus -ne 0) {
    Write-Host "eval-file reported failure, leaving staged files in place for inspection, not cleaning up."
    Remove-SSHSession -SSHSession $sshSession | Out-Null
    exit 1
}

if ($VerifyString) {
    Write-Host "Verifying via SQL..."
    $escaped = $VerifyString -replace "'", "''"
    $verifyCmd = "cd ~/html && wp db query `"SELECT LENGTH(post_content) AS len, LOCATE('$escaped', post_content) AS found_pos FROM wp_5f9392e910_posts WHERE ID=$PostId;`""
    $res2 = Invoke-SSHCommand -SSHSession $sshSession -Command $verifyCmd -TimeOut 30
    $res2.Output | ForEach-Object { Write-Host "VERIFY: $_" }
}

Write-Host "Cleaning up staged files..."
Invoke-SSHCommand -SSHSession $sshSession -Command "rm -f ~/$stagingDir/$remotePhpName ~/$stagingDir/$remoteContentName" -TimeOut 30 | Out-Null

Remove-SSHSession -SSHSession $sshSession | Out-Null
Write-Host "Done."
