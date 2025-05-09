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
$post_type = $attributes['postType'];

$query = new WP_Query(array(
    'post_type'      => $post_type,
    'posts_per_page' => 3, 
    'orderby'        => 'rand', //random
    'post__not_in'   => array($post_id),
));
?>

<div <?php echo $wrapper_attributes?>>
    <div class="columns grid w-full">

    <?php

    if ($query->have_posts()):
        while ($query->have_posts()) {
            $query->the_post();
            ?>
            <div class="column">
                <a href="<?= get_permalink(); ?>">
                    <div class="img-wrapper">
                        <?php if (has_post_thumbnail()): ?>
                            <?= get_the_post_thumbnail(); ?>
                        <?php else: ?>
                            <div class="img-placeholder">
                                <p>Post without a thumbnail image <br> Please add one</p>
                            </div>
                        <?php endif; ?>
                    </div>
                    <div class="info-wrapper">
                        <div class="blue-line"></div>
                        <p class="title"><?= get_the_title(); ?></p>
                        <p class="excerpt"><?= wp_trim_words(get_the_excerpt(), 20, '...'); ?></p>
                    </div>
                </a>
            </div>
            <?php
        }
        wp_reset_postdata();
    else:
        echo 'No Posts available.';
    endif;
    ?>
    </div>
</div>



    

