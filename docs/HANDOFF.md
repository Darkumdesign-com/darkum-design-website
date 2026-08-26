# Darkum Design, Project Handoff

**Last updated:** 2026-08-26
**Maintainer:** Sobhy (sole developer/administrator, GitHub Org `darkumdesign`, separate Vercel account)
**Pricing note:** Bido offered a flat rate of EGP 15,000 for the entire engagement (2026-08-16). The original item-by-item proposal and all freelancer market research have been archived to `docs/offer_market-research.md`, see `docs/handoff/business-terms.md`.

This file is now a slim index. The detailed project history, decisions, and troubleshooting write-ups live in the topic files under `docs/handoff/`, linked in the table of contents below. Update this index when the high-level picture changes (stack, blockers, where-things-stand); update the relevant topic file when the detail itself changes.

---

## Business context, in brief

**Darkum Design (داركم ديزاين)** is a custom furniture and home décor shop based in Heliopolis, Cairo, delivering across Egypt (slogan: "FURNITURE · ART · DESIGN"). Owners are Nourhan Osama ("Noura") and Heba Farouk, both non-technical; key contact and decision authority is Bido (Noura's uncle), who has delegated technological decisions to Sobhy in his stead. The arrangement is an informal, trust-based one built on the personal relationship, but explicitly paid, not a favor: Bido offered a flat rate of **EGP 15,000 for the entire engagement** (logo, social media, coming-soon page, full website build, Bed Frame configurator) on 2026-08-16, no payment received yet. Content is currently under a **freeze pending Dema**, a friend of Noura's who runs an advertising agency and will be writing all website/social copy going forward (confirmed 2026-08-22), no new homepage copy is being drafted until she delivers. Full detail: `docs/handoff/business-context.md`.

## Confirmed stack

- **CMS/commerce:** WordPress + WooCommerce
- **Page builder:** Kadence Blocks + Kadence theme (free tier, no subscriptions)
- **SEO:** Yoast SEO (free), technical basics only, ongoing SEO strategy is covered by Bido's separate marketing agency
- **Product configurator:** Advanced Product Fields (APF) by StudioWombat, paid Lifetime tier, purchase still pending a tier decision
- **Hosting:** GoDaddy Managed WordPress, Ecommerce plan, live-only development (no local environment)
- **Multilingual:** Custom-coded simultaneous EN/AR on the main site; Polylang/WPML with silent browser-locale auto-detect on WooCommerce's own pages only
- **Domain situation:** `darkumdesign.com` purchased and currently live on **Vercel** (coming-soon placeholder), DNS can cut over to GoDaddy whenever the WordPress build is approved, independent of and not needing to wait for the registrar-transfer lock, which clears 25 September 2026

Full detail: `docs/handoff/website-stack-and-hosting.md`.

## Active blockers

- **Commercial Registration:** not yet in hand; blocks TikTok business account, Etsy shop onboarding, and (anticipated) Paymob/WooCommerce payments. Accountant is preparing documents (7 to 14 business days from when this was confirmed). See `docs/handoff/social-media.md`.
- **APF Lifetime tier decision:** purchase is ready to proceed but blocked on Bido/partners choosing between the Pro, Extended, or Extended + Addons tiers. See `docs/handoff/bed-frame-configurator.md`.
- **Legal pages** (Privacy Policy, Terms of Service, Return/Refund Policy): need the business's formal registered name from the Commercial Registration and Tax Card, and a lawyer to draft/review. See `docs/handoff/business-context.md`.
- **Dema copy freeze:** no new homepage/social copy is being drafted until Dema delivers hers; whether her scope also covers WooCommerce transactional email wording is unconfirmed. See `docs/handoff/business-context.md`.

## Where things stand

As of the 2026-08-26 session end, the Contact section (map + floating form card, bilingual Address/Store Hours, Advanced Form, single-row Email/Phone icon line) is confirmed live and working, and complete: correctly spaced two-column bilingual paragraphs, a Form card sized to its own content, the map's inset glow visible on all four corners, the map's own top corners rounded (now via Additional CSS rather than the block's own fragile JSON attribute, after that attribute was found to get silently stripped by a content push), and a plain icon-only Email/Phone line (`info@darkumdesign.com`, `+20-10-37-888-900`, dashed format finalized by Sobhy directly) balancing the Address column against the Form card. Nothing outstanding in the visible section itself; JSON-LD structured data for address/hours is a separate, still-open item. A real, newly-documented risk came out of this session's work: raw `post_content` pushes can silently mutate unrelated native Gutenberg blocks elsewhere in the same content, not just whatever was intentionally edited, see `docs/handoff/wp-cli-workflow-and-tooling.md`. Posh-SSH and the reusable `wp-custom-edits/Scripts/wp-push.ps1` + `wp-eval-push.php` tooling (moved out of `$env:TEMP` into the repo this session) are now standing tooling for pushing directly to WordPress's Additional CSS and homepage content. See `docs/handoff/contact-section.md` for the full session write-up, and `docs/TO-DO-List.md` for the live task list.

---

## Standing rules

These apply project-wide, not just to the file they happen to be documented alongside:

- **No em dash anywhere**, in any language, in any copy or documentation (extended 2026-08-14 from an Arabic-only rule to all copy). Use commas or hyphens instead.
- **Word choice: "Shop" (EN) / "محل" (AR)**, not "Studio"/"استوديو", decided 2026-08-14, applied across all platform copy.
- **"Female-owned"/"female-led" positioning is on hold entirely**, pending Darkum Design's Commercial Registration, do not add it to any platform's copy in the meantime. See `docs/handoff/business-context.md`.
- **No-subscription preference:** Bido wants capital going toward marketing, not recurring software costs, this is why Kadence (not Elementor Pro) and one-time-payment plugin tiers (not subscription tiers) were chosen throughout. See `docs/handoff/website-stack-and-hosting.md` and `docs/handoff/bed-frame-configurator.md`.
- **Hand-coded inline SVG, no icon fonts/libraries** is the established icon convention across the coming-soon page and most of the WordPress build (one deliberate exception: the WordPress footer's social icons use Kadence's built-in icon library under deadline pressure, see `docs/handoff/homepage-and-header-footer.md`).
- **Logo file naming convention:** `Darkum-Design-Logo-[Color]-[Layout]-[Size].[ext]`. See `docs/handoff/logo.md`.
- **Safe live WordPress pushes** (Additional CSS, homepage content) go through `wp-custom-edits/Scripts/wp-push.ps1` + `wp-eval-push.php`, the `eval-file` + `file_get_contents()` WP-CLI pattern over Posh-SSH, never raw shell interpolation. See `docs/handoff/wp-cli-workflow-and-tooling.md`.
- **Reusable automation tooling lives in the repo, not `$env:TEMP`.** Temp is only for genuinely one-off, throwaway diagnostic scripts (and specifically for working around Desktop Commander's inline-shell-variable limitation), not a general home for anything meant to be run again. WordPress push tooling specifically lives in `wp-custom-edits/Scripts/`.
- **The skilled/specialized-work-gets-named-explicitly principle:** work like the Bed Frame configurator, CNC/vector work, or branding shouldn't quietly fold into "just part of the website" in scoping conversations, even without itemized pricing behind it. See `docs/handoff/business-terms.md`.

---

## Table of contents, `docs/handoff/`

| File | Covers |
|---|---|
| `business-context.md` | Who Darkum Design is, the owners and Bido's role, payment arrangement, Dema copy freeze, legal-pages requirement, communication gaps |
| `logo.md` | Logo export history, fixes, final file counts, delivery method, brand primary color |
| `social-media.md` | Per-platform status table, the Commercial Registration blocker, business phone number, business email addresses, the Metricool unified inbox |
| `website-stack-and-hosting.md` | Confirmed WordPress stack, local dev environment (set up then torn down), GoDaddy Managed WordPress limitations and hosting reference, backup strategy, the GitHub CI/CD decision |
| `homepage-and-header-footer.md` | Homepage build approach, hero ticker, header logo legibility and SVG uploads, the footer redesign, Arabic font fallback, Explore button contrast, site title typo, site structure, sliding catchphrases scope |
| `contact-section.md` | The Contact section build (map + floating form card) and all four rounds of bilingual/troubleshooting work, current session-end state |
| `wp-cli-workflow-and-tooling.md` | The `eval-file` + `file_get_contents()` safe live-push method, the homepage content mirror and Posh-SSH snapshot tooling |
| `bed-frame-configurator.md` | Required configurator fields, the Advanced Product Fields plugin decision and pricing tiers |
| `domain-and-scope-decisions.md` | Domain/registrar transfer timeline, the 2026-08-13 animation and bilingual-approach scope decisions |
| `repo-infra-coming-soon-page.md` | GitHub/Vercel repo setup, the coming-soon page's full build history (meta tags, structured data, Notify Me form, ticker UX, socials) |
| `business-terms.md` | The flat-rate offer, what stays relevant despite it (retainer, plugin costs, scoping principle) |
| `resolved-items-log.md` | Dated log of every resolved item; live open items stay in `docs/TO-DO-List.md` |

Reusable marketing copy (platform-by-platform live copy, plus the no-em-dash/Shop-not-Studio/female-owned-on-hold standing rules behind it) lives in **`docs/MARKETING-COPY.md`**, not in this handoff structure.
