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

$wrapper_attributes = get_block_wrapper_attributes(
    ['class' => 'masonry-item template-part']
);

?>
<div <?php echo $wrapper_attributes?>>
    <?php include dirname(__FILE__, 3) . '/src/masonry-item-block/template-parts/dynamic.php' ?>
</div>
    

