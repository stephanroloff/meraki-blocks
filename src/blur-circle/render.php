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
    <div 
    class="blur-circle" 
    style="
    width:300px; 
    height:600px; 
    /* background-color: red; */
    background: linear-gradient(135deg, #6B003E, #FECDA5);
    /* background: linear-gradient(135deg, #6B003E, #FE2D2D); */
    /* background: linear-gradient(135deg, #FE2D2D, #FECDA5); */
    border-radius: 50%;
    filter: blur(50px);
    opacity: 0.7;
    /* box-shadow: 0 0 160px #FE2D2D; */
    "
    ></div>
</div>
    

