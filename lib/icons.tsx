import type { ComponentType } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Camera,
  ChevronRight,
  Code2,
  Coffee,
  Download,
  ExternalLink,
  FileText,
  FolderGit2,
  Globe,
  Heart,
  Link2,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Music2,
  PenLine,
  Play,
  Rss,
  Share2,
  Sparkles,
  Star,
  Sun,
} from "lucide-react";
import {
  siGithub,
  siInstagram,
  siTiktok,
  siX,
  siYoutube,
} from "simple-icons";
import type { LinkIcon, SocialPlatform } from "@/lib/types";

export type IconComponent = ComponentType<{
  className?: string;
  size?: number;
}>;

/** LinkedIn tidak lagi disertakan di simple-icons, jadi path-nya ditulis manual. */
const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z";

function brandIcon(path: string): IconComponent {
  return function BrandIcon({ className, size = 20 }) {
    return (
      <svg
        role="img"
        aria-hidden="true"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        className={className}
      >
        <path d={path} />
      </svg>
    );
  };
}

export const iconMap: Record<LinkIcon, IconComponent> = {
  link: Link2,
  globe: Globe,
  "pen-line": PenLine,
  "file-text": FileText,
  code: Code2,
  "folder-git": FolderGit2,
  briefcase: Briefcase,
  "book-open": BookOpen,
  play: Play,
  camera: Camera,
  music: Music2,
  coffee: Coffee,
  heart: Heart,
  star: Star,
  download: Download,
  message: MessageCircle,
  rss: Rss,
  sparkles: Sparkles,
  github: brandIcon(siGithub.path),
  instagram: brandIcon(siInstagram.path),
  x: brandIcon(siX.path),
  linkedin: brandIcon(LINKEDIN_PATH),
  youtube: brandIcon(siYoutube.path),
  tiktok: brandIcon(siTiktok.path),
  mail: Mail,
};

export function getIcon(name?: LinkIcon): IconComponent {
  return name ? iconMap[name] : Link2;
}

export const socialIconMap: Record<SocialPlatform, IconComponent> = {
  github: iconMap.github,
  instagram: iconMap.instagram,
  x: iconMap.x,
  linkedin: iconMap.linkedin,
  youtube: iconMap.youtube,
  tiktok: iconMap.tiktok,
  email: Mail,
};

/** Ikon kecil yang dipakai langsung oleh komponen UI. */
export {
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  MapPin,
  Moon,
  Share2,
  Star,
  Sun,
};
