<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); 
    $post_id = get_the_ID();
    $category = get_post_meta($post_id, 'category', true) ?: 'Дизайн';
    $year = get_post_meta($post_id, 'year', true) ?: date('Y');
    $client = get_post_meta($post_id, 'client', true) ?: '';
    $dimensions = get_post_meta($post_id, 'dimensions', true) ?: '';
    
    $materials_meta = get_post_meta($post_id, 'materials', true);
    $materials = array();
    if ($materials_meta) {
        if (is_array($materials_meta)) {
            $materials = $materials_meta;
        } else if (is_serialized($materials_meta)) {
            $materials = maybe_unserialize($materials_meta);
        } else {
            $materials = explode("\n", str_replace("\r", "", $materials_meta));
        }
    }
    
    $challenge = get_post_meta($post_id, 'challenge', true) ?: '';
    $solution = get_post_meta($post_id, 'solution', true) ?: '';
?>

<div class="project-detail">
    <!-- Back Button & Header -->
    <div class="detail-header">
        <a href="<?php echo home_url('/'); ?>" class="back-btn">
            <i data-lucide="arrow-left"></i>
            <span>Назад до проєктів</span>
        </a>
    </div>

    <div class="project-meta-badges">
        <span class="badge badge-category"><?php echo esc_html($category); ?></span>
        <span class="badge badge-year"><?php echo esc_html($year); ?></span>
    </div>

    <h1 class="project-title-large"><?php the_title(); ?></h1>
    <p class="project-subtitle"><?php echo esc_html(get_the_excerpt()); ?></p>

    <!-- Main Image -->
    <?php if (has_post_thumbnail()) : ?>
        <div class="detail-main-image-wrapper">
            <?php the_post_thumbnail('full', array('class' => 'detail-main-image')); ?>
        </div>
    <?php endif; ?>

    <!-- Two Column Layout: Specs & Overview -->
    <div class="detail-grid">
        <!-- Specs Column -->
        <div class="specs-column">
            <h4 class="column-title">Деталі проєкту</h4>
            
            <div class="spec-items">
                <?php if ($client): ?>
                    <div class="spec-item">
                        <i data-lucide="user"></i>
                        <div>
                            <span class="spec-label">Клієнт</span>
                            <span class="spec-value"><?php echo esc_html($client); ?></span>
                        </div>
                    </div>
                <?php endif; ?>

                <div class="spec-item">
                    <i data-lucide="calendar"></i>
                    <div>
                        <span class="spec-label">Рік</span>
                        <span class="spec-value"><?php echo esc_html($year); ?></span>
                    </div>
                </div>

                <?php if ($dimensions): ?>
                    <div class="spec-item">
                        <i data-lucide="ruler"></i>
                        <div>
                            <span class="spec-label">Розміри</span>
                            <span class="spec-value"><?php echo esc_html($dimensions); ?></span>
                        </div>
                    </div>
                <?php endif; ?>

                <?php if (!empty($materials)): ?>
                    <div class="spec-item align-start">
                        <i data-lucide="tag" style="margin-top: 4px;"></i>
                        <div>
                            <span class="spec-label">Матеріали</span>
                            <?php foreach ($materials as $material): 
                                if (trim($material) === '') continue;
                            ?>
                                <span class="spec-value"><?php echo esc_html(trim($material)); ?></span>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>

        <!-- Overview Column -->
        <div class="overview-column">
            <h4 class="column-title">Опис проєкту</h4>
            <div class="project-full-description">
                <?php the_content(); ?>
            </div>
        </div>
    </div>

    <!-- Separator -->
    <hr class="detail-separator" />

    <!-- Challenge and Solution Section -->
    <?php if ($challenge || $solution): ?>
        <div class="challenge-solution-grid">
            <?php if ($challenge): ?>
                <div class="block-challenge">
                    <h5 class="block-title">Завдання</h5>
                    <p><?php echo esc_html($challenge); ?></p>
                </div>
            <?php endif; ?>

            <?php if ($solution): ?>
                <div class="block-solution">
                    <h5 class="block-title">Рішення</h5>
                    <p><?php echo esc_html($solution); ?></p>
                </div>
            <?php endif; ?>
        </div>
    <?php endif; ?>
</div>

<?php endwhile; ?>

<?php get_footer(); ?>
