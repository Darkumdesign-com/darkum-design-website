# Darkum Design — Project Handoff

**Last updated:** 2026-08-16
**Maintainer:** Sobhy (sole developer/administrator — GitHub Org `darkumdesign`, separate Vercel account)
**Pricing note:** Bido offered a flat rate of EGP 15,000 for the entire engagement (2026-08-16). The original item-by-item proposal and all freelancer market research have been archived to `docs/offer_market-research.md` — see §6.

This document tracks everything known about the Darkum Design engagement so far: business context, completed work, decisions made, and open items. Update this file as things change — it's the source of truth for anyone (including future-you) picking this project back up.

---

## 1. Business Context

- **Darkum Design (داركم ديزاين)** — custom furniture and home décor shop, based in Heliopolis, Cairo, delivering across Egypt. Slogan: "FURNITURE · ART · DESIGN". (Corrected 2026-08-14: dropped the old "Victorian-style / Cairo and Giza / selling worldwide" framing, which had already been retired from `README.md` and the coming-soon page's OG copy but never updated here — see §5. Word choice is "shop," not "studio," per the 2026-08-14 decision, see §8.)
- **"Female-owned"/"female-led" positioning: on hold entirely** (revised 2026-08-15, same day it was first proposed) — do not add to any platform's copy, including Google Business Profile, until Darkum Design's Commercial Registration is in hand and the correct wording/scope can be confirmed against it. `README.md`'s general company description currently says "female-owned" from before this pause — also needs revisiting once the registration comes through. See §3 for why: the Commercial Registration is now a confirmed blocker for TikTok, Etsy, and soon Paymob (WooCommerce payments) — see §7.
- **Brand wordmark typeface confirmed 2026-08-15: Alice** (English only, regular weight — Google Fonts doesn't offer a bold/medium variant), replacing Cormorant Garamond to match the logo's typeface. Fallback stack `'Alice', 'Times New Roman', Times, serif`, uppercase transform, `font-size` clamp trimmed to `2.8rem` max to compensate for the extra width uppercase adds. Arabic wordmark stays on Cairo (unaffected — Alice doesn't cover Arabic script). See `README.md`'s new Fonts section for the full breakdown of all three typefaces in use (Alice/Cairo/Inter).
- **Owners:** Nourhan Osama ("Noura") and her partner Heba Farouk. Both recent college graduates, not technical — avoid jargon in partner-facing communication.
- **Key contact / decision authority:** Bido (Albert Friday / AbdAllah Gomaa / Abdallah Gomaa / Cars Buyer Inc Owner), Noura's uncle and Sobhy's best friend, currently in Egypt on vacation. The "nothing goes in or out without approval" arrangement is narrower than previously noted here: Bido said it applies to **technological matters specifically**, and only takes effect **once he returns to the US** — he's delegating to Sobhy in his stead for that period. It also wasn't said directly to Noura/Heba; it was said to his own circle, roughly: "I am not staying here forever... once my plane takes off, [Sobhy] is here in my stead. If you have questions, ask him. If you have a problem, ask him. If you have crazy ideas, ask him also. Nothing technological goes in or out without [Sobhy's] approval."
- **Payment status:** No payment received yet. This is *not* a case of an offer being sent and ignored — it's an informal, trust-based arrangement given the personal relationship (Noura is Bido's niece). Sobhy explicitly does not want to treat this as a favor: the work (logo, social media presence, coming-soon page, upcoming full site) is billable regardless of the personal relationship. **Bido explicitly reconfirmed on 2026-08-13 (third time Sobhy asked directly) that the arrangement is paid, not a favor**, and on 2026-08-16 offered a flat rate of **EGP 15,000 for the entire engagement**. See `docs/offer_market-research.md` for the full negotiation call summary, the pricing pushback that preceded the flat offer, and the item-by-item proposal/market research it superseded.
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
- **Pricing/market-research history:** logo pricing was validated against real Khamsat freelancer quotes ($40–80) before the item-by-item proposal was superseded by Bido's flat-rate offer — full detail archived to `docs/offer_market-research.md`.

---

## 3. Social Media

### Status by platform

| Platform | Status |
|---|---|
| Facebook | ✅ Established, About section corrected 2026-08-15 to current brand positioning (previous copy predated the 2026-08-14 pivot: old "Victorian-style"/"Cairo & Giza" framing, "Studio" wording — despite this table marking it "written," it had drifted out of sync since the pivot and was never caught until a full copy audit, see §5), linked on coming-soon page |
| Instagram | ✅ Established, bio synced 2026-08-15 to current brand positioning, linked on coming-soon page |
| Threads | ✅ Established (`@darkumdesign`), bio synced 2026-08-15, linked live on the coming-soon page (added 2026-08-13) |
| TikTok | ⚠️ Personal/Creator account only — business account blocked on Commercial Registration, see below. Handle confirmed (`@darkumdesign`) and linked live on the coming-soon page. Bio synced 2026-08-15; also corrected a wrong assumption in this project that the bio limit was 80 chars — it's actually 160, confirmed from Sobhy's screenshot. |
| YouTube | ✅ Established, linked live on the coming-soon page (`@darkumdesign`). Bilingual About description fully republished 2026-08-15 using the full 1,000-char field and "Shop"/"محل" wording, confirmed matching `docs/MARKETING-COPY.md`, superseding the earlier shorter draft. Contact email set to `info@darkumdesign.com`. |
| Pinterest | ✅ Established, profile description synced 2026-08-15, linked live on the coming-soon page |
| X (Twitter) | ✅ Established, bio corrected 2026-08-15 (same pre-pivot Victorian/"Cairo & Giza" issue as Facebook, see above), linked live on the coming-soon page. Still needs verification of the business phone number (now available, see below) for the account itself. |
| Email | ✅ `darkumdesign@gmail.com` (Free Gmail). Business domain email also now set up via Zoho — see "Business email addresses" below. |
| Email (business domain) | ✅ `info@darkumdesign.com` Login using `darkumdesign@gmail.com`. Used on the coming-soon page and as the YouTube channel's public contact email. |
| Messenger | ✅ Live click-to-chat link (`m.me/darkumdesign`), listed in `README.md` |
| WhatsApp Business | 💡 Recommended, not yet actioned. Currently a personal WhatsApp number, not the Business app/tier. Coming-soon page links directly to the business number via `wa.me/201037888900` in the meantime. Description copy already drafted and confirmed on-brand, ready to use once the Business app is set up — see `docs/MARKETING-COPY.md`. |
| Google Business Profile | 🔃 Created, waiting on verification (Google requesting photos/videos of the business) as of 17 August 2026. Description confirmed live 2026-08-15 with the "studio" → "shop" fix. The "female-led" addition proposed the same day was reverted before publishing — see §1, on hold pending Commercial Registration. |
| Etsy | ⛔ **Blocked on Commercial Registration, same as TikTok** — see "Commercial Registration blocker" below. Bido gave the green light 2026-08-15; Sobhy got as far as the shop-naming step (desired handle `DarkumDesign` unavailable, `DarkumDesignShop` recommended for later) before hitting a required `Business Registration Number` field further into onboarding (payments/address step) and stopped, informing Noura/Heba/Bido via WhatsApp. |
| LinkedIn | ✅ Company Page created. English tagline + About published 2026-08-14. Arabic tagline + About confirmed published and matching `docs/MARKETING-COPY.md` as of 2026-08-15 (the earlier "pasted but not yet saved" state is resolved). |

**Houzz removed from consideration (2026-08-15):** Sobhy confirmed Houzz Pro doesn't operate in Egypt ("Unavailable in your country" during signup) — dropped entirely, no longer tracked here or elsewhere.

**All confirmed handles for the coming-soon page's social row are sourced from `README.md`, which Sobhy maintains directly as the source of truth for social URLs.**

### Commercial Registration blocker (affects TikTok, Etsy, and soon Paymob)
**Confirmed 2026-08-15 as a shared blocker, not three separate issues.** Darkum Design doesn't yet have Egyptian commercial registration (license + registry number):
- **TikTok:** blocks business account setup (personal/Creator account in use meanwhile).
- **Etsy:** blocks completing shop onboarding — the payments/address step has a required `Business Registration Number` field. Sobhy stopped at this point (2026-08-15) rather than continue, and informed the owners via WhatsApp.
- **Paymob (future):** Sobhy anticipates the same requirement once WooCommerce payment integration is set up — not yet confirmed directly with Paymob, but expected given the pattern.

A couple of days before this was confirmed as a shared blocker, Bido, Noura, and Heba met with the legal accountant Sobhy recommended and made a plan; the accountant is preparing the required documents, which usually takes 7–14 business days. Once available, Sobhy will use the documentation to unblock TikTok's business account, resume Etsy onboarding, and set up Paymob.

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

**Pricing/market-research history:** Social Media Presence pricing was researched via a dedicated freelancer quote request brief and four Khamsat offers ($40–$250) before the item-by-item proposal was superseded by Bido's flat-rate offer — full detail, including the brief documents and offer table, archived to `docs/offer_market-research.md`.

---

## 4. Website — Homepage (Future Full Build)

### Stack (confirmed)
- **CMS:** WordPress
- **E-commerce:** WooCommerce
- **Page builder:** Kadence Blocks (free) + Kadence theme (free) — chosen over Elementor Pro specifically because Bido wants to avoid subscription costs, so capital goes toward marketing instead. Kadence's native block animations cover scroll-reveal effects for free, which would otherwise require Elementor Pro.
- **SEO:** Yoast SEO (free)
- **Custom code:** Code Snippets (free) — for PHP snippets outside `functions.php`; Kadence blocks also support Custom CSS directly, and native Gutenberg has a Custom HTML block for JS/HTML injection.
- **Slider (conditional):** MetaSlider (free) — only needed if "sliding animations" turns out to mean an actual image/content carousel rather than Kadence's native scroll-reveal effects. **Open question, not yet confirmed with client which one they mean.**
- **Hosting (under discussion 2026-08-15, plan confirmed by Claude, not yet started):** GoDaddy Managed WordPress hosting. Recommended build/go-live sequence:
  1. Set up GoDaddy Managed WordPress hosting. It automatically provides a **temporary domain** (something like `abc123.myftpupload.com`) specifically for building/testing without touching `darkumdesign.com`'s DNS — no special request needed, this is the standard workflow.
  2. Build the full site there (Kadence, WooCommerce, Bed Frame configurator once the plugin's confirmed).
  3. Bido/Noura/Heba review and approve the build on the temporary domain.
  4. Only then point `darkumdesign.com`'s DNS from Vercel to GoDaddy, retiring the coming-soon page. This can happen as soon as the build is approved — see the Domain section below for why it does **not** need to wait for the 25 September registrar-transfer date.
  5. The registrar ownership transfer to Bido's GoDaddy account (see Domain section below) happens later, whenever convenient after 25 September, independent of step 4 — the site can go live on the new build well before the registrar transfer itself completes.

  Throughout steps 1–3, `darkumdesign.com` keeps serving the current coming-soon page on Vercel, completely untouched. See §7 for this item's open-item tracking.

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
- Vercel disapproved the domain **registrar transfer** to GoDaddy until 60 days pass, which will be completed on 25 September 2026.
- **Clarified 2026-08-15:** this 60-day lock is an ICANN rule blocking the *registrar transfer* specifically (moving who the domain is registered with) — it does **not** block editing DNS records or nameservers. Sobhy can point `darkumdesign.com`'s DNS at GoDaddy's WordPress hosting whenever the site is ready to go live, independent of and well before the registrar transfer completes on 25 September. The two are separate actions: DNS/hosting cutover (whenever ready) vs. registrar ownership transfer to Bido's GoDaddy account (blocked until 25 Sept). This is the reasoning behind step 4/5 of the hosting sequence above.

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
- **Plugin cost is separate from Sobhy's fee** — Sobhy has no credit card to purchase or subscribe on Bido's behalf even if he wanted to, so the ~$199 (or CodeCanyon equivalent) is a cost Bido/partners handle directly with the vendor. This still holds under the flat EGP 15,000 offer (see §6).

**Scoping note:** even with the right plugin, wiring up the full conditional chain (position → insertions → size, repeated per position) is several hours of careful setup work. (Original per-item pricing reasoning for this archived to `docs/offer_market-research.md`.)

### Confirmed scope decisions (2026-08-13)

1. **Animation scope:** Hero section uses a custom-built, smoother/more polished version of the Q&A catchphrase slideshow already previewed on the coming-soon page (same direction logic — EN slides from right, AR from left). **Every other section on the homepage uses only light fade-in/fade-out** (Kadence native scroll-reveal, free, no slider plugin needed anywhere on the site). This fully resolves the earlier "scroll-reveal vs. slider plugin" open item in §7 — removed from there, no MetaSlider needed.
2. **Bilingual approach:** Bido confirmed the **homepage must be simultaneous EN/AR, side-by-side, no switcher** — same technique as the coming-soon page, custom-coded, not plugin-driven. However, **WooCommerce's own pages (cart, checkout, my-account) are server-rendered by the plugin and can't be split into two simultaneous languages on one page** — this is a real technical constraint, not a preference, and Bido (whose prior bilingual site experience was a US English/Spanish site with a manual switcher) hadn't hit this distinction before since this is his first Arabic/RTL site. **Resolved approach:** a multilingual plugin (Polylang or WPML) on the WooCommerce pages only, configured to **silently auto-detect the visitor's browser language** (no visible switcher, session-persisted so it doesn't flip mid-checkout) — functionally achieves "feels automatic, no manual choice" without requiring a custom JS re-render of WooCommerce's own templates. **Fallback default set by Sobhy/Claude (not yet run past Bido, trivial to flip):** if the browser locale is neither English nor Arabic, default to English.

A freelancer/developer quote request brief covering this build (excluding the Bed Frame Configurator, priced separately) was also drafted as part of the now-superseded market research — see `docs/offer_market-research.md` for the brief documents and status.

---

## 5. Repo / Infra

- **GitHub:** Org `darkumdesign`, repo `darkum-design-website` (renamed from original), branch protection configured for solo administration. Note: GitHub Free plan rulesets only enforce on **public** repos — relevant constraint for how protection was set up.
- **Vercel:** Separate business account from Sobhy's personal one.
- **Local path:** `C:\Projects\darkum-design-website\`
- **Current live state (updated 2026-08-15):** Truly bilingual coming-soon placeholder — English and Arabic content displayed simultaneously. Mobile bilingual pairing reworked (2026-08-13): the tagline (EN+AR) and "coming soon" line (EN+AR) are now grouped as content pairs with a small divider between the two pairs, rather than grouped by language as before — fixes excessive/uneven spacing reported on mobile. Desktop retains the original two-column (English | divider | Arabic) side-by-side layout via CSS Grid, visually unchanged. Black (`#000000`) background, brand primary color `#996633` applied consistently via CSS variable (`--wood` now references `--brand-primary-color`), actual logo (SVG + PNG) in place of the old placeholder icon, favicon added. Full brand name corrected to "داركم ديزاين" everywhere on the page (title, meta description, logo alt text, h1, footer) — the shorter "داركم" alone was missing "Design." Slogan "FURNITURE · ART · DESIGN" added under the brand name. Auto-cycling catchphrase ticker with manual dot/arrow navigation and pause-on-hover added (see below, full detail). Page restructured into a sticky-footer layout so the ticker's height changes no longer shift the content below it (see below). Decorative divider now sits between the form and the social icons (see below). Notify Me form is Formspree-connected with client-side validation (see below, full detail). Brand wordmark uses Alice, not Cormorant Garamond (see §1). Plain HTML/CSS/JS — no build step.
- **Logo assets in repo:** `img/darkum-logo.svg` + `img/darkum-logo.png` (Transparent/Exact variant, mark only), `img/favicon.svg` + `img/favicon.png`, copied from the master export folder in §2.
- **Social links on coming-soon page — all 10 live (updated 2026-08-15):** Instagram, Threads, Facebook, TikTok, YouTube, Pinterest, X, LinkedIn, and Email use the exact handles Sobhy confirmed in `README.md`; WhatsApp links to the business number (`wa.me/201037888900` — corrected 2026-08-13, see §3). LinkedIn added 2026-08-15 — see below.
- Sobhy reviewed the bilingual layout and social icons in-browser and confirmed both looked correct (2026-08-12).
- **Open Graph / Twitter Card meta tags added (2026-08-12):** `og:url`, `og:type`, `og:title`, `og:description`, `og:image` (+ `width`/`height`), and matching `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`, `twitter:domain`, `twitter:url` added to `index.html`'s `<head>`. Page `<title>` and plain `name="description"` left unchanged. `og:image`/`twitter:image` use the absolute URL `https://darkumdesign.com/img/og-image.png` — won't resolve on local/preview URLs, only once live on the real domain. **`img/og-image.png` (1200×630) was created by Sobhy directly**, not generated by Claude. **Em dash fixed 2026-08-15** (Sobhy edited `index.html` directly, verified by Claude reading the file): `og:description`/`twitter:description` now read "...داركم ديزاين - Beds with an interchangeable insert system..." with a regular hyphen, matching the no-em-dash rule and the existing hyphen usage in `og:title`/`twitter:title`/`<title>`.
- **JSON-LD structured data added (2026-08-13):** `<script type="application/ld+json">` in `index.html`'s `<head>`, `@type: "FurnitureStore"`. Includes `name`/`alternateName`, `url`, `logo`, `image`, `email`, `address` (`PostalAddress`, store address from §1), `contactPoint` (two entries — `contactType: "phone"` and `contactType: "customer service"` for WhatsApp, both using the confirmed `+20-10-37-888-900`), and `sameAs` (8 social profile URLs from `README.md`). WhatsApp/Messenger deep links (`wa.me`/`m.me`) were deliberately excluded from `sameAs` — those aren't identity/profile pages, they're click-to-chat links, so WhatsApp is represented via `contactPoint` instead. No `description` field included — avoided propagating the retired "Victorian-style"/"Cairo & Giza" framing.
- **`README.md` corrected (2026-08-13):** tech stack section updated from "TBD" to the confirmed WordPress/WooCommerce/Kadence stack (see §4); "Victorian-style" and "Cairo & Giza" framing replaced with the bed-frame/interchangeable-insert positioning and Egypt-wide delivery scope, matching the finalized OG/GBP copy in `docs/MARKETING-COPY.md`; tagline updated to the confirmed "FURNITURE · ART · DESIGN" slogan (was "DESIGN THAT INSPIRES. CRAFT THAT ENDURES.", an older/superseded line). Both docs now match. **Note (2026-08-15): README's general description still says "female-owned," now on hold pending Commercial Registration — see §1, not yet resolved.**
- **`docs/PROPOSAL.md` created (2026-08-13):** full pricing proposal draft — superseded by Bido's flat-rate offer, archived to `docs/offer_market-research.md` (see §6).
- **`docs/SOCIAL-MEDIA-FREELANCER-REQUEST.md` + `-AR.md` created (2026-08-13):** freelancer quote request briefs — archived to `docs/offer_market-research.md`.
- **`docs/COMING-SOON-FREELANCER-REQUEST.md` + `-AR.md` created and sent to 4 freelancers (2026-08-13):** briefs covering the full coming-soon page rebuild, with heavy emphasis on the hand-coded inline SVG icon requirement and ARIA/accessibility (see §7).
- **`docs/MARKETING-COPY.md` created (2026-08-14), restructured and fully synced (2026-08-15):** originally only covered LinkedIn/YouTube. Rebuilt at Sobhy's direction into a Live (Current) / Proposed (In-progress) format, one entry per platform, so every platform's *actual* live copy could be verified before proposing anything — needed because this handoff doc's platform-status notes had drifted from reality (e.g. Facebook/Instagram were marked "About/bio copy written" in §3 while still running the pre-pivot Victorian-era copy, unnoticed until this audit). Sobhy pasted the real live text for every platform; Claude compared it against LinkedIn as the source-of-truth voice, flagged the drift, and proposed corrected copy; Sobhy pushed each update live and confirmed. All platforms now match and the doc collapsed to a single "Current" entry per platform. Also corrected along the way: a wrong assumption that TikTok's bio limit was 80 chars (it's 160, confirmed via Sobhy's screenshot); the OG/Twitter Card em dash (see above); GBP description "studio" → "shop." A same-day proposal to also add "female-led" to GBP was reverted before publishing once Sobhy flagged it should wait for the Commercial Registration — see §1.
- **Notify Me form — ✅ complete, Formspree-connected (2026-08-13):** the front-end-only placeholder (see §4) is retired. `index.html`'s `#notify-form` now posts to Formspree endpoint `https://formspree.io/f/mzepvbqn` (project "Darkum Design," form "Coming Soon (Notify me) - Darkum Design"), `action`/`method` attributes set as a no-JS fallback. `js/script.js` submits via `fetch()` (no `@formspree/ajax` library pulled in — plain `fetch` matches the site's no-build-step approach and keeps the footprint identical to before) with `Accept: application/json` so Formspree replies with JSON instead of redirecting. Success and failure both swap the existing bilingual `#form-message` text in place — no redirect, no separate thank-you page, matching the "front-end placeholder is good enough for a coming-soon page" decision. Submit button disables mid-request to prevent double-submits. Client-side email-format validation added (`emailInput.checkValidity()`, leaning on the existing `type="email"` input rather than a new regex) so obviously-invalid input is caught instantly and shown via the bilingual message, without a round trip to Formspree — `novalidate` stays on the `<form>` since it's only suppressing the browser's own (English-only) validation UI, not `checkValidity()` itself. Error and success states are now visually distinct: `.form-message.is-error` uses a new `--error: #d16a5a` CSS variable (muted terracotta-red, chosen to read clearly as an error without clashing with the black/wood-brown palette) toggled via JS; success keeps the original `--wood-light` amber. **Verified live (2026-08-13):** two real test submissions (`sobhydesign@gmail.com`, `sobhy0101@gmail.com`) confirmed landing in the Formspree inbox; invalid input (`sdasd`) confirmed caught client-side with the red bilingual message, no network call made.
- **LinkedIn added to the socials row (2026-08-15):** the profile URL (`https://www.linkedin.com/company/darkumdesign`) was already in `README.md` and the JSON-LD `sameAs` list, but the visible icon on the coming-soon page itself was missing. Added as a 10th icon between X and WhatsApp, hand-drawn to match the existing unified line-art style (same `viewBox`/stroke conventions as the other icons; built from the Instagram icon's rounded-square + dot construction rather than the literal LinkedIn logo mark, keeping it consistent with the rest of the set instead of dropping in a brand asset).
- **Page restructured into a sticky-footer layout (2026-08-15) to stop the ticker from shifting everything below it:** previously the whole page (logo through footer) was one `<main class="wrap">` in normal document flow, so every ticker rotation to a longer/shorter phrase visibly pushed the divider/form/socials/footer down or up. Split into `<main class="page">` (flex column, `min-height: 100vh`) containing `.wrap` (logo → ticker, height still varies with the ticker) and `.bottom-block` (divider → form → socials → footer, `margin-top: auto`). The auto-margin anchors `.bottom-block`'s position to the *viewport bottom* rather than to `.wrap`'s height, so `.wrap` growing/shrinking no longer moves anything below it — Sobhy confirmed this fixed the shift ("a million times better"). **Known caveat, confirmed present but minor:** on short viewports where total content nearly fills/exceeds 100vh, a small boundary-case jump can still occur right at that threshold, since the auto-margin collapses to 0 once content overflows. Left as-is — judged acceptable, far rarer than the original every-rotation shift.
- **Ticker transition changed from slide-in to crossfade, and slowed (2026-08-15):** the original slide (`translateX` + an instant, transition-less opacity-0 cut when text swapped) read as fast/sudden and pulled Sobhy's attention while the page sat open on a second device next to him. Replaced with a plain opacity crossfade — current phrase fades out (0.9s) before the text swaps, then the new phrase fades in (0.9s), no more instant disappear-then-slide. Rotation interval also slowed, 6s → 7s. `prefers-reduced-motion` still respected (fade duration drops to 0, instant swap, no motion).
- **Ticker manual navigation + pause-on-hover added (2026-08-15):** a first-time visitor has no way to know it's a multi-phrase rotation, so added: indicator dots (one per phrase, generated dynamically from the phrases array so it stays correct if phrases are added/removed later; current dot filled/enlarged via `aria-current="true"`), ‹ › arrow buttons for manual back/forth, and a hidden `role="status" aria-live="polite"` element announcing "Slide 2 of 3 / الشريحة 2 من 3" on each change for screen readers (the ticker text itself stays `aria-live="off"` so phrases aren't force-read automatically on every rotation). Manual navigation restarts the autoplay clock so it doesn't double-advance right after a click. **Autoplay also pauses on hover or keyboard focus** anywhere in the ticker or its controls, resuming when the visitor moves away — added proactively since it directly answers "moved faster than I can read" and matches standard practice for auto-advancing content (WCAG 2.2.2, Pause/Stop/Hide).
- **Divider moved (2026-08-15):** originally sat between the ticker's dot/arrow controls and the notify form; reported as visually cramped against the dots once the controls were added. Moved to sit between the form's success/error message and the social icons instead, now separating the "take action" section (form) from the "follow us" section (socials). No CSS changes needed — existing margins handled the new spacing correctly.
- **Mobile social icons — 5-per-row grid fix (2026-08-15):** adding the 10th icon (LinkedIn) caused an uneven flex-wrap split on narrow screens (9 icons on one line, only Email alone on a second line), since flex-wrap breaks based on available width, not a fixed count. Under 480px width, `.socials` now switches to `display: grid; grid-template-columns: repeat(5, 1fr)`, deterministically placing icons 1–5 on row one and 6–10 on row two regardless of screen width, same DOM order as before (Instagram → Email). Desktop/tablet (>480px) unaffected.
- **Arabic tagline weight/spacing corrected by Sobhy directly (2026-08-15):** `.tagline.bi-ar` in `css/style.css` — `letter-spacing: 0` and `text-transform: none` (Latin-only conventions that don't apply to Arabic's contextually-connected letterforms) and `font-weight: 400` (the same numeric weight read visually heavier on Arabic type than on the English tagline). Also fixed a missing blank line separating the rule from `.tagline` above it in the stylesheet.

### Coming-Soon Page: Formspree vs. UI-only decision (2026-08-13)
Two freelancer quotes gathered during the (now-superseded) market research phase independently flagged the same brief gap: did "Notify Me" need to actually capture/store/send the submitted email (real backend), or just show a success/error message (UI + validation only, no data persistence)? The brief hadn't specified this, and the live page at the time (`js/script.js`) was explicitly front-end only.

**Resolved (2026-08-13):** if real capture is wanted, the service is **Formspree** — Sobhy's established choice, already used on his own site (SobhyDev), free-tier available, no server-side/backend code needed.

**Decided and implemented (2026-08-13):** Sobhy chose Formspree-connected (not UI-only). Live and verified — see above for implementation details. Full freelancer quotes for this item archived to `docs/offer_market-research.md`.

---

## 6. Proposal / Business Terms — Archived, superseded by flat-rate offer

**Status (2026-08-16):** Bido offered a flat rate of **EGP 15,000 for the entire engagement** (logo, social media presence, coming-soon page, full website build, Bed Frame configurator), superseding the item-by-item proposal (`docs/PROPOSAL.md`) and the freelancer market research gathered to validate it. The original figures, the full 2026-08-13 Bido negotiation call, and every freelancer quote (Logo, Social Media, Website, Coming-Soon Page) have been moved to **`docs/offer_market-research.md`** for reference.

**Still relevant despite the flat rate:**
- **Retainer (ongoing creative-authority/gatekeeper role)** remains a separate, future offer — not part of the EGP 15,000 flat rate; will be presented only after the full website is built.
- **Plugin costs** (e.g. Advanced Product Fields, ~$199) remain excluded from Sobhy's fee — Bido/partners handle those directly with the vendor (see §4).
- The **skilled/specialized-work-gets-named-explicitly** principle (Bed Frame configurator, CNC/vector work, branding shouldn't quietly fold into "just part of the website") still applies to scoping conversations even without itemized pricing behind it.

---

## 7. Open Items / Next Steps

- [x] Confirm exact handles/URLs for TikTok, YouTube, Pinterest, and X — done by Sobhy directly in `README.md` and `index.html` (2026-08-12)
- [x] Confirm with client: "sliding animations" = scroll-reveal (Kadence native) or carousel/slider (needs MetaSlider)? — resolved 2026-08-13, see §4: hero uses a custom Q&A slideshow, everything else uses Kadence's native fade-in/fade-out scroll-reveal, no slider plugin needed
- [ ] Get the full list of homepage sliding catchphrases from Bido (only 3 examples given so far — see §4)
- [ ] Await partner confirmation on Advanced Product Fields (APF) — or move to alternative plugin (does not block the build)
- [ ] Build out Bed Frame configurator once plugin is confirmed
- [x] Set up X (Twitter) account — needs updated logo (have it) + business phone number (have it: +20-10-37-888-900)
- [ ] Migrate `darkumdesign.com` domain's **registrar** from Vercel to Bido's GoDaddy account — blocked until 25 September 2026 (ICANN 60-day rule). Does **not** block pointing DNS/hosting to GoDaddy earlier, see §4.
- [ ] Complete registrar email verification for the domain (avoid suspension)
- [ ] Clarify Darkum Design's legal entity status in Egypt (affects TikTok business account, Etsy, and soon Paymob — see the consolidated "Commercial Registration blocker" note in §3)
- [ ] Resolve TikTok business account once commercial registration docs are available
- [ ] Resume Etsy shop setup once commercial registration docs are available — stopped 2026-08-15 at the required `Business Registration Number` field, owners informed via WhatsApp same day. `DarkumDesignShop` recommended as the final handle once resumed (`DarkumDesign` itself is taken), see §3.
- [x] Decide on Houzz — dropped 2026-08-15, doesn't operate in Egypt (confirmed directly during signup), see §3
- [ ] **Start the full WordPress build on GoDaddy Managed WordPress hosting.** Full recommended sequence documented in §4 (temp domain → build → partner approval → DNS cutover → registrar transfer later, independent steps). Not yet started, awaiting Sobhy's go-ahead.
- [x] Draft full proposal — done 2026-08-13, `docs/PROPOSAL.md`. **Superseded** 2026-08-16 by Bido's flat EGP 15,000 offer — archived to `docs/offer_market-research.md`, see §6
- [x] Send Social Media Presence freelancer quote request to 3+ freelancers — briefs sent, 4 offers received on Khamsat (2026-08-13). **No longer needed** — superseded by Bido's flat-rate offer; quotes archived to `docs/offer_market-research.md`.
- [x] ~~Get comparable freelancer quotes for Coming-Soon Page, Website, and Bed Frame Configurator before finalizing pricing~~ — **no longer needed**, superseded 2026-08-16 by Bido's flat EGP 15,000 offer; quotes gathered so far archived to `docs/offer_market-research.md`.
- [x] Update `README.md` — tech stack section + Victorian-style/Cairo & Giza framing + tagline — done 2026-08-13, see §5
- [ ] Sobhy to review the final coming-soon page (all social links live) and confirm before committing/pushing to GitHub and deploying on Vercel
- [x] Add Open Graph / Twitter Card meta tags + og:image to the coming-soon page — done 2026-08-12 (image created by Sobhy, meta tags added to `index.html`, see §5)
- [x] Finish publishing the LinkedIn Company Page — English tagline + About live (2026-08-14); Arabic tagline + About confirmed published and matching `docs/MARKETING-COPY.md` as of 2026-08-15
- [ ] Google Business Profile — created, pending verification 17 August 2026. Description ("shop" wording) confirmed live 2026-08-15; the "female-led" addition was reverted before publishing, see §1.
- [x] Resolve YouTube "We couldn't save your changes. Please try again." error — fixed 2026-08-14, turned out to be a stale-session/cache issue, resolved by clearing cache and hard-reloading the page. Not a content or character-limit problem.
- [x] Re-publish YouTube About description with the fuller version in `docs/MARKETING-COPY.md` — confirmed live and matching as of 2026-08-15
- [x] Add JSON-LD structured data (`FurnitureStore`) to the coming-soon page — done 2026-08-13, see §5
- [x] Decide LinkedIn Arabic slogan: translated (أثاث · فن · تصميم), not transliterated (فرنيتشر · آرت · ديزاين) — matches YouTube, resolved 2026-08-14, Sobhy applied it directly in the LinkedIn draft
- [x] Brand word choice decided 2026-08-14: **"Shop" (EN) / "محل" (AR)**, not "Studio"/"استوديو" — see §8 for reasoning. Applied across all platforms in `docs/MARKETING-COPY.md` as of the 2026-08-15 sync (see §5); also applied to Google Business Profile, which had drifted with "studio" wording.
- [x] Decide whether to also fix the em dash in the live Open Graph / meta description (`index.html`) to match the no-em-dash-in-English rule — fixed by Sobhy directly 2026-08-15, verified by Claude reading `index.html`, see §5
- [ ] Resolve `README.md`'s "female-owned" wording once the Commercial Registration is in hand and the correct positioning/scope can be confirmed — see §1 (superseded the earlier GBP-only framing, now on hold entirely rather than an active decision to make right now)
- [ ] Draft retainer offer/proposal for the ongoing creative-authority role — separately, after the full website is built (see §6)

---

## 8. Reusable Marketing Copy — Reference

Moved to its own file: **`docs/MARKETING-COPY.md`** (created 2026-08-14, restructured and fully synced 2026-08-15 — see §5 for the full story). Covers Facebook, Instagram, Threads, TikTok, Pinterest, X, WhatsApp Business, Google Business Profile, LinkedIn (EN/AR tagline + About), YouTube (EN/AR About), and the Open Graph/meta description — plus the standing rules behind them: no em dash anywhere (extended 2026-08-14 from Arabic-only to all copy), "Shop"/"محل" as the fixed word choice over "Studio"/"استوديو", and "female-owned"/"female-led" positioning on hold entirely pending Darkum Design's Commercial Registration (2026-08-15, revised same day from an earlier GBP-only framing). Kept out of this handoff doc so a single wording change doesn't require re-editing a long project-status document — see that file directly rather than duplicating it here.
