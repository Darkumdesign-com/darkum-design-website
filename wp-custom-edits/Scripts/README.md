# WordPress Live-Push Scripts

**Different purpose from the rest of `wp-custom-edits`.** Every other folder here
(`CSS/`, `HTML/`, `JS/`, `PHP/`, `SQL/`) is a git-tracked *mirror* of content
that lives in the WordPress database, files that don't do anything just by
existing in the repo (see `../Docs/wp-reference.md`). This folder is the
opposite: these two files are actual, reusable **tooling**, the mechanism
that pushes a mirror file's content live.

## Files

- **`wp-push.ps1`**, the driver. Uploads a local file plus `wp-eval-push.php`
  to a private staging directory on the server, runs `wp eval-file`, verifies
  the write against the live database, cleans up after itself.
- **`wp-eval-push.php`**, the WP-CLI helper `wp-push.ps1` uploads and runs.
  Reads a content file and writes it as `post_content` for a given post ID
  via `wp_update_post()`, sidestepping shell quoting entirely (see
  `../Docs/wp-cli-workflow-and-tooling.md` in `docs/handoff/` at the repo
  root for the full story of why raw shell interpolation, e.g.
  `wp post update 83 --post_content="$(cat file)"`, silently emptied the live
  Additional CSS field once).

## Usage

```powershell
pwsh -NoProfile -File wp-custom-edits\Scripts\wp-push.ps1 `
  -LocalFile "wp-custom-edits\CSS\additional-css.css" `
  -PostId 83 `
  -VerifyString "some short, unique substring from the new content"
```

**Must be run with `pwsh`, not `powershell`.** Posh-SSH is installed under
PowerShell 7's CurrentUser module scope (`Documents\PowerShell\Modules`),
which the legacy Windows PowerShell 5.1 (`powershell.exe`) doesn't read from
at all, it looks in `Documents\WindowsPowerShell\Modules` instead. Running
this with the bare `powershell` alias fails with a plain "term not
recognized" error for every Posh-SSH cmdlet.

Known post IDs on this project: **83** = Additional CSS (`custom_css`),
**35** = Home page content.

`-VerifyString` is optional but strongly recommended, a short, distinctive
phrase from a comment or rule you just added. Without it, the script only
confirms `wp_update_post()` reported success, not that the specific change
actually landed in the live database.

## What this script deliberately does NOT do

- **Never stages files inside `~/html`** (the public web root). Files land
  in a private `~/wp-push-tmp` directory instead, created on first use if it
  doesn't exist, and `wp eval-file` is pointed at the real WordPress install
  via `--path`, so it never needs to run from inside `~/html`. An earlier,
  now-retired version of this tooling briefly left a stray `.css` file
  sitting in the public web root by accident, this staging approach is the
  fix for that class of mistake, not just a one-off patch.
- **Never uses shell string interpolation** for the content itself. The
  content file is read on the server by PHP's own `file_get_contents()`,
  never passed through a shell-quoted argument.
- **Doesn't touch native Gutenberg block content** (regular Paragraph,
  Heading, Column blocks). That content is validated/reconciled by
  Gutenberg's own parser in a way a raw `post_content` overwrite bypasses
  entirely, a real, different risk from pushing to the Additional CSS field
  or a Custom HTML block. Gutenberg block edits still go through the visual
  editor or a block's own Code Editor by hand.

## A note on where scripts like this belong

Genuinely one-off, throwaway diagnostic scripts (a quick "what's actually in
this field right now" check, run once and never needed again) are fine as
scratch files in `$env:TEMP`. Anything reusable, anything meant to be run
again next week or by a future session, belongs in the repo instead, this
folder if it's WordPress-push tooling specifically. `$env:TEMP` scripts have
no version history, no diff, and get silently lost between sessions, which
is exactly what happened to the first version of this tooling before it was
moved here.
