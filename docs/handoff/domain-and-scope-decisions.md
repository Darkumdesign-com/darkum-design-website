# Domain and Scope Decisions

### Domain
- Purchased: `darkumdesign.com`, currently under **Vercel**.
- Bido wants it migrated to **his GoDaddy account**. Not yet actioned.
- Registrar email verification still needed to avoid domain suspension (separate from the GoDaddy migration).
- Vercel disapproved the domain **registrar transfer** to GoDaddy until 60 days pass, which will be completed on 25 September 2026.
- **Clarified 2026-08-15:** this 60-day lock is an ICANN rule blocking the *registrar transfer* specifically (moving who the domain is registered with), it does **not** block editing DNS records or nameservers. Sobhy can point `darkumdesign.com`'s DNS at GoDaddy's WordPress hosting whenever the site is ready to go live, independent of and well before the registrar transfer completes on 25 September. The two are separate actions: DNS/hosting cutover (whenever ready) vs. registrar ownership transfer to Bido's GoDaddy account (blocked until 25 Sept). This is the reasoning behind step 4/5 of the hosting sequence above.

### Confirmed scope decisions (2026-08-13)

1. **Animation scope:** Hero section uses a custom-built, smoother/more polished version of the Q&A catchphrase slideshow already previewed on the coming-soon page (same direction logic, EN slides from right, AR from left). **Every other section on the homepage uses only light fade-in/fade-out** (Kadence native scroll-reveal, free, no slider plugin needed anywhere on the site). This fully resolves the earlier "scroll-reveal vs. slider plugin" open item in `resolved-items-log.md`, removed from there, no MetaSlider needed.
2. **Bilingual approach:** Bido confirmed the **homepage must be simultaneous EN/AR, side-by-side, no switcher**, same technique as the coming-soon page, custom-coded, not plugin-driven. However, **WooCommerce's own pages (cart, checkout, my-account) are server-rendered by the plugin and can't be split into two simultaneous languages on one page**, this is a real technical constraint, not a preference, and Bido (whose prior bilingual site experience was a US English/Spanish site with a manual switcher) hadn't hit this distinction before since this is his first Arabic/RTL site. **Resolved approach:** a multilingual plugin (Polylang or WPML) on the WooCommerce pages only, configured to **silently auto-detect the visitor's browser language** (no visible switcher, session-persisted so it doesn't flip mid-checkout), functionally achieves "feels automatic, no manual choice" without requiring a custom JS re-render of WooCommerce's own templates. **Fallback default set by Sobhy/Claude (not yet run past Bido, trivial to flip):** if the browser locale is neither English nor Arabic, default to English.

A freelancer/developer quote request brief covering this build (excluding the Bed Frame Configurator, priced separately) was also drafted as part of the now-superseded market research, see `docs/offer_market-research.md` for the brief documents and status.
