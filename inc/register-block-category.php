<?php
function register_layout_category( $categories ) {
	
	$categories[] = array(
		'slug'  => 'merakistarter',
		'title' => 'Meraki Starter Blocks'
	);

	return $categories;
}

if ( version_compare( get_bloginfo( 'version' ), '5.8', '>=' ) ) {
	add_filter( 'block_categories_all', 'register_layout_category' );
} else {
	add_filter( 'block_categories', 'register_layout_category' );
}