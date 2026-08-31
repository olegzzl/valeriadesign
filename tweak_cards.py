with open('d:/ANTIGRAVITY/Site Market/code.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Wider cards (change grid)
content = content.replace('lg:grid-cols-3', 'lg:grid-cols-2')

# 2. Less rounding on outer card
content = content.replace('rounded-[2rem]', 'rounded-xl')

# 3. Less rounding on inner visual area
content = content.replace('rounded-[1.5rem]', 'rounded-lg')

# 4. Fix phone overflow
content = content.replace('-bottom-1 -right-2', 'bottom-0 right-2')

# 5. Fix mobile mockup frame rounding
# Phone frame has rounded-[1.25rem] and screen has rounded-[1rem]
content = content.replace('rounded-[1.25rem]', 'rounded-xl')
content = content.replace('rounded-[1rem]', 'rounded-lg')

# Write back
with open('d:/ANTIGRAVITY/Site Market/code.html', 'w', encoding='utf-8') as f:
    f.write(content)
