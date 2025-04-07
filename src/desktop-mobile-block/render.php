<?php
/**
 * Desktop-Mobile Block
 *
 * @package Meraki\Blocks\Dynamic
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            Block context.
 */
$wrapper_attributes = get_block_wrapper_attributes(
    [
        'class' => 'breakpoint-' . $attributes["breakpointWidth"] . ' frontend-view'
    ]   
);
?>
<div <?php echo $wrapper_attributes?>>
    <?php echo $content?>
</div>