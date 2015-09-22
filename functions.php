<?php
/**
 * Maker functions and definitions.
 *
 * @package Maker Child
 */

/**
 * The current version of the theme.
 */
define( 'MAKER_CHILD_VERSION', '0.1.1' );

/**
 * Enqueue scripts and styles.
 */
function maker_child_scripts() {
	// Load parent theme styles.
	wp_enqueue_style(
		'maker-style',
		get_template_directory_uri() . '/style.css',
		array(),
		MAKER_CHILD_VERSION
	);

	// Load child theme styles.
	wp_enqueue_style(
		'maker-child-style',
		get_stylesheet_uri(),
		array(),
		MAKER_CHILD_VERSION
	);
}
add_action( 'wp_enqueue_scripts', 'maker_child_scripts' );
