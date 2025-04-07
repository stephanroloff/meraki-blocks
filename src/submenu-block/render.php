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
    ['class' => 'submenu-block']
);

?>
<div <?php echo $wrapper_attributes?> data-conectionid="<?= $attributes['submenuConectionId']?>">
    <div class="sub-menu-container">
        <?php echo $content?>
    </div>
</div>
    

