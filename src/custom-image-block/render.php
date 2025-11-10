<?php
/**
 * Custom Image Block
 *
 * @package Meraki\Blocks\CustomImage
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            Block context.
 */

$wrapper_attributes = get_block_wrapper_attributes();

// Get attributes with defaults
$media_url = $attributes['mediaUrl'] ?? '';
$media_alt = $attributes['mediaAlt'] ?? '';
$height = $attributes['height'] ?? '';
$width = $attributes['width'] ?? '';
$max_height = $attributes['maxHeight'] ?? '';
$min_height = $attributes['minHeight'] ?? '';
$max_width = $attributes['maxWidth'] ?? '';
$min_width = $attributes['minWidth'] ?? '';
$object_fit = $attributes['objectFit'] ?? 'cover';
$overlay_color = $attributes['overlayColor'] ?? '#000000';
$overlay_opacity = floatval($attributes['overlayOpacity'] ?? 0.5);

// Debug: Log the overlay values
error_log('Custom Image Block - Overlay Color: ' . $overlay_color);
error_log('Custom Image Block - Overlay Opacity: ' . $overlay_opacity);

// Helper function to add unit if not present
if (!function_exists('add_unit_if_needed')) {
    function add_unit_if_needed($value) {
        if (empty($value)) return '';
        // If value already has a unit (px, %, em, etc.), return as is
        if (preg_match('/[a-zA-Z%]/', $value)) {
            return $value;
        }
        // Otherwise, add px as default unit
        return $value . 'px';
    }
}

// Build style attributes
$style_attributes = [];
// Always add display: block to ensure proper rendering
$style_attributes[] = 'display: block';
if (!empty($height)) {
    $style_attributes[] = 'height: ' . add_unit_if_needed($height);
}
if (!empty($width)) {
    $style_attributes[] = 'width: ' . add_unit_if_needed($width);
}
if (!empty($max_height)) {
    $style_attributes[] = 'max-height: ' . add_unit_if_needed($max_height);
}
if (!empty($min_height)) {
    $style_attributes[] = 'min-height: ' . add_unit_if_needed($min_height);
}
if (!empty($max_width)) {
    $style_attributes[] = 'max-width: ' . add_unit_if_needed($max_width);
}
if (!empty($min_width)) {
    $style_attributes[] = 'min-width: ' . add_unit_if_needed($min_width);
}
if ($object_fit) {
    $style_attributes[] = 'object-fit: ' . $object_fit;
}

$style_string = !empty($style_attributes) ? 'style="' . implode('; ', $style_attributes) . '"' : '';

?>

<div <?php echo $wrapper_attributes; ?>>
    <?php if ($media_url): ?>
        <div class="custom-image-block__container" style="position: relative; display: flex; width: 100%; max-width: 100%;">
            <img 
                src="<?php echo esc_url($media_url); ?>" 
                alt="<?php echo esc_attr($media_alt); ?>"
                <?php echo $style_string; ?>
                class="custom-image-block__image"
                style="display: block !important; max-width: 100%; height: auto; width: 100%;"
            />
            <?php if ($overlay_opacity > 0): ?>
                <!-- Debug: Overlay Color: <?php echo esc_attr($overlay_color); ?>, Opacity: <?php echo esc_attr($overlay_opacity); ?> -->
                <div 
                    class="custom-image-block__overlay"
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: <?php echo esc_attr($overlay_color); ?>; opacity: <?php echo esc_attr($overlay_opacity); ?>; pointer-events: none; background-blend-mode: overlay; z-index: 1;"
                ></div>
            <?php endif; ?>
        </div>
    <?php else: ?>
        <div class="custom-image-block__placeholder" style="display: flex; align-items: center; justify-content: center; min-height: 200px; border: 2px dashed #ccc; background-color: #f9f9f9; border-radius: 4px;">
            <p style="margin: 0; color: #666; font-style: italic;">Please select an image to display</p>
        </div>
    <?php endif; ?>
</div>
