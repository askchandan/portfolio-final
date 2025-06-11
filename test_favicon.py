from PIL import Image, ImageDraw
import os

print("🎨 Starting favicon generation...")

# Check if source image exists
if os.path.exists("public/my-photo.jpg"):
    print("✅ Found my-photo.jpg")
else:
    print("❌ my-photo.jpg not found")
    exit(1)

# Test opening the image
try:
    with Image.open("public/my-photo.jpg") as img:
        print(f"📸 Image size: {img.size}")
        print(f"📸 Image mode: {img.mode}")
        
        # Create a simple 32x32 circular favicon as test
        img = img.convert('RGBA')
        size = 32
        
        # Get square crop from center
        width, height = img.size
        min_dimension = min(width, height)
        left = (width - min_dimension) // 2
        top = (height - min_dimension) // 2
        right = left + min_dimension
        bottom = top + min_dimension
        
        img_square = img.crop((left, top, right, bottom))
        img_resized = img_square.resize((size, size), Image.Resampling.LANCZOS)
        
        # Create circular mask
        circular_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        mask = Image.new('L', (size, size), 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, size, size), fill=255)
        
        circular_img.paste(img_resized, (0, 0))
        circular_img.putalpha(mask)
        
        # Save test favicon
        circular_img.save("public/favicon-32x32.png", 'PNG')
        print("✅ Created test favicon-32x32.png")
        
except Exception as e:
    print(f"❌ Error: {e}")
    import traceback
    traceback.print_exc()

print("🔍 Checking public folder:")
for file in os.listdir("public"):
    print(f"   • {file}")
