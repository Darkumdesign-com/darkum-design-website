<?php
/**
 * dkd-paragraph-lang-attr.php
 *
 * Adds a real lang="en"/lang="ar" HTML attribute to any core/paragraph
 * or core/heading block carrying a dkd-lang-en or dkd-lang-ar Additional
 * CSS Class, at render time.
 *
 * Why this exists, not a direct HTML edit: neither block tracks a `lang`
 * attribute in its schema. Hand-adding one via "Edit as HTML" survives
 * the save, but on the next load Gutenberg regenerates the block's
 * markup from its known attributes (which don't include lang), sees a
 * mismatch against what's stored, and flags the block as invalid
 * ("Block contains unexpected or invalid content"), for any editor who
 * opens it afterward, not just non-technical ones.
 *
 * This avoids that entirely: className IS a tracked, native attribute
 * (safely set via the block's own "Additional CSS Class(es)" field, or
 * programmatically via updateBlockAttributes), so the block always
 * serializes cleanly. The lang attribute itself is injected purely at
 * output time via these render_block_core/* filters, completely
 * separate from what Gutenberg stores or validates. The blocks stay
 * permanently editable in the visual editor, by anyone, regardless of
 * HTML knowledge.
 *
 * Scoped to render_block_core/paragraph and render_block_core/heading
 * specifically (fire only for those block types), not the generic
 * render_block filter (which fires for every block on every page),
 * matching this project's usual practice of the narrowest safe
 * selector/hook rather than a global one.
 *
 * Checks the rendered $block_content itself for the marker class rather
 * than $block['attrs']['className'], sidestepping any assumption about
 * attribute availability/timing, matched directly against what's already
 * confirmed present in the final output. Not anchored to the start of
 * the string (no ^): an earlier version anchored with ^<p\b and silently
 * never matched live, confirmed by testing, most likely because
 * Kadence's block render wrapper puts something ahead of the opening
 * tag in the actual output. Matching the tag anywhere in the string
 * fixed it.
 *
 * Usage: add a "dkd-lang-en" or "dkd-lang-ar" Additional CSS Class to
 * any Paragraph or Heading block that should carry that lang attribute.
 * Only use this on blocks that are entirely one language; a block mixing
 * both languages in one line should not be tagged with either value.
 *
 * Extended 2026-09-06 to also inject dir="ltr"/dir="rtl" alongside lang,
 * same class check, same render-time-only mechanism. Needed because pure
 * bidi-auto-detection isn't reliable once Arabic text has Latin digits
 * mixed into it (times, phone numbers, e.g. "10 ص - 6 م"), the exact
 * failure mode already found and fixed once elsewhere on this site
 * (unmarked Arabic text reading left-to-right despite being genuinely
 * Arabic). dir is a 1:1 function of the same lang value here, en is
 * always ltr and ar is always rtl, so no separate class/detection is
 * needed for it.
 */
function dkd_add_lang_attribute( $block_content, $tag_pattern ) {
	if ( strpos( $block_content, 'dkd-lang-ar' ) !== false ) {
		$lang = 'ar';
		$dir = 'rtl';
	} elseif ( strpos( $block_content, 'dkd-lang-en' ) !== false ) {
		$lang = 'en';
		$dir = 'ltr';
	} else {
		return $block_content;
	}

	// Don't double up if a lang attribute somehow already exists.
	if ( preg_match( '/(<' . $tag_pattern . ')\b[^>]*\blang=/i', $block_content ) ) {
		return $block_content;
	}

	return preg_replace( '/(<' . $tag_pattern . ')\b/i', '$1 lang="' . esc_attr( $lang ) . '" dir="' . esc_attr( $dir ) . '"', $block_content, 1 );
}

add_filter( 'render_block_core/paragraph', function ( $block_content, $block ) {
	return dkd_add_lang_attribute( $block_content, 'p' );
}, 10, 2 );

add_filter( 'render_block_core/heading', function ( $block_content, $block ) {
	return dkd_add_lang_attribute( $block_content, 'h[1-6]' );
}, 10, 2 );
