/** Gabungkan className tanpa dependency tambahan. */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

/** Hanya http/https yang dianggap tautan eksternal. */
export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Go: "#00ADD8",
  Python: "#3776AB",
  Rust: "#DEA584",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Kotlin: "#7F52FF",
  Java: "#B07219",
  "C#": "#178600",
  "C++": "#F34B7D",
  C: "#555555",
  Shell: "#89E051",
  PHP: "#777BB4",
  Dart: "#00B4AB",
  Swift: "#F05138",
  Ruby: "#701516",
  Vue: "#41B883",
  Svelte: "#FF3E00",
  Astro: "#FF5D01",
};

export function languageColor(language?: string): string {
  if (!language) return "#A1A1AA";
  return LANGUAGE_COLORS[language] ?? "#A1A1AA";
}
