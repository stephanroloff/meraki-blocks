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
    ['class' => $attributes['tabColumns']?'tab-columns':'tab-rows']
);
?>

<div <?php echo $wrapper_attributes?>>
    <div class="list-tabs-titles"></div>
    <div class="tab-content">
        <?php echo $content?>
    </div>
</div>
    

