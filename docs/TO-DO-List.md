<!-- markdownlint-disable MD022 -->

# Darkum Design, WordPress Build To-Do List

**Source:** built from `HANDOFF.md` plus Sobhy's answers in `TO-DO-LIST-QUESTIONNAIRE.md` (2026-08-17). Sequenced per Sobhy's explicit preference (questionnaire §15): start everything not blocked, right now, rather than waiting for the blocked items to clear.

**This is the single live task list for the project.** `HANDOFF.md` §7 is a historical log only, resolved items get a dated entry there, but new open items and anything still unchecked belong here, not there.

**Build location:** GoDaddy temp domain `1221269.us32.myftpupload.com`. `darkumdesign.com` keeps serving the current coming-soon page on Vercel, untouched, until this build is approved and DNS is cut over.

---

## Phase 1, Start now (not blocked)

### Core setup
- [x] Install and activate Kadence theme + Kadence Blocks
- [x] Install and activate WooCommerce
- [ ] Install Polylang (free), configure for WooCommerce pages only, silent browser-language auto-detect, no visible switcher, English fallback for unmatched locales (Sobhy confirmed, proceeding without a separate Bido sign-off)

### Homepage
- [ ] Build the one-page site structure: hero, then the rest of the homepage, then the single Bed Frame product
- [ ] Build the custom Q&A catchphrase hero carousel (smoother/more polished version of the coming-soon preview, same direction logic: English slides in from the right, Arabic from the left), using the 3 existing catchphrases (Sobhy confirmed these are fine for now, more can be added later)
- [ ] Every other homepage section uses Kadence's native fade-in/fade-out scroll-reveal only, no slider plugin
- [ ] Claude drafts all homepage written content beyond the hero (About/story section, materials/craftsmanship section, or whatever the page needs), bilingual EN/AR, matching the brand voice already established in `docs/MARKETING-COPY.md`. Sobhy reviews and confirms before anything goes live.
- [ ] Add floating WhatsApp button (`wa.me/201037888900`), decided as sufficient contact method for now, no separate contact form needed

### WooCommerce baseline
- [ ] Create the Bed Frame product as a shell (title, category, basic description) so the structure exists, even though the full configurator logic is blocked, see Phase 2
- [ ] Set up default WooCommerce pages for Privacy Policy, Terms of Service, and Return/Refund Policy using WooCommerce's built-in defaults, then send to partners for review and edits
- [ ] Set WooCommerce order notification routing: general inquiries to `info@darkumdesign.com`, order notifications to `finances@darkumdesign.com`
- [ ] Customize the WooCommerce order confirmation/notification email templates (branding, bilingual wording where relevant), now that GoDaddy's email services are already active
- [ ] Configure a provisional flat-rate shipping method under the working assumption that the Bed Frame is fixed-size and ships as a single freight item, marked provisional pending partner confirmation, see Phase 3
- [ ] Configure WooCommerce tax settings so VAT is added at checkout (not included in displayed price), marked provisional pending partner confirmation of the actual rate, see Phase 3
- [ ] Checkout itself stays disabled or in "configure and inquire" mode. **Not going live with real payments under any circumstances until Commercial Registration is secured.** This applies even though the homepage/one-page site is the main build priority right now.

### Site details
- [ ] Add the confirmed final store address (Store No. 5, 10 Aswan Street, El-Sherif Building, Heliopolis) to the contact page, footer, and JSON-LD structured data on the real site

---

## Phase 2, Blocked, waiting on partners or Commercial Registration

- [ ] **APF Lifetime tier purchase** (Pro / Extended / Extended + Addons), blocked on Bido/partners deciding, they are currently occupied with the physical store construction and paperwork. Still no answer as of 2026-08-21, Sobhy has stopped actively chasing this given how long it's been outstanding
- [ ] **Bed Frame configurator build itself** (position, insertions, material, legs, engraving, reference image, size), blocked on the APF purchase above and on the configurator detail questions in Phase 3
- [ ] **Commercial Registration**, blocks TikTok business account, Etsy shop onboarding, Paymob integration, and therefore live checkout on this site. Legal accountant is preparing the required documents, usually 7 to 14 business days from when the plan was made
- [ ] Resolve TikTok business account once Commercial Registration docs are available
- [ ] Resume Etsy shop setup once Commercial Registration docs are available, stopped 2026-08-15 at the required Business Registration Number field. `DarkumDesignShop` recommended as the final handle once resumed (`DarkumDesign` itself is taken)
- [ ] Resolve `README.md`'s "female-owned" general description wording once Commercial Registration is in hand and the correct positioning/scope can be confirmed. On hold entirely for now, not an active decision to make right now
- [ ] Domain DNS cutover from Vercel to GoDaddy, happens once the homepage build is approved by partners, not blocked by Commercial Registration itself, see HANDOFF §4 for the full sequence
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

- GoDaddy Ecommerce plan stays shared with Bido's `carsbuyerinc.net` site long-term, no dedicated hosting account planned, confirmed by Sobhy.
- Zoho Mail is at 4 of 5 free mailboxes, `info@` and `finances@` are both already provisioned and now have a confirmed purpose above.
- No em dashes, ever, per standing rule.
- This file is the only place with live, unchecked tasks. `HANDOFF.md` §7 only records what's already resolved.
