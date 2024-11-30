const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const imageExtensions = ['.jpg', '.jpeg', '.png'];

async function optimizeImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (!imageExtensions.includes(ext)) return;

    const outputPath = filePath.replace(ext, `${ext}`);
    try {
        await sharp(filePath)
            .resize(1200, 1200, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .jpeg({ quality: 80 })
            .toFile(outputPath + '.temp');

        // Replace original file with optimized version
        fs.unlinkSync(filePath);
        fs.renameSync(outputPath + '.temp', filePath);
        
        console.log(`Optimized: ${path.basename(filePath)}`);
    } catch (err) {
        console.error(`Error optimizing ${filePath}:`, err);
    }
}

async function processDirectory() {
    const files = fs.readdirSync(publicDir);
    
    for (const file of files) {
        const filePath = path.join(publicDir, file);
        if (fs.statSync(filePath).isFile()) {
            await optimizeImage(filePath);
        }
    }
}

processDirectory().then(() => {
    console.log('Image optimization complete!');
});
