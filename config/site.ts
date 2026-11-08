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
    url: "https://pulzzz06.vercel.app",
    locale: "id_ID",
    repo: "https://github.com/Pulzzz06/p-on",
    year: 2026,
  },

  profile: {
    name: "Pule Online",
    handle: "@Pulzzz06",
    headline: "Kreator & Developer",
    bio: "Membangun pengalaman digital yang jelas, cepat, dan bermanfaat.",
    avatar: "/avatar.jpeg",
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
    { platform: "github", url: "https://github.com/Pulzzz06" },
    { platform: "instagram", url: "https://instagram.com/Pulzzz06" },
    { platform: "x", url: "https://x.com/Pulzzz06" },
    { platform: "linkedin", url: "https://linkedin.com/in/Pulzzz06" },
    { platform: "email", url: "mailto:hello@pulzzz06.com" },
  ],

  links: [
    {
      id: "portfolio",
      label: "Portfolio",
      description: "Karya dan studi kasus terbaru",
      url: "https://pulzzz06.vercel.app",
      icon: "globe",
      featured: true,
    },
    {
      id: "blog",
      label: "Blog",
      description: "Catatan seputar desain dan frontend",
      url: "https://pulzzz06.vercel.app/blog",
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
          url: "https://youtube.com/@Pulzzz06",
          icon: "youtube",
        },
        {
          id: "instagram",
          label: "Instagram",
          description: "Keseharian dan proses berkarya",
          url: "https://instagram.com/Pulzzz06",
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
          url: "mailto:hello@pulzzz06.com",
          icon: "mail",
        },
      ],
    },
  ],

  projects: {
    // "manual" = isi items di bawah. "github" disiapkan untuk sync build-time.
    source: "manual",
    github: {
      username: "Pulzzz06",
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
        url: "https://github.com/Pulzzz06/p-on",
        demo: "https://pulzzz06.vercel.app",
      },
      {
        repo: "project-two",
        name: "Project Two",
        description: "Deskripsi singkat proyek kedua yang kamu bangun.",
        language: "JavaScript",
        stars: 0,
        url: "https://github.com/Pulzzz06/project-two",
      },
      {
        repo: "project-three",
        name: "Project Three",
        description: "Deskripsi singkat proyek ketiga, bisa dari bahasa apa pun.",
        language: "Python",
        stars: 0,
        url: "https://github.com/Pulzzz06/project-three",
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
