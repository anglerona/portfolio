import { EMAIL, LINKS } from "@/data/site";

/** One-line Simple mode footer: copyright on the left, contact links on the right. */
export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="site-container flex flex-col gap-4 py-6 text-[15px] md:flex-row md:items-center md:justify-between">
        <p className="text-muted">© 2026 anglerona</p>
        <ul className="flex gap-6 font-medium text-ink">
          <li>
            <a href={`mailto:${EMAIL}`} className="hover:underline underline-offset-4">
              Email
            </a>
          </li>
          <li>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
