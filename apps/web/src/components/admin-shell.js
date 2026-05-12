import Link from "next/link";
import { adminNavigation } from "@/lib/site-content.mjs";

export function AdminShell({ title, intro, children }) {
  return (
    <section className="admin-shell">
      <aside className="admin-sidebar">
        <div>
          <p className="eyebrow">Operations</p>
          <h2>BeeFintech Console</h2>
        </div>
        <nav>
          {adminNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="sidebar-note">Use the default admin account configured by the backend starter.</p>
      </aside>
      <div className="admin-main">
        <header className="admin-header">
          <p className="eyebrow">Admin Surface</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </header>
        {children}
      </div>
    </section>
  );
}

