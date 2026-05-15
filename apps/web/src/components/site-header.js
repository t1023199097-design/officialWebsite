"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { demoHomeContent, getSiteNavigation, normalizeLocale } from "@/lib/site-content.mjs";

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const locale = normalizeLocale(searchParams.get("lang"));
  const navigation = getSiteNavigation(locale);
  const languageHref = (localeCode) => {
    const params = new URLSearchParams(searchParams.toString());
    if (localeCode === "zh-Hant") {
      params.delete("lang");
    } else {
      params.set("lang", localeCode);
    }
    const query = params.toString();
    return `${pathname}${query ? `?${query}` : ""}`;
  };

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-logo">
          <Image alt="LifeBee logo" height={42} priority src="/brand/lifebee-logo.svg" width={42} />
        </span>
        <span className="brand-title">LifeBee</span>
      </Link>
      <nav className="site-nav">
        {navigation.links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <Link className="nav-cta" href="/demo">
          {navigation.demoCta} <span aria-hidden="true">→</span>
        </Link>
        <div className="language-switch" aria-label={navigation.languageLabel}>
          {demoHomeContent.locales.map((localeOption) => (
            <Link
              className={localeOption.code === locale ? "default-locale" : ""}
              href={languageHref(localeOption.code)}
              key={localeOption.code}
              title={localeOption.name}
            >
              {localeOption.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
