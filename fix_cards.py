with open('d:/ANTIGRAVITY/Site Market/code.html', 'r', encoding='utf-8') as f:
    lines = f.read().split('\n')

# Find the grid start
grid_start = -1
for i, line in enumerate(lines):
    if '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">' in line:
        grid_start = i
        break

# The messed up cards are right after grid_start.
# The good cards (4, 5, 6) start at the index where '<!-- Card 4 -->' appears.
card4_start = -1
for i, line in enumerate(lines):
    if '<!-- Card 4 -->' in line:
        card4_start = i
        break

grid_end = -1
for i, line in enumerate(lines):
    if i > card4_start and '</section>' in line:
        grid_end = i - 1 # The </div> of the grid
        break

good_cards = lines[card4_start:grid_end]

# Rename Card 4 to 1, 5 to 2, 6 to 3 in the copy
copy_cards = []
for line in good_cards:
    if '<!-- Card 4 -->' in line:
        copy_cards.append(line.replace('Card 4', 'Card 1'))
    elif '<!-- Card 5 -->' in line:
        copy_cards.append(line.replace('Card 5', 'Card 2'))
    elif '<!-- Card 6 -->' in line:
        copy_cards.append(line.replace('Card 6', 'Card 3'))
    else:
        copy_cards.append(line)

new_grid_content = copy_cards + good_cards

# Also replace currency
for i in range(len(new_grid_content)):
    new_grid_content[i] = new_grid_content[i].replace('₽', 'грн.')

new_lines = lines[:grid_start + 1] + new_grid_content + lines[grid_end:]

with open('d:/ANTIGRAVITY/Site Market/code.html', 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))
