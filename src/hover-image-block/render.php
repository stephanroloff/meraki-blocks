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
    <img class="image" src="<?php echo $attributes['MyImageUrl1']?>" alt="Image" />
    <img class="hover-image" src="<?php echo $attributes['MyImageUrl2']?>" alt="Hover Image" />
</div>
    

