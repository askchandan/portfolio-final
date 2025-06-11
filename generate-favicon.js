const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createCircularFavicon(inputPath, outputPath, size) {
  try {
    console.log(`🎨 Creating ${path.basename(outputPath)} (${size}x${size})...`);
    
    // Create a circular mask
    const circleSvg = `
      <svg width="${size}" height="${size}">
        <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="white"/>
      </svg>
    `;
    
    const maskBuffer = Buffer.from(circleSvg);
    
    await sharp(inputPath)
      .resize(size, size, {
        fit: 'cover',
        position: 'center'
      })
      .composite([{
        input: await sharp(maskBuffer)
          .resize(size, size)
          .png()
          .toBuffer(),
        blend: 'dest-in'
      }])
      .png()
      .toFile(outputPath);
    
    console.log(`✅ Created: ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error creating ${outputPath}:`, error.message);
    console.error('Full error:', error);
  }
}

async function generateAllFavicons() {
  const inputImage = 'public/my-photo.jpg';
  
  // Check if input image exists
  if (!fs.existsSync(inputImage)) {
    console.error(`❌ Error: ${inputImage} not found!`);
    console.log('Please make sure my-photo.jpg is in the public folder.');
    return;
  }
  
  console.log('🎨 Generating circular favicon files...');
  console.log(`📸 Source image: ${inputImage}\n`);
  
  const faviconSizes = [
    { size: 16, filename: 'favicon-16x16.png' },
    { size: 32, filename: 'favicon-32x32.png' },
    { size: 180, filename: 'apple-touch-icon.png' },
    { size: 192, filename: 'android-chrome-192x192.png' },
    { size: 512, filename: 'android-chrome-512x512.png' }
  ];
  
  // Generate all favicon sizes
  for (const { size, filename } of faviconSizes) {
    const outputPath = path.join('public', filename);
    await createCircularFavicon(inputImage, outputPath, size);
  }
  
  console.log('\n✨ Favicon generation complete!');
  console.log('📁 Files saved to the public folder:');
  
  faviconSizes.forEach(({ filename }) => {
    const outputPath = path.join('public', filename);
    if (fs.existsSync(outputPath)) {
      console.log(`   • ${filename}`);
    }
  });
  
  console.log('\n🔄 Please refresh your browser to see the new circular favicon!');
}

// Run the generator
generateAllFavicons().catch(console.error);
