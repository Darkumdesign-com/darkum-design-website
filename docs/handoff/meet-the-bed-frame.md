# Meet the Bed Frame, Homepage Section

**Session:** 2026-09-21.

## What it is

A new homepage section showcasing the Bed Frame product across its material options: a hero image plus an 8-image gallery grid (the 7 material insertions from the demo product's `bed-frame-w-sheets` photo set, plus the original/bare wood frame). Sits alongside the other homepage sections (Hero, Our Story, How It Works, Testimonials, Contact), separated the same way with the `DKD-Separator` reusable block.

Source images: `img/generated-imgs-chatgpt/bido-demo-2026-09-19/bed-frame-w-sheets/`, the same set used to build the "TEST, do not purchase" demo product, see `bed-frame-configurator.md`.

## Layout

Three layout options were presented (hero image with a material grid below; a full grid with no separate hero; a carousel/slider). **Option 1, hero image plus material grid, was chosen and built.** A large hero shot of the bed frame sits above a grid of the 8 material thumbnails, each captioned. On mobile, the grid collapses to a narrower column count (matching the responsive pattern already used elsewhere on the homepage), the hero image stays full-width above it.

Structure: heading, bilingual intro paragraph, hero image, 8-image Gallery (Adv) block, CTA button ("Customize Yours").

## Classes and IDs added

- `dkd-meet-bed-frame-row`: ID and class on the outer Row/Section container, following the site's existing per-section ID convention (`dkd-about-row`, `dkd-contact-map-section`, etc.).
- `dkd-meet-bed-frame-gallery`: class on the Gallery (Adv) block itself.
- `dkd-lang-en` / `dkd-lang-ar`: applied to the section's heading and intro paragraph blocks (2 heading blocks, 2 paragraph blocks total, one EN and one AR each), the established bilingual accessibility pattern, see `wp-cli-workflow-and-tooling.md` and `paragraph-lang-attr.php`.

No other classes or IDs were needed for this section; the gallery captions and the CTA button are outside the lang-attr snippet's scope (see below), so there was nothing further to tag there.

## Final bilingual copy

**Heading:** "Meet the Bed Frame" / "تعرف على السرير"

**Intro paragraph:** "One frame, seven ways to make it yours. Choose the material that fits your room, from natural cane and burned suede to carved wood and Talavera tile." / "هيكل واحد وسبع طرق لتصميمه على ذوقك. اختر الخامة التي تناسب غرفتك، من الخوص الطبيعي والسويدي المحروق للخشب المحفور وبلاط التالافيرا."

Note on the Arabic wording: an earlier draft included "CNC" alongside "carved wood" (as "خشب محفور CNC" or similar). Sobhy removed the English acronym himself, since mixing Arabic and English for a short technical term like that looks out of place, the text visibly shifts from RTL to LTR mid-phrase. Final wording uses only "خشب محفور" (carved wood), no CNC/hand-carved qualifier on either side.

**8 gallery captions** (format `{EN}{NBSP}/{NBSP}{AR}`, attachment IDs confirmed via WP-CLI):

| Attachment ID | File | Caption |
|---|---|---|
| 589 | fabric-upholstery-product.jpeg | Upholstery / تنجيد |
| 590 | leather-product.jpeg | Leather / جلد |
| 591 | talavera-product.jpeg | Talavera / تالافيرا |
| 592 | burned-suede-product.jpeg | Burned Suede / سويدي محروق |
| 593 | cane-product.jpeg | Cane / خوص |
| 594 | carved-wood-product.jpeg | Carved Wood / خشب محفور |
| 595 | color-printed-product.jpeg | Color Printed / خشب ملون بالطباعة |
| 596 | bed-frame.jpeg | Bare Frame / خشب أصلي |

Captions live in each attachment's native `post_excerpt` field (WordPress's "Image Caption" field, not "Title"), which is what the Kadence Gallery (Adv) block actually renders on the front end when "Show Captions" is enabled. ALT text was deliberately left blank on all 8, the images aren't confirmed final until the team visits the factories and workshops, see `bed-frame-configurator.md`.

