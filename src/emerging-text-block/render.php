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
<div <?php echo $wrapper_attributes?> style="height: <?php echo $attributes['textHeight']; ?>px;" >
<div class="emerging-text-container" 
    data-duration = <?php echo $attributes['animationDuration']; ?>
    data-delay = <?php echo $attributes['animationDelay']; ?>
>
    <?php echo $content?>
</div>
</div>
    

