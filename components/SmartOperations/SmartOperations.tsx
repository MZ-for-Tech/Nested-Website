"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./SmartOperations.module.css";
import DotsIcon from "../IconCollage/DotsIcon";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SmartOperations() {
  const { tr, lang } = useLanguage();
  const s = tr.smartOps;
  const c = tr.consultation;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clientName: "",
    phone: "",
    email: "",
    companyName: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName || !formData.phone || !formData.email || !formData.subject || !formData.message) return;

    const emailSubject = `BOOK A CONSULTATION : ${formData.clientName}`;
    const emailBody = `Client Name: ${formData.clientName}
Phone Number: ${formData.phone}
Email Address: ${formData.email}
Company Name: ${formData.companyName || "N/A"}
Subject: ${formData.subject}

Message / Content:
${formData.message}`;

    const mailtoUrl = `mailto:NestedUnited@Gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.open(mailtoUrl, "_blank");
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        clientName: "",
        phone: "",
        email: "",
        companyName: "",
        subject: "",
        message: "",
      });
    }, 300);
  };

  return (
    <section className={styles.smartOperations} aria-label="Nested United — Smart Operations">
      <div className={styles.container}>
        {/* Left Column - Full Bleed Image */}
        <div className={styles.leftColumn}>
          <Image
            src="/ASSETS/pics/hq2.png"
            alt="Nested United modern office interior with team collaboration spaces"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={styles.image}
          />
        </div>

        {/* Right Column - Text Content */}
        <div className={styles.rightColumn}>
          <div className={styles.dotsIconWrapper} aria-hidden="true">
            <DotsIcon />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>
              {s.headingLine1}<br />
              {s.headingLine2}<br />
              {s.headingLine3}<br />
              {s.headingLine4}
            </h2>
            <p className={styles.text}>{s.text}</p>
            <div className={styles.buttonRow}>
              {/* WhatsApp Link Button */}
              <a
                href="https://wa.me/966549799468"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
                aria-label={s.ariaBtn1}
              >
                {s.btn1}
                <span className={styles.buttonIcon} aria-hidden="true">→</span>
              </a>

              {/* Consultation Form Modal Button */}
              <button
                type="button"
                className={styles.buttonSecondary}
                onClick={() => setIsModalOpen(true)}
                aria-label={s.ariaBtn2}
              >
                {s.btn2}
                <span className={styles.buttonIcon} aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Consultation Pop-up Modal ── */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleClose}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={handleClose}
              aria-label={c.closeBtn}
            >
              ✕
            </button>

            {!isSubmitted ? (
              <>
                <div className={styles.modalHeader}>
                  <h3 className={styles.modalTitle}>{c.title}</h3>
                  <p className={styles.modalSubtitle}>{c.subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                  {/* Client Name */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>{c.nameLabel}</label>
                    <input
                      type="text"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleChange}
                      placeholder={c.namePlaceholder}
                      required
                      className={styles.input}
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>{c.phoneLabel}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={c.phonePlaceholder}
                        required
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>{c.emailLabel}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={c.emailPlaceholder}
                        required
                        className={styles.input}
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>{c.companyLabel}</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder={c.companyPlaceholder}
                      className={styles.input}
                    />
                  </div>

                  {/* Subject */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>{c.subjectLabel}</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={c.subjectPlaceholder}
                      required
                      className={styles.input}
                    />
                  </div>

                  {/* Message */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>{c.messageLabel}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={c.messagePlaceholder}
                      rows={3}
                      required
                      className={styles.textarea}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    {c.submitBtn} →
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.successState}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>{c.successTitle}</h3>
                <p className={styles.successMessage}>{c.successMessage}</p>
                <button type="button" className={styles.submitBtn} onClick={handleClose}>
                  {c.closeBtn}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
