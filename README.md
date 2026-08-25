# Darkum Design

FURNITURE · ART · DESIGN

Official website repository for **Darkum Design**, a custom handmade furniture company.

Darkum Design is a female-owned custom furniture and home décor shop based in Heliopolis, Cairo, creating pieces made to order and delivered across Egypt. Our signature offering is a fully customizable bed frame with an interchangeable insert system, letting customers change materials, colors, and textures to reinvent its look whenever their style or mood changes. We don't just build furniture: every piece is designed around the customer, from initial concept to final details, so instead of choosing from a standard collection, they create something that feels genuinely their own.

📍 Store: Heliopolis, Cairo · Delivering across Egypt
📩 DM us via the following platforms to start your custom piece:
- FB: [https://www.facebook.com/darkumdesign](https://www.facebook.com/darkumdesign)
- Instagram: [https://www.instagram.com/darkumdesign](https://www.instagram.com/darkumdesign)
- Threads: [https://www.threads.net/@darkumdesign](https://www.threads.net/@darkumdesign)
- TikTok: [https://www.tiktok.com/@darkumdesign](https://www.tiktok.com/@darkumdesign)
- YouTube: [https://www.youtube.com/@darkumdesign](https://www.youtube.com/@darkumdesign)
- Pinterest: [https://www.pinterest.com/darkumdesign](https://www.pinterest.com/darkumdesign)
- X (formerly Twitter): [https://x.com/darkumdesign](https://x.com/darkumdesign)
- LinkedIn: [https://www.linkedin.com/company/darkumdesign](https://www.linkedin.com/company/darkumdesign)

- Email (Free Gmail): [mailto:darkumdesign@gmail.com](mailto:darkumdesign@gmail.com)
- Email (Custom Domain): [mailto:info@darkumdesign.com](mailto:info@darkumdesign.com)
- WhatsApp (personal, not yet Business): [https://wa.me/201037888900](https://wa.me/201037888900)
- Messenger: [https://m.me/darkumdesign](https://m.me/darkumdesign)
- Phone: +20-10-37-888-900

Category: Furniture Store · Interior Design · Home Decor

## 🚧 Current Status

Live at **[darkumdesign.com](https://darkumdesign.com)**: a static bilingual (EN/AR, simultaneous side-by-side, no language switcher) "coming soon" placeholder page, deployed on **Vercel** with auto-deploy from this repo's `main` branch. The tech stack for the full site is confirmed (see below); a local WordPress development environment (Docker + Kadence + WooCommerce + Yoast + Code Snippets, all installed and verified) is now running, but the actual build on GoDaddy's temp domain hasn't started yet.

- Live placeholder: `index.html` (plain HTML/CSS/JS, no build step required)
- Production domain: `darkumdesign.com`, currently registered through Vercel. A future transfer to the client's own GoDaddy account is planned but not yet actioned (Vercel enforces a registrar transfer lock for 60 days post-purchase).
- Build domain (temporary): `1221269.us32.myftpupload.com` is a GoDaddy Managed WordPress (Ecommerce plan), auto-provisioned for building/testing the full site without touching `darkumdesign.com`'s DNS. See `docs/HANDOFF.md` §4 for the full build/go-live sequence.
- Local WordPress dev environment: `C:\Projects\darkum-design-wordpress\` (separate folder, not part of this repo) — see `docs/HANDOFF.md` §4 for details.

## 📁 Structure

```text
darkum-design-website/
├── index.html          # Coming soon landing page
├── css/
│   └── style.css       # Styles for the landing page
├── js/
│   └── script.js        # Footer year, catchphrase ticker (crossfade, manual nav, pause-on-hover), Formspree-connected notify form
├── _archive_old/         # Old onboarding/demo files (kept for reference, not in use)
└── README.md
```

## 🛠️ Tech Stack

**Confirmed:**
- **CMS:** WordPress
- **E-commerce:** WooCommerce
- **Hosting:** GoDaddy Managed WordPress (Ecommerce plan) — temporary build domain `1221269.us32.myftpupload.com`
- **Page builder:** Kadence Blocks (free) + Kadence theme (free)
- **SEO:** Yoast SEO (free)
- **Custom code:** Code Snippets (free)
- **Slider (conditional):** MetaSlider (free), only needed if "sliding animations" turns out to require an actual carousel rather than Kadence's native scroll-reveal effects; not yet confirmed with client
- **Bed Frame product configurator:** pending plugin decision. Advanced Product Fields (APF) by StudioWombat recommended — **confirmed 2026-08-16** via the plugin's pricing page: a genuine one-time "Lifetime" license exists (toggle above the pricing tiers, separate from the default "Yearly" subscription view) — awaiting partner confirmation. Extra Product Options & Add-Ons by ThemeComplete as fallback (via CodeCanyon specifically, since their direct-purchase site now defaults to a subscription model)

Chosen specifically to avoid subscription costs, so budget goes toward marketing instead of recurring software fees.

## 🔤 Fonts

Loaded from Google Fonts (single combined request, plus preconnect to both `fonts.googleapis.com` and `fonts.gstatic.com`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alice&family=Cairo:wght@400;600&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
```

| Font | Used for | Notes |
|---|---|---|
| **Alice** | Brand wordmark, English only (`Darkum Design`) | Google Fonts only ships one weight (regular/400); there's no bold/medium variant to request. Fallback stack is `'Alice', 'Times New Roman', Times, serif` to keep the wordmark visually close to Alice during any font-load flash. |
| **Cairo** | All Arabic text: brand wordmark (`داركم ديزاين`), body copy, headings | Loaded at weights 400/600. Arabic type doesn't use `letter-spacing`/`text-transform: uppercase` (Latin-only conventions: Arabic letterforms are contextually connected, so added tracking breaks that connection) and generally reads correctly heavier at a lower numeric weight than the equivalent Latin weight; see `.tagline.bi-ar` in `css/style.css` for the override. |
| **Inter** | All English body copy and UI text (buttons, form, footer) | Loaded at weights 300/400/500. |

Previously the wordmark used **Cormorant Garamond**; replaced with Alice (2026-08-15) to match the logo's typeface.

## ▶️ Running Locally

No build tools required for the current placeholder. Simply open `index.html` in a browser, or serve the folder with any static server, e.g.:

```bash
npx serve .
```

## 🚀 Deployment

Live on **Vercel**, auto-deploying `main` to the `darkumdesign.com` domain.

## 🤝 Contributing

This is a private client project. Changes should go through a pull request into `main` before merging.

## 📄 License

Private and proprietary. All rights reserved by Darkum Design.
