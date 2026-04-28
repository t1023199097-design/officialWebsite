"use client";

import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin-shell";
import { fetchAdminDemoRequests, fetchAdminModules } from "@/lib/api";

export default function AdminDashboardPage() {
  const [summary, setSummary] = useState({ demoCount: 0, moduleCount: 0, error: "" });

  useEffect(() => {
    const token = window.localStorage.getItem("adminToken");
    if (!token) {
      setSummary((current) => ({ ...current, error: "Please login first." }));
      return;
    }

    Promise.all([fetchAdminDemoRequests(token), fetchAdminModules(token)])
      .then(([demoRequests, modules]) => {
        setSummary({
          demoCount: demoRequests.length,
          moduleCount: modules.length,
          error: ""
        });
      })
      .catch((error) => {
        setSummary({ demoCount: 0, moduleCount: 0, error: error.message });
      });
  }, []);

  return (
    <AdminShell
      title="Minimal Operations Dashboard"
      intro="首版后台聚焦预约查看和模块占位管理，后续再往内容运营和客户赋能扩展。"
    >
      <div className="admin-grid">
        <article className="glass-card section-card">
          <span className="pill">Demo Requests</span>
          <h3>{summary.demoCount}</h3>
          <p>Current leads stored through the public demo form.</p>
        </article>
        <article className="glass-card section-card">
          <span className="pill">Reserved Modules</span>
          <h3>{summary.moduleCount}</h3>
          <p>All extension tracks are wired into the admin surface.</p>
        </article>
      </div>
      {summary.error ? <p className="status-message error">{summary.error}</p> : null}
    </AdminShell>
  );
}

