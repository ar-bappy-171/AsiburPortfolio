"use client";

import { contact, socials } from "@/lib/portfolio-data";
import { useToast } from "@/components/portfolio/Toast";
import { useState } from "react";
import type { FormEvent } from "react";

type FieldName = "name" | "email" | "subject" | "message";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const { show } = useToast();
  const [values, setValues] = useState<Record<FieldName, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<FieldName, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ text: string; kind: "" | "success" | "error" }>({
    text: "",
    kind: "",
  });

  const validate = (name: FieldName, value: string): boolean => {
    if (value.trim() === "") return false;
    if (name === "email") return EMAIL_RE.test(value.trim());
    return true;
  };

  const handleChange = (name: FieldName, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((e) => ({ ...e, [name]: !validate(name, value) }));
    }
  };

  const handleBlur = (name: FieldName) => {
    setErrors((e) => ({ ...e, [name]: !validate(name, values[name]) }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Record<FieldName, boolean> = {
      name: !validate("name", values.name),
      email: !validate("email", values.email),
      subject: !validate("subject", values.subject),
      message: !validate("message", values.message),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      setStatus({ text: "Please fill in all required fields correctly.", kind: "error" });
      const firstInvalid = (["name", "email", "subject", "message"] as FieldName[]).find(
        (n) => newErrors[n]
      );
      if (firstInvalid) {
        document.getElementById(firstInvalid)?.focus();
      }
      return;
    }

    setSubmitting(true);
    setStatus({ text: "Sending your message…", kind: "" });

    try {
      const formData = new FormData();
      Object.entries(values).forEach(([k, v]) => formData.append(k, v));

      const res = await fetch(contact.formAction, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus({ text: "Thank you! Your message has been sent.", kind: "success" });
        setValues({ name: "", email: "", subject: "", message: "" });
        show("Message sent successfully!");
      } else {
        throw new Error("Network response was not ok");
      }
    } catch {
      setStatus({
        text: "Sorry, something went wrong. Please try again or email me directly.",
        kind: "error",
      });
      show("Failed to send message. Please email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <h2 className="section-title reveal center" id="contact-heading">
          Contact
        </h2>
        <p className="section-sub reveal center">Let&apos;s build a better future together.</p>

        <div className="container cols">
          {/* Left column */}
          <div className="col">
            <h3 className="title">Contact</h3>
            <ul className="contact__list">
              <li>
                <i className="fas fa-phone" aria-hidden="true" />
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <i className="fas fa-envelope" aria-hidden="true" />
                <a href={contact.emailHref}>{contact.email}</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                <span>{contact.address}</span>
              </li>
            </ul>
            <p className="follow-label">Follow Me</p>
            <div className="list-inline social-links">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                >
                  <i className={s.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="col">
            <h3 className="title">Leave a Message</h3>
            <form className="form" id="contactForm" onSubmit={handleSubmit} noValidate>
              {([
                { name: "name" as const, label: "Name", type: "text", autoComplete: "name" },
                { name: "email" as const, label: "Email", type: "email", autoComplete: "email" },
                { name: "subject" as const, label: "Subject", type: "text", autoComplete: "off" },
              ]).map((f) => (
                <div className={"field" + (errors[f.name] ? " invalid" : "")} key={f.name}>
                  <label htmlFor={f.name}>
                    {f.label} <span className="req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required
                    autoComplete={f.autoComplete}
                    value={values[f.name]}
                    onChange={(e) => handleChange(f.name, e.target.value)}
                    onBlur={() => handleBlur(f.name)}
                  />
                  <span className="error-message">
                    {f.name === "email"
                      ? "A valid email is required."
                      : `${f.label} is required.`}
                  </span>
                </div>
              ))}

              <div className={"field" + (errors.message ? " invalid" : "")}>
                <label htmlFor="message">
                  Message <span className="req" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={values.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                />
                <span className="error-message">Message is required.</span>
              </div>

              <button className="btn primary" type="submit" disabled={submitting}>
                {submitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin" aria-hidden="true" /> Sending…
                  </>
                ) : (
                  <>
                    <i className="fa-regular fa-paper-plane" aria-hidden="true" /> Send Message
                  </>
                )}
              </button>

              <p
                className={"form__status" + (status.kind ? " " + status.kind : "")}
                id="formStatus"
                role="status"
                aria-live="polite"
              >
                {status.text}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
