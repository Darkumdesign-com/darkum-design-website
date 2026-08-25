<!-- markdownlint-disable MD022 -->

# Darkum Design, WordPress Build To-Do List

**Source:** built from `HANDOFF.md` plus Sobhy's answers in `TO-DO-LIST-QUESTIONNAIRE.md` (2026-08-17). Sequenced per Sobhy's explicit preference (questionnaire §15): start everything not blocked, right now, rather than waiting for the blocked items to clear.

**This is the single live task list for the project.** `docs/handoff/resolved-items-log.md` is a historical log only, resolved items get a dated entry there, but new open items and anything still unchecked belong here, not there.

**Build location:** GoDaddy temp domain `1221269.us32.myftpupload.com`. `darkumdesign.com` keeps serving the current coming-soon page on Vercel, untouched, until this build is approved and DNS is cut over.

---

## Phase 1, Start now (not blocked)

### Core setup
- [x] Install and activate Kadence theme + Kadence Blocks
- [x] Install and activate WooCommerce
- [x] Install Polylang (free), configure for WooCommerce pages only, silent browser-language auto-detect, no visible switcher, English fallback for unmatched locales (Sobhy confirmed, proceeding without a separate Bido sign-off)
- [x] Sign up and configure Metricool (free plan) as the unified social inbox. **Connected 2026-08-22:** Web (darkumdesign.com domain, GoDaddy temp domain also linked), Blog RSS feed, Facebook Page, Instagram (professional account), Threads, Pinterest (business account), TikTok (personal account), Google Business Profile, YouTube. **Skipped, free-plan limitation, not a firm no:** X and LinkedIn, each requires a separate paid Metricool tier ($25/month or $240/year per platform, no combined discount, confirmed by Sobhy, so both would be $50/month total if ever added). **Skipped, deliberately, no current need:** Bluesky (no account exists), Twitch (business doesn't stream games), Meta Ads / Google Ads / TikTok Ads (no existing ad campaigns), Looker Studio (not relevant to current needs). **Not connected, blocked:** TikTok business account, requires business verification, which requires Commercial Registration and Tax ID, same blocker as elsewhere, see Phase 2.
- [x] Connect Metricool's official MCP server (`https://ai.metricool.com/mcp`) to both Claude Desktop (via Connectors) and Claude Code (`claude mcp add --transport http metricool https://ai.metricool.com/mcp`), both authorized via browser OAuth, both tested working 2026-08-22 (Claude Code successfully queried Instagram engagement data)

### Homepage
- [ ] Build the one-page site structure: hero, then the rest of the homepage, then the single Bed Frame product
- [ ] Build the custom Q&A catchphrase hero carousel (smoother/more polished version of the coming-soon preview, same direction logic: English slides in from the right, Arabic from the left), using the 3 existing catchphrases (Sobhy confirmed these are fine for now, more can be added later)
- [ ] Every other homepage section uses Kadence's native fade-in/fade-out scroll-reveal only, no slider plugin
- [ ] Build the About/Story section as its own separate section (not merged with materials/craftsmanship or anything else). Dual-column responsive grid: desktop shows EN/AR side by side via CSS Grid auto-placement (source order EN paragraph, AR paragraph, EN paragraph, AR paragraph, no manual placement needed); mobile collapses to a single column, same paired order, so it stacks EN-paragraph-then-its-AR-paragraph rather than by language block, same mobile-pairing fix already used on the coming-soon page. Build the structure/layout now with placeholder text in the correct paired order. Actual copy is blocked on Dema, see Phase 2, just a content swap into the same containers once it arrives, no rebuild needed.
- [x] Add floating WhatsApp button (`wa.me/201037888900`)

### Site details
- [x] Add the confirmed store address (Store No. 5, 10 Aswan Street, El-Sherif Building, Heliopolis) and working hours next to the contact form. Built 2026-08-23/24 as a map + floating form card section, styling confirmed matching the reference design, see `docs/handoff/contact-section.md` for the full CSS-specificity troubleshooting trail.
- [ ] Add the store address/hours to the site's JSON-LD structured data (not yet done — the section above only covers the visible contact block, not structured data).
- [x] **Contact form wasn't delivering submissions to email.** Resolved 2026-08-24. Real cause: Zoho's own inbound filter rejecting the message as likely spoofed, since GoDaddy's local mail relay was sending "From: webmaster@darkumdesign.com" without being an authorized sender in that domain's SPF record (confirmed by looking up the bounce's destination IP, it belonged to Zoho, not GoDaddy). Fixed by installing WP Mail SMTP and connecting its Gmail mailer via Google Cloud OAuth, authenticated as `darkumdesign@gmail.com`, sidestepping the fact that Zoho's free plan doesn't support SMTP. Confirmed delivered to both `marketing@darkumdesign.com` and `darkumdesign@gmail.com`. See `docs/handoff/contact-section.md` for the full diagnosis.
- [x] **Contact section bilingual EN/AR content pass** (Address value, heading icons/color, all form field labels/placeholders/dropdown options/Submit button). Done 2026-08-25 via direct WordPress editor automation, saved and confirmed live. See `docs/handoff/contact-section.md`.
- [x] **Contact section RTL/column layout, spacing, and nested `<p>` bug.** Resolved 2026-08-26 across four troubleshooting rounds, see `docs/handoff/contact-section.md`'s "SESSION END STATE" note for the full summary.
- [ ] **Map's top corners are square instead of rounded.** New, surfaced 2026-08-26 as a side effect of adding `padding: 10px` to `.dkd-contact-section` (the fix for the glow-not-showing-around-the-map issue). Likely fix: `border-radius` + `overflow: hidden` directly on `.dkd-contact-map-section` or its iframe, needs the real selector confirmed via live DOM inspection first, not guessed. See `docs/handoff/contact-section.md`.
- [ ] **DM column under Store Hours.** Add Facebook Messenger, Instagram Direct, Email, and Phone as direct-contact links inside the existing `.dkd-address-card` Section, below the Store Hours content (WhatsApp is intentionally excluded, already covered by the footer social icons and the floating widget). Real handles already confirmed via Metricool, ready to use:
  - Messenger: `https://m.me/1198692206663459`
  - Instagram Direct: `https://ig.me/m/darkumdesign`
  - Email: `mailto:marketing@darkumdesign.com`
  - Phone: `tel:+201037888900`
  
  Likely a new Paragraph block with real anchor-tag links, styled/iconed to match the Address/Store Hours headings above it. See `docs/handoff/contact-section.md`'s "Contact section, bilingual content pass + capability correction" write-up for full context.
- [ ] **Two Polylang-generated "Home" pages (IDs 229 "Home - English", 231 "Home - العربية"), both `publish` status.** Surfaced 2026-08-26 while confirming the real homepage's post ID via `wp post list`. Sobhy confirmed these are expected Polylang language variants but hasn't decided whether to unpublish, archive, or delete them. Deliberately deferred until the Contact section work above is finished.

---

## Phase 2, Blocked, waiting on partners or Commercial Registration

- [ ] **APF Lifetime tier purchase** (Pro / Extended / Extended + Addons), blocked on Bido/partners deciding, they are currently occupied with the physical store construction and paperwork. Still no answer as of 2026-08-21, Sobhy has stopped actively chasing this given how long it's been outstanding
- [ ] **Bed Frame configurator build itself** (position, insertions, material, legs, engraving, reference image, size), blocked on the APF purchase above and on the configurator detail questions in Phase 3
- [ ] **Commercial Registration**, blocks TikTok business account, Etsy shop onboarding, Paymob integration, and therefore live checkout on this site. Legal accountant is preparing the required documents, usually 7 to 14 business days from when the plan was made
- [ ] **WooCommerce baseline, all of it** (Bed Frame product shell, order notification routing, order confirmation email template customization, shipping method, tax settings, checkout status). Sobhy will not touch any WooCommerce configuration, even the provisional/placeholder parts, until the Commercial Registration and Tax Card are both physically in hand
- [ ] **Legal pages** (Privacy Policy, Terms of Service, Return/Refund Policy): require the business's formal registered name from the Commercial Registration and Tax Card, and must be drafted or reviewed by a lawyer, not Bido, Noura, Sobhy, or Claude. Blocked until both documents are in hand and a lawyer is engaged
- [ ] **Homepage written content** (About/Story copy, materials/craftsmanship copy, or any other finished marketing copy): blocked, Bido confirmed Dema (Noura's friend, runs an advertising agency) is writing all content for the website and social media, no copy to be drafted by Sobhy or Claude until Dema delivers it
- [ ] Clarify with Bido whether Dema's scope also covers WooCommerce order confirmation email wording, or only homepage/social copy. WhatsApp message sent to Bido and Noura 2026-08-22 covering this and the other blockers above, awaiting reply
- [ ] Resolve TikTok business account once Commercial Registration docs are available
- [ ] Resume Etsy shop setup once Commercial Registration docs are available, stopped 2026-08-15 at the required Business Registration Number field. `DarkumDesignShop` recommended as the final handle once resumed (`DarkumDesign` itself is taken)
- [ ] Resolve `README.md`'s "female-owned" general description wording once Commercial Registration is in hand and the correct positioning/scope can be confirmed. On hold entirely for now, not an active decision to make right now
- [ ] Domain DNS cutover from Vercel to GoDaddy, happens once the homepage build is approved by partners, not blocked by Commercial Registration itself, see `docs/handoff/website-stack-and-hosting.md` for the full sequence
- [ ] Google Business Profile verification, created and description live, waiting on Google since 17 August 2026 (Google requested photos/videos of the business)
- [ ] Google Search Console setup, deliberately deferred until after the DNS cutover
- [ ] Google Analytics setup, deliberately deferred until after the DNS cutover
- [ ] Staging site creation, deferred until after the DNS cutover (the temp domain itself is not yet public, so a staging site is unnecessary for now)
- [ ] Registrar transfer to Bido's GoDaddy account, blocked until 25 September 2026 (ICANN 60-day rule), does not block anything else in this list

---

## Phase 3, Messages to send to partners

Consolidated so these can go out as fewer, better-organized WhatsApp messages instead of one-off pings.

- [ ] **Full list of homepage sliding catchphrases:** only 3 examples given so far. Discussions with Bido on this have been verbal only, he hasn't been willing to write phrases down during or after conversations, which has made capturing them accurately difficult. Worth asking directly for a written list (WhatsApp text) instead of another verbal conversation
- [ ] **Bed Frame product photography:** does it exist yet, or does it still need to be taken?
- [ ] **Shipping:** confirm zones/rates/carrier, and confirm whether the fixed-size assumption (single flat-rate freight shipment) is correct, or whether delivery is arranged manually per order
- [ ] **Tax:** confirm the actual VAT rate to apply at checkout
- [ ] **Bed Frame configurator details**, to send once the APF Lifetime tier is decided:
  - Engraving text max length (still pending supplier)
  - Bed leg style options and images
  - Material swatch photos (Mosaic, Textile, Stone, Cane, Engraving, Burn Wood, Copper)
  - The still-undefined color/size/finish groups
  - How size cascades (independent per insertion, or set once per position and applied to all insertions on that position)
  - Whether pricing varies by material/size/insertion, or the Bed Frame is a flat price
  - Any disallowed configuration combinations

---

## Phase 4, Go-live day and later

Timing-gated items, not blocked by anyone specifically, just sequenced to a later point.

- [ ] **Cancel GoDaddy Premium Backups** the day `darkumdesign.com` goes live, reverts to the Ecommerce plan's included daily backups at no extra cost
- [ ] Check whether the Kadence Security Plugin's API key needs reissuing/reconnecting once DNS cuts over from the temp domain to `darkumdesign.com`
- [ ] Draft retainer offer/proposal for the ongoing creative-authority role, to be presented only after the full website is built
- [ ] Share the `Darkum Design - Logo Exports` Google Drive folder link with partners. The folder itself is confirmed clean and ready (192 files, verified 2026-08-17), the link just hasn't been sent yet
- [ ] Optional, low-priority: GoDaddy Managed WordPress's native "Connectors" panel (Settings → Connectors, WordPress 7.0's PHP AI Client SDK) can wire an Anthropic API key into AI-aware plugins for tasks like alt-text/excerpt generation. Requires a separate `console.anthropic.com` account and API key, billed pay-per-use. No obligation to do anything with it, revisit once the WordPress build itself is further along

---

## Notes

- Bido and Noura unreachable by phone for over a week as of 2026-08-22 despite daily call attempts. WhatsApp message sent 2026-08-22 summarizing the Dema copy-scope question and the legal-pages requirement, awaiting reply, see Phase 2.
- GoDaddy Ecommerce plan stays shared with Bido's `carsbuyerinc.net` site long-term, no dedicated hosting account planned, confirmed by Sobhy.
- Zoho Mail is at 4 of 5 free mailboxes, `info@` and `finances@` are both already provisioned and now have a confirmed purpose above.
- No em dashes, ever, per standing rule.
- This file is the only place with live, unchecked tasks. `docs/handoff/resolved-items-log.md` only records what's already resolved.
