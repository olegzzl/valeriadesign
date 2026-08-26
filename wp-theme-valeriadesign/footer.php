            </div> <!-- .content-scroll -->
        </main> <!-- .content-area -->
    </div> <!-- .main-layout -->
</div> <!-- .theme-wrapper -->

<script>
    // Handle Color Switcher
    function changeThemeColor(color) {
        document.body.style.backgroundColor = color;
        const themeWrapper = document.getElementById('theme-wrapper');
        if (themeWrapper) {
            themeWrapper.style.backgroundColor = color;
        }
        
        // Update active class on buttons
        const buttons = document.querySelectorAll('.color-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-color') === color) {
                btn.classList.add('active');
            }
        });
        
        // Update specific text/border colors based on background
        const colorSwitcher = document.querySelector('.color-switcher');
        if (colorSwitcher) {
            if (color === '#2d4a43') {
                colorSwitcher.style.background = 'rgba(255, 255, 255, 0.08)';
                colorSwitcher.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                document.body.style.color = '#ffffff';
                
                // Adjust text color for specific elements
                document.querySelectorAll('.project-card, .sidebar, .content-area').forEach(el => {
                    el.style.color = '#1a202c'; // Keep inner cards dark text
                });
            } else {
                colorSwitcher.style.background = 'rgba(255, 255, 255, 0.8)';
                colorSwitcher.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                document.body.style.color = '#1a202c';
            }
        }
    }

    // Attach Event Listeners to all color switcher buttons
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.color-btn');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const color = this.getAttribute('data-color');
                if (color) {
                    changeThemeColor(color);
                }
            });
        });
    });

    // Initialize Lucide icons safely
    try {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    } catch (e) {
        console.error('Lucide icons failed to load:', e);
    }
</script>

<?php wp_footer(); ?>
</body>
</html>
