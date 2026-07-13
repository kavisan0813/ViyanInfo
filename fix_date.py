import os
from PIL import Image, ImageDraw, ImageFont

img = Image.open('public/images/team1_backup.png')

patch = img.crop((650, 970, 950, 1010))
patch = patch.resize((300, 90))

img.paste(patch, (650, 870))

try:
    font = ImageFont.truetype('C:/Windows/Fonts/inkfree.ttf', 58)
except:
    font = ImageFont.load_default()

text = '07/04/26'
x, y = 660, 882
color = (15, 15, 15)

draw = ImageDraw.Draw(img)

for dx in range(3):
    for dy in range(3):
        draw.text((x+dx, y+dy), text, fill=color, font=font)

img.save('public/images/team1.png')
print('Done')
