"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineClockCircle, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import mainServices from "../services/mainServices";

const TURNSTILE_SITE_KEY = "";

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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="relative -mt-20 overflow-hidden bg-[#0E1C3F] md:-mt-40">
        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[20vh] max-w-7xl items-center px-6 py-20 md:min-h-[calc(43vh+80px)]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mt-20 text-center text-3xl font-extrabold text-white sm:text-4xl md:text-left"
          >
            {t("getInTouch")}
          </motion.h1>
        </div>

        {/* Clipped Image */}
        <div className="absolute top-0 z-0 h-full w-full overflow-hidden md:w-[40%] ltr:right-0 rtl:left-0">
          <img
            src="/assets/adroyts-office.webp"
            alt="Expert Training Career Growth"
            className="clipped-image h-full w-full object-cover"
          />
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C3F]/85 via-[#0E1C3F]/50 to-transparent md:bg-gradient-to-r md:from-[#0E1C3F]/70 md:via-[#0E1C3F]/40 md:to-transparent" />
        </div>
      </section>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl space-y-12 px-6 py-16">
        {/* Contact Cards */}
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Phone */}
          <div className="flex items-center rounded-xl bg-gray-100 p-5">
            <div className="flex-shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#10343B] text-white">
                <AiOutlinePhone className="h-9 w-9" />
              </div>
            </div>
            <div className="ltr:ml-4 rtl:mr-4">
              <h4 className="text-lg font-bold text-gray-800">{t("phone")}</h4>
              <p className="text-base leading-relaxed text-gray-600">
                {i18n.language === "ar" ? "٦٦٧ ٤٢ ٢٣ ١١ ٩٦٦+" : "+966 11 23 42 667"}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center rounded-xl bg-gray-100 p-5">
            <div className="flex-shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#10343B] text-white">
                <AiOutlineMail className="h-9 w-9" />
              </div>
            </div>
            <div className="ltr:ml-4 rtl:mr-4">
              <h4 className="text-lg font-bold text-gray-800">{t("email")}</h4>
              <p className="text-base leading-relaxed text-gray-600">Contact@adroyts.com</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-center rounded-xl bg-gray-100 p-5">
            <div className="flex-shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#10343B] text-white">
                <AiOutlineClockCircle className="h-9 w-9" />
              </div>
            </div>
            <div className="ltr:ml-4 rtl:mr-4">
              <h4 className="text-lg font-bold text-gray-800">{t("workingHours")}</h4>
              <p className="text-base leading-relaxed text-gray-600">
                <span>{i18n.language === "ar" ? "الأحد – الخميس" : "Sunday – Thursday"}</span>
                <br />
                <span>{i18n.language === "ar" ? "٩:٠٠ ص – ٥:٠٠ م" : "9:00 AM – 5:00 PM"}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Section - Form + Communication */}
        <div className="lg:flex lg:gap-10">
          {/* Left Column - Social Media (Image Background) */}
          <div
            className="relative mt-10 space-y-8 overflow-hidden rounded-2xl bg-cover bg-center lg:mt-0 lg:w-1/2"
            style={{ backgroundImage: "url('/assets/adroyts-office.webp')" }}
          >
            {/* Content */}
            <div className="relative z-10 p-8 md:p-12">
              {/* Quote */}
              <div className="relative max-w-xl rounded-xl bg-white/10 p-6 backdrop-blur-md md:p-8">
                {/* Decorative quote mark */}
                <span className="absolute -top-6 left-4 font-serif text-6xl text-cyan-200">“</span>

                <p className="relative text-lg leading-relaxed text-white md:text-xl">
                  {t("communicationValue")}
                </p>

                {/* Accent line */}
                <div className="mt-4 h-1 w-12 rounded-full bg-cyan-400" />
              </div>

              {/* Social Icons */}
              <div className="mt-8 flex flex-wrap gap-3">
                {socialMedia.map((item) => (
                  <a
                    key={item.link}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-white shadow-lg transition hover:scale-110 hover:bg-cyan-500"
                  >
                    <img src={item.image} alt={item.name || "Icon"} className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="space-y-8 lg:w-1/2">
            <div className="rounded-xl bg-gray-100 p-10">
              {submitted && (
                <div className="mb-6 rounded bg-green-100 p-4 text-center text-base font-medium leading-relaxed text-green-700">
                  {t("thankYouMessage")}
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Purpose */}
                <Field error={errors.purpose}>
                  <select
                    className="h-14 w-full rounded-lg bg-white px-4 py-2 text-base text-black transition duration-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    name="purpose"
                    value={form.purpose}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      {t("purposeOfContact")}
                    </option>
                    <option value="services">{t("serviceInquiry")}</option>
                    <option value="general">{t("generalQuestion")}</option>
                    <option value="feedback">{t("feedback")}</option>
                    <option value="complaint">{t("complaint")}</option>
                    <option value="job">{t("jobApplication")}</option>
                    <option value="other">{t("other")}</option>
                  </select>
                </Field>

                {form.purpose === "services" && (
                  <Field error={errors.service}>
                    <select
                      className="h-14 w-full rounded-lg bg-white px-4 py-2 text-base text-black transition duration-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        {t("serviceOfInterest")}
                      </option>
                      <option>{t("recruitmentSolutionsTitle")}</option>
                      <option>{t("talentAssessment.title")}</option>
                      <option>{t("academy.title")}</option>
                      <option>{t("hrConsulting.title")}</option>
                      <option>{t("other")}</option>
                    </select>
                  </Field>
                )}

                <Field error={errors.fullName}>
                  <input
                    placeholder={t("fullName")}
                    className="h-14 w-full rounded-lg bg-white px-4 py-2 text-base transition duration-200 placeholder:text-black focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                  />
                </Field>

                <Field error={errors.company}>
                  <input
                    placeholder={t("companyNames")}
                    className="h-14 w-full rounded-lg bg-white px-4 py-2 text-base transition duration-200 placeholder:text-black focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                  />
                </Field>

                <Field error={errors.jobTitle}>
                  <input
                    placeholder={t("jobTitle")}
                    className="h-14 w-full rounded-lg bg-white px-4 py-2 text-base transition duration-200 placeholder:text-black focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    name="jobTitle"
                    value={form.jobTitle}
                    onChange={handleChange}
                  />
                </Field>

                <Field error={errors.email}>
                  <input
                    placeholder={t("email")}
                    className="h-14 w-full rounded-lg bg-white px-4 py-2 text-base transition duration-200 placeholder:text-black focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </Field>

                <Field error={errors.phone}>
                  <input
                    placeholder={t("phone")}
                    className="h-14 w-full rounded-lg bg-white px-4 py-2 text-base transition duration-200 placeholder:text-black focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </Field>
              </div>
              <Field error={errors.hearAbout}>
                <select
                  className="my-4 h-14 w-full rounded-lg bg-white px-4 py-2 text-base text-black transition duration-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  name="hearAbout"
                  value={form.hearAbout}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    {t("howDidYouHear")}
                  </option>
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

              <Field error={errors.message}>
                <textarea
                  placeholder={t("message")}
                  className="h-36 w-full rounded-lg bg-white px-4 py-2 text-base text-gray-700 transition duration-200 placeholder:text-black focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
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
                class="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-md bg-cyan-200 px-6 font-medium text-neutral-50"
              >
                <span class="absolute h-56 w-full rounded-full bg-cyan-400 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
                <span class="relative"> {t("send")}</span>
              </button>
            </div>
          </div>
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
const Field = ({ error, children }) => (
  <div>
    {children}
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export default ContactAdroyts;
