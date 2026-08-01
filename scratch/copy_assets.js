import fs from 'fs';
import path from 'path';

const srcHero = `C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\063bb0b0-2e1d-4101-8948-f902e27a4b3c\\dsa_kahani_hero_preview_1785588213820.png`;
const srcMobile = `C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\063bb0b0-2e1d-4101-8948-f902e27a4b3c\\dsa_kahani_mobile_preview_1785588230624.png`;

const destDir = path.resolve('public', 'assets');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(srcHero, path.join(destDir, 'hero_preview.png'));
fs.copyFileSync(srcMobile, path.join(destDir, 'mobile_preview.png'));

console.log('Successfully copied preview assets to public/assets/!');
