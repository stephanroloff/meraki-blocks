<?php
function shortcode_search_block() {
    $block_content = '<!-- wp:search /-->'; // Código del bloque Search en su versión más simple
    return do_blocks( $block_content );
}
add_shortcode('search_block', 'shortcode_search_block');