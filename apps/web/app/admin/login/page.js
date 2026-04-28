import { AdminLoginForm } from "@/components/admin-login-form";

export default function AdminLoginPage() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <p className="eyebrow">Admin Access</p>
        <h1>Minimal console login for the competition starter.</h1>
        <p className="lede">
          默认账号来自后端配置，首版只做单管理员会话，后续可升级为角色权限体系。
        </p>
      </section>
      <AdminLoginForm />
    </div>
  );
}

