"use client";

import { useRef, useLayoutEffect, useState } from "react";
import "./contact.css";
import gsap from "gsap";
import { BASE_URL } from "@/config/api";
import { useI18n } from "@/app/i18n/context";

export default function Contact() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });
  const [honeypot, setHoneypot] = useState("");
  const formRenderedAt = useRef<number>(Date.now());
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const formElementsRef = useRef<(HTMLDivElement | HTMLButtonElement | null)[]>([]);

  useLayoutEffect(() => {
    formRenderedAt.current = Date.now();
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, descriptionRef.current, ...formElementsRef.current], { opacity: 0, y: 30 });
      const mainTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      mainTl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 });
      mainTl.to(titleRef.current, { opacity: 1, y: 0, duration: 1 }, "+=0.2")
            .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3");
      mainTl.fromTo(formRef.current, { opacity: 0, scale: 0.9, rotationY: -10 }, { opacity: 1, scale: 1, rotationY: 0, duration: 1.2, ease: "back.out(1.4)" }, "-=0.5");
      mainTl.to(formElementsRef.current, { opacity: 1, y: 0, duration: 0.6, stagger: { amount: 0.8, from: "start" }, ease: "power2.out" }, "-=0.3");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const addToFormRefs = (el: HTMLDivElement | HTMLButtonElement | null) => {
    if (el && !formElementsRef.current.includes(el)) formElementsRef.current.push(el);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (submitStatus.type) setSubmitStatus({ type: null, message: "" });
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) { newErrors.name = t("contact.nameRequired"); isValid = false; }
    else if (formData.name.trim().length < 2) { newErrors.name = t("contact.nameMinLength"); isValid = false; }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) { newErrors.email = t("contact.emailRequired"); isValid = false; }
    else if (!emailRegex.test(formData.email)) { newErrors.email = t("contact.emailInvalid"); isValid = false; }

    const phoneRegex = /^[\+]?[\d]{7,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ""))) {
      newErrors.phone = t("contact.phoneInvalid"); isValid = false;
    }

    if (!formData.message.trim()) { newErrors.message = t("contact.messageRequired"); isValid = false; }
    else if (formData.message.trim().length < 10) { newErrors.message = t("contact.messageMinLength"); isValid = false; }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) { setSubmitStatus({ type: "success", message: t("contact.successMessage") }); return; }
    const elapsed = Date.now() - formRenderedAt.current;
    if (elapsed < 1000) { setSubmitStatus({ type: "error", message: t("contact.slowDown") }); return; }
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const response = await fetch(`${BASE_URL}/api/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "aicloud" as const }),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      await response.json();
      setSubmitStatus({ type: "success", message: t("contact.successMessage") });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (process.env.NODE_ENV !== "production") console.error("Error submitting form:", error);
      setSubmitStatus({ type: "error", message: t("contact.errorMessage") });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page" ref={sectionRef}>
      <section className="contact-main-content">
        <div className="contact-hero" ref={heroRef}>
          <h2 ref={titleRef}>{t("contact.title")}</h2>
          <p ref={descriptionRef}>{t("contact.description")}</p>
        </div>

        <div className="contact-form-wrapper" ref={formRef}>
          {submitStatus.type && (
            <div className={`submit-status ${submitStatus.type}`} ref={addToFormRefs}>
              {submitStatus.message}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div aria-hidden="true" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", opacity: 0, pointerEvents: "none" } as React.CSSProperties}>
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} autoComplete="off" tabIndex={-1} />
            </div>

            <div className="form-group" ref={addToFormRefs}>
              <label htmlFor="name">{t("contact.nameLabel")}</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={errors.name ? "error" : ""} placeholder={t("contact.namePlaceholder")} disabled={isSubmitting} />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group" ref={addToFormRefs}>
              <label htmlFor="email">{t("contact.emailLabel")}</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? "error" : ""} placeholder={t("contact.emailPlaceholder")} disabled={isSubmitting} />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group" ref={addToFormRefs}>
              <label htmlFor="phone">{t("contact.phoneLabel")}</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? "error" : ""} placeholder={t("contact.phonePlaceholder")} disabled={isSubmitting} />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group" ref={addToFormRefs}>
              <label htmlFor="message">{t("contact.messageLabel")}</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className={errors.message ? "error" : ""} placeholder={t("contact.messagePlaceholder")} rows={5} disabled={isSubmitting} />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-button" ref={addToFormRefs} disabled={isSubmitting}>
              {isSubmitting ? t("contact.sending") : t("contact.send")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
