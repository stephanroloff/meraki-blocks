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
$breakpoint_small = $attributes['breakpointSmall'];
$breakpoint_medium = $attributes['breakpointMedium'];
$breakpoint_large = $attributes['breakpointLarge'];
$breakpoint_extra_large = $attributes['breakpointExtraLarge'];
$columns = $attributes['columns'];
$renderType = $attributes['renderType'];
$postType = $attributes['postType'];

$args = array(
    'post_type'      => $postType,  
    'posts_per_page' => -1,            
);
$query = new WP_Query( $args );
?>

<div <?php echo $wrapper_attributes?>
data-columns=<?= $columns; ?>    
data-breakpoint-small=<?= $breakpoint_small; ?>    
data-breakpoint-medium=<?= $breakpoint_medium; ?>    
data-breakpoint-large=<?= $breakpoint_large; ?>    
data-breakpoint-extra-large=<?= $breakpoint_extra_large; ?>    
>
    <div class="columns">
        <div class="column-1 column"></div>
        <div class="column-2 column"></div>
        <div class="column-3 column"></div>
        <div class="column-4 column"></div>
        <div class="column-5 column"></div>
    </div>

    <div class="masonry-content">
        <?php if($renderType=="static"):?>

            <?php echo $content; ?>

        <?php else: ?>
            <?php
            if ( $query->have_posts() ) :
                while ( $query->have_posts() ) :
                    $query->the_post();
                    ?>
                    <div class="masonry-item">
                        <?php include dirname(__FILE__, 3) . '/src/masonry-block/template-parts/dynamic.php' ?>
                    </div>
                    <?php
                endwhile;
                wp_reset_postdata();
            else :
                echo 'No Posts available.';
            endif;
            ?>

        <?php endif;?>
    </div>
</div>
    

