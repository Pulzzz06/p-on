import type { SiteConfig } from "@/lib/types";

/**
 * ============================================================
 *  P-ON — KONFIGURASI UTAMA
 * ============================================================
 *  Ini satu-satunya file yang perlu kamu ubah untuk mengganti
 *  seluruh isi halaman: profil, sosial, link, proyek, dan tema.
 *
 *  Tips:
 *  - `icon` memakai nama dari lib/types.ts (contoh: "globe", "github").
 *  - Set `visible: false` untuk menyembunyikan link tanpa menghapusnya.
 *  - `featured: true` membuat kartu lebih besar dengan warna accent.
 *  - Avatar dan OG image ada di folder /public.
 * ============================================================
 */
export const site: SiteConfig = {
  meta: {
    title: "P-On — Pule Online",
    description:
      "Satu halaman untuk semua tautan, karya, dan proyek Pule Online.",
    // Ganti dengan domain final saat sudah deploy.
    url: "https://p-on.vercel.app",
    locale: "id_ID",
    repo: "https://github.com/username/p-on",
    year: 2026,
  },

  profile: {
    name: "Pule Online",
    handle: "@puleonline",
    headline: "Kreator & Developer",
    bio: "Membangun hal-hal kecil yang rapi, cepat, dan enak dipakai.",
    avatar: "/avatar.png",
    location: "Indonesia",
    availability: "Open for collaboration",
  },

  theme: {
    preset: "stone",
    mode: "system",
    accent: "#2563EB",
    font: "jakarta",
    radius: "md",
    background: "plain",
  },

  socials: [
    { platform: "github", url: "https://github.com/username" },
    { platform: "instagram", url: "https://instagram.com/username" },
    { platform: "x", url: "https://x.com/username" },
    { platform: "linkedin", url: "https://linkedin.com/in/username" },
    { platform: "email", url: "mailto:hello@example.com" },
  ],

  links: [
    {
      id: "portfolio",
      label: "Portfolio",
      description: "Karya dan studi kasus terbaru",
      url: "https://example.com",
      icon: "globe",
      featured: true,
    },
    {
      id: "blog",
      label: "Blog",
      description: "Catatan seputar desain dan frontend",
      url: "https://example.com/blog",
      icon: "pen-line",
    },
  ],

  groups: [
    {
      title: "Content",
      links: [
        {
          id: "youtube",
          label: "YouTube",
          description: "Tutorial dan behind the scenes",
          url: "https://youtube.com/@username",
          icon: "youtube",
        },
        {
          id: "instagram",
          label: "Instagram",
          description: "Keseharian dan proses berkarya",
          url: "https://instagram.com/username",
          icon: "instagram",
        },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          id: "email",
          label: "Email",
          description: "Untuk kolaborasi dan kerja sama",
          url: "mailto:hello@example.com",
          icon: "mail",
        },
      ],
    },
  ],

  projects: {
    // "manual" = isi items di bawah. "github" disiapkan untuk sync build-time.
    source: "manual",
    github: {
      username: "username",
      featured: [],
      limit: 6,
    },
    items: [
      {
        repo: "p-on",
        name: "P-On",
        description:
          "Halaman link-in-bio open source yang sedang kamu lihat sekarang.",
        language: "TypeScript",
        stars: 0,
        url: "https://github.com/username/p-on",
        demo: "https://p-on.vercel.app",
      },
      {
        repo: "project-two",
        name: "Project Two",
        description: "Deskripsi singkat proyek kedua yang kamu bangun.",
        language: "JavaScript",
        stars: 0,
        url: "https://github.com/username/project-two",
      },
      {
        repo: "project-three",
        name: "Project Three",
        description: "Deskripsi singkat proyek ketiga, bisa dari bahasa apa pun.",
        language: "Python",
        stars: 0,
        url: "https://github.com/username/project-three",
      },
    ],
  },

  sections: {
    socials: true,
    links: true,
    projects: true,
    support: false,
    footer: true,
    share: true,
  },

  analytics: {
    provider: "none",
    siteId: "",
    host: "",
  },
};
