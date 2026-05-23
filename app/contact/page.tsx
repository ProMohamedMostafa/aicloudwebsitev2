"use client";

import { useRef, useLayoutEffect, useState } from "react";
import "./contact.css";
import gsap from "gsap";
import { BASE_URL } from "@/config/api";
import { useI18n } from "../i18n/context";

export default function Contact() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const formElementsRef = useRef<(HTMLDivElement | HTMLButtonElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, descriptionRef.current, ...formElementsRef.current], { opacity: 0, y: 30 });
      const mainTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      mainTl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 });
      mainTl.to(titleRef.current, { opacity: 1, y: 0, duration: 1 }, "+=0.2");
      mainTl.to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3");
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

    if (!formData.name.trim()) { newErrors.name = t("contactPage.nameRequired"); isValid = false; }
    else if (formData.name.trim().length < 2) { newErrors.name = t("contactPage.nameMinLength"); isValid = false; }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) { newErrors.email = t("contactPage.emailRequired"); isValid = false; }
    else if (!emailRegex.test(formData.email)) { newErrors.email = t("contactPage.emailInvalid"); isValid = false; }

    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ""))) {
      newErrors.phone = t("contactPage.phoneInvalid"); isValid = false;
    }

    if (!formData.message.trim()) { newErrors.message = t("contactPage.messageRequired"); isValid = false; }
    else if (formData.message.trim().length < 10) { newErrors.message = t("contactPage.messageMinLength"); isValid = false; }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      setSubmitStatus({ type: "success", message: t("contactPage.successMessage") });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({ type: "error", message: t("contactPage.errorMessage") });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page" ref={sectionRef}>
      <section className="contact-main-content">
        <div className="contact-hero" ref={heroRef}>
          <h2 ref={titleRef}>{t("contactPage.title")}</h2>
          <p ref={descriptionRef}>{t("contactPage.description")}</p>
        </div>

        <div className="contact-form-wrapper" ref={formRef}>
          {submitStatus.type && (
            <div className={`submit-status ${submitStatus.type}`} ref={addToFormRefs}>
              {submitStatus.message}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group" ref={addToFormRefs}>
              <label htmlFor="name">{t("contactPage.fullNameRequired")}</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                className={errors.name ? "error" : ""} placeholder={t("contactPage.namePlaceholder")} disabled={isSubmitting} />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group" ref={addToFormRefs}>
              <label htmlFor="email">{t("contactPage.emailAddressRequired")}</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                className={errors.email ? "error" : ""} placeholder={t("contactPage.emailPlaceholder")} disabled={isSubmitting} />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group" ref={addToFormRefs}>
              <label htmlFor="phone">{t("contactPage.phoneNumber")}</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                className={errors.phone ? "error" : ""} placeholder={t("contactPage.phonePlaceholder")} disabled={isSubmitting} />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group" ref={addToFormRefs}>
              <label htmlFor="message">{t("contactPage.yourMessageRequired")}</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                className={errors.message ? "error" : ""} placeholder={t("contactPage.messagePlaceholder")}
                rows={5} disabled={isSubmitting} />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-button" ref={addToFormRefs} disabled={isSubmitting}>
              {isSubmitting ? t("contactPage.sending") : t("contactPage.send")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
