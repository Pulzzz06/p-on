import type { LinkItem } from "@/lib/types";
import { LinkCard } from "./link-card";

export function LinkGroup({
  group,
  index = 0,
}: {
  group: { title: string; links: LinkItem[] };
  index?: number;
}) {
  const links = group.links.filter((link) => link.visible !== false);

  if (links.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="mb-3 px-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
        {group.title}
      </h2>
      <div className="flex flex-col gap-3">
        {links.map((link, linkIndex) => (
          <LinkCard
            key={link.id}
            link={link}
            index={index + linkIndex}
          />
        ))}
      </div>
    </section>
  );
}
