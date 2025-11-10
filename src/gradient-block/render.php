<?php
/**
 * Gradient Block
 *
 * @package Meraki\Blocks\Gradient
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            Block context.
 */

// E6 = 0.9 opacity
// CC = 0.8
// 1A = 0.1
// 0D = 0.05
// 00 = 0 total transparency 

$wrapper_attributes = get_block_wrapper_attributes();
// $color = '#D8D8D8';
$color1 = $attributes['color1'];
$height = $attributes['height'];
?>
<div <?php echo $wrapper_attributes; ?>>
    <div class="gradient-container"
        style="height: <?php echo $height; ?>px; background: linear-gradient(
            180deg,
            <?php echo $color1; ?> 0%,
            <?php echo $color1; ?>E6 20%,
            <?php echo $color1; ?>CC 30%,
            <?php echo $color1; ?>1A 90%,
            <?php echo $color1; ?>0D 95%,
            <?php echo $color1; ?>00 100%
        );">
    </div>
</div>


 
    

