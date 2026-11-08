import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[520px] flex-col items-center justify-center px-5 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
        Error 404
      </p>
      <h1 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-ink">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-2 text-[14px] leading-relaxed text-muted">
        Mungkin tautannya salah, atau halaman ini sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-full border border-line bg-surface px-4 py-2 text-[13px] font-medium text-ink shadow-sm transition hover:-translate-y-0.5 hover:text-accent"
      >
        Kembali ke halaman utama
      </Link>
    </main>
  );
}
