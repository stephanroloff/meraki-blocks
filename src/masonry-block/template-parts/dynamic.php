<a href="<?= get_the_permalink( get_the_ID() ); ?>">
    <div class="img-wrapper">
        <?php echo get_the_post_thumbnail( get_the_ID(), 'full' ); ?>
    </div>
    <p class="title"><?php echo get_the_title( get_the_ID() ); ?></p>
</a>