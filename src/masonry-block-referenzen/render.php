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

$args = array(
    'post_type'      => 'referenzen',  
    'posts_per_page' => -1,            
);

$query = new WP_Query( $args );

$dataAttr = '';

if (isset($attributes['columns'])) {
    $dataAttr = 'data-columns="' . esc_attr($attributes['columns']) . '"';

    if ($attributes['columns'] == '3' && isset($attributes['breakpoint1']) && isset($attributes['breakpoint2'])) {
        $dataAttr .= ' data-breakpoint-1="' . esc_attr($attributes['breakpoint1']) . '" data-breakpoint-2="' . esc_attr($attributes['breakpoint2']) . '"';
    } elseif ($attributes['columns'] == '4' && isset($attributes['breakpoint1']) && isset($attributes['breakpoint2']) && isset($attributes['breakpoint3'])) {
        $dataAttr .= ' data-breakpoint-1="' . esc_attr($attributes['breakpoint1']) . '" data-breakpoint-2="' . esc_attr($attributes['breakpoint2']) . '" data-breakpoint-3="' . esc_attr($attributes['breakpoint3']) . '"';
    } elseif ($attributes['columns'] == '5' && isset($attributes['breakpoint1']) && isset($attributes['breakpoint2']) && isset($attributes['breakpoint3']) && isset($attributes['breakpoint4'])) {
        $dataAttr .= ' data-breakpoint-1="' . esc_attr($attributes['breakpoint1']) . '" data-breakpoint-2="' . esc_attr($attributes['breakpoint2']) . '" data-breakpoint-3="' . esc_attr($attributes['breakpoint3']) . '" data-breakpoint-4="' . esc_attr($attributes['breakpoint4']) . '"';
    }
}

$i = 0;
?>

<div <?php echo $wrapper_attributes; ?> <?= $dataAttr?>>
    
    <?php
    if ( $query->have_posts() ) :
        while ( $query->have_posts() ) : $query->the_post();
            if ( has_post_thumbnail() ) {
                $i++;
                if($i>3) $i=1;
                ?>
                <div class="masonry-item fade-in-up hover-animation-<?= $i;?>">
                    <a href="<?= get_the_permalink( get_the_ID() )?>">
                        <div class="img-wrapper">
                            <?php echo get_the_post_thumbnail(get_the_ID(), 'full'); ?>
                        </div>
                        <p class="title"><?php echo get_the_title( get_the_ID(), 'full'); ?></p>
                    </a>
                </div>
                <?php
            } else {
                // echo '<img src="ruta/a/imagen-por-defecto.jpg" alt="Default Image">';
            }
        endwhile;
        wp_reset_postdata();
    else :
        echo 'No Posts available.';
    endif;
    ?>
    
</div>
    

