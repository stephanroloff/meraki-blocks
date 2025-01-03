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

$post_id = get_the_ID();

$query = new WP_Query(array(
    'post_type'      => 'referenzen',
    'posts_per_page' => 3, 
    'orderby'        => 'rand', //random
    'post__not_in'   => array($post_id),
));
?>

<div <?php echo $wrapper_attributes?>>
    <div class="columns grid w-full">

    <?php

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            ?>
            <div class="column">
                <a href="<?= get_permalink(); ?>">
                    <?= get_the_post_thumbnail(); ?>
                    <p><?= get_the_title(); ?></p>
                </a>
            </div>
            <?php
        }
    }
    wp_reset_postdata();
    ?>

    </div>
</div>



    

