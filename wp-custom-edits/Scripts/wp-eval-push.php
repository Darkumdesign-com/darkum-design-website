<?php
/**
 * wp-eval-push.php
 *
 * Reads a local content file and writes it as post_content for a given
 * post ID via wp_update_post(), avoiding shell quoting/interpolation
 * entirely (see docs/handoff/wp-cli-workflow-and-tooling.md for why
 * shell interpolation, e.g. `wp post update 83 --post_content="$(cat file)"`,
 * is unsafe for CSS/HTML content that contains double quotes).
 *
 * Usage (from an SSH session, after uploading this file + the content
 * file to the same staging directory):
 *   wp eval-file wp-eval-push.php <content-file> <post-id> --path=<wp-root>
 *
 * Example (Additional CSS, post 83):
 *   wp eval-file wp-eval-push.php additional-css.tmp 83 --path=/home/client_4c28961da_1221269/html
 *
 * Example (Home page content, post 35):
 *   wp eval-file wp-eval-push.php home-content.tmp 35 --path=/home/client_4c28961da_1221269/html
 *
 * All diagnostic output goes to STDOUT, not STDERR. Posh-SSH's
 * Invoke-SSHCommand's .Output property only reliably captured STDOUT
 * during this project's testing, a STDERR-only failure message showed
 * up as a silently empty .Output with a nonzero exit code, easy to miss.
 */

if ( count( $args ) < 2 ) {
	echo "ERROR: expected 2 arguments, got " . count( $args ) . ". Usage: wp eval-file wp-eval-push.php <content-file> <post-id>\n";
	exit( 1 );
}

$content_path = $args[0];
$post_id      = (int) $args[1];

if ( ! file_exists( $content_path ) ) {
	echo "ERROR: content file not found: $content_path\n";
	exit( 1 );
}

$content = file_get_contents( $content_path );
if ( $content === false ) {
	echo "ERROR: failed to read $content_path\n";
	exit( 1 );
}

$existing = get_post( $post_id );
if ( ! $existing ) {
	echo "ERROR: no post found with ID $post_id, refusing to write. Check the ID before retrying.\n";
	exit( 1 );
}

$old_length = strlen( $existing->post_content );

$result = wp_update_post(
	array(
		'ID'           => $post_id,
		'post_content' => $content,
	),
	true
);

if ( is_wp_error( $result ) ) {
	echo "ERROR: wp_update_post failed: " . $result->get_error_message() . "\n";
	exit( 1 );
}

echo "OK: updated post $post_id ({$existing->post_title}). Old length: $old_length, new length: " . strlen( $content ) . "\n";
