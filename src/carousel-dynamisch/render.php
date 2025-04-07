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

$postType = $attributes['postType'];
$images = $attributes['fotosUrl'];
$type = $attributes['type'];

if($postType == 'all-post-types'){
    $postType = array('post', 'tribe_events"', 'temp_exhibitions', 'tour_exhibitions', 'jobs');
}

$args = array(
    'post_type'      => $postType,
    'posts_per_page' => -1,      
);

$allPosts = get_posts( $args );
?>

<div <?php echo $wrapper_attributes?>
data-autoplay="<?= $attributes['autoplay']; ?>"
data-delay="<?= $attributes['delay']; ?>"  
data-speed="<?= $attributes['speed']; ?>"
data-show-bullets="<?= $attributes['showBullets']; ?>"
data-show-arrows="<?= $attributes['showArrows']; ?>"
data-effect="<?= $attributes['effect']; ?>"
data-vertical="<?= $attributes['vertical']; ?>"
style="max-height: <?= $attributes['maxHeight']; ?>px; height: <?= $attributes['maxHeight']; ?>px"
data-amount-breakpoints="<?= $attributes['amountBreakpoints']; ?>"
data-breakpoint-1="<?= $attributes['breakpoint1']; ?>"
data-breakpoint-2="<?= $attributes['breakpoint2']; ?>"
data-breakpoint-3="<?= $attributes['breakpoint3']; ?>"
data-breakpoint-4="<?= $attributes['breakpoint4']; ?>"
data-breakpoint-5="<?= $attributes['breakpoint5']; ?>"
data-breakpoint-6="<?= $attributes['breakpoint6']; ?>"
>
    <div class="swiper">

        <div class="swiper-wrapper" style="display: flex; justify-content: space-around; gap: 0px; height:300px">

            <?php if (isset($type) && $type == 'dynamic'):?>
                <?php foreach ($allPosts as $post):?>
                    <?php 
                    $url = esc_url( get_the_post_thumbnail_url( $post, 'full' ));
                    $title = get_the_title($post);
                    $excerpt = get_the_excerpt($post);
                    $excerpt = wp_trim_words($excerpt, 15, '...');
                    ?>
                    <?php if($url): ?>
                        <div class="swiper-slide" style="display: flex; justify-content: space-around;">
                            <?php include dirname(__FILE__, 3) . '/src/carousel-dynamisch/template-parts/dynamic.php' ?>
                        </div>   
                    <?php else: ?>
                        <p>Your post type doesn't have a featured image.</p>
                    <?php endif; ?>
                <?php endforeach; ?>
            <?php else: ?>
                <?php foreach ($images as $key => $value):?>
                <div class="swiper-slide" style="display: flex; justify-content: space-around;">
                    <?php include dirname(__FILE__, 3) . '/src/carousel-dynamisch/template-parts/static.php' ?>
                </div>   
                <?php endforeach; ?>
            <?php endif; ?>

        </div>
        
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-scrollbar"></div>

    </div>
    
</div>
<!-- <div class="main-carousel-info extern">
        <p>Main Carousel</p>
        <button class="btn-extern-left">Links</button>
        <button class="btn-extern-right">Rechts</button>    
        <div class="swiper-pagination"></div>
</div> -->
    

