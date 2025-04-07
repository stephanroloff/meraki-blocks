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
    ['class' => 'menu-item-block']
);

?>
<li <?php echo $wrapper_attributes?> data-conectionid="<?= $attributes['submenuConectionId']?>">
    <?php echo $content?>
    <div class="sub-menu-intern"></div>
</li>
    

