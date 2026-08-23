<?php
/**
 * Floating WhatsApp button, sitewide.
 * Add as a new snippet in the Code Snippets plugin (wp-admin > Snippets > Add New),
 * set "Run snippet everywhere," Activate.
 *
 * Number: +20-10-37-888-900 (business eSIM, confirmed in HANDOFF.md).
 * Color: official WhatsApp green, chosen deliberately for universal recognition,
 * not the brand primary color used elsewhere on the site.
 * Position: fixed, bottom-right, standard convention.
 */

add_action( 'wp_footer', function() {
	?>
	<a href="https://wa.me/201037888900"
	   target="_blank"
	   rel="noopener noreferrer"
	   id="darkum-whatsapp-float"
	   aria-label="Chat with us on WhatsApp / تواصل معنا على واتساب">
		<svg viewBox="0 0 32 32" width="30" height="30" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path d="M16.001 3C9.11 3 3.5 8.61 3.5 15.5c0 2.44.68 4.72 1.86 6.67L3 29l7.02-2.31A12.44 12.44 0 0 0 16 28c6.89 0 12.5-5.61 12.5-12.5S22.89 3 16.001 3zm0 22.7c-2.06 0-4.03-.55-5.73-1.6l-.41-.24-4.17 1.37 1.4-4.06-.27-.42a10.15 10.15 0 0 1-1.6-5.48c0-5.66 4.6-10.26 10.26-10.26 5.66 0 10.26 4.6 10.26 10.26.01 5.65-4.59 10.43-9.74 10.43zm5.61-7.66c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.7.15-.21.31-.8 1-.98 1.2-.18.21-.36.23-.67.08-.31-.15-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.21.05-.39-.02-.54-.08-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53-.18-.01-.39-.01-.6-.01-.21 0-.54.08-.83.39-.28.31-1.09 1.06-1.09 2.6 0 1.53 1.12 3 1.27 3.21.15.21 2.2 3.36 5.33 4.71.75.32 1.33.51 1.78.66.75.24 1.43.2 1.97.12.6-.09 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.21-.6-.36z"/>
		</svg>
	</a>
	<style>
		#darkum-whatsapp-float {
			position: fixed;
			bottom: 24px;
			right: 24px;
			z-index: 9999;
			width: 58px;
			height: 58px;
			background-color: #25D366;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
			transition: transform 0.2s ease, box-shadow 0.2s ease;
			text-decoration: none;
		}
		#darkum-whatsapp-float:hover,
		#darkum-whatsapp-float:focus-visible {
			transform: scale(1.08);
			box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
		}
		#darkum-whatsapp-float svg {
			display: block;
		}
		@media (max-width: 480px) {
			#darkum-whatsapp-float {
				width: 50px;
				height: 50px;
				bottom: 16px;
				right: 16px;
			}
			#darkum-whatsapp-float svg {
				width: 26px;
				height: 26px;
			}
		}
	</style>
	<?php
}, 100 );
