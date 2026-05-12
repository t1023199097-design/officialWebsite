"use client";

import { useState } from "react";
import { submitDemoRequest } from "@/lib/api";

const initialForm = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  message: ""
};

export function DemoRequestForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const result = await submitDemoRequest(form);
      setStatus({
        type: "success",
        message: `预约已提交，当前状态：${result.status}`
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <form className="glass-card form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Company
          <input name="companyName" value={form.companyName} onChange={updateField} required />
        </label>
        <label>
          Contact
          <input name="contactName" value={form.contactName} onChange={updateField} required />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={updateField} required />
        </label>
        <label>
          Phone
          <input name="phone" value={form.phone} onChange={updateField} required />
        </label>
        <label className="full-span">
          Message
          <textarea name="message" rows="4" value={form.message} onChange={updateField} />
        </label>
      </div>
      <button className="primary-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Demo Request"}
      </button>
      {status.type !== "idle" ? (
        <p className={`status-message ${status.type}`}>{status.message}</p>
      ) : null}
    </form>
  );
}

