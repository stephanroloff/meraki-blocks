<?php
/**
 * Desktop-Mobile Block
 *
 * @package Meraki\Blocks\Dynamic
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            Block context.
 */

$wrapper_attributes = get_block_wrapper_attributes(
    [
        'class' => 'breakpoint-' . $attributes["breakpointWidth"] . ' frontend-view'
    ]   
);

// Cargar el HTML en DOMDocument.
$dom = new DOMDocument();
libxml_use_internal_errors(true); // Ignorar errores de formato HTML.
$dom->loadHTML($content);
libxml_clear_errors();

// Usar XPath para seleccionar el elemento con la clase 'mobile'.
$xpath = new DOMXPath($dom);
$elementsDesktop = $xpath->query("//*[contains(@class, 'desktop-layout')]");
$elementsMobile = $xpath->query("//*[contains(@class, 'mobile-layout')]");

// Mostrar el contenido HTML completo del elemento seleccionado.

$user_agent = $_SERVER['HTTP_USER_AGENT'];
    
// Lista básica de agentes móviles
$moviles = ['iPhone', 'Android', 'webOS', 'BlackBerry', 'iPod', 'Opera Mini', 'IEMobile'];
$tablets = ['iPad', 'Android', 'Silk', 'Kindle', 'Tablet'];

$device ='none';

foreach ($moviles as $movil) {
    if (stripos($user_agent, $movil) !== false) {
        $device = 'Mobile';
    }
}

foreach ($tablets as $tablet) {
    if (stripos($user_agent, $tablet) !== false) {
        $device = 'Tablet';

    }
}
if($device == 'none'){
    $device = 'Desktop';
}
?>

<div <?php echo $wrapper_attributes?>>

    <?php
    if($attributes['renderType'] == 'server-side-render'){
        if($device == 'Desktop' || $device == 'Tablet'){
            foreach ($elementsDesktop as $element) {
                echo $dom->saveHTML($element); // Muestra todo el contenido HTML del nodo.
            }
        }
        if($device == 'Mobile'){
            foreach ($elementsMobile as $element) {
                echo $dom->saveHTML($element); // Muestra todo el contenido HTML del nodo.
            }
        }
    }else{
        echo $content;
    }



    ?>
</div>
    

