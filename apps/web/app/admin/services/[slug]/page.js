import { getModuleBySlug } from "@/lib/module-catalog.mjs";
import { AdminShell } from "@/components/admin-shell";

export default function AdminServicePlaceholderPage({ params }) {
  const moduleEntry = getModuleBySlug(params.slug);

  if (!moduleEntry) {
    return (
      <AdminShell title="Module Not Found" intro="This reserved module is not defined in the starter catalog.">
        <p className="status-message error">Unknown module slug.</p>
      </AdminShell>
    );
  }

  return (
    <AdminShell title={moduleEntry.name} intro="This is a reserved admin placeholder ready for future implementation.">
      <article className="glass-card narrative-card">
        <p>{moduleEntry.description}</p>
        <p>
          Public route: {moduleEntry.publicRoute}
          <br />
          Admin route: {moduleEntry.adminRoute}
        </p>
      </article>
    </AdminShell>
  );
}

