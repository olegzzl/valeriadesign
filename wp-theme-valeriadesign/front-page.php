<?php get_header(); ?>

<?php
$current_page = isset($_GET['show_page']) ? $_GET['show_page'] : '';

if ($current_page === 'materials') :
    ?>
    <div class="placeholder-page">
        <a href="<?php echo home_url('/'); ?>" class="back-btn" style="margin-bottom: 20px;">
            <i data-lucide="arrow-left"></i>
            <span>Назад до проєктів</span>
        </a>
        <h1 class="placeholder-page-title">Бібліотека матеріалів</h1>
        <p class="placeholder-page-desc">Переглядайте та керуйте всіма матеріалами, які використовуються у ваших дизайн-проєктах.</p>
        
        <div class="placeholder-card">
            <i data-lucide="construction"></i>
            <h3 class="placeholder-card-title">Цей розділ скоро з'явиться</h3>
            <p class="placeholder-card-text">Зараз ми розробляємо цю сторінку. Будь ласка, завітайте сюди пізніше.</p>
        </div>

        <div class="block-footer">
            <div class="block-footer-left">
                <span>© 2026 Valeria Design Studio. Усі права захищені.</span><br>
                <span>design by <a href="https://www.instagram.com/olegzzl/" target="_blank">olegzzl</a></span>
            </div>
            <div class="block-footer-right">
                <a href="tel:+380501234567" class="block-footer-phone">
                    <i data-lucide="phone"></i>
                    <span>+38 (050) 123-45-67</span>
                </a>
                <div class="block-footer-socials">
                    <a href="https://www.instagram.com/olegzzl/" target="_blank" class="social-icon-btn"><i data-lucide="instagram"></i></a>
                    <a href="https://t.me/olegzzl" target="_blank" class="social-icon-btn"><i data-lucide="send"></i></a>
                </div>
            </div>
        </div>
    </div>
    <?php

elseif ($current_page === 'clients') :
    ?>
    <div class="placeholder-page">
        <a href="<?php echo home_url('/'); ?>" class="back-btn" style="margin-bottom: 20px;">
            <i data-lucide="arrow-left"></i>
            <span>Назад до проєктів</span>
        </a>
        <h1 class="placeholder-page-title">Клієнти</h1>
        <p class="placeholder-page-desc">Керуйте відносинами з вашими клієнтами, контактами та історією проєктів.</p>
        
        <div class="placeholder-card">
            <i data-lucide="construction"></i>
            <h3 class="placeholder-card-title">Цей розділ скоро з'явиться</h3>
            <p class="placeholder-card-text">Зараз мы розробляємо цю сторінку. Будь ласка, завітайте сюди пізніше.</p>
        </div>

        <div class="block-footer">
            <div class="block-footer-left">
                <span>© 2026 Valeria Design Studio. Усі права захищені.</span><br>
                <span>design by <a href="https://www.instagram.com/olegzzl/" target="_blank">olegzzl</a></span>
            </div>
            <div class="block-footer-right">
                <a href="tel:+380501234567" class="block-footer-phone">
                    <i data-lucide="phone"></i>
                    <span>+38 (050) 123-45-67</span>
                </a>
                <div class="block-footer-socials">
                    <a href="https://www.instagram.com/olegzzl/" target="_blank" class="social-icon-btn"><i data-lucide="instagram"></i></a>
                    <a href="https://t.me/olegzzl" target="_blank" class="social-icon-btn"><i data-lucide="send"></i></a>
                </div>
            </div>
        </div>
    </div>
    <?php

