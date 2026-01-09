import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a472a"/>
      <stop offset="100%" style="stop-color:#2d5a3f"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>
  <circle cx="256" cy="200" r="80" fill="#c9a227"/>
  <path d="M256 280 L256 380 M216 320 L296 320" stroke="#c9a227" stroke-width="24" stroke-linecap="round"/>
  <text x="256" y="470" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#ffffff" text-anchor="middle">ISA</text>
</svg>`;

const appleIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <defs>
    <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a472a"/>
      <stop offset="100%" style="stop-color:#2d5a3f"/>
    </linearGradient>
  </defs>
  <rect width="180" height="180" fill="url(#bg2)"/>
  <circle cx="90" cy="70" r="28" fill="#c9a227"/>
  <path d="M90 98 L90 134 M76 112 L104 112" stroke="#c9a227" stroke-width="8" stroke-linecap="round"/>
  <text x="90" y="168" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">ISA</text>
</svg>`;

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a472a"/>
      <stop offset="100%" style="stop-color:#2d5a3f"/>
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="6" fill="url(#bg3)"/>
  <circle cx="16" cy="11" r="5" fill="#c9a227"/>
  <path d="M16 16 L16 24 M13 19 L19 19" stroke="#c9a227" stroke-width="2" stroke-linecap="round"/>
</svg>`;

async function generateIcons() {
  const iconsDir = join(__dirname, '..', 'public', 'icons');
  const publicDir = join(__dirname, '..', 'public');

  await mkdir(iconsDir, { recursive: true });

  // Generate PWA icons
  for (const size of sizes) {
    await sharp(Buffer.from(svgIcon))
      .resize(size, size)
      .png()
      .toFile(join(iconsDir, `icon-${size}x${size}.png`));
    console.log(`Generated icon-${size}x${size}.png`);
  }

  // Generate Apple Touch Icon
  await sharp(Buffer.from(appleIcon))
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png');

  // Generate favicon
  await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'favicon.ico'));
  console.log('Generated favicon.ico');

  // Generate placeholder screenshots
  const screenshotsDir = join(__dirname, '..', 'public', 'screenshots');
  await mkdir(screenshotsDir, { recursive: true });

  // Mobile screenshot placeholder
  const mobilePlaceholder = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 844">
    <rect width="390" height="844" fill="#f8f6f0"/>
    <rect y="0" width="390" height="100" fill="#1a472a"/>
    <text x="195" y="60" font-family="Arial" font-size="24" fill="white" text-anchor="middle">Jesus in Islam</text>
    <rect x="20" y="120" width="350" height="200" rx="12" fill="white" stroke="#e0ddd5"/>
    <text x="195" y="230" font-family="Arial" font-size="18" fill="#1a472a" text-anchor="middle">Quranic Verses</text>
    <rect x="20" y="340" width="350" height="200" rx="12" fill="white" stroke="#e0ddd5"/>
    <text x="195" y="450" font-family="Arial" font-size="18" fill="#1a472a" text-anchor="middle">Stories of Isa</text>
  </svg>`;

  await sharp(Buffer.from(mobilePlaceholder))
    .resize(390, 844)
    .png()
    .toFile(join(screenshotsDir, 'mobile.png'));
  console.log('Generated mobile.png screenshot');

  // Desktop screenshot placeholder
  const desktopPlaceholder = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720">
    <rect width="1280" height="720" fill="#f8f6f0"/>
    <rect y="0" width="1280" height="80" fill="#1a472a"/>
    <text x="640" y="50" font-family="Arial" font-size="32" fill="white" text-anchor="middle">Jesus in Islam</text>
    <rect x="40" y="100" width="380" height="280" rx="12" fill="white" stroke="#e0ddd5"/>
    <text x="230" y="250" font-family="Arial" font-size="20" fill="#1a472a" text-anchor="middle">Quranic Verses</text>
    <rect x="450" y="100" width="380" height="280" rx="12" fill="white" stroke="#e0ddd5"/>
    <text x="640" y="250" font-family="Arial" font-size="20" fill="#1a472a" text-anchor="middle">Stories</text>
    <rect x="860" y="100" width="380" height="280" rx="12" fill="white" stroke="#e0ddd5"/>
    <text x="1050" y="250" font-family="Arial" font-size="20" fill="#1a472a" text-anchor="middle">Maryam</text>
  </svg>`;

  await sharp(Buffer.from(desktopPlaceholder))
    .resize(1280, 720)
    .png()
    .toFile(join(screenshotsDir, 'desktop.png'));
  console.log('Generated desktop.png screenshot');

  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error);
