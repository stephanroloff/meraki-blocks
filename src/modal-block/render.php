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
    <div class="extra-element">
        <?php if($attributes['modalType'] == "automatic"): ?>
        <?php elseif($attributes['modalType'] == "button"): ?>
            <button class="modal-button">Click me!</button>
        <?php elseif($attributes['modalType'] == "link"): ?>
            <a class="modal-link">LINK</a>
        <?php endif?>
    </div>
    <div class="modal-background" style="display: <?= $attributes['modalType'] == "automatic"? 'flex':'none';?>;">
        <div class="modal-container" style="width: <?= $attributes['width'];?>px; height: <?= $attributes['height'];?>px;">
            <div class="close-button-container">
                <div class="close-button"></div>
            </div>
            <div class="modal-content">
                <?php echo $content?>
            </div>
        </div>
    </div>
</div>
    

