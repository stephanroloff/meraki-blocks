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

$team = get_field('mitarbeiter', 'options');  

if(!$team){
    echo "Es gibt keine Mitarbeiter.";
    return;
}

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
?>

<div <?php echo $wrapper_attributes; ?> <?= $dataAttr?>>
   
    <?php foreach ($team as $key => $value): ?>
        <!-- <div class="person fade-in-up-250"> -->
        <div class="masonry-item fade-in-up-250 person">
            <img src="<?= $value['bild']['url']?>" alt="<?= $value['bild']['alt']?>">
            <h3><?= $value['name']; ?></h3>
            <?php if($attributes['language']=='deutsch'):?>
                <p><?= $value['stelle']; ?></p>
            <? else: ?>
                <p><?= $value['stelle_englisch']; ?></p>
            <? endif; ?>
        </div>
    <?php endforeach; ?>
    
</div>
    

