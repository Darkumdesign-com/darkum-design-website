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
- [x] Build the custom Q&A catchphrase hero carousel (smoother/more polished version of the coming-soon preview, same direction logic: English slides in from the right, Arabic from the left), using the 3 existing catchphrases. Resolved 2026-08-26, all six polish ideas built: touch swipe on mobile, direction-aware slide+fade transition (EN enters from the right, AR from the left, matching the standing design intent), keyboard Left/Right navigation, an autoplay progress bar under the dots that resets each cycle and pauses in sync with hover/focus pausing, larger invisible tap targets on the dots (24x24px hit area around the same 7px visible dot, WCAG target-size guidance), and a softer entrance on first load instead of an instant snap. A real bug was caught and fixed mid-build: the first version used `requestAnimationFrame` to sequence the entrance animation, which genuinely never fires in a backgrounded/hidden browser tab (confirmed live, not assumed), meaning the hero text would simply never appear for anyone whose tab loaded in the background. Fixed by switching to a short `setTimeout` instead, which does fire in that scenario. All interactive logic (next/prev, keyboard, dots, autoplay wraparound, aria-live status) verified functionally correct via direct testing; the actual visual smoothness of the animation itself could not be screenshotted through this session's browser tool (every automated tab in this environment reported as backgrounded/non-painting, a tooling limitation, not a code issue, confirmed via inline style checks showing correct values were being set even though the paint never happened). Worth a quick visual spot-check in a normal tab. See `docs/handoff/homepage-and-header-footer.md`.
- [ ] Every other homepage section uses Kadence's native fade-in/fade-out scroll-reveal only, no slider plugin
- [-] Build a How It Works section, four-step Choose/Place/Change/Own stepper, right after About/Story. **Structure built 2026-09-01/02**, rebuilt from an initial horizontal 4-column layout into a vertical icon/arrow/text stepper matching a specific reference image. English copy locked; Arabic still pending. Two items open: outer border currently spans the full page width instead of the content column (root cause found, fix not yet written), and mobile display not yet checked. See `docs/handoff/homepage-and-header-footer.md`.
- [-] Build a Testimonials section as its own separate section, placeholder structure, same swap-later pattern as About/Story below (real reviews need actual customers to exist first, post-launch, not blocked on Dema). **Structure built 2026-08-27** using the native Kadence Testimonials block; three real layout bugs found and fixed along the way (avatar had no display-size control, then off-center, then a Kadence Column found overflowing its own parent by 2x+). See `docs/handoff/homepage-and-header-footer.md`.
- [-] Build the About/Story section as its own separate section, dual-column bilingual grid, desktop CSS-Grid auto-placement, mobile collapses to a single column in correct paired order (same mobile-pairing fix as the coming-soon page). **Structure built 2026-08-26**, `dkd-about-row`. Left unchecked since content is still placeholder, real copy blocked on Dema (Phase 2). See `docs/handoff/homepage-and-header-footer.md`.
- [x] Add floating WhatsApp button (`wa.me/201037888900`)

