import { site } from "@/config/site";
import { Footer } from "@/components/footer";
import { LinkCard } from "@/components/link-card";
import { LinkGroup } from "@/components/link-group";
import { ProfileHeader } from "@/components/profile-header";
import { ProjectGrid } from "@/components/project-grid";
import { SocialRow } from "@/components/social-row";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const links = site.links.filter((link) => link.visible !== false);
  const groups = site.groups
    .map((group) => ({
      ...group,
      links: group.links.filter((link) => link.visible !== false),
    }))
    .filter((group) => group.links.length > 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: site.profile.name,
      description: site.profile.bio,
      url: site.meta.url,
      image: site.profile.avatar
        ? new URL(site.profile.avatar, site.meta.url).toString()
        : undefined,
      sameAs: site.socials
        .filter((social) => social.platform !== "email")
        .map((social) => social.url),
    },
  };

  return (
    <main className="relative isolate mx-auto flex min-h-dvh w-full max-w-[520px] flex-col px-5 pb-12 pt-16 sm:pt-20">
      <div
        aria-hidden="true"
        className="page-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"
      />

      <div className="absolute right-5 top-5 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      <ProfileHeader profile={site.profile} />

      {site.sections.socials && site.socials.length > 0 && (
        <SocialRow socials={site.socials} />
      )}

      {site.sections.links && links.length > 0 && (
        <nav aria-label="Tautan utama" className="mt-8 flex flex-col gap-3">
          {links.map((link, index) => (
            <LinkCard key={link.id} link={link} index={index} />
          ))}
        </nav>
      )}

      {site.sections.links &&
        groups.map((group, index) => (
          <LinkGroup
            key={group.title}
            group={group}
            index={links.length + index}
          />
        ))}

      {site.sections.projects && site.projects.items.length > 0 && (
        <ProjectGrid projects={site.projects.items} />
      )}

      {site.sections.footer && <Footer />}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
