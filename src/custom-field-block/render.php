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


$field_name = 'referenzen_subtitle';

$wrapper_attributes = get_block_wrapper_attributes();

$custom_field_data = get_field($field_name);

if(!$custom_field_data){
 echo '<p>The Custom field data does not exist, or maybe has to be used inside a query loop block</p>';
 echo '<p>To ensure this block works, ACF must be installed on your WordPress and it must have a field created with the name "' . $field_name . '".</p>';
}

?>
<div <?php echo $wrapper_attributes?>>
    <p><?= $custom_field_data; ?></p>
</div>
    

