"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/admin-shell";
import { fetchAdminModules } from "@/lib/api";

export default function AdminServicesPage() {
  const [state, setState] = useState({ rows: [], error: "" });

  useEffect(() => {
    const token = window.localStorage.getItem("adminToken");
    if (!token) {
      setState({ rows: [], error: "Please login first." });
      return;
    }

    fetchAdminModules(token)
      .then((rows) => setState({ rows, error: "" }))
      .catch((error) => setState({ rows: [], error: error.message }));
  }, []);

  return (
    <AdminShell title="Service Modules" intro="All competition extension tracks are discoverable from one admin surface.">
      {state.error ? <p className="status-message error">{state.error}</p> : null}
      <div className="section-grid">
        {state.rows.map((row) => (
          <article key={row.slug} className="glass-card section-card">
            <span className="pill">{row.category}</span>
            <h3>{row.name}</h3>
            <p>{row.description}</p>
            <p className="muted">Status: {row.status}</p>
            <Link className="secondary-button" href={row.adminRoute}>
              Open placeholder
            </Link>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}

