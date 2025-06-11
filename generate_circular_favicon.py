#!/usr/bin/env python3
"""
Circular Favicon Generator
Converts my-photo.jpg to circular favicon files
"""

from PIL import Image, ImageDraw
import os

def create_circular_favicon(input_path, output_path, size):
    """Create a circular favicon from an input image"""
    try:
        # Open the original image
        with Image.open(input_path) as img:
            # Convert to RGBA if not already
            img = img.convert('RGBA')
            
            # Calculate the size for cropping (square from center)
            width, height = img.size
            min_dimension = min(width, height)
            
            # Calculate crop box to get square from center
            left = (width - min_dimension) // 2
            top = (height - min_dimension) // 2
            right = left + min_dimension
            bottom = top + min_dimension
            
            # Crop to square
            img_square = img.crop((left, top, right, bottom))
            
            # Resize to target size
            img_resized = img_square.resize((size, size), Image.Resampling.LANCZOS)
            
            # Create a new image with transparency
            circular_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
            
            # Create a circular mask
            mask = Image.new('L', (size, size), 0)
            draw = ImageDraw.Draw(mask)
            draw.ellipse((0, 0, size, size), fill=255)
            
            # Apply the mask to make it circular
            circular_img.paste(img_resized, (0, 0))
            circular_img.putalpha(mask)
            
            # Save the circular favicon
            circular_img.save(output_path, 'PNG', optimize=True)
            print(f"✅ Created: {output_path} ({size}x{size})")
            
    except Exception as e:
        print(f"❌ Error creating {output_path}: {e}")

def main():
    # Define paths
    input_image = "public/my-photo.jpg"
    
    # Check if input image exists
    if not os.path.exists(input_image):
        print(f"❌ Error: {input_image} not found!")
        print("Please make sure my-photo.jpg is in the public folder.")
        return
    
    # Define favicon sizes and filenames
    favicon_sizes = [
        (16, "public/favicon-16x16.png"),
        (32, "public/favicon-32x32.png"),
        (180, "public/apple-touch-icon.png"),
        (192, "public/android-chrome-192x192.png"),
        (512, "public/android-chrome-512x512.png")
    ]
    
    print("🎨 Generating circular favicon files...")
    print(f"📸 Source image: {input_image}")
    print()
    
    # Generate all favicon sizes
    for size, output_path in favicon_sizes:
        create_circular_favicon(input_image, output_path, size)
    
    print()
    print("✨ Favicon generation complete!")
    print("📁 Files saved to the public folder:")
    for _, output_path in favicon_sizes:
        if os.path.exists(output_path):
            print(f"   • {output_path}")
    
    print()
    print("🔄 Please refresh your browser to see the new circular favicon!")

if __name__ == "__main__":
    main()
