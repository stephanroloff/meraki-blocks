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
//ACF
$galleries = get_field('images');    

$counter = 0;
$overlayHover = $attributes['overlayHover']; 
//convert 
$amountSelected_number = (int)$attributes['amountSelected']; 


if(!$galleries){
   echo '<div class="masonry-editor">';
   echo 'No images added. Please add some images in order to see the masonry gallery';
   echo '</div>';
   return;
}

?>
<div <?php echo $wrapper_attributes?>>
    <main class="masonry-grid" style="grid-template-columns: repeat(auto-fill, minmax(<?= $attributes['imageMinWidth'];?>px, 1fr));">

            <?php  
            foreach($galleries as $image){
            $counter++;

            if($amountSelected_number > 0){
               if($counter > $amountSelected_number){
                  break;
               }
            }
            ?>

            <div class="masonry-item">
                  <div class="masonry-content">
                     <div class="masonry-image">
                        <img  src="<?php echo $image['image']['url'];?>" alt="">
                        <div class="overlay" <?php echo $overlayHover? '':'style="display:none;"'?>>
                           <div class="overlay-group">
                              <div>
                                 <h2><?php echo $image['name'];?></h2>
                                 <p><?php echo $image['description'];?></p>
                              </div>
                              <?php if($image['link']!==''){ ?>
                                 <p><a href="<?php echo $image['link'];?>">Mehr erfahren...</a></p>
                              <?php } ?>
                           </div>
                        </div>
                     </div>
                     <div class="spacer" style="height: 15px"></div>
                  </div>
            </div>

            <?php
            }
            ?>

         <?php
         wp_reset_postdata(); 
         ?>
         </main>
</div>
    

