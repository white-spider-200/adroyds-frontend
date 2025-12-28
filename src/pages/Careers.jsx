import { useFormik } from "formik";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";

import { SplitText } from "../utils/SplitText";

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // stagger cards animation
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" },
};

const boxVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" },
};
const boxVariants2 = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const Careers = () => {
  const location = useLocation();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .matches(/^[\u0600-\u06FFa-zA-Z\s]+$/, t("validation.fullNameInvalid"))
      .max(50, t("validation.fullNameMax"))
      .required(t("validation.fullNameRequired")),

    email: Yup.string().email(t("validation.emailInvalid")).required(t("validation.emailRequired")),

    mobileNumber: Yup.string()
      .matches(/^\d+$/, t("validation.mobileNumberInvalid"))
      .max(15, t("validation.mobileNumberMax"))
      .required(t("validation.mobileNumberRequired")),

    currentCity: Yup.string()
      .matches(/^[\u0600-\u06FFa-zA-Z\s]+$/, t("validation.currentCityInvalid"))
      .max(50, t("validation.currentCityMax"))
      .required(t("validation.currentCityRequired")),

    nationality: Yup.string()
      .matches(/^[\u0600-\u06FFa-zA-Z\s]+$/, t("validation.nationalityInvalid"))
      .max(30, t("validation.nationalityMax"))
      .required(t("validation.nationalityRequired")),

    opportunityType: Yup.string().required(t("validation.opportunityTypeRequired")),

    linkedIn: Yup.string().url(t("validation.linkedInInvalid")).nullable(),

    resume: Yup.mixed()
      .required(t("validation.resumeRequired"))
      .test(
        "fileFormat",
        t("validation.resumeInvalidFormat"),
        (value) =>
          value &&
          [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(value.type)
      ),

    consent: Yup.boolean()
      .oneOf([true], t("validation.consentRequired"))
      .required(t("validation.consentRequired")),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      currentCity: "",
      nationality: "",
      opportunityType: "",
      linkedIn: "",
      resume: null,
      consent: false,
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
      setSubmitting(true);
      setStatus(null);

      // Simulate API call
      setTimeout(() => {
        setSubmitting(false);
        setStatus({ success: true, message: "Your application has been submitted successfully." });
        resetForm();
      }, 1500);
    },
  });

  const jobsData = [
    {
      id: 1,
      title: "HR Consultant",
      location: "Riyadh",
      postingDate: "2025-12-01",
      status: "Open",
      department: "Human Resources",
      description: "Support HR transformation projects and organizational development initiatives.",
      responsibilities: [
        "Lead HR change management",
        "Coordinate training sessions",
        "Assess organizational processes",
      ],
      requirements: [
        "Bachelor's degree in HR or related field",
        "5+ years of HR consulting experience",
        "Excellent communication skills",
      ],
    },
    {
      id: 2,
      title: "Talent Acquisition Specialist",
      location: "Jeddah",
      postingDate: "2025-11-20",
      status: "Open",
      department: "Recruitment",
      description: "Source, screen, and recruit top candidates for diverse roles.",
      responsibilities: [
        "Manage end-to-end recruitment process",
        "Build talent pipelines",
        "Collaborate with hiring managers",
      ],
      requirements: [
        "Experience with recruiting software",
        "Strong interviewing skills",
        "Bachelor's degree preferred",
      ],
    },
  ];

  // --- Job Details Modal State ---
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const applicationFormik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      currentCity: "",
      nationality: "",
      currentJobTitle: "",
      yearsExperience: "",
      currentSalary: "",
      expectedSalary: "",
      noticePeriod: "",
      resume: null,
      consent: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .matches(/^[\u0600-\u06FFa-zA-Z\s]+$/, t("validation2.fullNameInvalid"))
        .max(50, t("validation2.fullNameMax"))
        .required(t("validation2.fullNameRequired")),
      email: Yup.string().email(t("validation2.emailInvalid")).required(t("validation2.emailRequired")),
      mobileNumber: Yup.string()
        .matches(/^\d+$/, t("validation2.mobileNumberInvalid"))
        .max(15, t("validation2.mobileNumberMax"))
        .required(t("validation2.mobileNumberRequired")),
      currentCity: Yup.string()
        .matches(/^[\u0600-\u06FFa-zA-Z\s]+$/, t("validation2.currentCityInvalid"))
        .max(50, t("validation2.currentCityMax"))
        .required(t("validation2.currentCityRequired")),
      nationality: Yup.string()
        .matches(/^[\u0600-\u06FFa-zA-Z\s]+$/, t("validation2.nationalityInvalid"))
        .max(30, t("validation2.nationalityMax"))
        .required(t("validation2.nationalityRequired")),
      currentJobTitle: Yup.string().required(t("validation2.currentJobTitleRequired")),
      yearsExperience: Yup.string().required(t("validation2.yearsExperienceRequired")),
      currentSalary: Yup.number()
        .min(0, t("validation2.currentSalaryMin"))
        .required(t("validation2.currentSalaryRequired")),
      expectedSalary: Yup.number()
        .min(0, t("validation2.expectedSalaryMin"))
        .required(t("validation2.expectedSalaryRequired")),
      noticePeriod: Yup.string().required(t("validation2.noticePeriodRequired")),
      resume: Yup.mixed()
        .required(t("validation2.resumeRequired"))
        .test(
          "fileFormat",
          t("validation2.resumeInvalidFormat"),
          (value) =>
            value &&
            [
              "application/pdf",
              "application/msword",
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ].includes(value.type)
        ),
      consent: Yup.boolean().oneOf([true], t("validation2.consentRequired")),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setSubmitting(false);
        resetForm();
        setShowApplicationModal(false);
        setSelectedJob(null);
        setApplicationStatus("success");
      }, 1500);
    },
  });

  const [applicationStatus, setApplicationStatus] = useState(null);

  useEffect(() => {
    if ((selectedJob && !showApplicationModal) || (selectedJob && showApplicationModal)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedJob, showApplicationModal]);

  return (
    <div className="w-full bg-gray-100">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(50vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/istockphoto-1395570261-612x613.jpg"
          alt="Careers Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F]/80 to-[#0E1C3F]/30"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <div className="mt-40 rounded-lg px-8 py-12 md:px-12 md:py-16">
            <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
              <ol className="inline-flex space-x-2">
                <li>
                  <a href="/" className="hover:text-white hover:underline">
                    {t("home")}
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li className="font-semibold text-white" aria-current="page">
                  {t("careers")}
                </li>
              </ol>
            </nav>
            <h1 className="mb-2 text-4xl font-extrabold leading-tight text-white drop-shadow md:text-4xl">
              {t("careers")}
            </h1>
            <p className="max-w-xl text-lg text-white/90">{t("discoverOpportunities")}</p>
          </div>
        </motion.div>
      </section>

      <div className="w-full overflow-x-hidden">
        <section className="relative bg-white px-4 py-8">
          <div className="mx-auto max-w-6xl px-6 text-center">
            {/* BELIEF STATEMENT - Card with Border Accent */}
            <div className="mb-6 flex w-full justify-center">
              <div className="max-w-4xl rounded-xl border-l-4 border-cyan-500 bg-white p-6 pl-6 text-lg italic text-gray-700 shadow-md">
                {t("beliefStatement")} {t("welcomeMessage")}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Box 1: General Application */}
              <motion.div
                className="flex cursor-pointer flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow"
                variants={boxVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }} // animate when 30% of box is in view
                whileHover="hover"
              >
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{t("joinTalentNetwork")}</h3>
                  <p className="text-gray-600">{t("joinTalentNetworkDescription")}</p>
                </div>
                <button
                  onClick={() => scrollToSection("generalApplication")}
                  className="mt-4 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white shadow hover:bg-cyan-600"
                >
                  {t("applyRegister")}
                </button>
              </motion.div>

              {/* Box 2: Job Openings */}
              <motion.div
                className="flex cursor-pointer flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow"
                variants={boxVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover="hover"
              >
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{t("currentJobOpenings")}</h3>
                  <p className="text-gray-600">{t("currentJobOpeningsDescription")}</p>
                </div>
                <button
                  onClick={() => scrollToSection("openings")}
                  className="mt-4 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
                >
                  {t("viewJobs")}
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= APPLICATION FORM ================= */}
        <section id="generalApplication" className="mx-auto max-w-6xl px-6 py-24">
          <SplitText className="mb-12 text-center text-3xl font-bold">{t("joinTalentNetwork")}</SplitText>

          <form
            onSubmit={formik.handleSubmit}
            encType="multipart/form-data"
            className="space-y-6 rounded-2xl bg-white p-10 shadow-xl"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="font-medium">{t("fullName2")}</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full rounded-md border px-3 py-2 ${
                    formik.touched.fullName && formik.errors.fullName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{formik.errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="font-medium">{t("emailAddress")}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full rounded-md border px-3 py-2 ${
                    formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="font-medium">{t("mobileNumber")}</label>
                <input
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formik.values.mobileNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full rounded-md border px-3 py-2 ${
                    formik.touched.mobileNumber && formik.errors.mobileNumber
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                  <p className="mt-1 text-sm text-red-500">{formik.errors.mobileNumber}</p>
                )}
              </div>

              {/* Current City */}
              <div>
                <label className="font-medium">{t("currentCity")}</label>
                <input
                  id="currentCity"
                  name="currentCity"
                  value={formik.values.currentCity}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full rounded-md border px-3 py-2 ${
                    formik.touched.currentCity && formik.errors.currentCity
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {formik.touched.currentCity && formik.errors.currentCity && (
                  <p className="mt-1 text-sm text-red-500">{formik.errors.currentCity}</p>
                )}
              </div>

              {/* Nationality */}
              <div>
                <label className="font-medium">{t("nationality")}</label>
                <input
                  id="nationality"
                  name="nationality"
                  value={formik.values.nationality}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full rounded-md border px-3 py-2 ${
                    formik.touched.nationality && formik.errors.nationality
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {formik.touched.nationality && formik.errors.nationality && (
                  <p className="mt-1 text-sm text-red-500">{formik.errors.nationality}</p>
                )}
              </div>

              {/* Opportunity Type */}
              <div>
                <label className="font-medium">{t("opportunityType")}</label>
                <select
                  id="opportunityType"
                  name="opportunityType"
                  value={formik.values.opportunityType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full rounded-md border px-3 py-2 ${
                    formik.touched.opportunityType && formik.errors.opportunityType
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">{t("selectOpportunityType")}</option>
                  <option value="Adroyts Team">{t("opportunityAdroytsTeam")}</option>
                  <option value="Client Opportunities">{t("opportunityClient")}</option>
                  <option value="Consultant">{t("opportunityConsultant")}</option>
                </select>
                {formik.touched.opportunityType && formik.errors.opportunityType && (
                  <p className="mt-1 text-sm text-red-500">{formik.errors.opportunityType}</p>
                )}
              </div>

              {/* LinkedIn */}
              <div>
                <label className="font-medium">{t("linkedinProfile")}</label>
                <input
                  id="linkedIn"
                  name="linkedIn"
                  value={formik.values.linkedIn}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full rounded-md border px-3 py-2 ${
                    formik.touched.linkedIn && formik.errors.linkedIn ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formik.touched.linkedIn && formik.errors.linkedIn && (
                  <p className="mt-1 text-sm text-red-500">{formik.errors.linkedIn}</p>
                )}
              </div>

              {/* Resume */}
              <div className="md:col-span-2">
                <label className="font-medium">{t("uploadResume")}</label>
                <input
                  type="file"
                  name="resume"
                  onChange={(e) => formik.setFieldValue("resume", e.currentTarget.files[0])}
                  className={`w-full rounded-md border px-3 py-2 ${
                    formik.touched.resume && formik.errors.resume ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formik.touched.resume && formik.errors.resume && (
                  <p className="mt-1 text-sm text-red-500">{formik.errors.resume}</p>
                )}
              </div>
            </div>

            {/* Consent */}
            <label className="flex gap-2 text-sm">
              <input
                type="checkbox"
                name="consent"
                checked={formik.values.consent}
                onChange={formik.handleChange}
              />
              {t("consentText")}
            </label>
            {formik.touched.consent && formik.errors.consent && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.consent}</p>
            )}

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-white hover:bg-cyan-600"
            >
              {formik.isSubmitting ? t("sending") : t("send")}
            </button>
          </form>
        </section>

        {/* ================= JOBS ================= */}
        <section id="openings" className="bg-gray-50 py-20">
          <motion.div
            className="mx-auto max-w-7xl px-6"
            variants={boxVariants2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // animate when 30% of box is in view
            whileHover="hover"
          >
            {/* Header */}
            <motion.div
              className="mb-8 text-center text-3xl font-bold"
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <SplitText>{t("openPositions")}</SplitText>
            </motion.div>

            {/* Job Cards */}
            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {jobsData.map((job) => (
                <motion.div
                  key={job.id}
                  className="cursor-pointer rounded-2xl bg-white p-6 shadow"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <h3 className="mb-2 text-xl font-bold">{job.title}</h3>

                  <div className="mb-3 flex gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <HiOutlineLocationMarker />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiOutlineCalendar />
                      {job.postingDate}
                    </span>
                  </div>

                  <p className="mb-6 line-clamp-3 text-gray-600">{job.description}</p>

                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full rounded-lg bg-cyan-500 py-2 font-semibold text-white hover:bg-cyan-600"
                  >
                    {t("viewDetails")}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* ================= Job Details Modal ================= */}
      {selectedJob && !showApplicationModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="job-details-title"
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing on outside click
          >
            {/* ===== Header ===== */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b bg-white p-6">
              <div>
                <h2 id="job-details-title" className="text-2xl font-bold text-gray-900">
                  {selectedJob.title}
                </h2>

                <div className="mt-3 flex flex-wrap gap-2 text-sm">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                    {selectedJob.department || t("notAvailable")}
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                    {selectedJob.location}
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                    {t("postedOn")} {selectedJob.postingDate}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 font-semibold ${
                      selectedJob.status === "Open"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {selectedJob.status === "Open" ? t("statusOpen") : t("statusClosed")}
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedJob(null)}
                className="rounded-lg bg-gray-100 px-3 py-1 text-xl font-bold text-gray-600 hover:bg-gray-200"
                aria-label={t("closeJobDetails")}
              >
                ×
              </button>
            </div>

            {/* ===== Content ===== */}
            <div className="flex-1 space-y-8 overflow-y-auto p-6">
              {/* Description */}
              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{t("jobDescription")}</h3>
                <p className="leading-relaxed text-gray-700">{selectedJob.description}</p>
              </section>

              {/* Responsibilities */}
              {selectedJob.responsibilities?.length > 0 && (
                <section>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{t("responsibilities")}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {selectedJob.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Requirements */}
              {selectedJob.requirements?.length > 0 && (
                <section>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{t("requirements")}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {selectedJob.requirements.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* ===== Footer ===== */}
            <div className="sticky bottom-0 border-t bg-white p-6">
              <button
                onClick={() => setShowApplicationModal(true)}
                disabled={selectedJob.status !== "Open"}
                className={`w-full rounded-xl py-4 text-lg font-semibold text-white transition ${
                  selectedJob.status === "Open"
                    ? "bg-cyan-500 hover:bg-cyan-600"
                    : "cursor-not-allowed bg-gray-300"
                }`}
              >
                {selectedJob.status === "Open" ? t("applyNow") : t("positionClosed")}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ================= Application Modal ================= */}
      {selectedJob && showApplicationModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="application-modal-title"
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing on outside click
          >
            {/* Header */}
            <div className="sticky top-0 z-10 border-b bg-white p-6">
              <div className="flex items-start justify-between">
                <h3 id="application-modal-title" className="text-xl font-bold text-gray-900">
                  {t("applyFor", { jobTitle: selectedJob.title })}
                </h3>
                <button
                  onClick={() => setShowApplicationModal(false)}
                  className="rounded-lg bg-gray-100 px-3 py-1 text-xl font-bold text-gray-600 hover:bg-gray-200"
                  aria-label={t("closeApplicationModal")}
                >
                  ×
                </button>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={applicationFormik.handleSubmit}
              encType="multipart/form-data"
              className="flex-1 space-y-8 overflow-y-auto p-6 text-sm"
            >
              {/* Personal Information */}
              <section className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  {t("personalInformation")}
                </h4>

                {["fullName", "email", "mobileNumber", "currentCity", "nationality"].map((field) => (
                  <div key={field}>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={t(field)}
                      maxLength={
                        field === "fullName" || field === "currentCity"
                          ? 50
                          : field === "nationality"
                            ? 30
                            : undefined
                      }
                      onChange={applicationFormik.handleChange}
                      onBlur={applicationFormik.handleBlur}
                      value={applicationFormik.values[field]}
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-cyan-400"
                    />
                    {applicationFormik.touched[field] && applicationFormik.errors[field] && (
                      <p className="mt-1 text-xs text-red-600">{applicationFormik.errors[field]}</p>
                    )}
                  </div>
                ))}
              </section>

              {/* Professional Information */}
              <section className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  {t("professionalInformation")}
                </h4>

                <input
                  type="text"
                  name="currentJobTitle"
                  placeholder={t("currentJobTitle")}
                  maxLength={50}
                  onChange={applicationFormik.handleChange}
                  onBlur={applicationFormik.handleBlur}
                  value={applicationFormik.values.currentJobTitle}
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-cyan-400"
                />
                {applicationFormik.touched.currentJobTitle && applicationFormik.errors.currentJobTitle && (
                  <p className="mt-1 text-xs text-red-600">{applicationFormik.errors.currentJobTitle}</p>
                )}

                <select
                  name="yearsExperience"
                  value={applicationFormik.values.yearsExperience}
                  onChange={applicationFormik.handleChange}
                  onBlur={applicationFormik.handleBlur}
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-cyan-400"
                >
                  <option value="">{t("yearsExperiencePlaceholder")}</option>
                  <option value="<1">{t("experienceLessThan1")}</option>
                  <option value="1-2">{t("experience1to2")}</option>
                  <option value="3-5">{t("experience3to5")}</option>
                  <option value="6-8">{t("experience6to8")}</option>
                  <option value="9-12">{t("experience9to12")}</option>
                  <option value="12+">{t("experience12Plus")}</option>
                </select>
                {applicationFormik.touched.yearsExperience && applicationFormik.errors.yearsExperience && (
                  <p className="mt-1 text-xs text-red-600">{applicationFormik.errors.yearsExperience}</p>
                )}
              </section>

              {/* Compensation & Availability */}
              <section className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  {t("compensationAvailability")}
                </h4>

                {["currentSalary", "expectedSalary"].map((field) => (
                  <div key={field}>
                    <input
                      type="number"
                      name={field}
                      placeholder={t(field)}
                      min={0}
                      onChange={applicationFormik.handleChange}
                      onBlur={applicationFormik.handleBlur}
                      value={applicationFormik.values[field]}
                      className="w-full rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-cyan-400"
                    />
                    {applicationFormik.touched[field] && applicationFormik.errors[field] && (
                      <p className="mt-1 text-xs text-red-600">{applicationFormik.errors[field]}</p>
                    )}
                  </div>
                ))}

                <select
                  name="noticePeriod"
                  value={applicationFormik.values.noticePeriod}
                  onChange={applicationFormik.handleChange}
                  onBlur={applicationFormik.handleBlur}
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-cyan-400"
                >
                  <option value="">{t("noticePeriod")}</option>
                  <option value="Immediately">{t("noticeImmediately")}</option>
                  <option value="1 Month">{t("notice1Month")}</option>
                  <option value="2 Months">{t("notice2Months")}</option>
                  <option value="3 Months">{t("notice3Months")}</option>
                </select>
                {applicationFormik.touched.noticePeriod && applicationFormik.errors.noticePeriod && (
                  <p className="mt-1 text-xs text-red-600">{applicationFormik.errors.noticePeriod}</p>
                )}
              </section>

              {/* Resume */}
              <section className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">{t("resume")}</h4>
                <input
                  type="file"
                  name="resume"
                  onChange={(event) =>
                    applicationFormik.setFieldValue("resume", event.currentTarget.files[0])
                  }
                  onBlur={applicationFormik.handleBlur}
                  accept=".pdf,.doc,.docx"
                  className="w-full rounded-lg border border-gray-300 p-3"
                />
                {applicationFormik.touched.resume && applicationFormik.errors.resume && (
                  <p className="mt-1 text-xs text-red-600">{applicationFormik.errors.resume}</p>
                )}
              </section>

              {/* Consent */}
              <label className="flex items-start gap-3 text-xs text-gray-600">
                <input
                  type="checkbox"
                  name="consent"
                  checked={applicationFormik.values.consent}
                  onChange={applicationFormik.handleChange}
                  onBlur={applicationFormik.handleBlur}
                  className="mt-1"
                />
                {t("consentText")}
              </label>
              {applicationFormik.touched.consent && applicationFormik.errors.consent && (
                <p className="mt-1 text-xs text-red-600">{applicationFormik.errors.consent}</p>
              )}

              {/* Status Messages */}
              {applicationStatus === "success" && (
                <p className="text-sm text-green-600">{t("applicationSuccess")}</p>
              )}
              {applicationStatus === "error" && (
                <p className="text-sm text-red-600">{t("applicationError")}</p>
              )}

              {/* Submit Button */}
              <div className="sticky bottom-0 bg-white pt-4">
                <button
                  type="submit"
                  disabled={applicationFormik.isSubmitting}
                  className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-white transition hover:bg-cyan-600 disabled:opacity-50"
                >
                  {applicationFormik.isSubmitting ? t("sending") : t("submitApplication")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
