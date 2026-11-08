import { ArrowUpRight, Star } from "@/lib/icons";
import type { ProjectItem } from "@/lib/types";
import { languageColor } from "@/lib/utils";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: ProjectItem;
  index?: number;
}) {
  return (
    <article
      className="group relative flex animate-fade-up flex-col rounded-2xl border border-line bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_30px_-24px_rgba(0,0,0,0.35)] transition duration-200 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent)_36%,var(--border))] hover:shadow-[0_2px_4px_rgba(0,0,0,0.04),0_20px_44px_-26px_rgba(0,0,0,0.4)] motion-reduce:transform-none"
      style={{ animationDelay: `${Math.min(index * 65, 300)}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-muted">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-line bg-surface-2">
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4h5l2 3h9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Z" />
            </svg>
          </span>
          {project.repo}
        </span>
        <ArrowUpRight
          size={15}
          className="shrink-0 text-muted transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>

      <h3 className="mt-2.5 text-[15px] font-semibold tracking-[-0.01em] text-ink">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="after:absolute after:inset-0 after:rounded-2xl after:content-['']"
        >
          {project.name}
        </a>
      </h3>

      <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-auto flex items-center gap-3 pt-3 text-[11px] text-muted">
        {project.language && (
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: languageColor(project.language) }}
            />
            {project.language}
          </span>
        )}
        {typeof project.stars === "number" && (
          <span className="inline-flex items-center gap-1">
            <Star size={11} />
            {project.stars}
          </span>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 ml-auto font-medium text-ink underline decoration-[var(--border)] underline-offset-2 transition hover:decoration-[var(--accent)]"
          >
            Demo
          </a>
        )}
      </div>
    </article>
  );
}
