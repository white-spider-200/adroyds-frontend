"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import mainServices from "../services/mainServices";

const TURNSTILE_SITE_KEY = "0x4AAAAAACJY6OfpznkF_JB6";

const ContactAdroyts = () => {
  const { t, i18n } = useTranslation();
  const [socialMedia, setSocialMedia] = useState([]);

  const [form, setForm] = useState({
    purpose: "",
    fullName: "",
    company: "",
    jobTitle: "",
    email: "",
    phone: "",
    hearAbout: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);

  const sanitizeEnglish = (value) => value.replace(/[^\x20-\x7E]/g, "");

  useEffect(() => {
    const fetchSocialMedia = async () => {
      try {
        const [socialRes] = await Promise.all([mainServices.getSocialMedia(i18n.language)]);
        setSocialMedia(socialRes?.data?.data || []);
      } catch (err) {
        console.error("Home data fetch error:", err);
      }
    };
    fetchSocialMedia();
  }, [i18n.language]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (["fullName", "company", "jobTitle", "message"].includes(name)) {
      value = sanitizeEnglish(value);
    }
    if (name === "phone") value = value.replace(/[^0-9+]/g, "");

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const e = {};
    if (!form.purpose) e.purpose = t("requiredField");
    if (!form.fullName) e.fullName = t("requiredField");
    if (!form.company) e.company = t("requiredField");
    if (!form.jobTitle) e.jobTitle = t("requiredField");
    if (!form.email) e.email = t("requiredField");
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = t("invalidEmail");
    if (!form.phone) e.phone = t("requiredField");
    if (!form.hearAbout) e.hearAbout = t("requiredField");
    if (form.purpose === "services" && !form.service) e.service = t("requiredField");
    if (!form.message) e.message = t("requiredField");
    else if (form.message.length > 500) e.message = t("max500Chars");
    if (!turnstileToken) e.robot = t("verifyHuman");
    return e;
  };

  const handleSubmit = async () => {
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    if (form.purpose === "job") {
      const ok = window.confirm("You will be redirected to the Careers page. Continue?");
      if (ok) window.location.href = "/careers";
      return;
    }

    await fetch("/api/contact/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, turnstileToken }),
    });

    setSubmitted(true);
    setForm({
      purpose: "",
      fullName: "",
      company: "",
      jobTitle: "",
      email: "",
      phone: "",
      hearAbout: "",
      service: "",
      message: "",
    });
    setTurnstileToken(null);
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(50vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/adroyts-office.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F]/80 to-[#0E1C3F]/30"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          {/* Glass container */}
          <div className="mt-40 rounded-lg px-8 py-12 md:px-12 md:py-16">
            {/* Breadcrumbs */}
            <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
              <ol className="inline-flex space-x-2">
                <li>
                  <a href="/" className="hover:text-white hover:underline">
                    {t("home")}
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li className="font-semibold text-white" aria-current="page">
                  {t("contactUs")}
                </li>
              </ol>
            </nav>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white drop-shadow md:text-4xl">
              {t("getInTouch")}{" "}
            </h1>
            <p className="max-w-3xl text-lg text-white">{t("helpMessage")}</p>
          </div>
        </motion.div>
      </section>
      {/* INTRO TEXT - Card with Border Accent */}
      <div className="flex w-full justify-center px-4 py-8">
        <div className="max-w-4xl rounded-xl border-l-4 border-cyan-500 bg-white p-6 pl-6 text-lg italic text-gray-700 shadow-md">
          {t("communicationValue")}
        </div>
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:flex lg:gap-16">
        {/* Left Info */}
        <div className="space-y-6 lg:w-1/3">
          <Info title={t("phone")}>{i18n.language === "ar" ? "٦٦٧ ٤٢ ٢٣ ١١ ٩٦٦+" : "+966 11 23 42 667"}</Info>
          <Info title={t("email")}>Contact@adroyts.com</Info>
          <Info title={t("workingHours")}>
            <div>
              <span>{i18n.language === "ar" ? "الأحد – الخميس" : "Sunday – Thursday"}</span>
              <br />
              <span>{i18n.language === "ar" ? "٩:٠٠ ص – ٥:٠٠ م" : "9:00 AM – 5:00 PM"}</span>
            </div>
          </Info>

          <div className="mt-4 flex gap-3">
            {socialMedia.map((item) => (
              <a
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-white shadow-lg transition hover:bg-cyan-500"
              >
                <img src={item.image} alt={item.name || "Icon"} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="mt-10 rounded-3xl bg-white p-10 shadow-2xl lg:mt-0 lg:w-2/3">
          {submitted && (
            <div className="mb-6 rounded bg-green-100 p-4 text-center font-medium text-green-700">
              {t("thankYouMessage")}
            </div>
          )}

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {/* Purpose */}
            <Field label={t("purposeOfContact")} error={errors.purpose}>
              <select className="input-field" name="purpose" value={form.purpose} onChange={handleChange}>
                <option value="">{t("select")}</option>
                <option value="services">{t("serviceInquiry")}</option>
                <option value="general">{t("generalQuestion")}</option>
                <option value="feedback">{t("feedback")}</option>
                <option value="complaint">{t("complaint")}</option>
                <option value="job">{t("jobApplication")}</option>
                <option value="other">{t("other")}</option>
              </select>
            </Field>

            {form.purpose === "services" && (
              <Field label={t("serviceOfInterest")} error={errors.service}>
                <select className="input-field" name="service" value={form.service} onChange={handleChange}>
                  <option value="">{t("select")}</option>
                  <option>{t("recruitmentSolutionsTitle")}</option>
                  <option>{t("talentAssessment.title")}</option>
                  <option>{t("academy.title")}</option>
                  <option>{t("hrConsulting.title")}</option>
                  <option>{t("other")}</option>
                </select>
              </Field>
            )}

            <Field label={t("fullName")} error={errors.fullName}>
              <input className="input-field" name="fullName" value={form.fullName} onChange={handleChange} />
            </Field>

            <Field label={t("companyNames")} error={errors.company}>
              <input className="input-field" name="company" value={form.company} onChange={handleChange} />
            </Field>

            <Field label={t("jobTitle")} error={errors.jobTitle}>
              <input className="input-field" name="jobTitle" value={form.jobTitle} onChange={handleChange} />
            </Field>

            <Field label={t("email")} error={errors.email}>
              <input className="input-field" name="email" value={form.email} onChange={handleChange} />
            </Field>

            <Field label={t("phone")} error={errors.phone}>
              <input className="input-field" name="phone" value={form.phone} onChange={handleChange} />
            </Field>

            <Field label={t("howDidYouHear")} error={errors.hearAbout}>
              <select className="input-field" name="hearAbout" value={form.hearAbout} onChange={handleChange}>
                <option value="">{t("select")}</option>
                <option>{t("socialMedia")}</option>
                <option>{t("googleSearch")}</option>
                <option>{t("linkedIn")}</option>
                <option>{t("friendOrColleague")}</option>
                <option>{t("event")}</option>
                <option>{t("websiteAd")}</option>
                <option>{t("emailCampaign")}</option>
                <option>{t("other")}</option>
              </select>
            </Field>
          </div>

          <Field label={t("message")} error={errors.message}>
            <textarea
              className="input-field h-36"
              maxLength={500}
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </Field>

          {/* Turnstile */}
          <div
            className="cf-turnstile my-6"
            data-sitekey={TURNSTILE_SITE_KEY}
            data-callback={(token) => setTurnstileToken(token)}
          />
          {errors.robot && <p className="text-sm text-red-500">{errors.robot}</p>}

          <button
            onClick={handleSubmit}
            className="mt-4 w-full rounded-xl bg-cyan-400 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-cyan-600"
          >
            {t("send")}
          </button>
        </div>
      </div>

      {/* Map */}
      <div className="mt-16 h-[400px] w-full">
        <iframe
          title="Adroyts Location"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.414942835388!2d46.6835779!3d24.8154796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efca4e5d9079b%3A0x38b0da0c1514cbc9!2sADROYTS!5e0!3m2!1sen!2sjo!4v1763543313809!5m2!1sen!2sjo"
        />
      </div>
    </div>
  );
};

/* Reusable Components */
const Field = ({ label, error, children }) => (
  <div className="mb-2">
    <label className="mb-1 block font-medium text-gray-700">{label}</label>
    {children}
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

const Info = ({ title, children }) => (
  <div className="rounded-xl bg-indigo-50 p-5 shadow-lg">
    <h4 className="mb-1 font-bold text-cyan-400">{title}</h4>
    <p className="text-gray-600">{children}</p>
  </div>
);

export default ContactAdroyts;