## Lang-attr snippet scope gap

`wp-custom-edits/PHP/paragraph-lang-attr.php` hooks `render_block_core/paragraph` and `render_block_core/heading` only. It does **not** apply to Gallery block captions or to Buttons/Button (Adv.) blocks, those are different block types entirely, not covered by either hooked filter. This is a real, permanent gap, Kadence's Gallery (Adv) block has no per-caption Additional-CSS-Class-equivalent field to hook into even if the snippet were extended. Mitigated for the captions by using a non-breaking space between the EN and AR halves (see below) rather than attempting a lang tag; no mitigation was needed for the CTA button, which is single-language (English "Customize Yours").

## Bugs found and fixed

### Caption non-breaking-space bug

Sobhy added a non-breaking space between each caption's EN and AR halves to stop the bilingual text wrapping awkwardly on narrow viewports, matching the `{EN}{NBSP}/{NBSP}{AR}` format used elsewhere. This should have been a real U+00A0 character. Instead, the literal text `\u00A0` (backslash, u, four digits) was typed into the Caption field, a mix-up traced back to an earlier example in chat that showed both the escape notation and a real character in the same reply.

Diagnosed via WP-CLI directly against the database (not the editor UI, which showed nothing obviously wrong): `HEX(post_excerpt) LIKE '%C2A0%'` (the UTF-8 byte sequence for a real U+00A0) returned false for all 8 captions initially; `HEX(post_excerpt) LIKE '%5C7530%'` (the ASCII bytes for a literal `\u0`) confirmed the literal text was present instead.

Fixed with `wp post update <ID> --post_excerpt='...'` for attachment IDs 589 through 596, using a real non-breaking space character (not the escape notation) in each update. Re-verified afterward with the same HEX checks, `has_nbsp=1` and no literal backslash-u sequence for all 8. This bug is fully resolved at the database level.

**Still open:** 4 of the 8 captions (Carved Wood, Cane, Bare Frame, Color Printed, the ones fixed last in the session) were not yet reflecting the fix on the live front end at session end, while the other 4 (fixed earlier) were already showing correctly. The database is confirmed correct for all 8, so this is very likely GoDaddy's own CDN/page cache being stale for the most recently edited attachments, not a database write failure, see `website-stack-and-hosting.md` for the documented cache-flush tool in the GoDaddy Hub. Sobhy deferred rechecking this until the next session, after a cache flush and a hard browser refresh.

### CTA button, rel vs href bug

The "Customize Yours" CTA was built with a Kadence "Buttons" block. Its destination, `/shop`, had been entered into the block's Advanced panel "Link Relation" field, which is not a URL field, it writes to the HTML `rel` attribute. The rendered markup was effectively `<a rel="/shop">` with no `href` at all, so the button was visibly present but completely non-functional, clicking it did nothing.

Confirmed via direct DOM inspection on the live page (`javascript_tool`, filtering out the WP admin toolbar's own unrelated "Customize" link, which matched the same query at first).

Fixed by Sobhy switching the block from "Buttons" to "Button (Adv.)", which exposes a proper URL/Link field directly rather than burying the destination in an advanced attribute field. Confirmed working afterward.

The destination itself, `/shop`, is intentional for now: the demo product ("TEST, do not purchase") is published to Shop but hidden from search, so `/shop` lets the team browse to it without a temp product URL, though a real visitor landing there today sees no actual bed frame product yet. Tracked as an open item in `docs/TO-DO-List.md` Phase 4 to re-point the CTA once the real product exists and the material set is confirmed.

## Open items

- **Front-end caption caching.** 4 of 8 captions not yet showing the non-breaking-space fix on the live site as of session end, database confirmed correct for all 8. Sobhy will recheck after a GoDaddy cache flush, likely the next session.
- **CTA destination.** Already tracked in `docs/TO-DO-List.md` Phase 4, needs re-pointing once the real product page exists.

Everything else in this section (layout, copy, classes, both bugs above) is resolved and confirmed live as of this session.
