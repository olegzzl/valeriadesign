import re

with open('d:/ANTIGRAVITY/Site Market/code.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Change grid to 3 columns
content = content.replace('lg:grid-cols-2', 'lg:grid-cols-3')

# 2. Remove backdrop-blur from the overlays (so hovered screen doesn't blur)
# Overlay class contains: "absolute inset-0 flex items-center justify-center opacity-0 ... transition-opacity duration-300 bg-black/10 backdrop-blur-[2px] z-20 pointer-events-none"
content = content.replace('backdrop-blur-[2px]', '')

# The laptop image blur logic is already correct: 
# <img ... class="... transition-all duration-300 group-has-[.phone-device:hover]/visual:blur-[3px]" ...>
# The phone image blur logic is also correct:
# <img ... class="... transition-all duration-300 group-has-[.laptop-device:hover]/visual:blur-[3px]" ...>

# Just to make sure we don't change anything else.

with open('d:/ANTIGRAVITY/Site Market/code.html', 'w', encoding='utf-8') as f:
    f.write(content)
