<?php
/**
 * Theme functions and definitions
 */

if ( ! function_exists( 'valeriadesign_setup' ) ) :
	function valeriadesign_setup() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		// Let WordPress manage the document title.
		add_theme_support( 'title-tag' );

		// Enable support for Post Thumbnails on posts and pages.
		add_theme_support( 'post-thumbnails' );

		// Register menu locations
		register_nav_menus(
			array(
				'sidebar-1' => __( 'Primary Sidebar', 'valeriadesign' ),
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'valeriadesign_setup' );

/**
 * Enqueue scripts and styles.
 */
function valeriadesign_scripts() {
	wp_enqueue_style( 'valeriadesign-style', get_stylesheet_uri(), array(), time() );
    
    // We could add Tailwind via CDN here if needed, or rely on custom CSS in style.css
    // wp_enqueue_script( 'tailwind', 'https://cdn.tailwindcss.com', array(), null, false );
}
add_action( 'wp_enqueue_scripts', 'valeriadesign_scripts' );

/**
 * Register Custom Post Type for Projects
 */
function valeriadesign_register_projects_cpt() {
    $labels = array(
        'name'                  => 'Projects',
        'singular_name'         => 'Project',
        'menu_name'             => 'Projects',
        'name_admin_bar'        => 'Project',
        'add_new'               => 'Add New',
        'add_new_item'          => 'Add New Project',
        'new_item'              => 'New Project',
        'edit_item'             => 'Edit Project',
        'view_item'             => 'View Project',
        'all_items'             => 'All Projects',
        'search_items'          => 'Search Projects',
        'parent_item_colon'     => 'Parent Projects:',
        'not_found'             => 'No projects found.',
        'not_found_in_trash'    => 'No projects found in Trash.',
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'project' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'menu_icon'          => 'dashicons-portfolio',
        'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
        'show_in_rest'       => true, // Enables Gutenberg editor
    );

    register_post_type( 'project', $args );
}
add_action( 'init', 'valeriadesign_register_projects_cpt' );
