import Link from "next/link";
import Image from "next/image";
import { demoHomeContent, homeAnchorNav } from "@/lib/site-content.mjs";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-logo">
          <Image alt="LifeBee logo" height={42} priority src="/brand/lifebee-logo.svg" width={42} />
        </span>
        <span className="brand-title">LifeBee</span>
      </Link>
      <nav className="site-nav">
        {homeAnchorNav.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <Link className="nav-cta" href="/demo">
          預約演示 <span aria-hidden="true">→</span>
        </Link>
        <div className="language-switch" aria-label="語言切換">
          {demoHomeContent.locales.map((locale, index) => (
            <Link
              className={index === 0 ? "default-locale" : ""}
              href={index === 0 ? "/" : `/?lang=${locale.code}`}
              key={locale.code}
              title={locale.name}
            >
              {locale.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
