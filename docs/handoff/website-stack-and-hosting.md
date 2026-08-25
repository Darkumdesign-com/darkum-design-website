# Website Stack and Hosting

### Stack (confirmed)
- **CMS:** WordPress
- **E-commerce:** WooCommerce
- **Page builder:** Kadence Blocks (free) + Kadence theme (free), chosen over Elementor Pro specifically because Bido wants to avoid subscription costs, so capital goes toward marketing instead. Kadence's native block animations cover scroll-reveal effects for free, which would otherwise require Elementor Pro.
- **SEO:** Yoast SEO (free), handles technical on-page basics (meta tags, sitemap, canonical URLs). **Scope clarified 2026-08-17:** Bido has a separate marketing agency deal covering ongoing on-page and off-page SEO strategy/content, that work is no longer part of Sobhy's scope. Yoast stays installed as WordPress infrastructure regardless.
- **Custom code:** GoDaddy Pro's built-in Code Snippets (included with GoDaddy Pro, no plugin required), for PHP snippets outside `functions.php`; Kadence blocks also support Custom CSS directly, and native Gutenberg has a Custom HTML block for JS/HTML injection. **Decided 2026-08-17:** dropped the separate Code Snippets *plugin* in favor of this, GoDaddy Pro already provides the same capability natively, so this is one fewer plugin to maintain, matching the fewer-plugins-for-performance-and-security preference. **Correction, 2026-08-19:** this reasoning only holds for one-off diagnostic tasks (list active plugins, clear cache, check disk space). Per GoDaddy's own documentation, snippets run through the Hub's Code Snippets tool execute only when "Run" is pressed and do not persist, and are not injected into WordPress' filter/action hook system, "Save" only adds the snippet text to a reusable library, it does not make it run automatically going forward. Confirmed the hard way: the SVG mime-type filter below (`upload_mimes`) ran once via this tool and never actually took effect. **For anything that needs to stay active** (filters, hooks, persistent behavior), this tool is the wrong one, the free Code Snippets *plugin* (or a child theme's `functions.php` over SFTP) is needed instead. Open item, see `resolved-items-log.md`.
- **Slider: not needed, confirmed twice.** Resolved 2026-08-13 (see "Confirmed scope decisions" below) that the hero uses a custom Q&A ticker, not a plugin slider, and everything else uses Kadence's native scroll-reveal. Reconfirmed 2026-08-17 when Sobhy was mid-install of MetaSlider's two plugin variants (Slider/Gallery/Carousel and MetaSlider Gallery) before catching that neither has the EN-right/AR-left custom logic the hero needs. **Do not install any MetaSlider variant**, the hero ticker is hand-built via Custom HTML block, see below.
- **Security: Kadence Security Plugin, Brute Force Protection Network, activated 2026-08-18.** Free, joins the site to Kadence's shared network of protected WordPress sites, blocking known malicious IPs attacking WordPress logins across the network. Confirmation email received with the site's API key, recorded here for reference:
  - Domain: `1221269.us32.myftpupload.com`
  - API key: `vPWwlaPKQUd5VC8C38uBNj0ANnqLQtOb`
  - Note for go-live: this API key is tied to the temp domain above. Worth checking whether it needs reissuing/reconnecting once DNS cuts over to `darkumdesign.com`, see `TO-DO-List.md`.
- **Global Palette (Kadence Customizer → Colors & Fonts → Colors) set up 2026-08-18:** Palette 3 imported with Darkum's actual brand colors (from `css/style.css`), replacing the default sample blues. Accents: `#996633` (brand primary/wood), `#7a522a` (derived darker wood), `#bd9c7a` (wood light). Contrast: `#000000` (bg), `#2b2620` (derived near-black), `#8a8078` (muted), `#f2e9dd` (cream). Base: `#f2e9dd` (cream), `#ffffff` (white), `#faf7f2` (derived off-white). Notices: success/info/warning/alert left as Kadence's stock defaults (Darkum's CSS doesn't define these), danger set to `#d16a5a` (`--error`). The `--border` CSS variable (`rgba(242, 233, 221, 0.12)`) has no equivalent slot, since the Global Palette only stores solid hex, it stays as a CSS variable used directly in `style.css`. Confirmed imported correctly via screenshot; still needs **Publish** clicked to persist past the live preview.
- **Hosting (Step 1 complete 2026-08-16):** GoDaddy Managed WordPress hosting is now set up, **Ecommerce plan** (2 websites, unlimited monthly visitors, SSH/SFTP access, one-click staging site, per the account dashboard). **Temporary build domain confirmed: `1221269.us32.myftpupload.com`.** Recommended build/go-live sequence:
  1. ✅ Set up GoDaddy Managed WordPress hosting. It automatically provides a **temporary domain** (`1221269.us32.myftpupload.com`) specifically for building/testing without touching `darkumdesign.com`'s DNS, no special request needed, this is the standard workflow.
  2. ⏳ Build the full site there (Kadence, WooCommerce, Bed Frame configurator once the plugin's confirmed), **not yet started.**
  3. Bido/Noura/Heba review and approve the build on the temporary domain.
  4. Only then point `darkumdesign.com`'s DNS from Vercel to GoDaddy, retiring the coming-soon page. This can happen as soon as the build is approved, see the Domain section below for why it does **not** need to wait for the 25 September registrar-transfer date.
  5. The registrar ownership transfer to Bido's GoDaddy account (see Domain section below) happens later, whenever convenient after 25 September, independent of step 4, the site can go live on the new build well before the registrar transfer itself completes.

  Throughout steps 1–3, `darkumdesign.com` keeps serving the current coming-soon page on Vercel, completely untouched. See `TO-DO-List.md` for this item's open-item tracking.

### Local development environment, set up, then torn down (2026-08-16/17)
Originally set up as Docker Desktop + `wp-env` (`@wordpress/env`) at `C:\Projects\darkum-design-wordpress\`, with Kadence, Kadence Blocks, WooCommerce, Yoast SEO, and Code Snippets all installed and verified active there.

**Decision reversed 2026-08-17: torn down entirely, moved to live-only development on the GoDaddy temp domain.** Reasoning: most of this build's real work (Kadence page layouts, WooCommerce settings, product configurator fields) happens through the wp-admin GUI, not in files, so local's usual advantage (fast, disposable iteration before committing to the "real" environment) barely applied here, since GUI speed is identical whether it's `localhost:8888` or the live temp domain. Keeping one environment instead of two also removes the drift risk local/live sync would otherwise require managing.

**Teardown executed via Claude Code** (chosen specifically for live terminal visibility on a multi-step uninstall, per the process note this replaced):
- `wp-env stop` run cleanly first.
- All project-specific Docker images removed: the 4 `wp-env-darkum-design-wordpress-*` images, plus `mariadb:lts` and `phpmyadmin:latest` (both confirmed only referenced by this project's wp-env stack, not shared with anything else).
- All 4 project-specific Docker volumes removed.
- No containers or non-default networks existed to remove.
- `C:\Projects\darkum-design-wordpress\` fully deleted (the containing folder needed a manual `Remove-Item` after closing the session, since Claude Code's own working-directory handle briefly locked the empty folder, a Windows file-lock quirk, not a data-loss issue).
- Docker Desktop fully uninstalled (via winget), including the `docker-desktop` WSL VM, `%APPDATA%\Docker`, `%LOCALAPPDATA%\Docker`, `~/.docker`, and `C:\ProgramData\Docker(Desktop)`. Confirmed clean: `docker` no longer a recognized command, no Docker entries left on PATH.
- **Verified before uninstalling:** nothing else on the machine depends on Docker Desktop, WSL integration was only enabled for the unrelated Ubuntu-24.04 general-purpose distro (no Docker CLI or compose files inside it), and no other `C:\Projects` subfolder contains a `Dockerfile`/`docker-compose*.yml`/`.wp-env.json`. WSL Ubuntu-24.04 itself was left untouched throughout, as intended.
- One harmless leftover (`C:\Program Files\Docker\Docker\tmp-delete\*`, a few Windows-locked installer files) cleared itself on the next reboot, as expected.

**Live-only build's safety net is now GoDaddy's Premium Backups (hourly), not a local sandbox**, see the new subsection below.

### GoDaddy Managed WordPress, known limitations (researched 2026-08-17, from GoDaddy's own docs)
Raised by Sobhy: is GoDaddy Managed WordPress limited enough to cause problems, and does that affect the local↔live setup? Findings:

- **SSH + WP-CLI: available**, confirmed for the Ecommerce plan specifically (Deluxe/Ultimate/Ecommerce tiers only, not a limitation for this project).
- **File editing is restricted** on Managed WordPress, GoDaddy only allows editing a specific list of files directly (core bootstrap files like `wp-config.php` are locked down for security). This doesn't affect normal plugin/theme installs via wp-admin, which work as usual. It's also the reason **Code Snippets (database-stored PHP) was already the right call** over direct `functions.php` editing, it sidesteps this restriction entirely.
- **Blocklisted plugins:** GoDaddy blocks plugins in a few categories, caching (W3 Total Cache, WP Super Cache, WP Fastest Cache, etc., GoDaddy has its own built-in caching), backup/duplicate-functionality tools, and known security/performance offenders. **None of the confirmed stack (Kadence, WooCommerce, Yoast, Code Snippets) falls into these categories.** Worth a quick check of Advanced Product Fields against GoDaddy's WooCommerce-specific blocklist before purchasing, cheap due diligence, unlikely to be an issue.
- **Outbound SMTP ports (25/465/587) are blocked** for third-party mail systems, a typical "WP Mail SMTP + Gmail relay" setup won't work. **Open item, verify near go-live:** whether GoDaddy's own default mail delivery handles WooCommerce order/notification emails adequately on its own, or whether an API-based (not SMTP-port) transactional email plugin is needed.
- **Multisite not supported**, irrelevant, this is a single-site build.
- **Net effect: low risk.** The confirmed stack was already built around avoiding GoDaddy's common pain points. Main real open item is the email-deliverability check above.

### GoDaddy hosting environment, reference (as of 2026-08-17)
Pulled directly from the GoDaddy Hub's WordPress Settings page, useful shared reference for both Sobhy and Claude going forward:

- **WordPress version:** 7.0.4
- **PHP version:** 8.2
- **Managed WordPress platform version:** 2.0
- **SSH/SFTP login:** `1221269.us32.ssh.myftpupload.com`
- **Primary (temp) domain:** `1221269.us32.myftpupload.com`, matches the confirmed build domain above.
- **CDN:** Enabled. **Website metrics:** Enabled. **PHP error/access logs:** available directly in the Hub, useful now that there's no local environment to check errors in.
- **CI/CD integration:** Disabled (consistent with the 2026-08-17 decision not to wire up GitHub CI/CD, see below).
- **Application performance monitoring:** Disabled.
- **Staging site:** Not yet created, but included free on the Ecommerce plan (one-click), worth creating once the build is far enough along that testing risky changes against a copy becomes valuable again, now that there's no local sandbox for that purpose.
- **Built-in Hub tools available:** file browser, reset file permissions, safe mode reset, cache flush, worth knowing about for troubleshooting now that local's gone.
- **Plan:** Managed WordPress Ecommerce, 1 website, unlimited monthly visitors, SSH/SFTP + one-click staging included.
- **Storage:** 100 GB total, 0.13 GB used (~0%). **Note: this GoDaddy hosting account is shared with Bido's own site**, `carsbuyerinc.net` (0.04 GB), the Darkum temp domain (`1221269.us32.myftpupload.com`, 0.09 GB) is the second site on the same account. Worth keeping in mind since it's Bido's account, not a dedicated one for Darkum Design.

### Backup strategy, GoDaddy Premium Backups (active, temporary)
GitHub was never going to cover this project's real backup risk, most of the build's actual state (WooCommerce products, Kadence page layouts, the Bed Frame configurator's field configuration) lives in the WordPress database, which git doesn't track regardless of CI/CD setup. With local development torn down (see above), the live GoDaddy site is now the only place this work exists, so it needed its own safety net.

- **Activated 2026-08-17**, approved by Bido same day (by phone, after his first payment card failed and he authorized use of a second card). **Order total: EGP 274.15** (the 249.00 EGP/month base rate shown at checkout, likely plus tax), receipt emailed to `carsbuyerinc@gmail.com`.
- **Adds:** hourly automatic backups + 90-day backup history, up from the plan's default daily backups.
- **Explicit commitment, worded exactly as agreed with Bido: "I'll cancel it the day the site goes live on `darkumdesign.com`."** At that point it reverts to the Ecommerce plan's included daily backups, at no extra cost.
- **Framing given to Bido, matching Sobhy's own established pattern across 8+ prior projects:** hourly backups during active build, canceled once live. This is a Sobhy-managed, Sobhy-canceled, time-boxed cost tied to the build phase specifically, not a subscription Noura is ever exposed to or would need to manage/cancel herself, which directly answered Bido's actual concern (raised in the context of his general no-subscriptions stance) about partners getting stuck with recurring costs they can't safely drop.
- **Tracked as an open item** so the cancellation isn't forgotten once the site goes live, see `TO-DO-List.md`.

### GitHub CI/CD to GoDaddy, decided against for now (2026-08-17)
Not recommended during the build:
1. **Wrong repo structure.** `darkum-design-website` holds the static coming-soon site (for Vercel), a WordPress deployment would need its own dedicated repo with a completely different file structure.
2. **Org policy conflict.** The `Darkumdesign-com` GitHub org currently blocks SSH Deploy Keys org-wide, which is specifically what GoDaddy's CI/CD integration UI asks for (seen 2026-08-16). Enabling this would need either loosening that policy or GoDaddy adding GitHub App support (unconfirmed as of this writing).
3. **Smaller benefit than it looks.** As above, git only solves file sync, most of this build's real state lives in the database, which git-based deployment doesn't touch at all.

**Revisit only if** there's a meaningful, ongoing slice of pure custom code worth version-controlling later (e.g. a future child theme), not needed for the current scope.
