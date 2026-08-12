# Darkum Design — Project Handoff

**Last updated:** 2026-08-12
**Maintainer:** Sobhy (sole developer/administrator — GitHub Org `darkumdesign`, separate Vercel account)

This document tracks everything known about the Darkum Design engagement so far: business context, completed work, decisions made, and open items. Update this file as things change — it's the source of truth for anyone (including future-you) picking this project back up.

---

## 1. Business Context

- **Darkum Design (داركم ديزاين)** — Victorian-style custom furniture and home décor studio, operating in Cairo and Giza, Egypt and selling worldwide. Slogan: "FURNITURE · ART · DESIGN".
- **Owners:** Nourhan Osama ("Noura") and her partner Heba Farouk. Both recent college graduates, not technical — avoid jargon in partner-facing communication.
- **Key contact / decision authority:** Bido (Albert Friday / AbdAllah Gomaa / Abdallah Gomaa), Noura's uncle and Sobhy's best friend. Bido has positioned Sobhy as sole creative/development authority — nothing goes in or out without Sobhy's approval, and Sobhy is to be contacted before Bido himself.
- **Payment status:** No payment received yet. This is *not* a case of an offer being sent and ignored — it's an informal, trust-based arrangement given the personal relationship (Noura is Bido's niece). A formal proposal is still pending (see §6).
- **Access:** Neither Bido nor Noura access Gmail, Social Media accounts, GitHub or Vercel directly — Sobhy administers both solo.
- **Store**: 10 Aswan Street, El-Sherif Building, Heliopolis, Egypt, 4460305. Under construction in Heliopolis, Cairo. Sobhy has not visited the store yet.

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

---

## 3. Social Media

### Status by platform

| Platform | Status |
|---|---|
| Facebook | ✅ Established, About section copy written, linked on coming-soon page |
| Instagram | ✅ Established, bio copy written, linked on coming-soon page |
| TikTok | ⚠️ Personal/Creator account only — business account blocked, see below. Handle confirmed (`@darkumdesign`) and linked live on the coming-soon page. |
| YouTube | ✅ Established, linked live on the coming-soon page (`@darkumdesign`) |
| Pinterest | ✅ Established, linked live on the coming-soon page |
| X (Twitter) | ✅ Established, linked live on the coming-soon page. Still needs verification of the business phone number (now available, see below) for the account itself. |
| Email | ✅ `darkumdesign@gmail.com` (Free Gmail), linked live on the coming-soon page |
| Houzz | 💡 Recommended, not yet actioned |
| WhatsApp Business | 💡 Recommended, not yet actioned. Coming-soon page links directly to the business number via `wa.me/201080631009` in the meantime. |
| Google Business Profile | 💡 Recommended, not yet actioned |
| Etsy | 💡 Explained to Noura/Heba for consideration (handmade/custom positioning fits well) — decision pending |
| LinkedIn | 💡 Platform copy still in queue |

**All confirmed handles for the coming-soon page's social row are sourced from `README.md`, which Sobhy maintains directly as the source of truth for social URLs.**

### TikTok blocker
Business account setup requires official Egyptian commercial registration documentation (commercial license + registry number), which Darkum Design doesn't currently have. Proceeding on a personal/Creator account until resolved. A couple of days ago, Bido, Noura, and Heba met with the legal accountant that Sobhy recommended and made a plan; the accountant is preparing the required documents. Once available, which usually takes 7 to 14 business days. Sobhy will use the documentation to verify the TikTok business account setup.

### Business phone number
**+20-10-8063-1009** — this is an **eSIM connected to Noura's phone**, not a separate physical line/device. Worth keeping in mind for:
- Who's actually receiving calls/texts to this number day-to-day
- Any account recovery / 2FA setups tied to it (WhatsApp Business, Google Business Profile, X, etc.) will depend on Noura's phone being available
- Needed for X (Twitter) account setup, alongside the updated logo
- Sobhy sent a WhatsApp message to business group requesting a dedicated meeting time to add the phone to all relevant accounts (Facebook, Instagram, X, WhatsApp Business, Google Business Profile, etc.) and confirm that Noura has access to it. Meeting not yet scheduled.
- Now also used directly on the coming-soon page as a `wa.me` link (see §5).

### Unified inbox recommendation
No free plugin puts a true reply-from-everywhere inbox inside wp-admin — that's a SaaS-dashboard feature, not a WordPress one. Recommended: **Metricool (free plan)** as a separate dashboard/app Noura bookmarks or installs — covers FB comments/DMs, IG comments/DMs, X DMs, LinkedIn company comments, Google Business reviews, YouTube comments. TikTok comment management via Metricool requires a **business account**, which is currently blocked (see above) — TikTok replies stay manual until that's resolved. The Metricool WordPress plugin itself is just a site-analytics connector, unrelated to the inbox feature.

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

A **light, non-interactive preview version** (auto-cycling every 6s, same slide-from-right/slide-from-left direction logic, no user controls) was added to the coming-soon page on 2026-08-12 using the 3 example lines Bido provided. Arabic translations below were drafted by Sobhy/Claude in colloquial Egyptian tone — **not yet reviewed by Bido**, flag for confirmation before reusing on the full site:

| English (Bido's original) | Arabic (drafted, needs Bido's sign-off) |
|---|---|
| Do you want to buy the same bed as all your friends, family, and neighbors? Customize your bed frame today with Darkum Design. | عايز تنام على نفس السرير اللي عند كل صحابك وجيرانك؟ اعمل سريرك بتصميمك انت مع داركم ديزاين. |
| Is your anniversary coming up? Surprise your partner with romantic customization, only from Darkum Design. | جوازك قرب على الذكرى السنوية؟ فاجئ شريك حياتك بتصميم رومانسي مميز، بس من داركم ديزاين. |
| Is your child a superhero fan? Customize his bed with Iron Man or Superman with Darkum Design. | ابنك بيحب الأبطال الخارقين؟ صمّملّه سرير آيرون مان أو سوبرمان مع داركم ديزاين. |

