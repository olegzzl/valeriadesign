with open('d:/ANTIGRAVITY/Site Market/code.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the background color class
content = content.replace('bg-[#f5f8fb]', 'bg-transparent')

# Write back
with open('d:/ANTIGRAVITY/Site Market/code.html', 'w', encoding='utf-8') as f:
    f.write(content)
