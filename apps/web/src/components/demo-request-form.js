"use client";

import { useState } from "react";
import { submitDemoRequest } from "@/lib/api";

const initialForm = {
  contactName: "",
  companyName: "",
  phone: "",
  appointmentTime: "",
  message: "",
  region: "",
  teamSize: "",
  interest: []
};

const interestOptions = ["展業效率提升", "經營管理提效", "流程協同與數據賦能", "市場合作與商務諮詢"];

function validateForm(form) {
  const errors = {};
  const phonePattern = /^[+\d][\d\s().-]{5,}$/;
  const appointmentDate = form.appointmentTime ? new Date(form.appointmentTime) : null;

  if (!form.contactName.trim()) {
    errors.contactName = "請填寫姓名";
  }
  if (!form.companyName.trim()) {
    errors.companyName = "請填寫公司名稱";
  }
  if (!phonePattern.test(form.phone.trim())) {
    errors.phone = "請填寫有效的聯絡電話";
  }
  if (!form.appointmentTime || Number.isNaN(appointmentDate?.getTime())) {
    errors.appointmentTime = "請選擇預約時間";
  } else if (appointmentDate <= new Date()) {
    errors.appointmentTime = "預約時間需晚於現在";
  }

  return errors;
}

function buildRequestBody(form) {
  return {
    name: form.contactName.trim(),
    contactName: form.contactName.trim(),
    company: form.companyName.trim(),
    companyName: form.companyName.trim(),
    phone: form.phone.trim(),
    appointmentTime: form.appointmentTime,
    message: form.message.trim(),
    region: form.region.trim(),
    teamSize: form.teamSize,
    interest: form.interest
  };
}

export function DemoRequestForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });
    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: "error", message: "請先修正表單中的提示後再提交。" });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitDemoRequest(buildRequestBody(form));
      setStatus({
        type: "success",
        message: `預約已提交${result?.status ? `，當前狀態：${result.status}` : ""}。LifeBee 團隊將跟進聯絡。`
      });
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "提交失敗，請稍後重試或透過聯絡我們頁面聯繫團隊。"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function updateInterest(event) {
    const { checked, value } = event.target;
    setForm((current) => ({
      ...current,
      interest: checked ? [...current.interest, value] : current.interest.filter((item) => item !== value)
    }));
  }

  return (
    <form className="glass-card form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          姓名
          <input name="contactName" value={form.contactName} onChange={updateField} required />
          {errors.contactName ? <span className="field-error">{errors.contactName}</span> : null}
        </label>
        <label>
          公司名稱
          <input name="companyName" value={form.companyName} onChange={updateField} required />
          {errors.companyName ? <span className="field-error">{errors.companyName}</span> : null}
        </label>
        <label>
          聯絡電話
          <input name="phone" type="tel" value={form.phone} onChange={updateField} required />
          {errors.phone ? <span className="field-error">{errors.phone}</span> : null}
        </label>
        <label>
          預約時間
          <input name="appointmentTime" type="datetime-local" value={form.appointmentTime} onChange={updateField} required />
          {errors.appointmentTime ? <span className="field-error">{errors.appointmentTime}</span> : null}
        </label>
        <label>
          公司所在地
          <input name="region" value={form.region} onChange={updateField} placeholder="例如：香港、澳門、新加坡" />
        </label>
        <label>
          團隊規模
          <select name="teamSize" value={form.teamSize} onChange={updateField}>
            <option value="">請選擇</option>
            <option value="1-10">1-10 人</option>
            <option value="11-50">11-50 人</option>
            <option value="51-200">51-200 人</option>
            <option value="200+">200 人以上</option>
          </select>
        </label>
        <label className="full-span">
          希望了解的服務方向
          <span className="checkbox-grid">
            {interestOptions.map((option) => (
              <span className="checkbox-option" key={option}>
                <input checked={form.interest.includes(option)} onChange={updateInterest} type="checkbox" value={option} />
                {option}
              </span>
            ))}
          </span>
        </label>
        <label className="full-span">
          備註
          <textarea name="message" rows="4" value={form.message} onChange={updateField} />
        </label>
      </div>
      <button className="primary-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "提交中..." : "提交預約需求"}
      </button>
      {status.type !== "idle" ? (
        <p className={`status-message ${status.type}`}>{status.message}</p>
      ) : null}
    </form>
  );
}
