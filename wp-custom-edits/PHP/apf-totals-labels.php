<?php
/**
 * Rename Advanced Product Fields' (APF/WAPF) frontend total labels.
 *
 * IMPORTANT when pasting into the Code Snippets plugin (wp-admin > Snippets > Add New,
 * "Run snippet everywhere," Activate): strip the leading "<?php" line below first.
 * Code Snippets already runs the snippet inside its own PHP context, so a second
 * opening tag causes "Parse Error: unexpected '<' on line 1" (confirmed 2026-09-19).
 * This file keeps the tag only so it's a valid standalone .php file in the repo.
 *
 * These three labels ("Product total", "Options total", "Grand total") are hardcoded
 * strings in the plugin's template, not exposed in its settings screen. WordPress's
 * standard gettext translation filter is the way to change them without editing plugin
 * files, confirmed as the plugin author's own recommended approach for the free
 * WordPress.org version. This site runs the paid Lifetime tier bought directly from
 * StudioWombat.com though, and its actual text domain doesn't match the free version's
 * ("advanced-product-fields-for-woocommerce", confirmed by downloading and inspecting
 * that version's own source, which is why an earlier attempt checking $domain silently
 * did nothing). Matches on the original string alone instead, works regardless of which
 * domain the paid build actually uses. Slightly less precise, catches any other plugin's
 * string that happens to say exactly "Product total" too, unlikely on this site.
 *
 * Confirmed working 2026-09-19. Priority PHP_INT_MAX is a leftover from ruling out
 * Polylang as a possible cause (it wasn't the cause, dropping the domain check was the
 * actual fix), kept since it does no harm.
 *
 * Note: this is sitewide, not per-product. "Bed Frame" is correct while this is the
 * only product; once more products exist, this hardcoded label would be wrong on the
 * others. Revisit then, or ask for the dynamic (per-product-name) version instead.
 */
add_filter( 'gettext', function( $translated, $original, $domain ) {
	if ( $original === 'Product total' ) {
		return 'Base subtotal';
	}
	return $translated;
}, PHP_INT_MAX, 3 );
