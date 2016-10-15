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
	/*
	 * Parent Theme Styles.
	 *
	 * Comment out or remove completely if you don't need parent theme styles
	 * and want to create your own custom CSS from scratch.
	 */
	wp_enqueue_style(
		'maker-style',
		get_template_directory_uri() . '/style.css',
		array(),
		MAKER_CHILD_VERSION
	);

	/**
	 * Child Theme Styles.
	 */
	wp_enqueue_style(
		'maker-child-style',
		get_stylesheet_uri(),
		array(),
		MAKER_CHILD_VERSION
	);

	/**
	 * Child Theme JavaScript.
	 *
	 * If your theme doesn't add any JavaScript, safely remove or comment out
	 * this block to save one server request.
	 */
	wp_enqueue_script(
		'maker-child-scripts',
		get_stylesheet_directory_uri() . '/assets/js/project.js',
		array(),
		MAKER_CHILD_VERSION
	);
}
add_action( 'wp_enqueue_scripts', 'maker_child_scripts' );
