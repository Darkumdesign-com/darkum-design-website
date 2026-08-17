# Darkum Design, Pre-Build Questionnaire

**Purpose:** before the actual WordPress build starts, this document collects every open question, concern, and gap found in `HANDOFF.md`. Nothing here is invented or assumed, it is either something HANDOFF.md already marks as open, or a genuine gap noticed while reading it. Answer or respond to each item below (a quick "yes," "not yet," "doesn't apply," or "ask Bido" is fine for most). Once this is done, `TO-DO-List.md` gets built from the answers.

**How to use this:** work through it in any order, at any pace. You do not need to answer everything in one sitting. Where I already have a recommendation, I have said so, but the decision is yours (or Bido's, where it is a spending decision).

---

## 1. Bed Frame Configurator, still-undefined pieces

The field table in HANDOFF §4 has real gaps that block actually building the configurator, separate from the APF Lifetime tier purchase itself.

1. **Engraving text max length** is marked "pending supplier" in HANDOFF. Has the supplier answered yet, or is this still open?
2. **Bed legs** are listed as an "image preview / style selector," but no actual leg style options or images are listed anywhere. Do these exist yet, or do they still need to be sourced/photographed?
3. **Material swatches** (Mosaic, Textile, Stone, Cane, Engraving, Burn Wood, Copper) are named, but are there actual photos or swatch images for each, or do those still need to be produced?
4. HANDOFF lists **"+ more TBD, color, size, finish groups mentioned as still to be defined."** Are these still undefined? If so, who is defining them, you, Bido, or the supplier?
5. The Size logic is described as **"Single / Double / Full frame, per Insertion, per Position"** and flagged as the most complex nested logic in the set. Do you already have a clear mental model of exactly how this cascades (for example: does every insertion on every selected position get its own independent size choice, or is size set once per position and applied to all insertions on that position)? This is worth nailing down on paper before it is built in APF, since it is the hardest part to redo later.
6. Is there a price difference between materials, sizes, insertions, and so on, or is the Bed Frame a flat price regardless of configuration? APF's paid tiers support formula-based pricing, but only if you tell it what the formula actually is.
7. Are there any configuration combinations that should be **disallowed** (for example, a size or material that is not available for a specific position), or is every combination valid?

  All the partners are busy between the construction of their physical store and paperworks. Once they decide about the purchase of APF Lifetime tier, I will follow up with them to get the answers to these configurator questions.

## 2. Products and catalog scope

8. HANDOFF's "Site structure" note says one product (Bed Frame) via WooCommerce. Is Bed Frame genuinely the only product at launch, or are other products expected to be added to the catalog around the same time (even simple, non-configurable ones)? This affects whether the WooCommerce setup should assume "one product forever" shortcuts or a proper multi-product catalog from the start.
  - No, only 1 product (Bed Frame) is expected to be added to the catalog at launch.
9. Product photography for the Bed Frame itself (not the configurator swatches, the actual finished product shots) — does this exist yet?
  - Write a message to the partners to get the answer to this question.

## 3. Payments and checkout

This is a real gap. HANDOFF documents Paymob as blocked on Commercial Registration, but does not say what happens at checkout in the meantime.

10. Once the WooCommerce site is live, how are customers meant to actually pay before Paymob is available? Options I can think of (not recommending any of these over the others without your input): Cash on Delivery, bank transfer with manual confirmation, WhatsApp/manual order handling instead of a public "Buy Now" checkout, or simply keeping the site in a "browse and inquire" state (no live checkout) until Paymob is ready. Has this been discussed with Bido/Noura/Heba at all?
  - We will not go live without the commercial registration. Our main concern is the homepage or the one-page site.
11. Is it possible the whole site launches in a "configure and inquire" mode rather than a live-checkout mode, with real WooCommerce checkout switched on only once Paymob is connected? This would remove the payment-method question from the critical path for going live.
  - No, we will not go live without the commercial registration. Our main concern is the homepage or the one-page site.

## 4. Shipping

12. HANDOFF confirms delivery is Egypt-wide, but no shipping zones, rates, or carrier is mentioned anywhere. Does this exist yet (a flat rate, a per-governorate rate table, free shipping, and so on), or is it still undecided?
  - Write a message to the partners to get the answer to this question.
13. Given the Bed Frame is a large, custom, presumably freight-shipped item, is "shipping" even handled through WooCommerce's normal shipping module, or is delivery arranged manually per order (measurements, local delivery trucks, and so on)? This matters because it changes whether WooCommerce's shipping settings need to be configured at all.
  - Write a message to the partners to get the answer to this question. Although, since the bed is fixed-size, I would assume that the shipping is handled through WooCommerce's normal shipping module. But we need to confirm this with the partners.

## 5. Taxes

14. Is Egyptian VAT (or any tax) meant to be included in the displayed price, added at checkout, or not handled by the site at all (for example, if invoicing happens manually outside WooCommerce for now)? This has not come up anywhere in HANDOFF.
  - It should be added at checkout. Ask the partners to confirm this.

## 6. Multilingual setup (Polylang vs WPML)

15. HANDOFF names both Polylang and WPML as candidates for the WooCommerce-page auto-detect approach, but does not record a final choice. Do you already have a preference, or should this be decided during the build? (Worth noting only if relevant: Polylang's free tier covers basic multilingual pages, WPML is paid-only. Since the no-subscription/low-plugin-cost pattern has held throughout this project, I would lean Polylang unless there is a specific WPML feature this build needs, but this is your call.)
  - You already decided to go with Polylang. I will install the free version of Polylang and configure it for the site.
16. The English-fallback default for unmatched browser locales was drafted by you/Claude but explicitly flagged as "not yet run past Bido." Should this get a quick confirmation from Bido before or during the build, or is it fine to just proceed with it since it is trivial to flip later?
  - Bido doesn't want to be bothered with every little detail. I will proceed with the English-fallback default for unmatched browser locales.

## 7. Homepage catchphrases

17. This is already a tracked open item in HANDOFF §7: only 3 example catchphrases exist, and Bido was supposed to provide the full list. Has this arrived, or is the build going to start with just those 3 for now (with more added later without much rework)?
  - Yes, those 3 are fine for now
18. Beyond the sliding catchphrase hero, does the homepage need any other written content (an About/story section, a materials/craftsmanship section, and so on), or is the homepage strictly hero plus the single Bed Frame product?
  - You (Claude) will write all the content for the homepage.

## 8. Legal and policy pages

19. Nothing in HANDOFF mentions a Privacy Policy, Terms of Service, or Return/Refund Policy. WooCommerce checkout in Egypt (and generally) usually expects at least a Privacy Policy page and a Refund Policy given it is a custom, made-to-order product (refund logic for custom furniture is genuinely different from stock items). Do these exist anywhere, or do they need to be drafted? If drafted, who is meant to write them, is this in scope for you or something Bido's side should provide/approve given it touches legal liability?
  - For now, we will use the default WooCommerce pages for Privacy Policy, Terms of Service, and Return/Refund Policy. I will send them to the partners to review them and make any necessary changes.

## 9. Contact and forms on the live site

20. The coming-soon page's "Notify Me" form uses Formspree. Does the real homepage need its own contact form too (separate from the product inquiry/order flow), or is WhatsApp/social/email considered sufficient for general contact once the full site is live?
  - I think the floating WhatsApp button will be sufficient for now.

## 10. Email deliverability

21. HANDOFF already flags this as "verify near go-live": GoDaddy blocks outbound SMTP ports, so WooCommerce's own order confirmation and notification emails need checking. Given this affects a core piece of the checkout experience, would you rather verify this early (during the build) instead of waiting until go-live, so there is time to fix it if GoDaddy's default mail delivery is not enough?
  - I already activated the email services from GoDaddy. We only need to customize the email templates for the order confirmation and notification emails.

## 11. SEO and analytics

22. Yoast SEO (free) is confirmed as installed infrastructure. Has Google Search Console been set up/verified for the domain yet, or is that still pending?
  - No, you told me not to set up Google Search Console yet. I will wait domain transfer from Vercel to GoDaddy before setting up Google Search Console.
23. Is Google Analytics (or any analytics) wanted on the site at all? Nothing in HANDOFF mentions this either way. GoDaddy's own "Website metrics" is already enabled per §4, so this might already be covered, worth a quick confirmation either way.
  - Same as the previous question, I will wait domain transfer from Vercel to GoDaddy before setting up Google Analytics.

## 12. Hosting and environment

24. The GoDaddy Ecommerce plan is shared with Bido's own site (`carsbuyerinc.net`), per §4. Is that expected to stay that way long-term, or is a dedicated hosting account for Darkum Design planned eventually? Not urgent, just worth having on record.
  - Yes, it is expected to stay that way long-term. We will not have a dedicated hosting account for Darkum Design.
25. HANDOFF notes the one-click staging site has not been created yet. Given local development was torn down entirely in favor of live-only development, would it be worth creating the staging site before major build work starts, so risky changes have somewhere to land other than the live temp domain? Or is that unnecessary given the temp domain itself is not `darkumdesign.com` yet, so "live" here still means "not yet public"?
  - Unnecessary, since the temp domain itself is not `darkumdesign.com` yet, so "live" here still means "not yet public." I will create the staging site after the domain transfer from Vercel to GoDaddy.

## 13. Store details

26. HANDOFF notes you have not visited the physical store yet, and the address is Store No. 5, 10 Aswan Street, El-Sherif Building, Heliopolis, under construction. Is the store address confirmed final for use on the site (contact page, JSON-LD, footer, and so on), or could it still change before the site goes live?
  - Yes, the store address is confirmed final for use on the site. We will use this address on the contact page, JSON-LD, footer, and so on.

## 14. WooCommerce order notifications

27. Once real orders start coming in (or inquiries, depending on how §3 above resolves), which mailbox should receive them, `info@darkumdesign.com`, `finances@darkumdesign.com`, or something else? Zoho's free plan is capped at 5 mailboxes and you are at 4, worth deciding this before it becomes an afterthought.
  - For general inquiries, we will use `info@darkumdesign.com`. For order notifications, we will use `finances@darkumdesign.com`.

## 15. Priorities and sequencing

28. Given several items above are genuinely blocked (APF Lifetime tier choice, full catchphrase list, Commercial Registration for payments), would you rather I sequence `TO-DO-List.md` so build work that is NOT blocked starts immediately (site structure, homepage layout, non-configurator WooCommerce setup, legal pages, and so on), while the blocked items sit in a clearly-marked "waiting on" section? That is my default assumption unless you would rather wait for everything to be unblocked first.
  - Exactly, YES! This is what I wanted for this document, to start the build work that is NOT blocked immediately. I'm getting restless waiting for the blocked items to be unblocked. I want to start the build work that is NOT blocked immediately.

---

Once you have gone through this, let me know, and I will turn the answers (plus whatever is already unambiguous in HANDOFF.md) into `TO-DO-List.md`.
