# WordPress Custom Code — Reference

**Purpose:** the WordPress build (`1221269.us32.myftpupload.com`) is live-only, no local dev, no git deploy (see `docs/HANDOFF.md` §4). Anything pasted directly into a WordPress text field, Customizer's Additional CSS, a Kadence Custom HTML block, GoDaddy Code Snippets, only exists in the database from that point on. This folder is a plain, git-tracked mirror of that content, so there's a readable backup and diff history outside GoDaddy's database and its hourly-but-undiffed backups.

**Not deployed anywhere.** These files don't do anything by sitting in the repo. Update them by hand whenever the live WordPress field is changed, and keep them in sync.

## Folder guide

- `HTML/` — markup pasted into Kadence Custom HTML blocks
- `CSS/` — stylesheets, both the sitewide Customizer Additional CSS and individual Custom HTML block styles
- `JS/` — scripts, mostly the `<script>` portion of Custom HTML blocks
- `PHP/` — for GoDaddy Pro Code Snippets, once any exist (none yet as of 2026-08-18)
- `Docs/` — this file, plus any future notes on the custom code itself

## Sitewide Additional CSS

Pastes into: **WordPress Admin → Appearance → Customize → Additional CSS**

Full content: `CSS/additional-css.css`

Currently just the `.sr-only` utility class fix for the hero ticker's screen-reader status announcer (see `docs/HANDOFF.md` §7, the `#ticker-status` bug).

## Homepage hero ticker (Kadence Custom HTML block)

Three files combine into **one pasted blob** in a single Custom HTML block, Kadence doesn't support separate `<link>`/`<script src>` references to files hosted elsewhere:

1. `HTML/light-catchphrase-ticker.html` — the markup, pasted as-is
2. `CSS/light-catchphrase-ticker.css` — wrap in `<style>...</style>`, paste directly after the HTML
3. `JS/light-catchphrase-ticker.js` — wrap in `<script>...</script>`, paste directly after the `<style>` block

So the full block content is: HTML, then `<style>` + CSS + `</style>`, then `<script>` + JS + `</script>`, all as one continuous paste. See `docs/HANDOFF.md` §4 ("Key lesson learned building this") for why.

**Depends on the sitewide `.sr-only` class above** — the block's own CSS deliberately does not redefine it, so both pieces need to be in place for the screen-reader status line to stay hidden.

## Kadence Global Palette

Not raw code, a Customizer import, so tracked directly in `docs/HANDOFF.md` §4 instead of duplicated here (Palette 3, Darkum's brand colors, imported 2026-08-18).

## Kadence Security Plugin API key

Also tracked in `docs/HANDOFF.md` §4, not duplicated here.
