# Quote Request — Coming-Soon Page (HTML/CSS/JS)

*Send this to 3+ freelancers. Keep the ⚠️ notes as-is — they're the most important part so nobody quotes for the wrong scope.*

---

Hi, I need a quote for building a "Coming Soon" page (a pre-launch placeholder) for a furniture business. The page is **plain HTML, CSS, and JS only**; no WordPress, no CMS, no build step (no React, no npm, nothing that needs to be compiled, just files that run on any standard server).

⚠️ **Important:** this needs to be one complete page with everything listed below, not a simplified design or generic template. Please read everything carefully before quoting.

**Exactly what's needed:**

**1. Simultaneous bilingual layout (English + Arabic):**
Not a "Switch to Arabic" toggle — both languages are visible together on the same page at the same time. On desktop: two columns side by side (English, a divider line, Arabic in RTL). On mobile: elements are grouped in content pairs (e.g. the English and Arabic line of the same sentence grouped together), not grouped by language in separate blocks — this keeps spacing even.

**2. Hand-drawn SVG icons, coded inline in the HTML:**
⚠️ This is the most important part of the request, please read it closely. I do NOT want icons from a library like Font Awesome or Feather Icons, and no PNG/image icons either. Every icon needs to be written as an `<svg>` directly in the HTML, with simple freehand/line-art style strokes — not generic geometric shapes copied from an icon pack. Requirements:
- Every icon uses `viewBox="0 0 24 24"` at a small size (roughly 18×18px)
- Uses `stroke="currentColor"` so the color inherits automatically from the CSS, not hardcoded inside the SVG
- Simple single-line design (`stroke-width` around 1.5), not filled or complex
- Exactly 9 icons needed: Instagram, Threads, Facebook, TikTok, YouTube, Pinterest, X (Twitter), WhatsApp, Email
- Each icon sits inside its own working `<a>` link

Please confirm in your reply that you can draw/code SVG icons this way yourself (not copy them from an existing icon library).

**3. Auto-cycling catchphrase ticker:**
An English line and an Arabic line that swap automatically every few seconds, with direction-aware animation — the English line slides in from the right, the Arabic line slides in from the left — fully automatic with no user controls (auto-cycling, not a carousel with buttons).

**4. Colors and fonts:**
- Fully black background (`#000000`)
- One brand accent color, brown/copper (`#996633`), used consistently everywhere (text, dividers, details), defined as a CSS variable rather than repeated everywhere
- Google Fonts: a serif font for English (Cormorant Garamond), an Arabic font (Cairo), and a third font for small details (Inter)
- A subtle "grain" (noise/texture) effect over the background

**5. Logo and favicon:**
I'll provide the logo files (SVG and PNG) and favicon ready-made — they need to be wired up correctly (using `<picture>` with SVG as primary and PNG as fallback).

**6. "Notify me" form:**
Simple form with an email field and a button, a visually hidden accessible label, and a success/error message that appears below the form after the user submits.

**7. Meta tags for social sharing and SEO:**
- Full Open Graph tags (og:title, og:description, og:image at 1200×630, og:url, og:type)
- Twitter Card tags (summary_large_image)
- JSON-LD structured data (schema.org type: FurnitureStore) with name, logo, contact info, and all social media links

**8. Mobile responsiveness:**
The page needs to actually work correctly on mobile, not just shrink — especially the bilingual layout pairing described in item 1 and the spacing between elements.

**9. Accessibility (ARIA):**
- Every social icon link needs an `aria-label` naming the platform (e.g. "Instagram", "Facebook") — not an unlabeled icon
- The container holding all the icons needs a general `aria-label` (e.g. "Social links")
- The email field in the "Notify me" form needs a `<label>` (can be visually hidden with an `sr-only`-style class, but must exist for screen readers)
- The success/error message after form submission needs `role="status"` and `aria-live="polite"` so screen readers announce it automatically
- The catchphrase ticker (item 3) needs `aria-live="off"` so the changing text doesn't interrupt screen readers every time it swaps

**Please include in your reply:**
1. A fixed total price for the whole page (not hourly)
2. Expected delivery time
3. Confirmation you can hand-code inline SVG icons as described in item 2 (not from a ready-made library)
4. Confirmation you've previously built simultaneous bilingual (English/Arabic RTL) pages
5. Confirmation you'll implement all the accessibility (ARIA) items listed in item 9

Thanks!
