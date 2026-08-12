# Darkum Design — Project Handoff

**Last updated:** 2026-08-12
**Maintainer:** Sobhy (sole developer/administrator — GitHub Org `darkumdesign`, separate Vercel account)

This document tracks everything known about the Darkum Design engagement so far: business context, completed work, decisions made, and open items. Update this file as things change — it's the source of truth for anyone (including future-you) picking this project back up.

---

## 1. Business Context

- **Darkum Design (داركم ديزاين)** — Victorian-style custom furniture and home décor studio, operating in Cairo and Giza, Egypt and selling worldwide. Slogan: "FURNITURE · ART · DESIGN".
- **Owners:** Nourhan Osama ("Noura") and her partner Heba Farouk. Both recent college graduates, not technical — avoid jargon in partner-facing communication.
- **Key contact / decision authority:** Bido (Albert Friday / AbdAllah Gomaa / Abdallah Gomaa), Noura's uncle and Sobhy's best friend, currently in Egypt on vacation. The "nothing goes in or out without approval" arrangement is narrower than previously noted here: Bido said it applies to **technological matters specifically**, and only takes effect **once he returns to the US** — he's delegating to Sobhy in his stead for that period. It also wasn't said directly to Noura/Heba; it was said to his own circle, roughly: "I am not staying here forever... once my plane takes off, [Sobhy] is here in my stead. If you have questions, ask him. If you have a problem, ask him. If you have crazy ideas, ask him also. Nothing technological goes in or out without [Sobhy's] approval."
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
| Email | ✅ `darkumdesign@gmail.com` (Free Gmail). Business domain email also now set up via Zoho — see "Business email addresses" below. |
| Email (business domain) | ✅ `info@darkumdesign.com` Login using `darkumdesign@gmail.com`. Used on the coming-soon page. |
| Houzz | 💡 Recommended, not yet actioned |
| WhatsApp Business | 💡 Recommended, not yet actioned. Coming-soon page links directly to the business number via `wa.me/201080631009` in the meantime. |
| Google Business Profile | 🔃 Created, but Waiting verification on 17 August 2026 |
| Etsy | 💡 Explained to Noura/Heba for consideration (handmade/custom positioning fits well) — decision pending |
| LinkedIn | ⚠️ Company Page created. Tagline + About description drafted in both English and pending the colloquial Egyptian Arabic  — see §8. |

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

### Business email addresses
Set up on **Zoho Mail (free plan)**, domain `darkumdesign.com`:
- `info@darkumdesign.com` Login using `darkumdesign@gmail.com`
- `finances@darkumdesign.com`
- `marketing@darkumdesign.com`
- `webmaster@darkumdesign.com` — decided over `support@` (2026-08-12): matches the actual current need (technical/site administration, domain registrar verification) rather than customer support, which doesn't have real volume yet on a coming-soon site. `support@` makes more sense once the store has live orders.

**Zoho free plan caps at 5 mailboxes** — currently at 4 with `webmaster@` added. Worth remembering before adding more (e.g. a future `support@`).

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
- **Open Graph / Twitter Card meta tags added (2026-08-12):** `og:url`, `og:type`, `og:title`, `og:description`, `og:image` (+ `width`/`height`), and matching `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`, `twitter:domain`, `twitter:url` added to `index.html`'s `<head>`. Page `<title>` and plain `name="description"` left unchanged. `og:image`/`twitter:image` use the absolute URL `https://darkumdesign.com/img/og-image.png` — won't resolve on local/preview URLs, only once live on the real domain. **`img/og-image.png` (1200×630) was created by Sobhy directly**, not generated by Claude. OG description text is the finalized copy in §8.

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
- [x] Add Open Graph / Twitter Card meta tags + og:image to the coming-soon page — done 2026-08-12 (image created by Sobhy, meta tags added to `index.html`, see §5)
- [ ] Publish/finish the LinkedIn Company Page (tagline + About description drafted, ready to paste in — see §8)
- [ ] Google Business Profile — created, pending verification 17 August 2026

---

## 8. Reusable Marketing Copy — Reference

Copy drafted across sessions, kept here so it doesn't only live in chat history. All Arabic marketing copy (excluding UI/structural translations) follows the same colloquial "Egyptian street-cool" register as the hero catchphrases in §4.

### Open Graph / meta description (finalized, in use)
> Darkum Design | داركم ديزاين — Beds with an interchangeable insert system, so you can reinvent the look anytime. One bed, your style, endless possibilities.

