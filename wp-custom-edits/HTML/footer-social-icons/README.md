# Footer Social, Kadence native Social widget

**Not a Custom HTML block.** Kadence's Customizer → Footer → Footer Social panel already has a native SVG tab per item (Icon / SVG / Image), the same "paste raw hand-coded SVG, no icon library" approach used everywhere else on this site. Use that, don't build a separate Custom HTML block for this, it'd duplicate what this widget already does correctly.

**Per item in the Kadence panel:**
1. Click "Add Social", pick the item, set its Item Label
2. Open the SVG tab, paste the matching `.svg` file's content into "SVG HTML"
3. Set the link URL to the value below
4. Max Width, match whatever the first icon (Facebook) is already set to, for consistent sizing

All 10 icons pulled from the coming-soon page's `index.html` (2026-08-18), same set, same style, same URLs (from `README.md`, the source of truth for social handles).

| Platform | Item Label | URL | SVG file |
|---|---|---|---|
| Instagram | Instagram | `https://www.instagram.com/darkumdesign` | `instagram.svg` |
| Threads | Threads | `https://www.threads.net/@darkumdesign` | `threads.svg` |
| Facebook | Facebook | `https://www.facebook.com/darkumdesign` | `facebook.svg` |
| TikTok | TikTok | `https://www.tiktok.com/@darkumdesign` | `tiktok.svg` |
| YouTube | YouTube | `https://www.youtube.com/@darkumdesign` | `youtube.svg` |
| Pinterest | Pinterest | `https://www.pinterest.com/darkumdesign` | `pinterest.svg` |
| X | X (Twitter) | `https://x.com/darkumdesign` | `x.svg` |
| LinkedIn | LinkedIn | `https://www.linkedin.com/company/darkumdesign` | `linkedin.svg` |
| WhatsApp | WhatsApp | `https://wa.me/201037888900` | `whatsapp.svg` |
| Email | Email | `mailto:info@darkumdesign.com` | `email.svg` |

**Not yet decided:** whether the footer should carry all 10, same as the coming-soon page, or a smaller curated set (footers often run fewer than a full social row). Currently 3 were manually added with custom SVGs (Facebook, X, Instagram), then the rest were added 2026-08-18 using Kadence's **built-in icon library** instead (`kadence-instagram-alt-svg` etc, not our hand-coded set), a faster path taken under time pressure, works fine, just a different icon style than the coming-soon page's. Swap any of them to our custom SVGs later by opening that item's SVG tab and pasting the matching file above, whenever/if it's worth the time.

## "Use Brand Colors", confirmed 2026-08-18, this is NOT Darkum's brand color

Checked the live rendered CSS directly. Kadence's Design tab → "Use Brand Colors: Yes" applies **each platform's own official brand color** (Instagram's blue-gray `rgb(81,127,164)`, Facebook's blue, TikTok's teal, YouTube's red, Pinterest's red, X's blue, LinkedIn's blue, confirmed via `body.social-brand-colors` CSS rules), not the site's own brand brown. Confusing label, not a mistake on Sobhy's part.

**Fix:** Design tab → Use Brand Colors → **No**. That lets the Colors/Border Colors swatches (already set to Darkum's brown) actually take effect.

## Real CSS selectors, for anything the Design panel doesn't expose

Pulled from the live DOM 2026-08-18, no ID collisions, no deep nesting, no `!important` needed to override from Additional CSS:

```
.footer-social-wrap .footer-social-inner-wrap     /* the row */
.footer-social-item                               /* any icon link */
.footer-social-item.social-link-instagram         /* one specific icon, same pattern for every platform: social-link-facebook, social-link-tiktok, social-link-youtube, social-link-pinterest, social-link-twitter (X uses "twitter"), social-link-linkedin, social-link-whatsapp, social-link-email, social-link-threads */
.kadence-svg-iconset                              /* wrapper around the icon svg */
```

Full container chain, if ever needed for higher specificity: `.site-footer .site-footer-wrap .site-footer-section .footer-social-wrap .footer-social-inner-wrap .footer-social-item`.

**Also noticed, not urgent:** the page's `<body>` currently carries a `hide-focus-outline` class (a sitewide Kadence setting), which suppresses the default keyboard focus ring everywhere, including on these social links. Worth a look before launch, matching the focus-visible styling already established on the coming-soon page and the hero ticker's arrow/dot controls, so keyboard users can still see what's focused.
