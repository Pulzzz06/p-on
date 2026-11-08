import { socialIconMap } from "@/lib/icons";
import type { SocialItem, SocialPlatform } from "@/lib/types";
import { isExternalUrl } from "@/lib/utils";

const SOCIAL_LABELS: Record<SocialPlatform, string> = {
  github: "GitHub",
  instagram: "Instagram",
  x: "X",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  tiktok: "TikTok",
  email: "Email",
};

export function SocialRow({ socials }: { socials: SocialItem[] }) {
  return (
    <nav
      aria-label="Media sosial"
      className="mt-6 flex animate-fade-up flex-wrap items-center justify-center gap-2.5"
      style={{ animationDelay: "90ms" }}
    >
      {socials.map((social) => {
        const Icon = socialIconMap[social.platform];
        const external = isExternalUrl(social.url);
        const label = social.label ?? SOCIAL_LABELS[social.platform];

        return (
          <a
            key={`${social.platform}-${social.url}`}
            href={social.url}
            aria-label={label}
            title={label}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent)_40%,var(--border))] hover:text-accent motion-reduce:transform-none"
          >
            <Icon size={17} />
          </a>
        );
      })}
    </nav>
  );
}
