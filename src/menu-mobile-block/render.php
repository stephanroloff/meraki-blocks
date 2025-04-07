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

if($attributes['burgerImageUrl']){
    $burgerImageUrl = $attributes['burgerImageUrl'];
}else{
    $burgerImageUrl = MY_PLUGIN_PATH_CUSTOM_BLOCKS . "src/menu-mobile-block/images/burger-menu.svg";
}

if($attributes['closeImageUrl']){
    $closeImageUrl = $attributes['closeImageUrl'];
}else{
    $closeImageUrl = MY_PLUGIN_PATH_CUSTOM_BLOCKS . "src/menu-mobile-block/images/close-button.svg";
}
 
?>
 <nav <?php echo $wrapper_attributes?>>
     <div class="burger-image-container active">
         <img src="<?= $burgerImageUrl; ?>" alt="Burger menu image" width="50px" height="50px">
     </div>
     <div class="close-image-container">
         <img src="<?= $closeImageUrl; ?>" alt="Close menu image" width="40px" height="40px">
     </div>
     <ul class="mobile-list">
         <?php echo $content?>
     </ul>
 </nav>
    

