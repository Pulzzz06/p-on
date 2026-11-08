/**
 * Pilih warna teks yang aman di atas accent.
 * Dipakai untuk kartu featured agar accent terang tetap terbaca.
 */
export function readableOn(hex: string): "#ffffff" | "#09090b" {
  const clean = hex.replace("#", "").trim();
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((char) => char + char)
          .join("")
      : clean;

  if (!/^[0-9a-f]{6}$/i.test(full)) return "#ffffff";

  const channel = (start: number) => {
    const value = Number.parseInt(full.slice(start, start + 2), 16) / 255;
    return value <= 0.04045
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, 2.4);
  };

  const luminance =
    0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4);

  return luminance > 0.55 ? "#09090b" : "#ffffff";
}
