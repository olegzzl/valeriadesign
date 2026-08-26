<?php
if (isset($_GET['debug_theme'])) {
    echo "Active Template: " . get_page_template() . "\n";
    echo "Theme directory: " . get_template_directory() . "\n";
    echo "Files in theme:\n";
    print_r(scandir(get_template_directory()));
    exit;
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
    <script src="https://unpkg.com/lucide@latest"></script>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div class="theme-wrapper" id="theme-wrapper">
    <!-- Color Switcher -->
    <div class="color-switcher">
        <div class="color-btn" data-color="#bfc4c9" style="background: #bfc4c9;"></div>
        <div class="color-btn active" data-color="#ede8dd" style="background: #ede8dd;"></div>
        <div class="color-btn" data-color="#2d4a43" style="background: #2d4a43;"></div>
    </div>

    <div class="main-layout">
        <!-- Sidebar -->
        <aside class="sidebar">
            <nav class="sidebar-nav">
                <?php 
                // Hardcoded items for design parity, but could be dynamic via wp_nav_menu
                $home_url = home_url('/');
                ?>
                <a href="<?php echo esc_url($home_url); ?>" class="nav-item <?php echo is_front_page() ? 'active' : ''; ?>">
                    <i data-lucide="layout-grid"></i>
                    <span>Проєкти</span>
                </a>
                <a href="#" class="nav-item">
                    <i data-lucide="package"></i>
                    <span>Матеріали</span>
                </a>
                <a href="#" class="nav-item">
                    <i data-lucide="users"></i>
                    <span>Клієнти</span>
                </a>
                <a href="#" class="nav-item">
                    <i data-lucide="shopping-cart"></i>
                    <span>Замовлення</span>
                </a>
                <a href="#" class="nav-item">
                    <i data-lucide="phone"></i>
                    <span>Контакти</span>
                </a>
                <a href="#" class="nav-item">
                    <i data-lucide="settings"></i>
                    <span>Налаштування</span>
                </a>
            </nav>
        </aside>

        <!-- Content Area -->
        <main class="content-area">
            <div class="content-scroll">
