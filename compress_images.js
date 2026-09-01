const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = 'screenshots';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

(async () => {
    for (const file of files) {
        const input = path.join(dir, file);
        const output = path.join(dir, file.replace('.png', '.webp'));
        
        const isMobile = file.includes('_mobile');
        // Compress and resize: PC thumbnails don't need to be wider than 800px, Mobile 400px
        const targetWidth = isMobile ? 400 : 800;

        try {
            await sharp(input)
                .resize({ width: targetWidth })
                .webp({ quality: 80 })
                .toFile(output);
                
            console.log(`Compressed ${file} -> ${output}`);
            fs.unlinkSync(input); // delete original png
        } catch (error) {
            console.error(`Failed to compress ${file}:`, error);
        }
    }
    console.log("Compression finished!");
})();
