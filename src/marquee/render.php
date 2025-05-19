<?php
/**
 * Marquee Block
 *
 * @package Meraki\Blocks\marquee
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            Block context.
 */

$wrapper_attributes = get_block_wrapper_attributes(
    ['class' => $attributes['textStroke']?'text-stroke':'']
);

?>
<div <?php echo $wrapper_attributes?>>

  <section class= "enable-animation">
    <div class="marquee <?php echo $attributes['reverse']? 'marquee--reverse' : ''?>">
      <div class="marquee__content " style="animation-duration: <?php echo $attributes['animationTime'];?>s;">
          <?php echo $content?>
      </div>
      
      <div aria-hidden="true" class="marquee__content" style="animation-duration: <?php echo $attributes['animationTime'];?>s;">
          <?php echo $content?>
      </div>
    </div>
  </section>

</div>
    

