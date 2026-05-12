"use client";

import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin-shell";
import { fetchAdminDemoRequests } from "@/lib/api";

export default function AdminDemoRequestsPage() {
  const [state, setState] = useState({ rows: [], error: "" });

  useEffect(() => {
    const token = window.localStorage.getItem("adminToken");
    if (!token) {
      setState({ rows: [], error: "Please login first." });
      return;
    }

    fetchAdminDemoRequests(token)
      .then((rows) => setState({ rows, error: "" }))
      .catch((error) => setState({ rows: [], error: error.message }));
  }, []);

  return (
    <AdminShell title="Demo Requests" intro="View all public-site demo leads collected by the aggregation API.">
      {state.error ? <p className="status-message error">{state.error}</p> : null}
      <div className="glass-card table-card">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Status</th>
              <th>External Sync</th>
            </tr>
          </thead>
          <tbody>
            {state.rows.map((row) => (
              <tr key={row.id}>
                <td>{row.companyName}</td>
                <td>{row.contactName}</td>
                <td>{row.status}</td>
                <td>{row.externalSyncState}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}

