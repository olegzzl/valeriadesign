import re

with open('d:/ANTIGRAVITY/Site Market/code.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add group/visual to visual area
content = content.replace(
    'class="bg-transparent rounded-lg relative w-full pt-6 pb-8 flex items-end px-4 mb-5 overflow-hidden"',
    'class="bg-transparent rounded-lg relative w-full pt-6 pb-8 flex items-end px-4 mb-5 overflow-hidden group/visual"'
)

# 2. Laptop wrapper: remove group-hover translation, add laptop-device and group/laptop
content = content.replace(
    'class="relative w-[85%] z-10 drop-shadow-md group-hover:-translate-y-1 transition-transform duration-300"',
    'class="relative w-[85%] z-10 drop-shadow-md transition-transform duration-300 laptop-device group/laptop"'
)

# 3. Laptop image and overlay
# Find the laptop img tag and replace it
# It looks like: <img alt="Desktop View" class="w-full h-full object-cover" src="..."/>
# Because src varies, we use regex.
laptop_img_pattern = r'(<img alt="Desktop View" class="w-full h-full object-cover" src="[^"]+"/>)'
laptop_replacement = (
    r'<img alt="Desktop View" class="w-full h-full object-cover transition-all duration-300 group-has-[.phone-device:hover]/visual:blur-[3px]" src="\g<1>"/>'
    # Wait, \g<1> includes the whole img tag! So replacing it like this would duplicate.
)
# Let's just do a regex replace on the class of the image
content = re.sub(
    r'<img alt="Desktop View" class="w-full h-full object-cover"',
    r'<img alt="Desktop View" class="w-full h-full object-cover transition-all duration-300 group-has-[.phone-device:hover]/visual:blur-[3px]"',
    content
)
# Add overlay after the laptop image. The image is followed by </div>.
content = re.sub(
    r'(<img alt="Desktop View"[^>]+/>)',
    r'\1\n<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/laptop:opacity-100 transition-opacity duration-300 bg-black/10 backdrop-blur-[2px] z-20 pointer-events-none">\n<span class="bg-white/95 text-slate-900 px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">Открыть</span>\n</div>',
    content
)

# 4. Phone wrapper: remove group-hover classes, add phone-device and group/phone
content = content.replace(
    'class="absolute bottom-0 right-2 w-[28%] aspect-[9/19.5] bg-[#1c1c1e] rounded-xl p-1 shadow-2xl z-20 border border-[#333] group-hover:-translate-y-3 group-hover:scale-105 transition-all duration-300"',
    'class="absolute bottom-0 right-2 w-[28%] aspect-[9/19.5] bg-[#1c1c1e] rounded-xl p-1 shadow-2xl z-20 border border-[#333] transition-all duration-300 phone-device group/phone"'
)

# 5. Phone image and overlay
content = re.sub(
    r'<img alt="Mobile View" class="w-full h-full object-cover"',
    r'<img alt="Mobile View" class="w-full h-full object-cover transition-all duration-300 group-has-[.laptop-device:hover]/visual:blur-[3px]"',
    content
)
content = re.sub(
    r'(<img alt="Mobile View"[^>]+/>)',
    r'\1\n<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/phone:opacity-100 transition-opacity duration-300 bg-black/10 backdrop-blur-[2px] z-20 pointer-events-none">\n<span class="bg-white/95 text-slate-900 px-2 py-0.5 rounded-full text-[10px] font-semibold shadow-md">Открыть</span>\n</div>',
    content
)


with open('d:/ANTIGRAVITY/Site Market/code.html', 'w', encoding='utf-8') as f:
    f.write(content)
