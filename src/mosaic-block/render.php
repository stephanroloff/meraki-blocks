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
    <?php for ($i = 0; $i < 5; $i++) : ?>
        <div class="mosaic-block-image-wrapper">
        <?php if (!empty($attributes['MyMediaUrl'][$i])) : ?>
            <img src="<?php echo $attributes['MyMediaUrl'][$i]['url']?>" alt="<?php echo $attributes['MyMediaUrl'][$i]['alt']?>">
        <?php else : ?>
            <div class="mosaic-block-image-placeholder">
                <p>Add an image here</p>
            </div>
        <?php endif; ?>
        </div>
    <?php endfor; ?>
</div>
    

