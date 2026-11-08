"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Share2 } from "lucide-react";
import { site } from "@/config/site";

export function ShareButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function handleShare() {
    const url = site.meta.url;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: site.meta.title,
          text: site.meta.description,
          url,
        });
        return;
      } catch {
        // Pengguna membatalkan dialog share.
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Salin tautan ini:", url);
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-[12px] font-medium text-muted shadow-sm transition duration-200 hover:border-[color-mix(in_srgb,var(--accent)_40%,var(--border))] hover:text-accent"
    >
      {copied ? <Check size={14} /> : <Share2 size={14} />}
      {copied ? "Tautan disalin" : "Bagikan halaman"}
    </button>
  );
}
