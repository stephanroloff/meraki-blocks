<?php

//Automatically register any blocks generated by the npm run build command (build folder)

function create_blocks() {

    // $folder = dirname(__FILE__) . '/build';
    // $name_folder = array();
    // $files = scandir($folder);

    // foreach($files as $file) {
    //     if(is_dir($folder . '/' . $file)) {
    //         $name_folder[] = $file;
    //     }
    // }

    // foreach ($name_folder as $key => $value) {
    //     if($value == "." || $value == ".." || $value == "images") continue;
    //     register_block_type( dirname(__FILE__) . '/build' . '/' . $value );
    // }


	register_block_type( dirname(__FILE__) . '/build/static-block' );
    register_block_type( dirname(__FILE__) . '/build/dynamic-block');
    register_block_type( dirname(__FILE__) . '/build/nested-dynamic-block');
    register_block_type( dirname(__FILE__) . '/build/accordion-static');
    register_block_type( dirname(__FILE__) . '/build/carousel-block');
    register_block_type( dirname(__FILE__) . '/build/carousel-slide-block');
    register_block_type( dirname(__FILE__) . '/build/airport-conveyor-belt-block');
    register_block_type( dirname(__FILE__) . '/build/team-grid');
    register_block_type( dirname(__FILE__) . '/build/team-grid-member');
    register_block_type( dirname(__FILE__) . '/build/project-feed');
    register_block_type( dirname(__FILE__) . '/build/masonry-block');
    register_block_type( dirname(__FILE__) . '/build/accordion-vertical-block');
    register_block_type( dirname(__FILE__) . '/build/accordion-vertical-text-block');
    register_block_type( dirname(__FILE__) . '/build/multi-layer-block');
    register_block_type( dirname(__FILE__) . '/build/layer-block');
    register_block_type( dirname(__FILE__) . '/build/text-fill-block');
   
}
add_action( 'init', 'create_blocks' );




