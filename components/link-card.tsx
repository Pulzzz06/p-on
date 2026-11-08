import { iconMap, ChevronRight } from "@/lib/icons";
import type { LinkItem } from "@/lib/types";
import { cn, isExternalUrl } from "@/lib/utils";

export function LinkCard({
  link,
  index = 0,
  featured,
}: {
  link: LinkItem;
  index?: number;
  featured?: boolean;
}) {
  const Icon = iconMap[link.icon ?? "link"];
  const isFeatured = featured ?? link.featured ?? false;
  const external = isExternalUrl(link.url);

  return (
    <a
      href={link.url}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative flex animate-fade-up items-center gap-3.5 overflow-hidden rounded-2xl border p-3.5 transition duration-200 motion-reduce:transform-none",
        isFeatured
          ? "featured-card hover:-translate-y-0.5"
          : "surface-card hover:-translate-y-0.5"
      )}
      style={{ animationDelay: `${Math.min(index * 55, 300)}ms` }}
    >
      <span className="icon-tile inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
        <Icon size={19} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span
            className={cn(
              "truncate text-[15px] font-semibold tracking-[-0.01em]",
              isFeatured ? "text-[var(--accent-contrast)]" : "text-ink"
            )}
          >
            {link.label}
          </span>
          {link.badge && (
            <span
              className={cn(
                "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                isFeatured ? "bg-white/15 text-white" : "text-accent"
              )}
              style={
                isFeatured
                  ? undefined
                  : {
                      backgroundColor:
                        "color-mix(in srgb, var(--accent) 11%, transparent)",
                    }
              }
            >
              {link.badge}
            </span>
          )}
        </span>

        {link.description && (
          <span
            className={cn(
              "mt-0.5 block truncate text-[13px]",
              isFeatured ? "text-white/75" : "text-muted"
            )}
          >
            {link.description}
          </span>
        )}
      </span>

      <ChevronRight
        size={17}
        className={cn(
          "shrink-0 transition-transform duration-200 group-hover:translate-x-0.5",
          isFeatured ? "text-white/70" : "text-muted"
        )}
      />
    </a>
  );
}
