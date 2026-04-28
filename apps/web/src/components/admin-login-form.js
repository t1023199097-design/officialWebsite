"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/lib/api";

export function AdminLoginForm() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: "admin",
    password: "ChangeMe123!"
  });
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setCredentials((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback("");

    try {
      const result = await loginAdmin(credentials);
      window.localStorage.setItem("adminToken", result.token);
      window.localStorage.setItem("adminUser", JSON.stringify(result.user));
      router.push("/admin");
    } catch (error) {
      setFeedback(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="glass-card admin-login-card" onSubmit={handleSubmit}>
      <label>
        Username
        <input name="username" value={credentials.username} onChange={updateField} required />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          value={credentials.password}
          onChange={updateField}
          required
        />
      </label>
      <button className="primary-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
      {feedback ? <p className="status-message error">{feedback}</p> : null}
    </form>
  );
}

