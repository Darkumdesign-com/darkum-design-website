# Bed Frame Product Configurator, required fields

This is the "very customizable product" and is effectively a mini product configurator, not a simple WooCommerce variation setup:

| Field | Type | Notes |
|---|---|---|
| Position | Multi-select | Bed Head, Right Side, Left Side, Bottom, customer can pick more than one |
| Insertions | Number, 0–4 | **Per Position**, conditional on which position(s) selected |
| Material | Single-select | Mosaic, Textile, Stone, Cane, Engraving, Burn Wood, Copper |
| Bed legs | Image preview / style selector | Visual swatch-style picker |
| Engraving text | Free text input | Pending supplier to provide the max text length |
| Reference image | File upload | Customer uploads their own reference photo/design |
| Size | Single / Double / Full frame | **Per Insertion, per Position**, most complex nested logic in the set |
| + more TBD |, | Color, size, finish groups mentioned as still to be defined |

**Why Kadence Blocks doesn't cover this:** it's a page/layout builder, not a WooCommerce product-options tool. This needs a dedicated plugin.

**Plugin decision, GoDaddy compatibility confirmed 2026-08-17, purchase still pending:**
- **Advanced Product Fields (APF) by StudioWombat**, 18+ field types, conditional logic, formula-based pricing.
- **Corrected 2026-08-17:** the earlier note in this doc about APF being "installed and active" was the **free version**, installed by Sobhy specifically to verify it runs cleanly on GoDaddy Managed WordPress (i.e. isn't blocklisted), not a purchase. This confirms the plugin is compatible with the hosting environment, which resolves that due-diligence open item (see `resolved-items-log.md`), but **the free version cannot build the actual configurator**, its stripped-down feature set is missing conditional logic and file upload fields, both required here (position → insertions → size is a dependent chain). The real build still needs the paid tier.
- **Purchase status:** ready to proceed on the paid **Lifetime** tier (the one-time option confirmed to exist as of 2026-08-16, satisfying the no-subscription requirement), **blocked on Bido/partners choosing which of the three Lifetime tiers to buy: Pro, Extended, or Extended + Addons.** Confirmed 2026-08-17 (Sobhy).
- **Alternative if APF doesn't work out:** Extra Product Options & Add-Ons by ThemeComplete, one-time payment **only if purchased via CodeCanyon specifically**; buying directly through themecomplete.com now defaults to a subscription model, which would violate the no-subscription requirement.
- **Ruled out:** free-tier product option plugins generally, same reasoning as above, missing conditional logic and file upload fields.
- **Plugin cost is separate from Sobhy's fee**, this is a cost Bido/partners ultimately bear, authorized for Sobhy to pay directly per the 2026-08-16 green light, rather than requiring Bido/partners to purchase it themselves. This still holds under the flat EGP 15,000 offer (see `business-terms.md`).

**Scoping note:** even with the right plugin, wiring up the full conditional chain (position → insertions → size, repeated per position) is several hours of careful setup work. (Original per-item pricing reasoning for this archived to `docs/offer_market-research.md`.)

## Insert position count, from memory, 2026-09-01

At the original in-person meeting with Bido, Sobhy recalls counting **9 total insert positions** on a single bed frame, broken down by zone:
- **Headboard: 3** (one per corner, plus one large center panel)
- **Side rail: 2**
- **Footboard: 4** (one per corner, plus **two** center panels, not one)

This is recalled from memory, not sourced from a document, worth confirming with Bido if the number ever needs to be authoritative rather than a working assumption. It's consistent with the existing table above ("Insertions: Number, 0–4, Per Position"), the 0–4 range already accommodates the footboard's max of 4; headboard and side rail simply use fewer of that same range.

**Why the footboard's large panel is split into two, not one continuous piece (confirmed structurally sound by Hesham Habib, engineer):** this is a real span/support constraint, not an arbitrary design choice. Insert materials (mosaic, stone, mother-of-pearl, laser-cut wood) are strong under compression but weak in bending across a long unsupported span, a single panel spanning the full footboard width with support only at the two far ends puts maximum bending stress at the unsupported center, exactly where cracking or panel failure would occur under normal use (sitting on the bed, frame flex, impacts). Splitting into two panels lets the frame's center stile act as a structural mid-support, the same reasoning as why long shelves need a center bracket or wide cabinet doors get a center stile. Secondary factors: wood/stone panels expand and contract with humidity (a wider single panel moves more and is more prone to cracking/loosening over time), and raw material (stone slabs, tile sheets) has practical maximum sheet sizes for sourcing, cutting, and safe handling before installation.
