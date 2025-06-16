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
$megamenu = get_field('megamenu', 'option');
$breakpoint = get_field('breakpoint', 'option');

if($logo){
    $logo_svg = file_get_contents(get_attached_file($logo));
}else{
    $logo_svg = file_get_contents(MY_PLUGIN_PATH_CUSTOM_BLOCKS . 'src/menu/assets/php.svg');
}

?>

<div <?php echo $wrapper_attributes?> data-breakpoint="<?= $breakpoint; ?>">

    <nav class="navigation">

        <div class="navigation-intern">
            <div class="logo">
                <a href="/">
                    <?= $logo_svg? $logo_svg :'no-logo';?>
                </a>
            </div>
            <div class="menu-desktop">
                <?php
                if( have_rows('links', 'option') ):
                    while( have_rows('links', 'option') ) : the_row();

                        $icon = get_sub_field('icon', 'option');
                        if($icon) $icon_svg = file_get_contents(get_attached_file($icon));
                        $link_name = get_sub_field('link_name', 'option');
                        $link_url = get_sub_field('link_url', 'option');
                        $only_icon = get_sub_field('only_icon', 'option');
                        ?>
                        
                        <li>
                            <a href="<?= $link_url; ?>">
                                
                                <?php if ($icon): ?>
                                    <?= $icon_svg? $icon_svg : 'no-icon'; ?>
                                <?php endif; ?>
                                <?php if (!$only_icon): ?>
                                    <p><?= $link_name; ?></p>
                                <?php endif; ?>
                            </a>
                            <div class="submenu-wrapper <?= $megamenu ? 'mega-menu' : 'standard-menu'; ?>">

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
                                <div class="extra-content"></div>
                            </div>

                        </li>
                        <?php

                    endwhile;

                else :
                    echo 'No texts';
                endif;
                ?>
            </div>
    
            <div class="burger-menu" tabindex='0'>
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
                        ?>
                        <div class="link-group">

                            <a class="menu-link" href="<?= $link_url; ?>">
                                <?php if ($icon): ?>
                                    <?= $icon_svg? $icon_svg : 'no-icon'; ?>
                                <?php endif; ?>
                                <p><?= $link_name; ?></p>
                            </a>
                            <?php
                            while( have_rows('submenus', 'option') ) : the_row();
                                $submenu_link_name = get_sub_field('submenu_link_name', 'option');
                                $submenu_link_url = get_sub_field('submenu_link_url', 'option');
                                ?>

                                <a class="submenu-link" href="<?= $submenu_link_url; ?>">
                                    <p><?= $submenu_link_name; ?></p>
                                </a>
                                
                                <?php
                            endwhile;
                            ?>
                        </div>
                    <?php
                    endwhile;

                else :
                    echo 'No texts';
                endif;
                ?>
                <div class="extra-content"></div>
            </div>
        </div>

    </nav>
<div>
    

