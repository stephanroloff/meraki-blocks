<?php
/**
 * Example Dynamic Block
 *
 * @package Meraki\Blocks\Dynamic
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            Block context.
 */

$wrapper_attributes = get_block_wrapper_attributes();

?>
<div <?php echo $wrapper_attributes?>>
    <div 
    class="blur-circle" 
    style="
    width:<?= $attributes['width']?>px; 
    height:<?= $attributes['height']?>px; 

    background: linear-gradient(135deg, <?= $attributes['color1']?>,  <?= $attributes['color2']?>);

    border-radius: 50%;
    filter: blur(50px);
    opacity: <?= $attributes['opacity']?>;
    /* box-shadow: 0 0 160px #FE2D2D; */
    "
    ></div>
</div>
    

