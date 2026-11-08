import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { site } from "@/config/site";
import { readableOn } from "@/lib/theme";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const { meta, profile } = site;

  return {
    metadataBase: new URL(meta.url),
    title: meta.title,
    description: meta.description,
    applicationName: "P-On",
    authors: [{ name: profile.name, url: meta.url }],
    creator: profile.name,
    openGraph: {
      type: "profile",
      title: meta.title,
      description: meta.description,
      url: meta.url,
      siteName: "P-On",
      locale: meta.locale,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/og.png"],
    },
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
    },
    category: "technology",
  };
}

const themeScript = `(function(){try{var k="p-on-theme";var s=localStorage.getItem(k);var m=${JSON.stringify(
  site.theme.mode
)};var d=s?s==="dark":m==="dark"||(m==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning className={jakarta.variable}>
      <body
        style={
          {
            "--accent": site.theme.accent,
            "--accent-contrast": readableOn(site.theme.accent),
          } as CSSProperties
        }
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
