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
    ['class' => 'single-tab-container']
);

?>
<div <?php echo $wrapper_attributes?> data-tab-title="<?= $attributes['tabTitle'];?>">
    <?php echo $content?>
</div>
    

