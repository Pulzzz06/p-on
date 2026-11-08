import { site } from "@/config/site";
import { ArrowUpRight } from "@/lib/icons";
import { ShareButton } from "./share-button";

export function Footer() {
  const year = site.meta.year ?? 2026;

  return (
    <footer className="mt-12 flex flex-col items-center gap-4 border-t border-line pt-8 text-center">
      {site.sections.share && <ShareButton />}

      <div className="space-y-1 text-[12px] leading-relaxed text-muted">
        <p>
          © {year} {site.profile.name}. Dibangun dengan Next.js.
        </p>
        <p className="inline-flex items-center gap-1">
          Open source · MIT
          {site.meta.repo && (
            <>
              <span aria-hidden="true">·</span>
              <a
                href={site.meta.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 font-medium text-ink underline-offset-4 hover:underline"
              >
                Source <ArrowUpRight size={12} />
              </a>
            </>
          )}
        </p>
      </div>
    </footer>
  );
}
