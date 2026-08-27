<?php
/**
 * FurnitureStore JSON-LD structured data, sitewide.
 * Add as a new snippet in the Code Snippets plugin (wp-admin > Snippets > Add New),
 * set "Only run on Site Front-end," Activate.
 *
 * Moved here 2026-08-27 from a Custom HTML block that was sitting inside the
 * Contact section's page content, after the phone/email links. That placement
 * worked (Google accepts JSON-LD anywhere in the DOM), but it was fragile,
 * tied to page content that could get edited or rebuilt without anyone
 * noticing the structured data went with it. Living in <head> via wp_head
 * keeps it decoupled from content edits, same reasoning as the WhatsApp
 * float button and the SVG-enable snippet living here instead of in a page.
 *
 * Sitewide, no is_front_page() gate. This is business/entity identity data
 * (name, address, phone, hours), not homepage-specific content, and the site
 * already has more than the homepage: Shop, Product, Cart, Checkout, Thank
 * You, and the legal pages (Privacy Policy, Terms and Conditions, etc.) all
 * exist as real pages even where content/config is still pending. All of
 * them should carry this too.
 *
 * Formatted (not minified), matching the same JSON-LD block on the
 * coming-soon page's index.html, since this repo is headed for a public
 * GitHub portfolio and should read cleanly for a human, not just a crawler.
 * Reformatting was verified data-identical to the original minified JSON
 * before this file was written, no field was added, removed, or altered.
 *
 * IMPORTANT: once this snippet is verified live (view-source on the homepage,
 * confirm the <script type="application/ld+json"> block appears in <head>),
 * delete the old Custom HTML block from the Contact section so the data
 * isn't duplicated on that page.
 */

add_action( 'wp_head', function() {
	?>
	<script type="application/ld+json">
		{
		  "@context": "https://schema.org",
		  "@type": "FurnitureStore",
		  "name": "Darkum Design",
		  "alternateName": "داركم ديزاين",
		  "url": "https://darkumdesign.com/",
		  "logo": "https://1221269.us32.myftpupload.com/wp-content/uploads/2026/08/Darkum-Design-Logo-Transparent-Horizontal-512px.webp",
		  "image": "https://1221269.us32.myftpupload.com/wp-content/uploads/2026/08/hero-bg-1920x1440px.webp",
		  "email": "info@darkumdesign.com",
		  "address": {
		    "@type": "PostalAddress",
		    "streetAddress": "Store No. 5, 10 Aswan Street, El-Sherif Building",
		    "addressLocality": "Heliopolis",
		    "addressRegion": "Cairo",
		    "postalCode": "4460305",
		    "addressCountry": "EG"
		  },
		  "contactPoint": [
		    {
		      "@type": "ContactPoint",
		      "contactType": "phone",
		      "telephone": "+20-10-37-888-900"
		    },
		    {
		      "@type": "ContactPoint",
		      "contactType": "customer service",
		      "telephone": "+20-10-37-888-900",
		      "url": "https://wa.me/201037888900"
		    }
		  ],
		  "openingHoursSpecification": [
		    {
		      "@type": "OpeningHoursSpecification",
		      "dayOfWeek": [
		        "Saturday",
		        "Monday",
		        "Tuesday",
		        "Wednesday",
		        "Thursday"
		      ],
		      "opens": "10:00",
		      "closes": "18:00"
		    },
		    {
		      "@type": "OpeningHoursSpecification",
		      "dayOfWeek": "Friday",
		      "opens": "14:00",
		      "closes": "18:00"
		    }
		  ],
		  "sameAs": [
		    "https://www.facebook.com/darkumdesign",
		    "https://www.instagram.com/darkumdesign",
		    "https://www.threads.net/@darkumdesign",
		    "https://www.tiktok.com/@darkumdesign",
		    "https://www.youtube.com/@darkumdesign",
		    "https://www.pinterest.com/darkumdesign",
		    "https://x.com/darkumdesign",
		    "https://www.linkedin.com/company/darkumdesign"
		  ]
		}
	</script>
	<?php
}, 10 );
