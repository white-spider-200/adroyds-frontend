import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import mainServices from "../services/mainServices";

const TURNSTILE_SITE_KEY = "YOUR_TURNSTILE_SITE_KEY";

const ContactAdroyts = () => {
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

  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [socialMedia, setSocialMedia] = useState([]);
  const { t, i18n } = useTranslation();
  // Load Cloudflare Turnstile script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const fetchSocialMedia = async () => {
      try {
        const [socialRes] = await Promise.all([mainServices.getSocialMedia(i18n.language)]);

        setSocialMedia(socialRes?.data?.data || []);
        console.log("socialRes?.data?.data", socialRes?.data?.data);
      } catch (err) {
        console.error("Home data fetch error:", err);
      }
    };

    fetchSocialMedia();
  }, [i18n.language]);

  // Strip emojis + non-English letters
  const sanitizeEnglish = (value) => value.replace(/[^\x00-\x7F]/g, "");

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (["fullName", "company", "jobTitle", "message"].includes(name)) {
      value = sanitizeEnglish(value);
    }

    // Phone numbers should allow + and digits only
    if (name === "phone") {
      value = value.replace(/[^0-9+]/g, "");
    }

    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "purpose") {
      setShowServiceDropdown(["Service Inquiry", "Partnership", "General Question"].includes(value));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.purpose) newErrors.purpose = "Required";
    if (!form.fullName) newErrors.fullName = "Required";
    if (!form.company) newErrors.company = "Required";
    if (!form.jobTitle) newErrors.jobTitle = "Required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.phone) newErrors.phone = "Required";

    if (form.phone && form.phone.length < 5) newErrors.phone = "Phone too short";

    if (!form.hearAbout) newErrors.hearAbout = "Required";

    if (showServiceDropdown && !form.service) newErrors.service = "Required for this purpose";

    if (!form.message) newErrors.message = "Required";
    if (form.message.length > 500) newErrors.message = "Max 500 characters.";

    return newErrors;
  };

  const handleSubmit = async () => {
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    if (form.purpose === "Job Application") {
      window.location.href = "/careers";
      return;
    }

    setSubmitting(true);

    try {
      const token = await window.turnstile.render("#cf-captcha", {
        sitekey: TURNSTILE_SITE_KEY,
      });

      const res = await fetch("/api/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token }),
      });

      if (res.ok) {
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
      } else {
        alert("Error sending message.");
      }
    } catch (e) {
      console.error(e);
      alert("Submission failed.");
    }
    setSubmitting(false);
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

      {/* INTRO TEXT */}
      <div className="flex w-full justify-center bg-gray-100 px-4 py-12">
        <div className="max-w-3xl text-center text-lg leading-relaxed text-gray-700">
          {t("communicationValue")}
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row">
        {/* LEFT SIDE – CONTACT INFO */}
        <div className="space-y-6 lg:w-1/3">
          <div className="group relative rounded-lg bg-gray-100 p-3 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-cyan-400">
            <h4 className="text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
              {t("phone")}
            </h4>

            <a
              href="tel:+966112342667"
              className="block text-sm leading-snug text-gray-600 transition-colors duration-300 group-hover:text-white"
            >
              {i18n.language === "ar" ? "٦٦٧ ٤٢ ٢٣ ١١ ٩٦٦+" : "+966 11 23 42 667"}
            </a>
          </div>

          <div className="group relative rounded-lg bg-gray-100 p-3 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-cyan-400">
            <h4 className="text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
              {t("email")}
            </h4>

            <a
              href="mailto:info@adroyts.com"
              className="block text-sm leading-snug text-gray-600 transition-colors duration-300 group-hover:text-white"
            >
              info@adroyts.com
            </a>
          </div>

          <div className="group relative rounded-lg bg-gray-100 p-3 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-cyan-400">
            <h4 className="text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
              {t("address")}
            </h4>

            <a className="block text-sm leading-snug text-gray-600 transition-colors duration-300 group-hover:text-white">
              {i18n.language === "ar"
                ? "٣٣٨٥ طريق الثمامة، حي الندى، الرياض ١٣٣١٧، المملكة العربية السعودية"
                : "3385 Thumamah Road, Alnada District, Riyadh 13317, Kingdom of Saudi Arabia"}
            </a>
          </div>

          <div className="group relative flex items-center gap-4 rounded-lg bg-gray-400 p-3 transition-all duration-300">
            <h4 className="text-base font-bold text-white transition-colors duration-300">{t("followUs")}</h4>
            <div className="flex space-x-3">
              {socialMedia.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition hover:text-gray-400"
                >
                  <img src={item.image} alt={`Icon`} className="h-6 w-6 bg-cover" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="rounded-xl bg-gray-100 p-8 shadow lg:w-2/3">
          {submitted && (
            <div className="mb-6 rounded bg-green-100 p-4 text-green-700">{t("thankYouMessage")}</div>
          )}

          {/* Purpose */}
          <div className="mb-3">
            <label className="mb-1 block font-medium"> {t("purposeOfContact")}</label>
            <select
              name="purpose"
              value={form.purpose}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value=""> {t("select")}</option>
              <option value="Service Inquiry">{t("serviceInquiry")}</option>
              <option value="Partnership">{t("partnership")}</option>
              <option value="General Question">{t("generalQuestion")}</option>
              <option value="Job Application">{t("jobApplication")}</option>
            </select>
            {errors.purpose && <p className="text-sm text-red-500">{errors.purpose}</p>}
          </div>

          {/* Full Name */}
          <div className="mb-3">
            <label className="mb-1 block font-medium">{t("fullName")}</label>
            <input
              type="text"
              maxLength={50}
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
          </div>

          {/* Company & Job */}
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="md:w-1/2">
              <label className="mb-1 block font-medium">{t("companyNames")}</label>
              <input
                type="text"
                maxLength={50}
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              {errors.company && <p className="text-sm text-red-500">{errors.company}</p>}
            </div>

            <div className="md:w-1/2">
              <label className="mb-1 block font-medium">{t("jobTitle")}</label>
              <input
                type="text"
                maxLength={50}
                name="jobTitle"
                value={form.jobTitle}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              {errors.jobTitle && <p className="text-sm text-red-500">{errors.jobTitle}</p>}
            </div>
          </div>

          {/* Email & Phone */}
          <div className="mt-3 flex flex-col gap-6 md:flex-row">
            <div className="md:w-1/2">
              <label className="mb-1 block font-medium">{t("email")}</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="md:w-1/2">
              <label className="mb-1 block font-medium">{t("phone")}</label>
              <input
                type="text"
                maxLength={15}
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
            </div>
          </div>

          {/* How heard */}
          <div className="mb-3 mt-3">
            <label className="mb-1 block font-medium">{t("howDidYouHear")}</label>
            <select
              name="hearAbout"
              value={form.hearAbout}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value="">{t("select")}</option>
              <option value="Google Search">{t("googleSearch")}</option>
              <option value="LinkedIn">{t("linkedIn")}</option>
              <option value="Friend or Colleague">{t("friendOrColleague")}</option>
              <option value="Event">{t("event")}</option>
              <option value="Other">{t("other")}</option>
            </select>
            {errors.hearAbout && <p className="text-sm text-red-500">{errors.hearAbout}</p>}
          </div>

          {/* Conditional Service */}
          {showServiceDropdown && (
            <div className="mb-3">
              <label className="mb-1 block font-medium">{t("serviceOfInterest")}</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
              >
                <option value="">{t("select")}</option>
                <option value="Recruitment Solutions">{t("recruitmentSolutionsTitle")}</option>
                <option value="Adroyts Academy">{t("academy.title")}</option>
                <option value="Assessment Center Solutions">{"talentAssessment.title"}</option>
                <option value="Human Capital Consulting">{t("hrConsulting.title")}</option>
              </select>
              {errors.service && <p className="text-sm text-red-500">{errors.service}</p>}
            </div>
          )}

          {/* Message */}
          <div className="mb-3">
            <label className="mb-1 block font-medium">{t("message")}</label>
            <textarea
              rows="6"
              maxLength={500}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded border p-3"
            ></textarea>
            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
          </div>

          {/* CAPTCHA */}
          <div id="cf-captcha" className="my-6"></div>

          {/* Submit */}
          <button
            disabled={submitting}
            onClick={handleSubmit}
            className={`w-full rounded-lg py-3 text-lg text-white transition ${
              submitting ? "bg-gray-400" : "bg-cyan-400 hover:bg-cyan-500"
            }`}
          >
            {submitting ? t("sending") : t("send")}
          </button>
        </div>
      </div>

      {/* MAP */}
      <div className="h-[400px] w-full">
        <iframe
          title="Adroyts Location"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.414942835388!2d46.6835779!3d24.8154796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efca4e5d9079b%3A0x38b0da0c1514cbc9!2sADROYTS!5e0!3m2!1sen!2sjo!4v1763543313809!5m2!1sen!2sjo"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactAdroyts;
