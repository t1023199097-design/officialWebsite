import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/demo", label: "Book Demo" },
  { href: "/admin", label: "Admin" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="brand-mark">
        <span className="brand-kicker">BeeFintech</span>
        <span className="brand-title">Insurance Tech Platform</span>
      </div>
      <nav className="site-nav">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

