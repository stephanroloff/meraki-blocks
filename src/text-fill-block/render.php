<?php
/**
 * Text Fill Block
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
		'class' => 'custom-class-frontend',
	]
);

$browserHeight = $attributes['browserHeight'];
$speed = $attributes['speed'];


?>
<div <?php echo $wrapper_attributes?> data-browser-height=<?= $browserHeight?> data-speed=<?= $speed?>>
    <div class="text-fill-container" style="text-align: <?php echo $attributes['textAlign']?>;">

        <?php if($attributes['headingSelected']==='h1'):?>
            <h1 class="text-foreground" style="background-image: linear-gradient(<?php echo $attributes['colorSelectedForeground']?>, <?php echo $attributes['colorSelectedForeground']?>);"><?php echo $attributes['text']?></h1>
            <h1 class="text-background" style="color: <?php echo $attributes['colorSelectedBackground']?>;"><?php echo $attributes['text']?></h1>
        <?php elseif($attributes['headingSelected']==='h2'): ?>
            <h2 class="text-foreground" style="background-image: linear-gradient(<?php echo $attributes['colorSelectedForeground']?>, <?php echo $attributes['colorSelectedForeground']?>);"><?php echo $attributes['text']?></h2>
            <h2 class="text-background" style="color: <?php echo $attributes['colorSelectedBackground']?>;"><?php echo $attributes['text']?></h2>

        <?php elseif($attributes['headingSelected']==='h3'): ?>
            <h3 class="text-foreground" style="background-image: linear-gradient(<?php echo $attributes['colorSelectedForeground']?>, <?php echo $attributes['colorSelectedForeground']?>);"><?php echo $attributes['text']?></h3>
            <h3 class="text-background" style="color: <?php echo $attributes['colorSelectedBackground']?>;"><?php echo $attributes['text']?></h3>

        <?php elseif($attributes['headingSelected']==='h4'): ?>
            <h4 class="text-foreground" style="background-image: linear-gradient(<?php echo $attributes['colorSelectedForeground']?>, <?php echo $attributes['colorSelectedForeground']?>);"><?php echo $attributes['text']?></h4>
            <h4 class="text-background" style="color: <?php echo $attributes['colorSelectedBackground']?>;"><?php echo $attributes['text']?></h4>

        <?php elseif($attributes['headingSelected']==='h5'): ?>
            <h5 class="text-foreground" style="background-image: linear-gradient(<?php echo $attributes['colorSelectedForeground']?>, <?php echo $attributes['colorSelectedForeground']?>);"><?php echo $attributes['text']?></h5>
            <h5 class="text-background" style="color: <?php echo $attributes['colorSelectedBackground']?>;"><?php echo $attributes['text']?></h5>

        <?php elseif($attributes['headingSelected']==='h6'): ?>
            <h6 class="text-foreground" style="background-image: linear-gradient(<?php echo $attributes['colorSelectedForeground']?>, <?php echo $attributes['colorSelectedForeground']?>);"><?php echo $attributes['text']?></h6>
            <h6 class="text-background" style="color: <?php echo $attributes['colorSelectedBackground']?>;"><?php echo $attributes['text']?></h6>

        <?php elseif($attributes['headingSelected']==='p'): ?>
            <p class="text-foreground" style="background-image: linear-gradient(<?php echo $attributes['colorSelectedForeground']?>, <?php echo $attributes['colorSelectedForeground']?>);"><?php echo $attributes['text']?></p>
            <p class="text-background" style="color: <?php echo $attributes['colorSelectedBackground']?>;"><?php echo $attributes['text']?></p>

        <?php endif; ?>
    </div>
</div>
    

