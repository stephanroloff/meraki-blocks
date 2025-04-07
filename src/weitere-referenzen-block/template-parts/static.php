<a href="<?= get_permalink(); ?>">
    <div class="img-wrapper">
        <?= get_the_post_thumbnail(); ?>
    </div>
    <div class="info-wrapper">
        <div class="blue-line"></div>
        <p class="title"><?= get_the_title(); ?></p>
        <p class="excerpt"><?= get_the_excerpt(); ?></p>
    </div>
</a>