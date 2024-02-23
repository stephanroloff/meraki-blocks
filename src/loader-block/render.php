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

$height = $attributes['height'];
$width = $attributes['width'];
$time = $attributes['time'];
$loaderType = $attributes['loaderType'];
?>

<div <?php echo $wrapper_attributes?>>
    <div class="loader-spinner-container" style="height: <?= $height;?>px; width: <?= $width;?>px;" data-time="<?= $time;?>">
        <span class="<?= $loaderType;?>"></span>
    </div>
    <div class="children-container">
        <?php echo $content?>
    </div>
</div>
    

