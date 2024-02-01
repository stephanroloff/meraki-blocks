<?php
/**
 * Carousel-Slide-Block
 *
 * @package Meraki\Blocks\Carousel-Slide-Block
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            Block context.
 */

$wrapper_attributes = get_block_wrapper_attributes();

?>

<div class="swiper-slide">
    <div class="slide_intern">    
        <?php echo $content?>
        <!-- <div class="swiper-lazy-preloader"></div> -->
    </div>
</div>

    

