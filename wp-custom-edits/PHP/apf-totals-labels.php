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
 * strings in the plugin's own template (views/frontend/product-totals.php), not exposed
 * in its settings screen. The plugin author's own recommended way to change them is
 * WordPress's standard gettext translation filter, confirmed via a wordpress.org support
 * thread, so that's what this does, no plugin file edits, survives plugin updates.
 *
 * Text domain and exact source strings confirmed 2026-09-19 by inspecting the plugin's
 * own source (advanced-product-fields-for-woocommerce.pot / product-totals.php).
 *
 * Note: this is sitewide, not per-product. "Bed Frame" is correct while this is the
 * only product; once more products exist, this hardcoded label would be wrong on the
 * others. Revisit then, or ask for the dynamic (per-product-name) version instead.
 *
 * Priority PHP_INT_MAX, not 10: found 2026-09-19 that priority 10 got silently
 * overridden, string stayed "Product total" despite the snippet saving and running
 * with no errors, cache-flush and a private window both ruled out. Root cause,
 * near-certain given Polylang is installed and scoped to WooCommerce pages: Polylang
 * registers its own 'gettext' filter to manage plugin string translations, and if it
 * runs after ours at the same priority, it re-looks-up the ORIGINAL string and returns
 * that, discarding whatever we already returned. Running at PHP_INT_MAX guarantees
 * this filter is the last one applied, nothing downstream can undo it.
 */
add_filter( 'gettext', function( $translated, $original, $domain ) {
	if ( $domain !== 'advanced-product-fields-for-woocommerce' ) {
		return $translated;
	}
	if ( $original === 'Product total' ) {
		return 'Bed Frame';
	}
	return $translated;
}, PHP_INT_MAX, 3 );
