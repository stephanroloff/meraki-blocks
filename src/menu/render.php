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
$logo = get_field('logo', 'option');
$breakpoint = get_field('breakpoint', 'option');
?>

<div <?php echo $wrapper_attributes?> data-breakpoint="<?= $breakpoint; ?>">

    <nav class="navigation">

        <div class="navigation-intern">
            <div class="logo">
                <a href="/">
                    <img src="<?= $logo;?>" width="200" height="200" alt="homepage-logo">
                </a>
            </div>

            <div class="menu-desktop">
                <?php
                if( have_rows('links', 'option') ):
                    while( have_rows('links', 'option') ) : the_row();

                        $icon = get_sub_field('icon', 'option');
                        $link_name = get_sub_field('link_name', 'option');
                        $link_url = get_sub_field('link_url', 'option');
                        $only_icon = get_sub_field('only_icon', 'option');
                        ?>
                        
                        <li>
                            <a href="<?= $link_url; ?>">
                                <?php if ($icon): ?>
                                    <img src="<?= $icon; ?>" width="20" height="20" alt="link-icon">
                                <?php endif; ?>
                                <?php if (!$only_icon): ?>
                                    <p><?= $link_name; ?></p>
                                <?php endif; ?>
                            </a>
                            <?php if (have_rows('submenus', 'option')): ?>
                            <ul class="submenu">
                                <?php
                                while( have_rows('submenus', 'option') ) : the_row();
                                    $submenu_link_name = get_sub_field('submenu_link_name', 'option');
                                    $submenu_link_url = get_sub_field('submenu_link_url', 'option');

                                    ?>
                                    <li>
                                        <a href="<?= $submenu_link_url; ?>">
                                            <p><?= $submenu_link_name; ?></p>
                                        </a>
                                    </li>
                                    <?php
                                endwhile;
                                ?>
                            </ul>
                             <?php endif; ?>
                        </li>
                        <?php

                    endwhile;

                else :
                    echo 'No texts';
                endif;
                ?>
            </div>
    
            <div class="burger-menu">
                <div class="level-above"></div>
                <div class="level-middle"></div>
                <div class="level-below"></div>
            </div>
        </div>

        <div class="menu-links">
            <div class="menu-intern">
                <?php
                if( have_rows('links', 'option') ):
                    while( have_rows('links', 'option') ) : the_row();

                        $icon = get_sub_field('icon', 'option');
                        $link_name = get_sub_field('link_name', 'option');
                        $link_url = get_sub_field('link_url', 'option');

                        if($icon){
                            ?>
                            <img src="<?= $icon;?>" width="20" height="20" alt="link-icon">
                            <?php
                        }
                        echo $link_name;
                        echo $link_url;
                        echo '<br><br>';

                        while( have_rows('submenus', 'option') ) : the_row();
                            $submenu_link_name = get_sub_field('submenu_link_name', 'option');
                            $submenu_link_url = get_sub_field('submenu_link_url', 'option');
                            
                            echo $submenu_link_name;
                            echo $submenu_link_url;
                            echo '<br><br>';
                        endwhile;

                    endwhile;

                else :
                    echo 'No texts';
                endif;
                ?>
            </div>
        </div>

    </nav>
<div>
    