Bido to provide the full list of catchphrases (only 3 examples given so far) before the full WordPress build starts.

### Domain
- Purchased: `darkumdesign.com`, currently under **Vercel**.
- Bido wants it migrated to **his GoDaddy account**. Not yet actioned.
- Registrar email verification still needed to avoid domain suspension (separate from the GoDaddy migration).

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
- **Recommended:** Advanced Product Fields (APF) by StudioWombat — one-time payment, lifetime updates, 18+ field types, conditional logic, formula-based pricing. Currently waiting on partner reply.
- **Alternative if APF doesn't work out:** Extra Product Options & Add-Ons by ThemeComplete (CodeCanyon) — also one-time payment, widely used (36,500+ stores), comparable feature set.
- **Ruled out:** free-tier product option plugins — their free versions strip out conditional logic and file upload fields, both of which are required here (position → insertions → size is a dependent chain).

**Scoping note:** even with the right plugin, wiring up the full conditional chain (position → insertions → size, repeated per position) is several hours of careful setup — this should be its own line item in the proposal, not folded into general "website build."

---

## 5. Repo / Infra

- **GitHub:** Org `darkumdesign`, repo `darkum-design-website` (renamed from original), branch protection configured for solo administration. Note: GitHub Free plan rulesets only enforce on **public** repos — relevant constraint for how protection was set up.
- **Vercel:** Separate business account from Sobhy's personal one.
- **Local path:** `C:\Projects\darkum-design-website\`
- **Current live state (updated 2026-08-12):** Truly bilingual coming-soon placeholder — English (left) and Arabic (right) content displayed simultaneously side-by-side, not a toggle. (Earlier version, corrected the same day, only ever showed one language at a time via an EN/AR toggle button — it was mislabeled "bilingual" in this doc; that's now fixed.) Black (`#000000`) background, brand primary color `#996633` applied consistently via CSS variable (`--wood` now references `--brand-primary-color`), actual logo (SVG + PNG) in place of the old placeholder icon, favicon added. Full brand name corrected to "داركم ديزاين" everywhere on the page (title, meta description, logo alt text, h1, footer) — the shorter "داركم" alone was missing "Design." Slogan "FURNITURE · ART · DESIGN" added under the brand name. Light auto-cycling catchphrase ticker added (see §4). Plain HTML/CSS/JS — no build step.
- **Logo assets in repo:** `img/darkum-logo.svg` + `img/darkum-logo.png` (Transparent/Exact variant, mark only), `img/favicon.svg` + `img/favicon.png`, copied from the master export folder in §2.
- **Social links on coming-soon page — all 8 live (2026-08-12):** Instagram, Facebook, TikTok, YouTube, Pinterest, X, and Email use the exact handles Sobhy confirmed in `README.md`; WhatsApp links to the business number (`wa.me/201080631009`). (Sobhy had already edited these into `index.html` directly — Claude found and fixed a couple of small bugs left over from that edit: duplicate `aria-label` attributes and stale TODO comments/disabled styling that should've been removed.)
- Sobhy reviewed the bilingual layout and social icons in-browser and confirmed both looked correct (2026-08-12).

---

## 6. Proposal / Business Terms — Not Yet Drafted

Can't finalize the website line item until the product-options plugin is confirmed (this conversation is currently blocking that).

**Principles agreed on so far, to apply when drafting:**
- The ongoing creative-authority / gatekeeper role Bido described (nothing goes out without Sobhy's sign-off) is structurally a **retainer**, separate from one-time project pricing — should not be bundled in.
- Skilled/specialized work (e.g., the Bed Frame configurator setup, any CNC/vector work, branding) has a pattern of being informally treated as "just part of the website" — name and price these explicitly as their own line items.
- Market research on Egyptian freelance rates has been done previously (for the related Pals Tours engagement) and can inform pricing here too.

---

## 7. Open Items / Next Steps

- [x] Confirm exact handles/URLs for TikTok, YouTube, Pinterest, and X — done by Sobhy directly in `README.md` and `index.html` (2026-08-12)
- [ ] Get Bido's sign-off on the drafted Arabic catchphrase translations (§4) before reusing them on the full site
- [ ] Confirm with client: "sliding animations" = scroll-reveal (Kadence native) or carousel/slider (needs MetaSlider)? — separate from the hero catchphrase carousel, which is confirmed scope
- [ ] Get the full list of homepage sliding catchphrases from Bido (only 3 examples given so far — see §4)
- [ ] Await partner confirmation on Advanced Product Fields (APF) — or move to alternative plugin
- [ ] Build out Bed Frame configurator once plugin is confirmed
- [ ] Set up X (Twitter) account — needs updated logo (have it) + business phone number (have it: +20-10-8063-1009)
- [ ] Migrate `darkumdesign.com` domain from Vercel to Bido's GoDaddy account
- [ ] Complete registrar email verification for the domain (avoid suspension)
- [ ] Clarify Darkum Design's legal entity status in Egypt (affects TikTok business account path)
- [ ] Resolve TikTok business account once commercial registration docs are available
- [ ] Remaining social platform copy (LinkedIn, etc.)
- [ ] Decide on Etsy account setup (pending Noura/Heba)
- [ ] Draft and present full proposal — pricing, scope, retainer structure
- [x] Update `README.md` — tech stack section (done by Sobhy, 2026-08-12)
- [ ] Sobhy to review the final coming-soon page (all social links live) and confirm before committing/pushing to GitHub and deploying on Vercel
