<?php get_header(); ?>

<?php if ( have_posts() ) : ?>
    <div style="padding: 20px;">
        <?php while ( have_posts() ) : the_post(); ?>
            <article>
                <h2><a href="<?php the_permalink(); ?>" style="color: inherit; text-decoration: none;"><?php the_title(); ?></a></h2>
                <div><?php the_excerpt(); ?></div>
            </article>
        <?php endwhile; ?>
    </div>
<?php else : ?>
    <p>Контент не знайдено</p>
<?php endif; ?>

<?php get_footer(); ?>