### Site details
- [x] Add the confirmed store address (Store No. 5, 10 Aswan Street, El-Sherif Building, Heliopolis) and working hours next to the contact form. Built 2026-08-23/24 as a map + floating form card section, styling confirmed matching the reference design, see `docs/handoff/contact-section.md` for the full CSS-specificity troubleshooting trail.
- [x] Add the store address/hours to the site's JSON-LD structured data. Resolved 2026-08-26. Reused the coming-soon page's already-proven `FurnitureStore` schema (`index.html`, README-documented) rather than inventing a new structure, adapted for the WordPress build: real WordPress-hosted asset URLs for `logo`/`image` (WebP, not SVG, per Google's structured-data guidance preferring raster formats) confirmed to actually resolve with a live `fetch` HEAD check, not just well-formed strings, plus the one thing the coming-soon page's version didn't have, `openingHoursSpecification` for all seven days (Sunday omitted entirely rather than marked closed, standard schema.org convention). Added as a new Custom HTML block in post 35, right after the Email/Phone icon line. Pushed live via `wp-push.ps1`, verified both that the JSON actually parses (`JSON.parse` in the live DOM, not just a byte-length match) and that every field value is correct.
- [x] **Contact form wasn't delivering submissions to email.** Resolved 2026-08-24. Real cause: Zoho's own inbound filter rejecting the message as likely spoofed, since GoDaddy's local mail relay was sending "From: webmaster@darkumdesign.com" without being an authorized sender in that domain's SPF record (confirmed by looking up the bounce's destination IP, it belonged to Zoho, not GoDaddy). Fixed by installing WP Mail SMTP and connecting its Gmail mailer via Google Cloud OAuth, authenticated as `darkumdesign@gmail.com`, sidestepping the fact that Zoho's free plan doesn't support SMTP. Confirmed delivered to both `marketing@darkumdesign.com` and `darkumdesign@gmail.com`. See `docs/handoff/contact-section.md` for the full diagnosis.
- [x] **Contact section bilingual EN/AR content pass** (Address value, heading icons/color, all form field labels/placeholders/dropdown options/Submit button). Done 2026-08-25 via direct WordPress editor automation, saved and confirmed live. See `docs/handoff/contact-section.md`.
- [x] **Contact section RTL/column layout, spacing, and nested `<p>` bug.** Resolved 2026-08-26 across four troubleshooting rounds, see `docs/handoff/contact-section.md`'s "SESSION END STATE" note for the full summary.
- [x] **Map's top corners are square instead of rounded.** Resolved 2026-08-26. Confirmed via live DOM inspection that `.dkd-contact-map-section` already computed `border-radius: 12px` (set through Kadence's own Container style panel on the Google Maps block), it just had nothing to clip the iframe child to that radius. Fix was `overflow: hidden;` on `.dkd-contact-map-section`, no new radius value needed. Pushed live via the `eval-file` + `file_get_contents()` method, verified with a SQL query against the live database (not just the command's own success message), confirmed visually via screenshot. See `docs/handoff/contact-section.md`.
- [x] **DM column under Store Hours.** Resolved 2026-08-26, revised down from the original plan. Sobhy reconsidered the original plan (Messenger, Instagram Direct, Email, Phone as separate rows) once it became clear only 2–3 platforms support URL-based deep links, not worth building, and the Store Hours expansion to all seven weekdays had already closed most of the height gap on its own. Final scope: a single icon-only line with plain, non-clickable Email and Phone (envelope/phone icons substitute for a text label entirely), Messenger dropped. Built once as a bilingual two-column block (duplicating identical content on both sides), which pushed the Address column visibly past the Form card's bottom; Sobhy caught the pointless duplication live and cut it down to one row (icon+email, icon+phone, same justify-content:space-between pattern the rest of the card already uses). Phone display format finalized by Sobhy directly, editing the live block's Code Editor himself: `+20-10-37-888-900`, matching the dashed format used everywhere else on the site, since with no Arabic mirror left to match digit-for-digit, the earlier no-dashes constraint no longer applied. Real values live: `info@darkumdesign.com`, `+20-10-37-888-900`. See `docs/handoff/contact-section.md` for the full write-up, including a newly-discovered raw-push risk found and fixed along the way (a content push silently stripped the map's own border-radius block attribute as an unrelated side effect). **Contact section as a whole confirmed complete 2026-08-26**, nothing outstanding in the visible section itself. Note: JSON-LD structured data for address/hours (the line below) is a separate, still-open item, not part of this.
- [x] **Two Polylang-generated "Home" pages (IDs 229 "Home - English", 231 "Home - العربية"), both `publish` status.** Resolved 2026-08-26. Confirmed both were genuinely empty (0 real content) and publicly reachable, thin/duplicate content with nothing worth preserving. Sobhy trashed both directly (`wp post delete` without `--force`, WordPress's own soft-delete), pulling them off `publish` status while keeping a recoverable copy in case they turn out to matter to Polylang's own internal workings. Confirmed via `wp post list` afterward.

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
- [ ] Update the JSON-LD structured data's URLs (`url`, `logo`, `image`) after the domain migration, currently pointing at the temp domain `1221269.us32.myftpupload.com`, needs to switch to `darkumdesign.com` once DNS cuts over. See `wp-custom-edits/PHP/jsonld-furniturestore.php`.
- [ ] Draft retainer offer/proposal for the ongoing creative-authority role, to be presented only after the full website is built
- [ ] Share the `Darkum Design - Logo Exports` Google Drive folder link with partners. The folder itself is confirmed clean and ready (192 files, verified 2026-08-17), the link just hasn't been sent yet
- [ ] Optional, low-priority: GoDaddy Managed WordPress's native "Connectors" panel (Settings → Connectors, WordPress 7.0's PHP AI Client SDK) can wire an Anthropic API key into AI-aware plugins for tasks like alt-text/excerpt generation. Requires a separate `console.anthropic.com` account and API key, billed pay-per-use. No obligation to do anything with it, revisit once the WordPress build itself is further along
- [ ] **Accessibility scan.** Added 2026-08-26 per Sobhy's direction: the last task once every homepage element is built and presented, run a full accessibility scan (WCAG compliance check) before considering the homepage done. Not started, sequenced deliberately last since scanning a partially-built page wastes the effort, results would need re-running anyway once the remaining sections (About/Story, rest of homepage, Bed Frame product) exist.

---

## Notes

- Bido and Noura unreachable by phone for over a week as of 2026-08-22 despite daily call attempts. WhatsApp message sent 2026-08-22 summarizing the Dema copy-scope question and the legal-pages requirement, awaiting reply, see Phase 2.
- GoDaddy Ecommerce plan stays shared with Bido's `carsbuyerinc.net` site long-term, no dedicated hosting account planned, confirmed by Sobhy.
- Zoho Mail is at 4 of 5 free mailboxes, `info@` and `finances@` are both already provisioned and now have a confirmed purpose above.
- No em dashes, ever, per standing rule.
- This file is the only place with live, unchecked tasks. `docs/handoff/resolved-items-log.md` only records what's already resolved.
