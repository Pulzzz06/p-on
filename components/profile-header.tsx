import Image from "next/image";
import { MapPin } from "@/lib/icons";
import type { SiteConfig } from "@/lib/types";

export function ProfileHeader({
  profile,
}: {
  profile: SiteConfig["profile"];
}) {
  return (
    <header className="flex animate-fade-up flex-col items-center text-center">
      <div className="relative">
        {profile.avatar ? (
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={192}
            height={192}
            priority
            className="h-24 w-24 rounded-full border border-line object-cover shadow-[0_16px_40px_-22px_rgba(0,0,0,0.55)]"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent text-3xl font-semibold text-accent-contrast">
            {profile.name.charAt(0)}
          </div>
        )}
      </div>

      <h1 className="mt-5 text-[24px] font-semibold leading-tight tracking-[-0.02em] text-ink">
        {profile.name}
      </h1>
      <p className="mt-1 text-[13px] font-medium text-muted">
        {profile.handle}
      </p>

      <p className="mt-4 max-w-[22rem] text-[15px] font-medium leading-snug text-ink">
        {profile.headline}
      </p>
      <p className="mt-2 max-w-[24rem] text-[14px] leading-relaxed text-muted">
        {profile.bio}
      </p>

      {(profile.location || profile.availability) && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {profile.location && (
            <span className="inline-flex items-center gap-1.5 text-[12px] text-muted">
              <MapPin size={13} />
              {profile.location}
            </span>
          )}
          {profile.availability && (
            <span className="badge">
              <span className="status-dot" />
              {profile.availability}
            </span>
          )}
        </div>
      )}
    </header>
  );
}
