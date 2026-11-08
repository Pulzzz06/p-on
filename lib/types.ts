/**
 * Kontrak data P-On.
 *
 * Semua konten halaman berasal dari `config/site.ts` dan harus memenuhi tipe ini.
 * Dengan begitu, halaman publik tidak peduli apakah datanya dari file config,
 * JSON, atau database di masa depan.
 */

export type ThemeMode = "light" | "dark" | "system";
export type ThemePreset = "stone" | "midnight" | "sand" | "mono";

/** Ikon yang tersedia untuk kartu link. Tambahkan di lib/icons.tsx jika perlu. */
export type LinkIcon =
  | "link"
  | "globe"
  | "pen-line"
  | "file-text"
  | "code"
  | "folder-git"
  | "briefcase"
  | "book-open"
  | "play"
  | "camera"
  | "music"
  | "coffee"
  | "heart"
  | "star"
  | "download"
  | "message"
  | "rss"
  | "sparkles"
  | "github"
  | "instagram"
  | "x"
  | "linkedin"
  | "youtube"
  | "tiktok"
  | "mail";

/** Platform sosial yang didukung. `email` memakai ikon amplop. */
export type SocialPlatform =
  | "github"
  | "instagram"
  | "x"
  | "linkedin"
  | "youtube"
  | "tiktok"
  | "email";

export type LinkItem = {
  /** Unik, dipakai sebagai key React dan nanti sebagai slug analytics. */
  id: string;
  label: string;
  description?: string;
  url: string;
  icon?: LinkIcon;
  /** Label kecil di samping judul, mis. "Baru" atau "Populer". */
  badge?: string;
  /** Kartu lebih besar dengan latar accent. */
  featured?: boolean;
  /** Default true. Set false untuk menyembunyikan tanpa menghapus. */
  visible?: boolean;
};

export type SocialItem = {
  platform: SocialPlatform;
  url: string;
  /** Opsional, untuk mengganti label aksesibilitas. */
  label?: string;
};

export type ProjectItem = {
  /** Nama repo, dipakai sebagai key dan label kecil. */
  repo: string;
  name: string;
  description: string;
  language?: string;
  stars?: number;
  url: string;
  demo?: string;
};

export type SiteConfig = {
  meta: {
    title: string;
    description: string;
    /** URL absolut, dipakai untuk canonical dan OG. */
    url: string;
    locale?: string;
    /** URL repo GitHub untuk footer. */
    repo?: string;
    /** Tahun di footer.Diisi manual agar build tetap deterministik. */
    year?: number;
  };
  profile: {
    name: string;
    handle: string;
    headline: string;
    bio: string;
    /** Path lokal di /public atau URL absolut. */
    avatar?: string;
    location?: string;
    availability?: string;
  };
  theme: {
    preset: ThemePreset;
    mode: ThemeMode;
    /** Satu warna accent, sebaiknya cukup gelap untuk teks putih. */
    accent: string;
    font: "jakarta" | "inter";
    radius: "sm" | "md" | "lg";
    background: "plain" | "gradient" | "mesh";
  };
  socials: SocialItem[];
  /** Link utama, tampil sebelum grup. */
  links: LinkItem[];
  /** Grup link dengan heading kecil. */
  groups: {
    title: string;
    links: LinkItem[];
  }[];
  projects: {
    /** "manual" membaca items; "github" disiapkan untuk sync build-time. */
    source: "manual" | "github";
    github: {
      username: string;
      /** Kosong = ambil repo terbaru. */
      featured: string[];
      limit: number;
    };
    items: ProjectItem[];
  };
  sections: Record<
    "socials" | "links" | "projects" | "support" | "footer" | "share",
    boolean
  >;
  analytics: {
    provider: "none" | "umami" | "plausible";
    siteId?: string;
    host?: string;
  };
};
