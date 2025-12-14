import { useFormik } from "formik";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";

import { SplitText } from "../utils/SplitText";

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
      .matches(/^[\u0600-\u06FFa-zA-Z\s]+$/, "Arabic and English letters only, no symbols")
      .max(50, "Max 50 characters")
      .required("Full Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    mobileNumber: Yup.string()
      .matches(/^\d+$/, "Numbers only")
      .max(15, "Max 15 digits")
      .required("Mobile Number is required"),
    currentCity: Yup.string()
      .matches(/^[\u0600-\u06FFa-zA-Z\s]+$/, "Arabic and English letters only, no symbols")
      .max(50, "Max 50 characters")
      .required("Current City is required"),
    nationality: Yup.string()
      .matches(/^[\u0600-\u06FFa-zA-Z\s]+$/, "Arabic and English letters only, no symbols")
      .max(30, "Max 30 characters")
      .required("Nationality is required"),
    opportunityType: Yup.string().required("Opportunity Type is required"),
    linkedIn: Yup.string().url("Must be a valid URL").nullable(),
    resume: Yup.mixed()
      .required("Resume is required")
      .test(
        "fileFormat",
        "Unsupported file format",
        (value) =>
          value &&
          [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(value.type)
      ),
    consent: Yup.boolean().oneOf([true], "Consent is required").required("Consent is required"),
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

  // --- Application Modal State ---
  const [applicationData, setApplicationData] = useState({
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
  });
  const [applicationStatus, setApplicationStatus] = useState(null);

  const handleApplicationChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setApplicationData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    }));
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    setApplicationStatus("loading");

    // TODO: Replace with API call and validation
    setTimeout(() => {
      setApplicationStatus("success");
      setApplicationData({
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
      });
      setTimeout(() => {
        setApplicationStatus(null);
        setShowApplicationModal(false);
        setSelectedJob(null);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="w-full">
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
                  Careers
                </li>
              </ol>
            </nav>
            <h1 className="mb-2 text-4xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
              Careers
            </h1>
            <p className="max-w-xl text-lg text-white/90">
              Discover opportunities to join Adroyts or become part of our talent network.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Intro Text */}
      <div className="flex w-full justify-center bg-gray-100 px-4">
        <section className="mx-auto max-w-4xl bg-gray-100 px-6 py-12 text-center">
          <p className="mb-3 text-lg font-semibold text-gray-900">
            At Adroyts, we believe in connecting exceptional talent with meaningful opportunities.
          </p>
          <p className="mb-3 text-lg text-gray-700">
            Whether you're looking to join our team or explore roles with our clients, you're in the right
            place.
          </p>
          <p className="text-lg text-gray-700">
            Start your journey with us and become part of a network that shapes the future of work.
          </p>
        </section>
      </div>

      <section className="mx-auto mb-6 flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-stretch md:justify-center">
        <div
          onClick={() => scrollToSection("generalApplication")}
          className="flex cursor-pointer flex-col justify-between rounded-lg border border-gray-300 bg-white p-8 text-center shadow hover:shadow-lg md:w-1/2"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && scrollToSection("generalApplication")}
          style={{ minHeight: "220px" }}
        >
          <h2 className="mb-4 text-2xl font-bold text-[#8b78b1]">Join Our Talent Network</h2>
          <p className="mx-auto mb-6 max-w-md text-gray-700">
            Register to join Adroyts or to be considered for future opportunities.
          </p>
          <button className="rounded bg-cyan-400 px-6 py-3 font-semibold text-white hover:bg-[#19aac0]">
            Apply / Register
          </button>
        </div>

        <div
          onClick={() => scrollToSection("openings")}
          className="flex cursor-pointer flex-col justify-between rounded-lg border border-gray-300 bg-white p-8 text-center shadow hover:shadow-lg md:w-1/2"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && scrollToSection("openings")}
          style={{ minHeight: "220px" }}
        >
          <h2 className="mb-4 text-2xl font-bold text-[#8b78b1]">Current Job Openings</h2>
          <p className="mx-auto mb-6 max-w-md text-gray-700">Explore active positions and apply directly.</p>
          <button className="rounded bg-cyan-400 px-6 py-3 font-semibold text-white hover:bg-[#19aac0]">
            View Jobs
          </button>
        </div>
      </section>

      {/* General Application Form Section */}

      <section
        id="generalApplication"
        className="mx-auto max-w-6xl px-6 py-20 pt-0 text-left"
        aria-label="General Application Form"
      >
        <SplitText className="mb-8 text-center text-3xl font-bold text-gray-900">
          Join Our Talent Network
        </SplitText>

        <form
          onSubmit={formik.handleSubmit}
          encType="multipart/form-data"
          className="space-y-6 rounded-xl bg-gray-100 p-8 shadow"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="mb-1 block font-medium" htmlFor="fullName">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full Name"
                maxLength={50}
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full rounded-md border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 ${
                  formik.touched.fullName && formik.errors.fullName ? "border-red-500" : "border-gray-300"
                } bg-white text-gray-900`}
                pattern="^[\u0600-\u06FFa-zA-Z\s]+$"
                title="Arabic and English letters only, no symbols"
                required
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <p className="text-sm text-red-500">{formik.errors.fullName}</p>
              ) : null}
            </div>

            {/* Email Address */}
            <div>
              <label className="mb-1 block font-medium" htmlFor="email">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                className={`w-full rounded-md border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 ${
                  formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
                } bg-white text-gray-900`}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-sm text-red-500">{formik.errors.email}</p>
              ) : null}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="mb-1 block font-medium" htmlFor="mobileNumber">
                Mobile Number *
              </label>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="text"
                placeholder="Mobile Number"
                maxLength={15}
                pattern="\d+"
                title="Numbers only"
                value={formik.values.mobileNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                className={`w-full rounded-md border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 ${
                  formik.touched.mobileNumber && formik.errors.mobileNumber
                    ? "border-red-500"
                    : "border-gray-300"
                } bg-white text-gray-900`}
              />
              {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                <p className="text-sm text-red-500">{formik.errors.mobileNumber}</p>
              ) : null}
            </div>

            {/* Current City */}
            <div>
              <label className="mb-1 block font-medium" htmlFor="currentCity">
                Current City *
              </label>
              <input
                id="currentCity"
                name="currentCity"
                type="text"
                placeholder="Current City"
                maxLength={50}
                value={formik.values.currentCity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                pattern="^[\u0600-\u06FFa-zA-Z\s]+$"
                title="Arabic and English letters only, no symbols"
                className={`w-full rounded-md border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 ${
                  formik.touched.currentCity && formik.errors.currentCity
                    ? "border-red-500"
                    : "border-gray-300"
                } bg-white text-gray-900`}
              />
              {formik.touched.currentCity && formik.errors.currentCity ? (
                <p className="text-sm text-red-500">{formik.errors.currentCity}</p>
              ) : null}
            </div>

            {/* Nationality */}
            <div>
              <label className="mb-1 block font-medium" htmlFor="nationality">
                Nationality *
              </label>
              <input
                id="nationality"
                name="nationality"
                type="text"
                placeholder="Nationality"
                maxLength={30}
                value={formik.values.nationality}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                pattern="^[\u0600-\u06FFa-zA-Z\s]+$"
                title="Arabic and English letters only, no symbols"
                className={`w-full rounded-md border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 ${
                  formik.touched.nationality && formik.errors.nationality
                    ? "border-red-500"
                    : "border-gray-300"
                } bg-white text-gray-900`}
              />
              {formik.touched.nationality && formik.errors.nationality ? (
                <p className="text-sm text-red-500">{formik.errors.nationality}</p>
              ) : null}
            </div>

            {/* Opportunity Type */}
            <div>
              <label className="mb-1 block font-medium" htmlFor="opportunityType">
                Opportunity Type *
              </label>
              <select
                id="opportunityType"
                name="opportunityType"
                value={formik.values.opportunityType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                className={`w-full rounded-md border px-3 py-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-400 ${
                  formik.touched.opportunityType && formik.errors.opportunityType
                    ? "border-red-500"
                    : "border-gray-300"
                } bg-white`}
              >
                <option value="">Select Opportunity Type</option>
                <option value="Adroyts Team">Apply to Join Adroyts Team</option>
                <option value="Client Opportunities">Register for Client Opportunities</option>
                <option value="Consultant">Register as External Consultant / Trainer / Assessor</option>
              </select>
              {formik.touched.opportunityType && formik.errors.opportunityType ? (
                <p className="text-sm text-red-500">{formik.errors.opportunityType}</p>
              ) : null}
            </div>

            {/* LinkedIn Profile URL */}
            <div>
              <label className="mb-1 block font-medium" htmlFor="linkedIn">
                LinkedIn Profile URL (Optional)
              </label>
              <input
                id="linkedIn"
                name="linkedIn"
                type="url"
                placeholder="LinkedIn Profile URL (Optional)"
                value={formik.values.linkedIn}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full rounded-md border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 ${
                  formik.touched.linkedIn && formik.errors.linkedIn ? "border-red-500" : "border-gray-300"
                } bg-white text-gray-900`}
              />
              {formik.touched.linkedIn && formik.errors.linkedIn ? (
                <p className="text-sm text-red-500">{formik.errors.linkedIn}</p>
              ) : null}
            </div>

            {/* Resume Upload */}
            <div className="col-span-full">
              <label className="mb-1 block font-medium" htmlFor="resume">
                Upload Resume *
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                onChange={(event) => formik.setFieldValue("resume", event.currentTarget.files[0])}
                accept=".pdf,.doc,.docx"
                required
                className={`w-full rounded-md border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 ${
                  formik.touched.resume && formik.errors.resume ? "border-red-500" : "border-gray-300"
                } bg-white text-gray-900`}
              />
              {formik.touched.resume && formik.errors.resume ? (
                <p className="text-sm text-red-500">{formik.errors.resume}</p>
              ) : null}
            </div>
          </div>

          {/* Consent Checkbox */}
          <label className="flex items-center gap-2">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={formik.values.consent}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="rounded border-gray-300 text-cyan-400 focus:ring-cyan-400"
            />
            <span className="text-sm">
              I consent to Adroyts processing my personal data for recruitment purposes.
            </span>
          </label>
          {formik.touched.consent && formik.errors.consent ? (
            <p className="text-sm text-red-500">{formik.errors.consent}</p>
          ) : null}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full rounded-lg bg-cyan-400 py-3 font-semibold text-white transition hover:bg-[#19aac0] disabled:opacity-50"
          >
            {formik.isSubmitting ? "Sending..." : "Submit Application"}
          </button>

          {/* Success & Error Messages */}
          {formik.status?.success && (
            <p className="mt-4 text-center text-green-600">{formik.status.message}</p>
          )}
        </form>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="mx-auto max-w-7xl px-6 pb-20 pt-10" aria-label="Open Positions">
        <SplitText className="mb-8 text-center text-3xl font-bold text-gray-900">Open Positions</SplitText>

        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-700">
          Explore current openings at Adroyts and with our clients.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobsData.map((job) => (
            <div
              key={job.id}
              className="relative flex flex-col rounded-xl border border-gray-300 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Status badge */}
              <span
                className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                  job.status === "Open" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {job.status}
              </span>

              {/* Job title */}
              <h3 className="mb-3 cursor-pointer text-xl font-bold text-gray-900 transition-colors hover:text-cyan-600">
                {job.title}
              </h3>

              {/* Location and Posting Date */}
              <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <HiOutlineLocationMarker className="h-4 w-4 text-gray-500" aria-hidden="true" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <HiOutlineCalendar className="h-4 w-4 text-gray-500" aria-hidden="true" />
                  <span>Posted on {job.postingDate}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 flex-grow text-gray-700">{job.description}</p>

              {/* View Details button */}
              <button
                onClick={() => setSelectedJob(job)}
                className="mt-auto rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-white transition-colors hover:bg-cyan-600"
                aria-label={`View details for ${job.title}`}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => {
            setSelectedJob(null);
            setShowApplicationModal(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="job-details-title"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setSelectedJob(null);
                setShowApplicationModal(false);
              }}
              className="absolute right-4 top-4 rounded bg-gray-200 px-3 py-1 font-bold hover:bg-gray-300"
              aria-label="Close job details modal"
            >
              ×
            </button>

            <h2 id="job-details-title" className="mb-2 text-2xl font-bold">
              {selectedJob.title}
            </h2>
            <p className="mb-1 text-gray-700">
              <strong>Department:</strong> {selectedJob.department || "N/A"}
            </p>
            <p className="mb-1 text-gray-700">
              <strong>Location:</strong> {selectedJob.location}
            </p>
            <p className="mb-1 text-gray-700">
              <strong>Posting Date:</strong> {selectedJob.postingDate}
            </p>
            <p className="mb-4">
              <strong>Status:</strong>{" "}
              <span
                className={`rounded-full px-2 py-1 font-semibold ${
                  selectedJob.status === "Open" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                }`}
              >
                {selectedJob.status}
              </span>
            </p>

            <h3 className="mb-2 text-lg font-semibold">Job Description</h3>
            <p className="mb-4 text-gray-700">{selectedJob.description}</p>

            <h3 className="mb-2 text-lg font-semibold">Responsibilities</h3>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              {selectedJob.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h3 className="mb-2 text-lg font-semibold">Requirements</h3>
            <ul className="mb-6 list-disc pl-6 text-gray-700">
              {selectedJob.requirements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <button
              onClick={() => setShowApplicationModal(true)}
              disabled={selectedJob.status !== "Open"}
              className={`rounded bg-cyan-400 px-6 py-3 font-semibold text-white transition hover:bg-[#19aac0] ${
                selectedJob.status !== "Open" ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              Apply Now
            </button>

            {/* Application Modal inside Job Details */}
            {showApplicationModal && (
              <div
                className="z-60 fixed inset-0 flex items-center justify-center bg-black/70"
                onClick={() => setShowApplicationModal(false)}
                role="dialog"
                aria-modal="true"
                aria-labelledby="application-modal-title"
              >
                <div
                  className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setShowApplicationModal(false)}
                    className="absolute right-4 top-4 rounded bg-gray-200 px-3 py-1 font-bold hover:bg-gray-300"
                    aria-label="Close application modal"
                  >
                    ×
                  </button>
                  <h3 id="application-modal-title" className="mb-4 text-xl font-bold">
                    Apply for {selectedJob.title}
                  </h3>

                  <form
                    onSubmit={handleApplicationSubmit}
                    encType="multipart/form-data"
                    className="space-y-4 text-left"
                  >
                    {/* Basic Info */}
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      maxLength={50}
                      value={applicationData.fullName}
                      onChange={handleApplicationChange}
                      required
                      className="w-full rounded border border-gray-300 p-3"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={applicationData.email}
                      onChange={handleApplicationChange}
                      required
                      className="w-full rounded border border-gray-300 p-3"
                    />
                    <input
                      type="text"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                      maxLength={15}
                      pattern="\d*"
                      value={applicationData.mobileNumber}
                      onChange={handleApplicationChange}
                      required
                      className="w-full rounded border border-gray-300 p-3"
                    />
                    <input
                      type="text"
                      name="currentCity"
                      placeholder="Current City"
                      maxLength={50}
                      value={applicationData.currentCity}
                      onChange={handleApplicationChange}
                      required
                      className="w-full rounded border border-gray-300 p-3"
                    />
                    <input
                      type="text"
                      name="nationality"
                      placeholder="Nationality"
                      maxLength={30}
                      value={applicationData.nationality}
                      onChange={handleApplicationChange}
                      required
                      className="w-full rounded border border-gray-300 p-3"
                    />

                    {/* Professional Info */}
                    <input
                      type="text"
                      name="currentJobTitle"
                      placeholder="Current Job Title"
                      maxLength={50}
                      value={applicationData.currentJobTitle}
                      onChange={handleApplicationChange}
                      required
                      className="w-full rounded border border-gray-300 p-3"
                    />

                    <select
                      name="yearsExperience"
                      value={applicationData.yearsExperience}
                      onChange={handleApplicationChange}
                      required
                      className="w-full rounded border border-gray-300 p-3"
                    >
                      <option value="">Years of Experience</option>
                      <option value="<1">Less than 1 year</option>
                      <option value="1-2">1–2 years</option>
                      <option value="3-5">3–5 years</option>
                      <option value="6-8">6–8 years</option>
                      <option value="9-12">9–12 years</option>
                      <option value="12+">12+ years</option>
                    </select>

                    {/* Compensation & Availability */}
                    <input
                      type="number"
                      name="currentSalary"
                      placeholder="Current Salary (SAR)"
                      value={applicationData.currentSalary}
                      onChange={handleApplicationChange}
                      required
                      className="w-full rounded border border-gray-300 p-3"
                      min={0}
                    />
                    <input
                      type="number"
                      name="expectedSalary"
                      placeholder="Expected Salary (SAR)"
                      value={applicationData.expectedSalary}
                      onChange={handleApplicationChange}
                      required
                      className="w-full rounded border border-gray-300 p-3"
                      min={0}
                    />

                    <select
                      name="noticePeriod"
                      value={applicationData.noticePeriod}
                      onChange={handleApplicationChange}
                      required
                      className="w-full rounded border border-gray-300 p-3"
                    >
                      <option value="">Notice Period</option>
                      <option value="Immediately">Immediately</option>
                      <option value="1 Month">1 Month</option>
                      <option value="2 Months">2 Months</option>
                      <option value="3 Months">3 Months</option>
                    </select>

                    {/* Resume upload */}
                    <input
                      type="file"
                      name="resume"
                      onChange={handleApplicationChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="w-full rounded border border-gray-300 p-3"
                    />

                    {/* Consent checkbox */}
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={applicationData.consent}
                        onChange={handleApplicationChange}
                        required
                      />
                      <span className="text-sm">
                        I consent to Adroyts processing my personal data for recruitment purposes.
                      </span>
                    </label>

                    {/* TODO: Add CAPTCHA integration */}

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={applicationStatus === "loading"}
                        className="rounded bg-cyan-400 px-6 py-3 font-semibold text-white hover:bg-[#19aac0] disabled:opacity-50"
                      >
                        {applicationStatus === "loading" ? "Sending..." : "Submit Application"}
                      </button>
                    </div>

                    {/* Status messages */}
                    {applicationStatus === "success" && (
                      <p className="mt-4 text-green-600">
                        Your application has been submitted successfully. Our team will review your profile
                        and contact you if your qualifications match the role.
                      </p>
                    )}
                    {applicationStatus === "error" && (
                      <p className="mt-4 text-red-600">Something went wrong. Try again.</p>
                    )}
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
