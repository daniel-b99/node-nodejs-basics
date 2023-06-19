import * as fs from 'fs';
import * as path from 'path';

const copy = async () => {
    const srcDir = path.join('./', 'files');
    const destDir = path.join('./', 'files_copy');

    if (!fs.existsSync(srcDir)) {
        throw new Error('FS operation failed');
    }

    if (fs.existsSync(destDir)) {
        throw new Error('FS operation failed');
    }

    try {
        fs.mkdirSync(destDir);
        const files = fs.readdirSync(srcDir);
        files.forEach(file => {
            const srcFile = path.join(srcDir, file);
            const desFile = path.join(destDir, file);
            fs.copyFileSync(srcFile, desFile)
        }) 
    } catch (error) {
        throw new Error('FS operation failed')
    }    
};

await copy();
