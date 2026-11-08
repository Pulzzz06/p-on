import type { ProjectItem } from "@/lib/types";
import { ProjectCard } from "./project-card";

export function ProjectGrid({ projects }: { projects: ProjectItem[] }) {
  return (
    <section className="mt-10">
      <div className="mb-3 flex items-baseline justify-between px-1">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          Proyek
        </h2>
        <span className="text-[11px] text-muted">{projects.length} repo</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.repo}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
