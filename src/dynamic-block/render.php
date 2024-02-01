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

// Returns an array of Submission Models for Form ID 1
$sub = Ninja_Forms()->form( 1 )->get_subs();

echo '<pre>';
// var_dump($sub);
echo '</pre>';

foreach ($sub as $key => $value) {
    echo '<p>';
    echo $key;
    echo '</p>';
}


?>
<div <?php echo $wrapper_attributes?>>
    <p>THIS A DYNAMIC BLOCK!</p>
    <p>Attribute: <?php echo $attributes['amountSelected']?></p>
</div>
    

