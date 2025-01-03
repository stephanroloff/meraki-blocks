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
    'post_type' => 'referenzen',
    'posts_per_page' => -1 
);

$referenzen_query = new WP_Query($args);  

if(!$referenzen_query){
    echo "Es gibt keine Referenzen.";
    return;
}

$i=0; 

$user_agent = $_SERVER['HTTP_USER_AGENT'];
    
// Lista básica de agentes móviles
$moviles = ['iPhone', 'Android', 'webOS', 'BlackBerry', 'iPod', 'Opera Mini', 'IEMobile'];
$tablets = ['iPad', 'Android', 'Silk', 'Kindle', 'Tablet'];

$user_device ='none';

foreach ($moviles as $movil) {
    if (stripos($user_agent, $movil) !== false) {
        $user_device = 'Mobile';
    }
}

foreach ($tablets as $tablet) {
    if (stripos($user_agent, $tablet) !== false) {
        $user_device = 'Tablet';
    }
}
if($user_device == 'none'){
    $user_device = 'Desktop';
}

// var_dump($referenzen_query->have_posts());
?>

<div <?php echo $wrapper_attributes?>>

   
        <?php if($user_device=="Desktop"):?>
            <div class="desktop">
                <div class="column column-1">
                    <?php $i=0; ?>
                    <?php if ($referenzen_query->have_posts()) {
                            while ($referenzen_query->have_posts()) {
                                $referenzen_query->the_post();
                                ?>
                                <?php $i++; ?>
                                <? if($i%3==1):?>
                                    <div class="hover-animation-1 person fade-in-up-250">
                                        <a href="<?= get_permalink(); ?>">
                                            <div class="img-wrapper">
                                                <?php the_post_thumbnail(); ?>
                                            </div>
                                            <h3><?php the_title(); ?></h3>
                                        </a>
                                    </div>
                                <? endif; ?>
                                <?php
                            }
                            wp_reset_postdata(); 
                        }
                    ?>
                </div>
                <div class="column column-2">
                    <?php $i=0; ?>
                    <?php if ($referenzen_query->have_posts()) {
                            while ($referenzen_query->have_posts()) {
                                $referenzen_query->the_post();
                                ?>
                                <?php $i++; ?>
                                <? if($i%3==2):?>
                                    <div class="hover-animation-2 person fade-in-up-250">
                                        <a href="<?= get_permalink(); ?>">
                                            <div class="img-wrapper">
                                                <?php the_post_thumbnail(); ?>
                                            </div>
                                            <h3><?php the_title(); ?></h3>
                                        </a>
                                    </div>
                                <? endif; ?>
                                <?php
                            }
                            wp_reset_postdata(); 
                        }
                    ?>
                </div>
                <div class="column column-3">
                    <?php $i=0; ?>
                    <?php if ($referenzen_query->have_posts()) {
                            while ($referenzen_query->have_posts()) {
                                $referenzen_query->the_post();
                                ?>
                                <?php $i++; ?>
                                <? if($i%3==0):?>
                                    <div class="hover-animation-3 person fade-in-up-250">
                                        <a href="<?= get_permalink(); ?>">
                                            <div class="img-wrapper">
                                                <?php the_post_thumbnail(); ?>
                                            </div>
                                            <h3><?php the_title(); ?></h3>
                                        </a>
                                    </div>
                                <? endif; ?>
                                <?php
                            }
                            wp_reset_postdata(); 
                        }
                    ?>
                </div>
            </div>
        <?php endif;?>

        <?php if($user_device=="Tablet"):?>
            <div class="tablet">
                <div class="column column-1">
                    <?php $i=0; ?>
                    <?php if ($referenzen_query->have_posts()) {
                            while ($referenzen_query->have_posts()) {
                                $referenzen_query->the_post();
                                ?>
                                <?php $i++; ?>
                                <? if($i%2==1):?>
                                    <div class="hover-animation-1 person fade-in-up-250">
                                        <a href="<?= get_permalink(); ?>">
                                            <div class="img-wrapper">
                                                <?php the_post_thumbnail(); ?>
                                            </div>
                                            <h3><?php the_title(); ?></h3>
                                        </a>
                                    </div>
                                <? endif; ?>
                                <?php
                            }
                            wp_reset_postdata(); 
                        }
                    ?>
                </div>
                <div class="column column-2">
                    <?php $i=0; ?>
                    <?php if ($referenzen_query->have_posts()) {
                            while ($referenzen_query->have_posts()) {
                                $referenzen_query->the_post();
                                ?>
                                <?php $i++; ?>
                                <? if($i%2==0):?>
                                    <div class="hover-animation-2 person fade-in-up-250">
                                        <a href="<?= get_permalink(); ?>">
                                            <div class="img-wrapper">
                                                <?php the_post_thumbnail(); ?>
                                            </div>
                                            <h3><?php the_title(); ?></h3>
                                        </a>
                                    </div>
                                <? endif; ?>
                                <?php
                            }
                            wp_reset_postdata(); 
                        }
                    ?>
                </div>
            </div>
        <?php endif;?>

        <?php if($user_device=="Mobile"):?>
            <div class="mobile">
                <div class="column column-1">
                <?php $i=0; ?>
                <?php if ($referenzen_query->have_posts()) {
                            while ($referenzen_query->have_posts()) {
                                $referenzen_query->the_post();
                                ?>
                                    <div class="person fade-in-up-250">
                                        <a href="<?= get_permalink(); ?>">
                                            <div class="img-wrapper">
                                                <?php the_post_thumbnail(); ?>
                                            </div>
                                            <h3><?php the_title(); ?></h3>
                                        </a>
                                    </div>
                                <?php
                            }
                            wp_reset_postdata(); 
                        }
                    ?>
                </div>
            </div>
        <?php endif;?>
</div>
    

