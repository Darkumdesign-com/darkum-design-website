# WordPress Custom Code, Reference

**Purpose:** the WordPress build (`1221269.us32.myftpupload.com`) is live-only, no local dev, no git deploy (see `docs/HANDOFF.md` §4). Anything pasted directly into a WordPress text field, Customizer's Additional CSS, a Kadence Custom HTML block, GoDaddy Code Snippets, only exists in the database from that point on. This folder is a plain, git-tracked mirror of that content, so there's a readable backup and diff history outside GoDaddy's database and its hourly-but-undiffed backups.

**Not deployed anywhere.** These files don't do anything by sitting in the repo. Update them by hand whenever the live WordPress field is changed, and keep them in sync.

## Folder guide

- `HTML/`, markup pasted into Kadence Custom HTML blocks
- `CSS/`, stylesheets, both the sitewide Customizer Additional CSS and individual Custom HTML block styles
- `JS/`, scripts, mostly the `<script>` portion of Custom HTML blocks
- `PHP/`, for GoDaddy Pro Code Snippets, once any exist (none yet as of 2026-08-18)
- `SQL/`, local-only database dumps (`wp db export`), gitignored, never committed. Contains user data, password hashes, and API keys, so it stays off git entirely rather than being tracked-but-encrypted or similar. If this folder looks empty in a fresh clone of the repo, that's expected, see `.gitignore` at the repo root.
- `Docs/`, this file, plus any future notes on the custom code itself

## Sitewide Additional CSS

Pastes into: **WordPress Admin → Appearance → Customize → Additional CSS**

Full content: `CSS/additional-css.css`

Currently just the `.sr-only` utility class fix for the hero ticker's screen-reader status announcer (see `docs/HANDOFF.md` §7, the `#ticker-status` bug).

## Homepage hero ticker (Kadence Custom HTML block)

Three files combine into **one pasted blob** in a single Custom HTML block, Kadence doesn't support separate `<link>`/`<script src>` references to files hosted elsewhere:

1. `HTML/light-catchphrase-ticker.html`, the markup, pasted as-is
2. `CSS/light-catchphrase-ticker.css`, wrap in `<style>...</style>`, paste directly after the HTML
3. `JS/light-catchphrase-ticker.js`, wrap in `<script>...</script>`, paste directly after the `<style>` block

So the full block content is: HTML, then `<style>` + CSS + `</style>`, then `<script>` + JS + `</script>`, all as one continuous paste. See `docs/HANDOFF.md` §4 ("Key lesson learned building this") for why.

**Depends on the sitewide `.sr-only` class above**, the block's own CSS deliberately does not redefine it, so both pieces need to be in place for the screen-reader status line to stay hidden.

## Kadence Global Palette

