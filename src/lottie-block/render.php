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

// Valores por defecto
$lottie_url = !empty($attributes['lottieUrl']) ? esc_url($attributes['lottieUrl']) : MY_PLUGIN_PATH_CUSTOM_BLOCKS . 'src/lottie-block/assets/herz.json';
$speed = isset($attributes['speed']) ? floatval($attributes['speed']) : 1;
$loop = isset($attributes['loop']) ? $attributes['loop'] : false;
$reverse = isset($attributes['reverse']) ? $attributes['reverse'] : false;
$width = isset($attributes['width']) ? intval($attributes['width']) : 200;
$height = isset($attributes['height']) ? intval($attributes['height']) : 200;

// Generar ID único para cada instancia del bloque
$lottie_id = 'lottie-' . wp_unique_id();
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="lottie-wrapper">
        <lottie-player
        id="<?= esc_attr($lottie_id) ?>"
        src="<?= $lottie_url ?>"
        background="transparent"
        speed="<?= esc_attr($speed) ?>"
        autoplay="true"
        <?= $loop ? 'loop' : '' ?>
        <?= $reverse ? 'direction="-1"' : 'direction="1"' ?> 
        style="width: <?= esc_attr($width) ?>px; height: <?= esc_attr($height) ?>px;"
        class="lottie-player"
        >
        </lottie-player>
    </div>
</div>
