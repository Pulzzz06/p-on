"use client";

import { Moon, Sun } from "@/lib/icons";

export function ThemeToggle() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("p-on-theme", isDark ? "dark" : "light");
    } catch {
      // localStorage bisa diblokir; tema tetap berubah untuk sesi ini.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Ganti tema terang atau gelap"
      title="Ganti tema"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted shadow-sm transition duration-200 hover:border-[color-mix(in_srgb,var(--accent)_40%,var(--border))] hover:text-accent"
    >
      <Sun size={17} className="hidden dark:block" />
      <Moon size={17} className="block dark:hidden" />
    </button>
  );
}