Not raw code, a Customizer import, so tracked directly in `docs/HANDOFF.md` §4 instead of duplicated here (Palette 3, Darkum's brand colors, imported 2026-08-18).

## Kadence Security Plugin API key

Also tracked in `docs/HANDOFF.md` §4, not duplicated here.

## Server access methods

Three ways in, confirmed working as of 2026-08-19:

1. **SFTP**, file transfer only, credentials in `.env` (repo root, not tracked in git).
2. **GoDaddy Hub File Manager**, browser-based, useful for quick one-off uploads, but files placed this way don't automatically register in the WordPress database (confirmed with the SVG upload test, see `docs/HANDOFF.md` §4).
3. **SSH / WP-CLI**, full shell access, added 2026-08-19.

### SSH connection

Host entry saved in `C:\Users\sobhy\.ssh\config` as `Darkum-Design-GoDaddy`, password-auth only (GoDaddy shared hosting doesn't support key upload). Password stored in `.env`, not in the SSH config itself.

Connect directly from a terminal:

```
ssh client_4c28961da_1221269@1221269.us32.ssh.myftpupload.com
```

Or connect via VS Code's Remote Explorer, SSH section, `Darkum-Design-GoDaddy` entry.

### WP-CLI

Available once connected over SSH. WordPress root is `~/html` on this account. WP-CLI needs to be run from inside that folder (or with a `--path=` flag) to find the install:

```
cd ~/html
wp core version
```

Confirmed working commands, 2026-08-19:

- `wp core version`, returns `7.0.4`, confirms `wp` is on PATH and pointed at the right install
- `wp plugin list`, full active plugin list, see below
- `wp option get siteurl`, confirms the site is the temp domain (`https://1221269.us32.myftpupload.com`)
- `wp cache flush`, cleared successfully, alternative to the Hub's cache flush button
- `wp eval '...'`, runs arbitrary PHP one-liners, e.g. `wp eval 'echo home_url();'`

**Good for:** one-off diagnostics, content operations, quick PHP checks without the Hub Code Snippets tool's persistence problem (see the Custom code correction in `docs/HANDOFF.md` §4).

**Not a substitute for:** persistent hooks/filters. `wp eval`/`wp eval-file` run once per invocation, same limitation as the Hub tool, still need the actual Code Snippets plugin or a theme's `functions.php` for anything that has to stay active (e.g. the `upload_mimes` SVG filter).

### Database access via WP-CLI

`wp db` wraps direct MySQL access using the credentials already in `wp-config.php`, no separate database credentials needed, just the SSH session.

Confirmed working commands, 2026-08-19:

- `wp db cli`, drops into an interactive MySQL prompt against the live database
- `wp db query "SELECT ...;"`, runs a single query without the interactive prompt
- `wp db size`, database `db_dom1221269` is 7,258,112 B (~7 MB) as of 2026-08-19, well under the 100 GB hosting cap noted in `docs/HANDOFF.md` §4
- `wp db export backup.sql`, dumps the full database to a `.sql` file on the server
- `wp db tables`, lists all table names, full list below

**Correction to an earlier assumption:** the table prefix on this install is **`wp_5f9392e910_`**, not the plain `wp_` default, confirmed from `wp db tables` output, 2026-08-19. Any raw SQL written against this database needs the real prefix, not the WordPress-default one.

**Table list (`wp db tables`, 2026-08-19):** standard WordPress core tables (`posts`, `postmeta`, `options`, `users`, `usermeta`, `comments`, `commentmeta`, `terms`, `term_taxonomy`, `term_relationships`, `termmeta`, `links`), plus plugin-specific tables from WooCommerce (`wc_category_lookup`, `wc_product_meta_lookup`, `wc_reserved_stock`, `wc_tax_rate_classes`, `woocommerce_order_itemmeta`, `woocommerce_payment_tokenmeta`), Action Scheduler (`actionscheduler_actions`, `_claims`, `_groups`, `_logs`), iThemes/Kadence Security (`itsec_bans`, `_dashboard_events`, `_dashboard_lockouts`, `_distributed_storage`, `_fingerprints`, `_firewall_rules`, `_geolocation_cache`, `_lockouts`, `_logs`, `_mutexes`, `_opaque_tokens`, `_temp`, `_user_groups`, `_vulnerabilities`), Kadence Blocks (`kb_optimizer`, `_viewport_hashes`), and Code Snippets (`snippets`).

**Safety notes, since this is live production, no local sandbox:**

- `SELECT`-only queries (`wp db cli`, `wp db query`) are safe to run freely, useful for diagnostics like checking what's actually stored for the Global Palette or verifying the ticker block's live content matches the repo copy.
- Any `UPDATE`/`DELETE`/`INSERT` runs immediately against the real site with no undo beyond GoDaddy's hourly Premium Backups (see `docs/HANDOFF.md` §4), a `wp db export` immediately before any write query is the safer habit.
- **`wp db export` writes the `.sql` file inside `~/html`, the live web root.** A database dump sitting in a publicly-servable directory is a real exposure risk if the filename is ever guessed or indexed. Download it via SFTP promptly and delete it from the server afterward, don't leave `backup.sql` sitting in `~/html`, and don't commit it to the git repo (it belongs nowhere near version control, since it contains user data, password hashes, API keys, and more).

### Live plugin list (`wp plugin list`, 2026-08-19)

| Plugin | Status | Version |
|---|---|---|
| advanced-product-fields-for-woocommerce | active | 1.7.1 |
| kadence-blocks | active | 3.7.9.1 |
| better-wp-security | active | 10.0.3 |
| safe-svg | active | 2.4.0 |
| kadence-starter-templates | active | 2.3.4 |
| woocommerce | active | 11.0.1 |
| wordpress-seo | active | 28.3 |
| object-cache-pro | must-use | 1.25.6 |
| gd-system-plugin | must-use | 4.299.0 |

**Resolved 2026-08-19:** the `better-wp-security` slug is Kadence Security's underlying plugin, built on the iThemes/Solid Security codebase and rebranded, not a separate/conflicting plugin. Confirmed by screenshot, wp-admin's Kadence Security Basic → Configure → Network Brute Force page shows the same API key (`vPWwlaPKQUd5VC8C38uBNj0ANnqLQtOb`) already recorded in `docs/HANDOFF.md` §4. No discrepancy, the plugin-name flag above was a false alarm.

## Code Snippets plugin (installed 2026-08-19)

Installed and activated via WP-CLI, since the Hub's built-in Code Snippets tool doesn't persist (see `docs/HANDOFF.md` §4's Custom code correction):

```
wp plugin install code-snippets --activate
```

First snippet added: **Enable SVG Uploads** (PHP, Active), the `upload_mimes` filter previously saved to `PHP/enable-svg.php`, now actually persistent. Confirmed Active in wp-admin → Snippets → Edit Snippet.

This is now the mechanism for any future PHP that needs to stay hooked in (filters, actions), rather than the Hub's one-shot tool or a theme's `functions.php`.
