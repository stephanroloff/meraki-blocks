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

function polylang_langswitch() {
    if ( function_exists( 'pll_the_languages' ) ) {
        $args = [
            'show_names' => 1,
            'raw' => 1, // Devuelve un array en lugar de HTML
        ];

        $languages = pll_the_languages( $args );

        // Si no hay idiomas, retornamos vacío
        if ( empty( $languages ) ) {
            return '';
        }

        // Obtener el idioma actual
        $current_language = null;
        foreach ( $languages as $lang ) {
            if ( $lang['current_lang'] ) {
                $current_language = $lang;
                break;
            }
        }

        // Si no se encuentra el idioma actual, retornamos vacío
        if ( !$current_language ) {
            return '';
        }

        $output = '<div class="polylang_langswitcher-wrapper" role="navigation" aria-label="Selector de idioma">';
        
        // Mostrar el idioma actual con la bandera en el botón
        $output .= '<button class="dropdown-btn" aria-haspopup="true" aria-expanded="false" id="dropdown-btn" aria-controls="language-menu">';
        
        // Agregar la bandera correspondiente al idioma actual
        $output .= '<div class="flag-container">';
        $output .= '<img heigth="20px" width="20px" src="' . esc_url( MY_PLUGIN_PATH_CUSTOM_BLOCKS ) . '/src/polylang-language-switcher-block/flags/' . strtolower( $lang['slug'] ) . '.svg" alt="' . esc_attr( $lang['name'] ) . '" />';  
        $output .= '</div>';
        
        $output .= esc_html( $current_language['name'] ) . '</button>';

        $output .= '<ul class="polylang_langswitcher" id="language-menu" role="menu" aria-labelledby="dropdown-btn">';

        // Mostrar las opciones de idioma, excluyendo el idioma actual
        foreach ( $languages as $lang ) {

            if ( $lang['current_lang'] ) {
                continue; // Excluimos el idioma actual
            }

            $output .= '<li role="menuitem">';
            $output .= '<a href="' . esc_url( $lang['url'] ) . '" data-lang="' . esc_html( $lang['name'] ) . '">';
            
            // Agregar la bandera correspondiente al idioma
            $output .= '<div class="flag-container">'; 
            $output .= '<img heigth="20px" width="20px" src="' . esc_url( MY_PLUGIN_PATH_CUSTOM_BLOCKS ) . '/src/polylang-language-switcher-block/flags/' . strtolower( $lang['slug'] ) . '.svg" alt="' . esc_attr( $lang['name'] ) . '" />';
            $output .= '</div>';
            
            $output .= esc_html( $lang['name'] ) . '</a>';
            $output .= '</li>';
        }

        $output .= '</ul>';
        $output .= '</div>';

        return $output;
    }
    return '';
}

add_shortcode( 'polylang', 'polylang_langswitch' );







?>
<div <?php echo $wrapper_attributes?>>
    <?php 
    echo do_shortcode('[polylang]');
    ?>
</div>
    

