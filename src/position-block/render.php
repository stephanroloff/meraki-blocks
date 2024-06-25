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

$position = $attributes['position'];
$top = $attributes['top'];
$bottom = $attributes['bottom'];
$left = $attributes['left'];
$right = $attributes['right'];
$zindex = $attributes['zindex'];
$width = $attributes['width'];
$unit = $attributes['unit'];

?>
<div <?php echo $wrapper_attributes ?> style="<?php echo 'position:' . $position . '; top:' . $top . 'px; bottom:' . $bottom . 'px; left:' . $left . 'px; right:' . $right . 'px; z-index:' . $zindex . '; max-width:' . $width . $unit .';'?>">

    <div>
        <?php echo $content?>
    </div>
</div>
    

