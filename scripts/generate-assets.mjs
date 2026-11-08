import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const FONT = "Segoe UI, Arial, Helvetica, sans-serif";

const avatarSvg = `<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="avatar-gradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#7C3AED"/>
    </linearGradient>
  </defs>
  <rect width="256" height="256" rx="128" fill="url(#avatar-gradient)"/>
  <text x="128" y="172" text-anchor="middle" font-family="${FONT}" font-size="132" font-weight="700" fill="#FFFFFF">P</text>
  <circle cx="198" cy="58" r="20" fill="#22C55E" stroke="#FAFAF9" stroke-width="7"/>
</svg>`;

const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="og-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FAFAF9"/>
      <stop offset="100%" stop-color="#F1F5F9"/>
    </linearGradient>
    <linearGradient id="og-accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#7C3AED"/>
    </linearGradient>
    <radialGradient id="og-glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#2563EB" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#2563EB" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#og-bg)"/>
  <circle cx="1040" cy="70" r="340" fill="url(#og-glow)"/>

  <rect x="80" y="72" width="74" height="74" rx="20" fill="url(#og-accent)"/>
  <text x="117" y="127" text-anchor="middle" font-family="${FONT}" font-size="40" font-weight="700" fill="#FFFFFF">P</text>
  <circle cx="150" cy="79" r="8" fill="#22C55E" stroke="#FAFAF9" stroke-width="3"/>
  <text x="178" y="122" font-family="${FONT}" font-size="34" font-weight="700" fill="#18181B">P-On</text>

  <text x="80" y="305" font-family="${FONT}" font-size="78" font-weight="700" letter-spacing="-2" fill="#18181B">Pule Online</text>
  <text x="80" y="372" font-family="${FONT}" font-size="32" font-weight="400" fill="#71717A">Satu halaman, semua tautan.</text>

  <rect x="80" y="468" width="252" height="58" rx="29" fill="#2563EB"/>
  <text x="110" y="505" font-family="${FONT}" font-size="22" font-weight="600" fill="#FFFFFF">p-on.vercel.app</text>

  <text x="80" y="582" font-family="${FONT}" font-size="18" font-weight="500" letter-spacing="2" fill="#A1A1AA">LINK IN BIO · OPEN SOURCE · MIT</text>
</svg>`;

await mkdir("public", { recursive: true });

await sharp(Buffer.from(avatarSvg)).jpeg({ quality: 92 }).toFile("public/avatar.jpeg");
await sharp(Buffer.from(ogSvg)).png().toFile("public/og.png");

console.log("✓ public/avatar.jpeg");
console.log("✓ public/og.png");