(156 characters. Used for `og:description` and `twitter:description` in `index.html`, see §5. Earlier drafts mentioned "Victorian-style" and "Cairo & Giza" — both removed at Sobhy's direction: the business does more than Victorian style, and shipping is Egypt-wide for now, not worldwide, with the store address instead being 10 Aswan Street, El-Sherif Building, Heliopolis.)

### Google Business Profile description (drafted, not yet used — GBP not set up)
> Darkum Design is a custom furniture and home décor studio based in Heliopolis, Cairo, creating pieces made to order and delivered across Egypt. Our signature offering is a fully customizable bed with an interchangeable insert system, letting you change materials, colors, and textures to reinvent its look whenever your style or mood changes. Every piece is designed around you, from initial concept to final details, so instead of choosing from a standard collection, you create something that feels genuinely your own. FURNITURE · ART · DESIGN: one piece, your style, endless possibilities. Get in touch to start designing your custom piece today.

(649/750 characters. Written to Google's guidelines — no URL, no superlatives like "best.")

### LinkedIn tagline — English (120 char max)
> Custom furniture and home décor studio, made-to-order. One bed, your style, endless possibilities.

### LinkedIn About/Overview description — English (2,000 char max)
> Darkum Design | داركم ديزاين is a custom furniture and home décor studio based in Heliopolis, Cairo, creating pieces made to order and delivered across Egypt.
>
> Our signature offering reimagines one of the most traditional pieces of furniture: the bed. Using an interchangeable insert system, customers can change the look of their bed whenever they want, swapping materials, colors, textures, and design inserts to create a piece that evolves with their taste, mood, and space. Instead of committing to a single permanent design, our clients keep the same bed and continuously reinvent its appearance.
>
> We believe furniture shouldn't be static; it should evolve with you. From selecting preferred materials and inserts to shaping combinations that suit your space, we offer a fully personalized experience from concept to final piece. Every customer has the opportunity to create something that feels different, rather than choosing from a standard collection.
>
> Whether you're drawn to something elegant and timeless, modern and minimal, bold and artistic, or soft and luxurious, your Darkum Design piece can grow and change with you.
>
> What sets us apart:
> - Fully customized experience: your preferences shape every step of the design process
> - Unique pieces: furniture that feels personal, not mass-produced
> - Interchangeable inserts: change your bed's look whenever you want
> - Personal expression: mix and match designs, colors, textures, and styles
> - Versatile design: one bed, multiple looks over time
> - Long-term value: refresh your space without replacing the whole piece
>
> FURNITURE · ART · DESIGN. One piece, your style, endless possibilities.

(1,650/2,000 characters. Source material: a longer brand description Bido/partners had ChatGPT write, condensed and tightened here.)

### LinkedIn tagline — Arabic, colloquial Egyptian (120 char max)
> أثاث وديكور مصمم على مزاجك، قطعة واحدة، ستايلك انت، وإمكانيات ملهاش آخر.

(72 characters. No em dash, per Sobhy's preference — comma used instead.)

### LinkedIn About/Overview description — Arabic, colloquial Egyptian (2,000 char max)
> داركم ديزاين هو استوديو أثاث وديكور منزلي، مقره في مصر الجديدة بالقاهرة، بيصمم كل قطعة أوردر خاص وبيوصلها لأي مكان في مصر.
>
> أشهر حاجة عندنا إننا بنجدد فكرة قطعة أثاث تقليدية جدًا: السرير. بفضل نظام الإنسيرتس (القطع القابلة للتغيير)، تقدر تغيّر شكل سريرك في أي وقت، تبدّل الخامات والألوان والتكسشر والتصاميم علشان تطلع قطعة بتتطور مع ذوقك ومودك ومساحتك. بدل ما تلتزم بتصميم ثابت، عملاؤنا بيحتفظوا بنفس السرير ويعيدوا ابتكار شكله كل ما حابين.
>
> إحنا مقتنعين إن الأثاث مش لازم يفضل ثابت، لازم يتطور معاك. من اختيار الخامات والإنسيرتس اللي تناسبك لحد تركيب الكومبينيشن اللي يناسب مساحتك، بنقدملك تجربة مخصصة بالكامل من الفكرة لحد القطعة النهائية. كل عميل بيقدر يعمل حاجة حسّها مختلفة، مش يختار من كولكشن جاهز.
>
> سواء بتحب الستايل الكلاسيك والأنيق، أو المودرن البسيط، أو الجريء الفني، أو الناعم الفخم، قطعتك من داركم ديزاين تقدر تكبر وتتغيّر معاك.
>
> اللي بيميزنا:
> - تجربة مخصصة بالكامل: رغبتك هي اللي بتوجّه كل خطوة في التصميم
> - قطع فريدة: أثاث حسّه شخصي، مش إنتاج بالجملة
> - إنسيرتس قابلة للتغيير: غيّر شكل سريرك في أي وقت
> - تعبير شخصي: امزج بين التصاميم والألوان والخامات والستايلات
> - تصميم مرن: سرير واحد، أشكال كتير على مدار الوقت
> - قيمة طويلة المدى: جدد شكل مساحتك من غير ما تستبدل القطعة كلها
>
> فرنيتشر · آرت · ديزاين. قطعة واحدة، ستايلك انت، وإمكانيات ملهاش آخر.

(1,260/2,000 characters.)