elseif ($current_page === 'orders') :
    ?>
    <div class="placeholder-page">
        <a href="<?php echo home_url('/'); ?>" class="back-btn" style="margin-bottom: 20px;">
            <i data-lucide="arrow-left"></i>
            <span>Назад до проєктів</span>
        </a>
        <h1 class="placeholder-page-title">Замовлення</h1>
        <p class="placeholder-page-desc">Відстежуйте замовлення на виробництво, доставку та комунікацію з постачальниками.</p>
        
        <div class="placeholder-card">
            <i data-lucide="construction"></i>
            <h3 class="placeholder-card-title">Цей розділ скоро з'явиться</h3>
            <p class="placeholder-card-text">Зараз ми розробляємо цю сторінку. Будь ласка, завітайте сюди пізніше.</p>
        </div>

        <div class="block-footer">
            <div class="block-footer-left">
                <span>© 2026 Valeria Design Studio. Усі права захищені.</span><br>
                <span>design by <a href="https://www.instagram.com/olegzzl/" target="_blank">olegzzl</a></span>
            </div>
            <div class="block-footer-right">
                <a href="tel:+380501234567" class="block-footer-phone">
                    <i data-lucide="phone"></i>
                    <span>+38 (050) 123-45-67</span>
                </a>
                <div class="block-footer-socials">
                    <a href="https://www.instagram.com/olegzzl/" target="_blank" class="social-icon-btn"><i data-lucide="instagram"></i></a>
                    <a href="https://t.me/olegzzl" target="_blank" class="social-icon-btn"><i data-lucide="send"></i></a>
                </div>
            </div>
        </div>
    </div>
    <?php

elseif ($current_page === 'settings') :
    ?>
    <div class="placeholder-page">
        <a href="<?php echo home_url('/'); ?>" class="back-btn" style="margin-bottom: 20px;">
            <i data-lucide="arrow-left"></i>
            <span>Назад до проєктів</span>
        </a>
        <h1 class="placeholder-page-title">Налаштування</h1>
        <p class="placeholder-page-desc">Керуйте профілем вашої студії, уподобаннями та інтеграціями.</p>
        
        <div class="placeholder-card">
            <i data-lucide="construction"></i>
            <h3 class="placeholder-card-title">Цей розділ скоро з'явиться</h3>
            <p class="placeholder-card-text">Зараз ми розробляємо цю сторінку. Будь ласка, завітайте сюди пізніше.</p>
        </div>

        <div class="block-footer">
            <div class="block-footer-left">
                <span>© 2026 Valeria Design Studio. Усі права захищені.</span><br>
                <span>design by <a href="https://www.instagram.com/olegzzl/" target="_blank">olegzzl</a></span>
            </div>
            <div class="block-footer-right">
                <a href="tel:+380501234567" class="block-footer-phone">
                    <i data-lucide="phone"></i>
                    <span>+38 (050) 123-45-67</span>
                </a>
                <div class="block-footer-socials">
                    <a href="https://www.instagram.com/olegzzl/" target="_blank" class="social-icon-btn"><i data-lucide="instagram"></i></a>
                    <a href="https://t.me/olegzzl" target="_blank" class="social-icon-btn"><i data-lucide="send"></i></a>
                </div>
            </div>
        </div>
    </div>
    <?php

elseif ($current_page === 'contacts') :
    ?>
    <div class="placeholder-page">
        <a href="<?php echo home_url('/'); ?>" class="back-btn" style="margin-bottom: 20px;">
            <i data-lucide="arrow-left"></i>
            <span>Назад до проєктів</span>
        </a>
        <h1 class="placeholder-page-title">Контакти</h1>
        <p class="placeholder-page-desc">Зв'яжіться з нами для консультації чи пропозицій.</p>
        
        <div class="contact-container">
            <div class="contact-card">
                <form action="#" method="POST" onsubmit="event.preventDefault(); alert('Повідомлення надіслано!');">
                    <div class="form-group">
                        <label class="form-label">Ім'я</label>
                        <input type="text" class="form-input" placeholder="Ваше ім'я" required />
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-input" placeholder="example@domain.com" required />
                    </div>
                    <div class="form-group">
                        <label class="form-label">Повідомлення</label>
                        <textarea class="form-textarea" placeholder="Ваше повідомлення" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="form-submit-btn">Надіслати</button>
                </form>
            </div>
        </div>

        <div class="block-footer">
            <div class="block-footer-left">
                <span>© 2026 Valeria Design Studio. Усі права захищені.</span><br>
                <span>design by <a href="https://www.instagram.com/olegzzl/" target="_blank">olegzzl</a></span>
            </div>
            <div class="block-footer-right">
                <a href="tel:+380501234567" class="block-footer-phone">
                    <i data-lucide="phone"></i>
                    <span>+38 (050) 123-45-67</span>
                </a>
                <div class="block-footer-socials">
                    <a href="https://www.instagram.com/olegzzl/" target="_blank" class="social-icon-btn"><i data-lucide="instagram"></i></a>
                    <a href="https://t.me/olegzzl" target="_blank" class="social-icon-btn"><i data-lucide="send"></i></a>
                </div>
            </div>
        </div>
    </div>
    <?php

