import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 items-center">
      <div className="site-container py-24">
        <h1 className="page-title">Page not found</h1>
        <p className="mt-8 text-lg leading-7 text-muted">That page doesn&apos;t exist or has moved.</p>
        <Link href="/" className="text-link mt-8 inline-block">
          <span aria-hidden="true">← </span>Back home
        </Link>
      </div>
    </main>
  );
}
