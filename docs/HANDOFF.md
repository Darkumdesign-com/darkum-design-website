# Darkum Design — Project Handoff

**Last updated:** 2026-08-15
**Maintainer:** Sobhy (sole developer/administrator — GitHub Org `darkumdesign`, separate Vercel account)

This document tracks everything known about the Darkum Design engagement so far: business context, completed work, decisions made, and open items. Update this file as things change — it's the source of truth for anyone (including future-you) picking this project back up.

---

## 1. Business Context

- **Darkum Design (داركم ديزاين)** — custom furniture and home décor shop, based in Heliopolis, Cairo, delivering across Egypt. Slogan: "FURNITURE · ART · DESIGN". (Corrected 2026-08-14: dropped the old "Victorian-style / Cairo and Giza / selling worldwide" framing, which had already been retired from `README.md` and the coming-soon page's OG copy but never updated here — see §5. Word choice is "shop," not "studio," per the 2026-08-14 decision, see §8.)
- **Brand wordmark typeface confirmed 2026-08-15: Alice** (English only, regular weight — Google Fonts doesn't offer a bold/medium variant), replacing Cormorant Garamond to match the logo's typeface. Fallback stack `'Alice', 'Times New Roman', Times, serif`, uppercase transform, `font-size` clamp trimmed to `2.8rem` max to compensate for the extra width uppercase adds. Arabic wordmark stays on Cairo (unaffected — Alice doesn't cover Arabic script). See `README.md`'s new Fonts section for the full breakdown of all three typefaces in use (Alice/Cairo/Inter).
- **Owners:** Nourhan Osama ("Noura") and her partner Heba Farouk. Both recent college graduates, not technical — avoid jargon in partner-facing communication.
- **Key contact / decision authority:** Bido (Albert Friday / AbdAllah Gomaa / Abdallah Gomaa / Cars Buyer Inc Owner), Noura's uncle and Sobhy's best friend, currently in Egypt on vacation. The "nothing goes in or out without approval" arrangement is narrower than previously noted here: Bido said it applies to **technological matters specifically**, and only takes effect **once he returns to the US** — he's delegating to Sobhy in his stead for that period. It also wasn't said directly to Noura/Heba; it was said to his own circle, roughly: "I am not staying here forever... once my plane takes off, [Sobhy] is here in my stead. If you have questions, ask him. If you have a problem, ask him. If you have crazy ideas, ask him also. Nothing technological goes in or out without [Sobhy's] approval."
- **Payment status:** No payment received yet. This is *not* a case of an offer being sent and ignored — it's an informal, trust-based arrangement given the personal relationship (Noura is Bido's niece). A formal proposal is now drafted (see §6) — Sobhy explicitly does not want to treat this as a favor: the work (logo, social media presence, coming-soon page, upcoming full site) is billable regardless of the personal relationship. **Bido explicitly reconfirmed on 2026-08-13 (third time Sobhy asked directly) that the arrangement is paid, not a favor** — see §6 for the full call summary and the pricing pushback that came with that confirmation.
- **Access:** Neither Bido nor Noura access Gmail, Social Media accounts, GitHub or Vercel directly — Sobhy administers both solo.
- **Store**: Store No. 5, 10 Aswan Street, El-Sherif Building, Heliopolis, Cairo, Egypt, 4460305. Under construction in Heliopolis, Cairo. Sobhy has not visited the store yet.

---

## 2. Logo — ✅ Complete & Delivered

- Final files exported to: `G:\My Drive\OneDriveBackup\Designs\darkumdesign\Logo\Exports`
- **Format folders:** PNG, JPG, WebP, SVG, EPS, AI
- **Color variants:** Black, White, Transparent
- **Layout variants:** Circular, Exact, Favicon, Horizontal
- **Sizes:** 512px, 512px-PNG8 (PNG only), 1024px, 2048px, 300ppi (raster) / Vector (SVG, EPS, AI)
- **Total:** 176 files, naming convention verified consistent (`Darkum-Design-Logo-[Color]-[Layout]-[Size].[ext]`)
- Delivered to partners via WhatsApp with a plain-language explainer covering formats/colors/sizes/use cases (Arabic version offered, not yet sent).
- **Note:** EPS/AI "Transparent" files don't carry a true alpha channel in EPS (AI is fine, native format) — worth mentioning if a print vendor asks for a "transparent EPS."
- **Fixed (2026-08-12):** "Exact" layout PNG/JPG/WebP files were mislabeled — suffixes claimed square sizes (`512px`, `1024px`, `2048px`) but the actual images are non-square (`Exact` preserves the logo's natural proportions, ~410:489 ratio, unlike the square-cropped `Circular`/`Favicon` layouts). Pixel content was correct; only filenames were wrong. Renamed 27 files across PNG/JPG/WebP to reflect true dimensions (e.g. `-512px` → `-410x489px`, `-1024px` → `-820x978px`, `-2048px` → `-1640x1954px`). No re-export needed — `300ppi` suffix was unaffected since it describes resolution, not claimed pixel size. **Already-sent WhatsApp files to partners were not affected/reissued** — only the local export folder was corrected.
- **Brand primary color confirmed:** the mark's native fill is `#996633` (hex shorthand `#963` in the SVG source) — this is the single source of truth for the brand's primary color, now also the site's `--brand-primary-color` CSS variable (see §5).
- **Pricing validated (2026-08-13):** Sobhy contacted 2 Khamsat freelancers for quotes on logo work matching this exact spec (multi-format/multi-color/multi-layout export). Had full conversations with both; both confirmed they'd deliver all 176 files at the real spec — $80 (~4,000 EGP) and $40 (~2,000 EGP). Combined with Sobhy's own instinct (max 5,000 EGP), the proposal's original 12,000 EGP figure (sourced from Egyptian agency-blog marketing pages) was confirmed too high for this context. See §6 for the revised proposal figure.
- **Third Khamsat offer received (2026-08-13) — ⚠️ preliminary, not yet scope-confirmed:** [Shatha A.](https://khamsat.com/user/shatha_abufoul4) quoted **$40**, then unprompted self-discounted to **$25** ("سعر مميز لك استاذي" — a "special price for you"). No back-and-forth yet confirming she understood the full 176-file multi-format/multi-color/multi-layout spec (unlike the two quotes above, which were validated through full conversations) — her message is generic, no reference to any specific deliverable. The unprompted ~37.5% self-discount before Sobhy even responded is itself worth noting: it suggests the listed $40 wasn't a firm number to begin with, which cuts against using either figure ($40 or $25) as a reliable data point until scope is confirmed the same way the first two were.

---

## 3. Social Media

### Status by platform

| Platform | Status |
|---|---|
| Facebook | ✅ Established, About section copy written, linked on coming-soon page |
| Instagram | ✅ Established, bio copy written, linked on coming-soon page |
| Threads | ✅ Established (`@darkumdesign`), linked live on the coming-soon page (added 2026-08-13) |
| TikTok | ⚠️ Personal/Creator account only — business account blocked, see below. Handle confirmed (`@darkumdesign`) and linked live on the coming-soon page. |
| YouTube | ✅ Established, linked live on the coming-soon page (`@darkumdesign`). Bilingual About description published 2026-08-14 — the earlier "We couldn't save your changes" error turned out to be a stale-session/cache issue, resolved by a hard reload, not a content problem. Contact email set to `info@darkumdesign.com`. **Published version is still the old, shorter draft** — a fuller version using the full 1,000-char field (and the "Shop"/"محل" wording) now exists in `docs/MARKETING-COPY.md` and needs re-publishing, see §7. |
| Pinterest | ✅ Established, linked live on the coming-soon page |
| X (Twitter) | ✅ Established, linked live on the coming-soon page. Still needs verification of the business phone number (now available, see below) for the account itself. |
| Email | ✅ `darkumdesign@gmail.com` (Free Gmail). Business domain email also now set up via Zoho — see "Business email addresses" below. |
| Email (business domain) | ✅ `info@darkumdesign.com` Login using `darkumdesign@gmail.com`. Used on the coming-soon page and as the YouTube channel's public contact email. |
| Messenger | ✅ Live click-to-chat link (`m.me/darkumdesign`), listed in `README.md` |
| Houzz | 💡 Recommended, not yet actioned |
| WhatsApp Business | 💡 Recommended, not yet actioned. Currently a personal WhatsApp number, not the Business app/tier. Coming-soon page links directly to the business number via `wa.me/201037888900` in the meantime. |
| Google Business Profile | 🔃 Created, but Waiting verification on 17 August 2026 |
| Etsy | 💡 Explained to Noura/Heba for consideration (handmade/custom positioning fits well) — decision pending |
| LinkedIn | ⚠️ Company Page created. English tagline + About published 2026-08-14. Arabic About pasted in (slogan corrected to the translated version, matching YouTube) but **not yet saved** — pending the "Shop"/"محل" word swap, see `docs/MARKETING-COPY.md`. |

**All confirmed handles for the coming-soon page's social row are sourced from `README.md`, which Sobhy maintains directly as the source of truth for social URLs.**

### TikTok blocker
Business account setup requires official Egyptian commercial registration documentation (commercial license + registry number), which Darkum Design doesn't currently have. Proceeding on a personal/Creator account until resolved. A couple of days ago, Bido, Noura, and Heba met with the legal accountant that Sobhy recommended and made a plan; the accountant is preparing the required documents. Once available, which usually takes 7 to 14 business days. Sobhy will use the documentation to verify the TikTok business account setup.

### Business phone number
**+20-10-37-888-900** — this is an **eSIM connected to Noura's phone**, not a separate physical line/device. Worth keeping in mind for:
- Who's actually receiving calls/texts to this number day-to-day
- Any account recovery / 2FA setups tied to it (WhatsApp Business, Google Business Profile, X, etc.) will depend on Noura's phone being available
- Needed for X (Twitter) account setup, alongside the updated logo
- Sobhy sent a WhatsApp message to business group requesting a dedicated meeting time to add the phone to all relevant accounts (Facebook, Instagram, X, WhatsApp Business, Google Business Profile, etc.) and confirm that Noura has access to it. Meeting not yet scheduled.
- Now also used directly on the coming-soon page as a `wa.me` link (see §5).
- **Corrected (2026-08-13):** an earlier session had briefly recorded a different number (`+20-10-8063-1009`) in the Open Items list (§7) and it had leaked into the live `wa.me` link on the coming-soon page. Sobhy confirmed `+20-10-37-888-900` is the correct number — both have been fixed.

### Business email addresses
Set up on **Zoho Mail (free plan)**, domain `darkumdesign.com`:
- `info@darkumdesign.com` Login using `darkumdesign@gmail.com`
- `finances@darkumdesign.com`
- `marketing@darkumdesign.com`
- `webmaster@darkumdesign.com` — decided over `support@` (2026-08-12): matches the actual current need (technical/site administration, domain registrar verification) rather than customer support, which doesn't have real volume yet on a coming-soon site. `support@` makes more sense once the store has live orders.

**Zoho free plan caps at 5 mailboxes** — currently at 4 with `webmaster@` added. Worth remembering before adding more (e.g. a future `support@`).

### Unified inbox recommendation
No free plugin puts a true reply-from-everywhere inbox inside wp-admin — that's a SaaS-dashboard feature, not a WordPress one. Recommended: **Metricool (free plan)** as a separate dashboard/app Noura bookmarks or installs — covers FB comments/DMs, IG comments/DMs, X DMs, LinkedIn company comments, Google Business reviews, YouTube comments. TikTok comment management via Metricool requires a **business account**, which is currently blocked (see above) — TikTok replies stay manual until that's resolved. The Metricool WordPress plugin itself is just a site-analytics connector, unrelated to the inbox feature.

### Pricing quote request — in progress (2026-08-13)
To get an accurate Social Media Presence price the same way the logo was validated, a freelancer quote request brief was drafted, describing the exact one-time setup scope delivered (9 platform accounts, bilingual bio/About copywriting, business email setup, unified-inbox recommendation, phone number integration) — deliberately flagged as **one-time setup, not monthly management**, since almost all Egyptian social-media freelance pricing defaults to monthly retainers and would otherwise produce incomparable quotes. Sobhy to send to 3+ freelancers.
- English version: `docs/SOCIAL-MEDIA-FREELANCER-REQUEST.md`
- Egyptian Arabic version: `docs/SOCIAL-MEDIA-FREELANCER-REQUEST-AR.md` (colloquial register, no em dash — comma used instead, matching Sobhy's established preference)

**Four offers received on Khamsat (2026-08-13) — ⚠️ preliminary, not yet scope-confirmed:**

| # | Freelancer | Quote (USD) | ≈EGP (~50.2:1, Aug 2026 rate) | Scope-confirmation signal |
|---|---|---|---|---|
| 1 | Ahmed A. | $40 | ~2,010 | Weak — generic "it's big work but I can do it," no reference to specific line items (9 platforms, bilingual copy, 4 emails, inbox tool, phone linking) |
| 2 | أحمد ع. | $250 | ~12,550 | Strongest — specifically referenced the email setup line and asked a clarifying question about which free email service is already in use, showing he read past the headline |
| 3 | إسماعيل س. | $130 | ~6,530 | Moderate — says he read it "بالتفصيل" (in detail) but doesn't reference anything specific to prove it |
| 4 | [Ahmed H.](https://khamsat.com/user/ahmedsleem) | $50 | ~2,510 | Strong — itemized his own reply against the brief: 9 accounts "bel esm el morad" (with the requested name), bilingual bio/description, About sections sized per-platform character limits, and business email account creation. **Also explicitly separated the one-time setup price ($50) from ongoing post/reel creation ("7asb el ettefa2" — by separate agreement)** — matches the brief's one-time-vs-monthly distinction exactly, a good sign he's pricing the actual scope rather than a generic package. |

**USD is the reference currency for all freelancer quotes going forward** (EGP shown only as an approximate, date-stamped conversion) — EGP has moved noticeably within 2026 alone (46.6–54.9 range over the past year per market data), so a fixed EGP figure agreed on today can look wrong in a few weeks purely from currency movement, independent of the actual value of the work. Quotes, the proposal's internal figures, and any market-research comparisons should be tracked in USD; EGP is only for the client-facing final number, generated at time of invoicing.

Average ≈ $118 (range $40–$250), median $90 — pointing *above* Sobhy's current 3,000 EGP (~$60) proposal estimate (opposite direction from the logo, where real quotes came in below the agency-blog figure). Adding Ahmed H.'s $50 pulls the average down from the 3-quote figure ($140) and puts it closer to Sobhy's own estimate. **None of these four have been through the confirm-the-exact-scope conversation that validated the two logo quotes** — Ahmed H.'s reply is the closest to that bar on its own (itemized against the brief unprompted), but still hasn't had a back-and-forth confirming he'd actually deliver at the full spec. Recommend the same back-and-forth Sobhy did for the logo before using any of these in §6/PROPOSAL.md.

---

## 4. Website — Homepage (Future Full Build)

### Stack (confirmed)
- **CMS:** WordPress
- **E-commerce:** WooCommerce
- **Page builder:** Kadence Blocks (free) + Kadence theme (free) — chosen over Elementor Pro specifically because Bido wants to avoid subscription costs, so capital goes toward marketing instead. Kadence's native block animations cover scroll-reveal effects for free, which would otherwise require Elementor Pro.
- **SEO:** Yoast SEO (free)
- **Custom code:** Code Snippets (free) — for PHP snippets outside `functions.php`; Kadence blocks also support Custom CSS directly, and native Gutenberg has a Custom HTML block for JS/HTML injection.
- **Slider (conditional):** MetaSlider (free) — only needed if "sliding animations" turns out to mean an actual image/content carousel rather than Kadence's native scroll-reveal effects. **Open question, not yet confirmed with client which one they mean.**

### Site structure
One-page site: Homepage / landing page, with sliding animations, plus one highly customizable product (Bed Frame) via WooCommerce.

### Homepage sliding catchphrases — confirmed scope: full WordPress site only
Bido confirmed (2026-08-12) the full sliding question/answer hero carousel belongs on the real WordPress homepage, not the coming-soon placeholder. English slides in from the right, Arabic slides in from the left, in an "Egyptian street-cool" tone.

A **light, non-interactive preview version** (auto-cycling every 6s, same slide-from-right/slide-from-left direction logic, no user controls) was added to the coming-soon page on 2026-08-12 using the 3 example lines Bido provided. Arabic translations below were drafted by Sobhy/Claude in colloquial Egyptian tone:

| English (Bido's original) | Arabic (drafted) |
|---|---|
| Do you want to buy the same bed as all your friends, family, and neighbors? Customize your bed frame today with Darkum Design. | عايز تنام على نفس السرير اللي عند كل صحابك وجيرانك؟ اعمل سريرك بتصميمك انت مع داركم ديزاين. |
| Is your anniversary coming up? Surprise your partner with romantic customization, only from Darkum Design. | جوازك قرب على الذكرى السنوية؟ فاجئ شريك حياتك بتصميم رومانسي مميز، بس من داركم ديزاين. |
| Is your child a superhero fan? Customize his bed with Iron Man or Superman with Darkum Design. | ابنك بيحب الأبطال الخارقين؟ صمّملّه سرير آيرون مان أو سوبرمان مع داركم ديزاين. |

Bido to provide the full list of catchphrases (only 3 examples given so far) before the full WordPress build starts.

### Domain
- Purchased: `darkumdesign.com`, currently under **Vercel**.
- Bido wants it migrated to **his GoDaddy account**. Not yet actioned.
- Registrar email verification still needed to avoid domain suspension (separate from the GoDaddy migration).
- Vercel disapproved the domain transfer to GoDaddy until 60 days pass, which will be completed on 25 September 2026.

### Bed Frame product configurator — required fields
This is the "very customizable product" and is effectively a mini product configurator, not a simple WooCommerce variation setup:

| Field | Type | Notes |
|---|---|---|
| Position | Multi-select | Bed Head, Right Side, Left Side, Bottom — customer can pick more than one |
| Insertions | Number, 0–4 | **Per Position** — conditional on which position(s) selected |
| Material | Single-select | Mosaic, Textile, Stone, Cane, Engraving, Burn Wood, Copper |
| Bed legs | Image preview / style selector | Visual swatch-style picker |
| Engraving text | Free text input | Pending supplier to provide the max text length |
| Reference image | File upload | Customer uploads their own reference photo/design |
| Size | Single / Double / Full frame | **Per Insertion, per Position** — most complex nested logic in the set |
| + more TBD | — | Color, size, finish groups mentioned as still to be defined |

**Why Kadence Blocks doesn't cover this:** it's a page/layout builder, not a WooCommerce product-options tool. This needs a dedicated plugin.

**Plugin decision — pending client confirmation:**
- **Recommended:** Advanced Product Fields (APF) by StudioWombat — one-time payment ($199), lifetime updates, 18+ field types, conditional logic, formula-based pricing. Currently waiting on partner reply.
- **Alternative if APF doesn't work out:** Extra Product Options & Add-Ons by ThemeComplete — one-time payment **only if purchased via CodeCanyon specifically**; buying directly through themecomplete.com now defaults to a subscription model, which would violate the no-subscription requirement.
- **Ruled out:** free-tier product option plugins — their free versions strip out conditional logic and file upload fields, both of which are required here (position → insertions → size is a dependent chain).
- **Pricing decision (2026-08-13):** confirmed with Sobhy that his fee for building the configurator does **not** change based on which plugin is chosen — nearly all of the real work is the conditional-logic blueprint (position → insertions → size, repeated per position), which is plugin-agnostic. Any speed difference between the two plugins is minor (~20–30%, from Sobhy's own UI fluency, not a feature gap) and not worth pricing separately.
- **Plugin cost itself is excluded from the proposal entirely** — Sobhy has no credit card to purchase or subscribe on Bido's behalf even if he wanted to, so the ~$199 (or CodeCanyon equivalent) is a separate cost Bido/partners handle directly with the vendor, not part of Sobhy's invoice.

**Scoping note:** even with the right plugin, wiring up the full conditional chain (position → insertions → size, repeated per position) is several hours of careful setup — this should be its own line item in the proposal, not folded into general "website build."

### Pricing quote request — in progress (2026-08-13)
To continue the same market-research approach used for the Logo and Social Media Presence, a freelancer/developer quote request brief was drafted for Item 4 (Website — Full WordPress/WooCommerce Build), **explicitly excluding** the Bed Frame Configurator (Item 5, priced and sourced separately — see reasoning above).

**Both open scope questions resolved with Sobhy (2026-08-13), before the brief was sent:**

1. **Animation scope:** Hero section uses a custom-built, smoother/more polished version of the Q&A catchphrase slideshow already previewed on the coming-soon page (same direction logic — EN slides from right, AR from left). **Every other section on the homepage uses only light fade-in/fade-out** (Kadence native scroll-reveal, free, no slider plugin needed anywhere on the site). This fully resolves the earlier "scroll-reveal vs. slider plugin" open item in §7 — removed from there, no MetaSlider needed.
2. **Bilingual approach:** Bido confirmed the **homepage must be simultaneous EN/AR, side-by-side, no switcher** — same technique as the coming-soon page, custom-coded, not plugin-driven. However, **WooCommerce's own pages (cart, checkout, my-account) are server-rendered by the plugin and can't be split into two simultaneous languages on one page** — this is a real technical constraint, not a preference, and Bido (whose prior bilingual site experience was a US English/Spanish site with a manual switcher) hadn't hit this distinction before since this is his first Arabic/RTL site. **Resolved approach:** a multilingual plugin (Polylang or WPML) on the WooCommerce pages only, configured to **silently auto-detect the visitor's browser language** (no visible switcher, session-persisted so it doesn't flip mid-checkout) — functionally achieves "feels automatic, no manual choice" without requiring a custom JS re-render of WooCommerce's own templates. **Fallback default set by Sobhy/Claude (not yet run past Bido, trivial to flip):** if the browser locale is neither English nor Arabic, default to English.

- English version: `docs/WEBSITE-FREELANCER-REQUEST.md`
- Egyptian Arabic version: `docs/WEBSITE-FREELANCER-REQUEST-AR.md`

Both briefs rewritten 2026-08-13 to reflect the resolved scope above (no more "quote with an assumption" hedging — the brief now states the final architecture directly). Sobhy to send to 3+ developers, same validation approach as Logo/Social Media (see §2–§3).

---

## 5. Repo / Infra

- **GitHub:** Org `darkumdesign`, repo `darkum-design-website` (renamed from original), branch protection configured for solo administration. Note: GitHub Free plan rulesets only enforce on **public** repos — relevant constraint for how protection was set up.
- **Vercel:** Separate business account from Sobhy's personal one.
- **Local path:** `C:\Projects\darkum-design-website\`
- **Current live state (updated 2026-08-15):** Truly bilingual coming-soon placeholder — English and Arabic content displayed simultaneously. Mobile bilingual pairing reworked (2026-08-13): the tagline (EN+AR) and "coming soon" line (EN+AR) are now grouped as content pairs with a small divider between the two pairs, rather than grouped by language as before — fixes excessive/uneven spacing reported on mobile. Desktop retains the original two-column (English | divider | Arabic) side-by-side layout via CSS Grid, visually unchanged. Black (`#000000`) background, brand primary color `#996633` applied consistently via CSS variable (`--wood` now references `--brand-primary-color`), actual logo (SVG + PNG) in place of the old placeholder icon, favicon added. Full brand name corrected to "داركم ديزاين" everywhere on the page (title, meta description, logo alt text, h1, footer) — the shorter "داركم" alone was missing "Design." Slogan "FURNITURE · ART · DESIGN" added under the brand name. Auto-cycling catchphrase ticker with manual dot/arrow navigation and pause-on-hover added (see below, full detail). Page restructured into a sticky-footer layout so the ticker's height changes no longer shift the content below it (see below). Decorative divider now sits between the form and the social icons (see below). Notify Me form is Formspree-connected with client-side validation (see below, full detail). Brand wordmark uses Alice, not Cormorant Garamond (see §1). Plain HTML/CSS/JS — no build step.
- **Logo assets in repo:** `img/darkum-logo.svg` + `img/darkum-logo.png` (Transparent/Exact variant, mark only), `img/favicon.svg` + `img/favicon.png`, copied from the master export folder in §2.
- **Social links on coming-soon page — all 10 live (updated 2026-08-15):** Instagram, Threads, Facebook, TikTok, YouTube, Pinterest, X, LinkedIn, and Email use the exact handles Sobhy confirmed in `README.md`; WhatsApp links to the business number (`wa.me/201037888900` — corrected 2026-08-13, see §3). LinkedIn added 2026-08-15 — see below.
- Sobhy reviewed the bilingual layout and social icons in-browser and confirmed both looked correct (2026-08-12).
- **Open Graph / Twitter Card meta tags added (2026-08-12):** `og:url`, `og:type`, `og:title`, `og:description`, `og:image` (+ `width`/`height`), and matching `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`, `twitter:domain`, `twitter:url` added to `index.html`'s `<head>`. Page `<title>` and plain `name="description"` left unchanged. `og:image`/`twitter:image` use the absolute URL `https://darkumdesign.com/img/og-image.png` — won't resolve on local/preview URLs, only once live on the real domain. **`img/og-image.png` (1200×630) was created by Sobhy directly**, not generated by Claude. OG description text is in `docs/MARKETING-COPY.md` — still has an em dash predating the no-em-dash-in-English rule, flagged there but not changed yet since it requires editing live `index.html`, see §7.
- **JSON-LD structured data added (2026-08-13):** `<script type="application/ld+json">` in `index.html`'s `<head>`, `@type: "FurnitureStore"`. Includes `name`/`alternateName`, `url`, `logo`, `image`, `email`, `address` (`PostalAddress`, store address from §1), `contactPoint` (two entries — `contactType: "phone"` and `contactType: "customer service"` for WhatsApp, both using the confirmed `+20-10-37-888-900`), and `sameAs` (8 social profile URLs from `README.md`). WhatsApp/Messenger deep links (`wa.me`/`m.me`) were deliberately excluded from `sameAs` — those aren't identity/profile pages, they're click-to-chat links, so WhatsApp is represented via `contactPoint` instead. No `description` field included — avoided propagating the retired "Victorian-style"/"Cairo & Giza" framing.
- **`README.md` corrected (2026-08-13):** tech stack section updated from "TBD" to the confirmed WordPress/WooCommerce/Kadence stack (see §4); "Victorian-style" and "Cairo & Giza" framing replaced with the bed-frame/interchangeable-insert positioning and Egypt-wide delivery scope, matching the finalized OG/GBP copy in `docs/MARKETING-COPY.md`; tagline updated to the confirmed "FURNITURE · ART · DESIGN" slogan (was "DESIGN THAT INSPIRES. CRAFT THAT ENDURES.", an older/superseded line). Both docs now match.
- **`docs/PROPOSAL.md` created (2026-08-13):** full pricing proposal draft — see §6 for current status and figures.
- **`docs/SOCIAL-MEDIA-FREELANCER-REQUEST.md` + `-AR.md` created (2026-08-13):** freelancer quote request briefs — see §3.
- **`docs/COMING-SOON-FREELANCER-REQUEST.md` + `-AR.md` created and sent to 4 freelancers (2026-08-13):** briefs covering the full coming-soon page rebuild, with heavy emphasis on the hand-coded inline SVG icon requirement and ARIA/accessibility (see §7).
- **`docs/MARKETING-COPY.md` created (2026-08-14):** all reusable bio/About/tagline copy moved out of this file's old §8 into its own document — see §8 below.
- **Notify Me form — ✅ complete, Formspree-connected (2026-08-13):** the front-end-only placeholder (see §4) is retired. `index.html`'s `#notify-form` now posts to Formspree endpoint `https://formspree.io/f/mzepvbqn` (project "Darkum Design," form "Coming Soon (Notify me) - Darkum Design"), `action`/`method` attributes set as a no-JS fallback. `js/script.js` submits via `fetch()` (no `@formspree/ajax` library pulled in — plain `fetch` matches the site's no-build-step approach and keeps the footprint identical to before) with `Accept: application/json` so Formspree replies with JSON instead of redirecting. Success and failure both swap the existing bilingual `#form-message` text in place — no redirect, no separate thank-you page, matching the "front-end placeholder is good enough for a coming-soon page" decision. Submit button disables mid-request to prevent double-submits. Client-side email-format validation added (`emailInput.checkValidity()`, leaning on the existing `type="email"` input rather than a new regex) so obviously-invalid input is caught instantly and shown via the bilingual message, without a round trip to Formspree — `novalidate` stays on the `<form>` since it's only suppressing the browser's own (English-only) validation UI, not `checkValidity()` itself. Error and success states are now visually distinct: `.form-message.is-error` uses a new `--error: #d16a5a` CSS variable (muted terracotta-red, chosen to read clearly as an error without clashing with the black/wood-brown palette) toggled via JS; success keeps the original `--wood-light` amber. **Verified live (2026-08-13):** two real test submissions (`sobhydesign@gmail.com`, `sobhy0101@gmail.com`) confirmed landing in the Formspree inbox; invalid input (`sdasd`) confirmed caught client-side with the red bilingual message, no network call made.
- **LinkedIn added to the socials row (2026-08-15):** the profile URL (`https://www.linkedin.com/company/darkumdesign`) was already in `README.md` and the JSON-LD `sameAs` list, but the visible icon on the coming-soon page itself was missing. Added as a 10th icon between X and WhatsApp, hand-drawn to match the existing unified line-art style (same `viewBox`/stroke conventions as the other icons; built from the Instagram icon's rounded-square + dot construction rather than the literal LinkedIn logo mark, keeping it consistent with the rest of the set instead of dropping in a brand asset).
- **Page restructured into a sticky-footer layout (2026-08-15) to stop the ticker from shifting everything below it:** previously the whole page (logo through footer) was one `<main class="wrap">` in normal document flow, so every ticker rotation to a longer/shorter phrase visibly pushed the divider/form/socials/footer down or up. Split into `<main class="page">` (flex column, `min-height: 100vh`) containing `.wrap` (logo → ticker, height still varies with the ticker) and `.bottom-block` (divider → form → socials → footer, `margin-top: auto`). The auto-margin anchors `.bottom-block`'s position to the *viewport bottom* rather than to `.wrap`'s height, so `.wrap` growing/shrinking no longer moves anything below it — Sobhy confirmed this fixed the shift ("a million times better"). **Known caveat, confirmed present but minor:** on short viewports where total content nearly fills/exceeds 100vh, a small boundary-case jump can still occur right at that threshold, since the auto-margin collapses to 0 once content overflows. Left as-is — judged acceptable, far rarer than the original every-rotation shift.
- **Ticker transition changed from slide-in to crossfade, and slowed (2026-08-15):** the original slide (`translateX` + an instant, transition-less opacity-0 cut when text swapped) read as fast/sudden and pulled Sobhy's attention while the page sat open on a second device next to him. Replaced with a plain opacity crossfade — current phrase fades out (0.9s) before the text swaps, then the new phrase fades in (0.9s), no more instant disappear-then-slide. Rotation interval also slowed, 6s → 7s. `prefers-reduced-motion` still respected (fade duration drops to 0, instant swap, no motion).
- **Ticker manual navigation + pause-on-hover added (2026-08-15):** a first-time visitor has no way to know it's a multi-phrase rotation, so added: indicator dots (one per phrase, generated dynamically from the phrases array so it stays correct if phrases are added/removed later; current dot filled/enlarged via `aria-current="true"`), ‹ › arrow buttons for manual back/forth, and a hidden `role="status" aria-live="polite"` element announcing "Slide 2 of 3 / الشريحة 2 من 3" on each change for screen readers (the ticker text itself stays `aria-live="off"` so phrases aren't force-read automatically on every rotation). Manual navigation restarts the autoplay clock so it doesn't double-advance right after a click. **Autoplay also pauses on hover or keyboard focus** anywhere in the ticker or its controls, resuming when the visitor moves away — added proactively since it directly answers "moved faster than I can read" and matches standard practice for auto-advancing content (WCAG 2.2.2, Pause/Stop/Hide).
- **Divider moved (2026-08-15):** originally sat between the ticker's dot/arrow controls and the notify form; reported as visually cramped against the dots once the controls were added. Moved to sit between the form's success/error message and the social icons instead, now separating the "take action" section (form) from the "follow us" section (socials). No CSS changes needed — existing margins handled the new spacing correctly.
- **Mobile social icons — 5-per-row grid fix (2026-08-15):** adding the 10th icon (LinkedIn) caused an uneven flex-wrap split on narrow screens (9 icons on one line, only Email alone on a second line), since flex-wrap breaks based on available width, not a fixed count. Under 480px width, `.socials` now switches to `display: grid; grid-template-columns: repeat(5, 1fr)`, deterministically placing icons 1–5 on row one and 6–10 on row two regardless of screen width, same DOM order as before (Instagram → Email). Desktop/tablet (>480px) unaffected.
- **Arabic tagline weight/spacing corrected by Sobhy directly (2026-08-15):** `.tagline.bi-ar` in `css/style.css` — `letter-spacing: 0` and `text-transform: none` (Latin-only conventions that don't apply to Arabic's contextually-connected letterforms) and `font-weight: 400` (the same numeric weight read visually heavier on Arabic type than on the English tagline). Also fixed a missing blank line separating the rule from `.tagline` above it in the stylesheet.

### Coming-Soon Page pricing quote request — responses in progress (2026-08-13)

**Two offers received on Khamsat so far — both show strong, itemized scope confirmation (closest yet to the logo-quote validation bar, on the first reply, unprompted):**

| # | Freelancer | Quote | Timeline | Notes |
|---|---|---|---|---|
| 1 | [Muhammet Garib E.](https://khamsat.com/user/muhammed9630) | $60 (~3,010 EGP) | 5 days | Went through nearly every brief item individually and confirmed each: plain HTML/CSS/JS, no build tools; honestly noted his prior bilingual (EN/AR RTL) project used a switcher rather than simultaneous display, but confirmed he understands the side-by-side requirement and can execute it; explicitly confirmed hand-drawing all 9 SVG icons inline in unified line-art style, no icon libraries; confirmed catchphrase ticker, logo/favicon, OG/Twitter/JSON-LD, and **all ARIA/accessibility items by name**. |
| 2 | [Mostafa E.](https://khamsat.com/user/mostafa_hamdi) | 7,000 EGP (UI/validation only) or 8,000 EGP (with real backend email capture) (~$139/$159) | 7 days | ~3 years web dev experience; also honestly flagged his prior multi-language/RTL work used a switcher, not simultaneous display, but described the layout approach he'd use for the simultaneous requirement; independently confirmed the exact SVG icon spec (`viewBox="0 0 24 24"`, `stroke="currentColor"`, appropriate `stroke-width`, `aria-label` per icon) without being walked through it; confirmed fonts, grain effect, SEO/OG/Twitter/JSON-LD, and accessibility items. |

**Both freelancers independently asked the same clarifying question, unprompted — a real gap in the brief, not a misunderstanding:** does "Notify Me" need to actually capture/store/send the submitted email (real backend), or just show a success/error message (UI + validation only, no data persistence)? **The brief never specified this.** Checked against the current live page (`js/script.js`): today's Notify Me form is explicitly **front-end only** — code comment reads "front-end only placeholder until a real backend/service is wired up" — it shows a success message but the email goes nowhere.

**Resolved (2026-08-13):** if real capture is wanted, the service is **Formspree** — Sobhy's established choice, already used on his own site (SobhyDev), free-tier available, no server-side/backend code needed (form POSTs directly to Formspree, which forwards to email). This gives both freelancers a concrete, identical integration to price against — "Formspree integration" rather than a vague "real backend" — so the two quotes stay apples-to-apples once Sobhy decides which scope (UI-only vs. Formspree-connected) to lock in. **The UI-only vs. Formspree decision itself is a product/business call for Sobhy, not a pricing-research question** — both scopes are being tracked here purely so the market-research figures in §6/PROPOSAL.md are accurate regardless of which way Sobhy decides to go.

**Decided and implemented (2026-08-13):** Sobhy chose Formspree-connected (not UI-only). Live and verified — see §5 for implementation details. Freelancers can now be given the resolved scope ("Formspree integration," not a vague "real backend") to finalize their Coming-Soon Page quotes.

---

## 6. Proposal / Business Terms

**Status: drafted, pricing partially validated.** File: `docs/PROPOSAL.md`.

**Current figures (EGP, revised 2026-08-13):**

| # | Item | Price (EGP) | Confidence |
|---|---|---|---|
| 1 | Logo & Brand Mark | 5,000 | ✅ Validated against 2 real Khamsat quotes (see §2) |
| 2 | Social Media Presence | 3,000 | ⏳ Sobhy's estimate — freelancer quote request in progress (see §3) |
| 3 | Coming-Soon Page | 9,000 | ⚠️ Not yet spot-checked, sourced from agency-blog data only |
| 4 | Website — Full WordPress/WooCommerce Build | 35,000 | ⚠️ Not yet spot-checked, sourced from agency-blog data only |
| 5 | Bed Frame Product Configurator | 18,000 | ⚠️ Not yet spot-checked, sourced from agency-blog data only |
| | **Total** | **70,000** | |

**Key lesson from the logo pricing exercise (2026-08-13):** the original figures (Logo and Social Media Presence both at 12,000 EGP) were sourced from Egyptian agency-blog marketing content (Green Mind, Udjat, Digital Brandria) — pages designed to make premium agency packages look reasonable, not representative of what's achievable in an informal, budget-conscious, friend-of-family arrangement. Sobhy validated this by getting real Khamsat freelancer quotes for the logo (2 designers, both confirmed full 176-file scope after full conversation), which landed at $40–80 (~2,000–4,000 EGP) — much closer to Sobhy's own instinct than the agency-blog figures. **Items 3–5 were priced the same flawed way and haven't been corrected yet** — same spot-check approach recommended before the proposal is finalized.

**Confirmed terms:**
- **Logo** — billable, complete and delivered (§2), price validated.
- **Social Media Presence** — billable as its own line item, explicitly **not** treated as a favor for a friend's niece. Covers the ~9 platforms established/managed to date (Facebook, Instagram, Threads, TikTok, YouTube, Pinterest, X, Messenger, email setup across Zoho) plus copywriting (About sections, bios, LinkedIn tagline/description in EN + Arabic) and the unified-inbox (Metricool) setup guidance. Named "Presence" rather than "Creation" since most platforms are already live — the work is as much about the completed foundation and ongoing manageability as initial setup.
- **Website** — the coming-soon page (already built) plus the future full WordPress/WooCommerce build (§4), including the Bed Frame configurator as its own explicit line item per the existing scoping note.
- **Bed Frame configurator pricing is plugin-agnostic** — same fee regardless of which plugin (APF or ThemeComplete) Bido eventually approves, since the conditional-logic blueprint work is identical either way (see §4 for full reasoning).
- **Plugin costs are excluded from the proposal entirely** — not Sobhy's to front (no credit card for purchases/subscriptions) or invoice; Bido/partners handle that directly with the plugin vendor.
- **Currency: EGP only** — no USD, no plugin costs shown.
- **Payment structure: 50% deposit, 50% on completion.**
- **Retainer (ongoing creative-authority/gatekeeper role):** deliberately excluded from this proposal — will be its own separate offer, presented only after the full website is built.

**Principles carried over from earlier sessions:**
- The ongoing creative-authority / gatekeeper role Bido described (nothing goes out without Sobhy's sign-off) is structurally a **retainer**, separate from one-time project pricing — should not be bundled in (reflected above).
- Skilled/specialized work (e.g., the Bed Frame configurator setup, any CNC/vector work, branding) has a pattern of being informally treated as "just part of the website" — name and price these explicitly as their own line items (reflected above).

### Client conversation — 2026-08-13 (Bido negotiation call)

Bido called back after Sobhy asked directly (**third time**) whether the arrangement is a paid engagement or a favor. Summary, as reported by Sobhy:

- Bido confirmed: **paid**, not a favor.
- When asked if he/Noura have a budget figure: Bido said Noura had a quote from a friend, weeks before contacting Sobhy, for **10,000 EGP total** covering "all the services we are asking for." Bido said he steered Noura toward Sobhy instead, citing their ~7-year working history and personal trust.
- Bido then reframed pricing around Sobhy's **monthly salary** (stated as 15,000 EGP, mentioned during the earlier logo work): his framing was that paying salary-equivalent for work that "doesn't take a month to create" is a good deal for both sides.
- Sobhy pushed back on both points: a freelance/project rate isn't equivalent to a salary, and asked whether the friend's 10,000 EGP quote-giver is actually qualified to do the full scope (logo + social + website). Bido said yes, claiming the friend has done logos/social/websites for other friends of Noura's and is "tested inside out."
- Sobhy's response: declined to argue the number directly, and said he's doing item-by-item market research instead (the ongoing Khamsat quote-gathering — see §2–§3) and will share findings once complete.
- Bido's closing note: told Sobhy not to price too high, or Noura will go to her friend instead of dealing with the "uncle"/"sir" dynamic.

**Sobhy's read:** believes Bido is deliberately using two tactics — anchoring against an unverified competing quote, and reframing project pricing as salary-equivalent to suppress the number — and is skeptical the friend/quote is real or fully scoped.

**Noted for the record, not yet verified:** the 10,000 EGP competing quote and the friend's claimed track record are both unconfirmed third-hand claims (no name, no portfolio, no direct contact) — treat as a negotiation anchor, not as market data, until/unless independently verified. The market-research approach already underway (§2–§3, extending to §4) remains the correct response: it's currency- and scope-explicit, sourced directly from working freelancers, and isn't vulnerable to either tactic above.

---

## 7. Open Items / Next Steps

- [x] Confirm exact handles/URLs for TikTok, YouTube, Pinterest, and X — done by Sobhy directly in `README.md` and `index.html` (2026-08-12)
- [x] Confirm with client: "sliding animations" = scroll-reveal (Kadence native) or carousel/slider (needs MetaSlider)? — resolved 2026-08-13, see §4: hero uses a custom Q&A slideshow, everything else uses Kadence's native fade-in/fade-out scroll-reveal, no slider plugin needed
- [ ] Get the full list of homepage sliding catchphrases from Bido (only 3 examples given so far — see §4)
- [ ] Await partner confirmation on Advanced Product Fields (APF) — or move to alternative plugin (does not block the proposal, see §6)
- [ ] Build out Bed Frame configurator once plugin is confirmed
- [ ] Set up X (Twitter) account — needs updated logo (have it) + business phone number (have it: +20-10-37-888-900)
- [ ] Migrate `darkumdesign.com` domain from Vercel to Bido's GoDaddy account
- [ ] Complete registrar email verification for the domain (avoid suspension)
- [ ] Clarify Darkum Design's legal entity status in Egypt (affects TikTok business account path)
- [ ] Resolve TikTok business account once commercial registration docs are available
- [ ] Decide on Etsy account setup (pending Noura/Heba)
- [x] Draft full proposal — done 2026-08-13, `docs/PROPOSAL.md`, see §6
- [x] Send Social Media Presence freelancer quote request to 3+ freelancers — briefs sent, 3 offers received on Khamsat (2026-08-13), see §3. Still pending: scope-confirmation follow-up with each before treating as validated.
- [ ] Get comparable freelancer quotes for Coming-Soon Page, Website, and Bed Frame Configurator (same approach as Logo/Social Media) before finalizing pricing — see §6. Coming-Soon Page request sent to 4 freelancers 2026-08-13 (`docs/COMING-SOON-FREELANCER-REQUEST.md` + `-AR.md`), responses pending. Website request drafted 2026-08-13 (`docs/WEBSITE-FREELANCER-REQUEST.md` + `-AR.md`, see §4), not yet sent. Bed Frame Configurator quote request still not started — blocked on plugin confirmation.
- [x] Update `README.md` — tech stack section + Victorian-style/Cairo & Giza framing + tagline — done 2026-08-13, see §5
- [ ] Sobhy to review the final coming-soon page (all social links live) and confirm before committing/pushing to GitHub and deploying on Vercel
- [x] Add Open Graph / Twitter Card meta tags + og:image to the coming-soon page — done 2026-08-12 (image created by Sobhy, meta tags added to `index.html`, see §5)
- [ ] Finish publishing the LinkedIn Company Page — English tagline + About live (2026-08-14); Arabic About pasted in but not yet saved, pending the "Shop"/"محل" word swap, see `docs/MARKETING-COPY.md`
- [ ] Google Business Profile — created, pending verification 17 August 2026
- [x] Resolve YouTube "We couldn't save your changes. Please try again." error — fixed 2026-08-14, turned out to be a stale-session/cache issue, resolved by clearing cache and hard-reloading the page. Not a content or character-limit problem.
- [ ] Re-publish YouTube About description with the fuller version in `docs/MARKETING-COPY.md` (current live version is still the shorter 2026-08-13 draft, which left the 1,000-char field underused)
- [x] Add JSON-LD structured data (`FurnitureStore`) to the coming-soon page — done 2026-08-13, see §5
- [x] Decide LinkedIn Arabic slogan: translated (أثاث · فن · تصميم), not transliterated (فرنيتشر · آرت · ديزاين) — matches YouTube, resolved 2026-08-14, Sobhy applied it directly in the LinkedIn draft
- [x] Brand word choice decided 2026-08-14: **"Shop" (EN) / "محل" (AR)**, not "Studio"/"استوديو" — see §8 for reasoning. Applied across LinkedIn and YouTube copy in `docs/MARKETING-COPY.md`; doesn't appear in the OG description or JSON-LD, so nothing to change there.
- [ ] Decide whether to also fix the em dash in the live Open Graph / meta description (`index.html`) to match the new no-em-dash-in-English rule — flagged in `docs/MARKETING-COPY.md`, not changed yet since it needs a code edit to already-shipped copy
- [ ] Draft retainer offer/proposal for the ongoing creative-authority role — separately, after the full website is built (see §6)

---

## 8. Reusable Marketing Copy — Reference

Moved to its own file: **`docs/MARKETING-COPY.md`** (2026-08-14). Covers Open Graph/meta description, Google Business Profile, LinkedIn (EN/AR tagline + About), and YouTube (EN/AR About) — plus the standing rules behind them: no em dash anywhere (extended 2026-08-14 from Arabic-only to all copy), and "Shop"/"محل" as the fixed word choice over "Studio"/"استوديو". Kept out of this handoff doc so a single wording change doesn't require re-editing a long project-status document — see that file directly rather than duplicating it here.