else :
    // Main Dashboard Projects Grid
    ?>
    <div class="dashboard-header-modern">
        <div class="dashboard-header-left">
            <button class="mobile-menu-btn" style="display: none;">
                <i data-lucide="menu"></i>
            </button>
            <div>
                <h1 class="dashboard-title">Valeria Design Studio</h1>
                <p class="dashboard-subtitle">Дизайнер меблів</p>
            </div>
        </div>
        <div class="dashboard-header-right" style="display: flex; gap: 8px;">
            <a href="tel:+380501234567" class="nav-item" style="margin-bottom: 0; padding: 12px; justify-content: center; height: 44px; width: 44px;">
                <i data-lucide="phone"></i>
            </a>
            <a href="<?php echo esc_url(add_query_arg('show_page', 'contacts', home_url('/'))); ?>" class="nav-item" style="margin-bottom: 0; padding: 12px; justify-content: center; height: 44px; width: 44px;">
                <i data-lucide="message-square"></i>
            </a>
        </div>
    </div>

    <div class="projects-grid">
        <?php
        $args = array(
            'post_type' => 'project',
            'posts_per_page' => -1
        );
        $projects_query = new WP_Query($args);

        if ($projects_query->have_posts()) :
            while ($projects_query->have_posts()) : $projects_query->the_post();
                ?>
                <a href="<?php the_permalink(); ?>" class="project-card">
                    <?php if (has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail('large', array('class' => 'project-image')); ?>
                    <?php else: ?>
                        <!-- Placeholder image -->
                        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop" class="project-image" alt="Placeholder">
                    <?php endif; ?>
                    
                    <div class="project-info">
                        <h3 class="project-title"><?php the_title(); ?></h3>
                        <div class="project-meta">
                            <span class="project-short-desc"><?php echo esc_html(wp_trim_words(get_the_excerpt(), 15)); ?></span>
                        </div>
                    </div>
                </a>
                <?php
            endwhile;
            wp_reset_postdata();
        else:
            ?>
            <div style="background: #edf2f7; padding: 24px; border-radius: 8px; text-align: center; grid-column: 1 / -1;">
                <p style="color: #4a5568;">У вас поки немає проєктів. Ви можете додати їх в панелі адміністратора WordPress у розділі "Projects".</p>
            </div>
            <?php
        endif;
        ?>
    </div>

    <div class="block-footer" style="margin-top: 40px;">
        <div class="block-footer-left">
            <span>© 2026 Valeria Design Studio. Усі права захищені.</span><br>
            <span>design by <a href="https://www.instagram.com/olegzzl/" target="_blank">olegzzl</a></span>
        </div>
        <div class="block-footer-right">
            <a href="tel:+380501234567" class="block-footer-phone">
                <i data-lucide="phone"></i>
                <span>+38 (050) 123-45-67</span>
            </a>
            <div class="block-footer-socials">
                <a href="https://www.instagram.com/olegzzl/" target="_blank" class="social-icon-btn"><i data-lucide="instagram"></i></a>
                <a href="https://t.me/olegzzl" target="_blank" class="social-icon-btn"><i data-lucide="send"></i></a>
            </div>
        </div>
    </div>
    <?php
endif;
?>

<?php get_footer(); ?>
