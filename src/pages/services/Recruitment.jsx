import { motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup";
import { FaArrowRight } from "react-icons/fa";
import {
  PiBankLight,
  PiBriefcaseLight,
  PiChartBarLight,
  PiClipboardTextLight,
  PiGearSixLight,
  PiHeartbeatLight,
  PiMonitorLight,
  PiPersonLight,
  PiShareNetworkLight,
  PiUsersThreeLight,
} from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const scrollIndicator = (
  <svg
    className="mx-auto mt-8 h-8 w-8 animate-bounce text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const servicesList = [
  {
    title: "Executive Search",
    desc: "Identifying and engaging exceptional leaders who drive transformation.",
    icon: <PiBriefcaseLight className="h-12 w-12 text-blue-700" />,
    link: "#executive",
  },
  {
    title: "Professional Search",
    desc: "Delivering high-performing professionals to power your business growth.",
    icon: <PiUsersThreeLight className="h-12 w-12 text-blue-700" />,
    link: "#professional",
  },
  {
    title: "RPO (Recruitment Process Outsourcing)",
    desc: "Full-cycle recruitment ownership from sourcing to onboarding.",
    icon: <PiClipboardTextLight className="h-12 w-12 text-blue-700" />,
    link: "#rpo",
  },
];

const executiveSteps = [
  "Understanding Client Needs",
  "Market Research & Talent Mapping",
  "Shortlisting & Evaluation",
  "Client Presentation & Interviews",
  "Offer Management & Onboarding",
];

const profFeatures = [
  "Proprietary candidate database",
  "Rapid response for urgent hires",
  "Custom sourcing pipelines",
  "Dedicated account manager",
];

const rpoFeatures = [
  "End-to-end recruitment ownership",
  "Dedicated sector-focused recruiters",
  "Unlimited hiring scope",
  "Scalable workforce model",
];

const Recruitment = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white font-sans text-[#1A1F36] selection:bg-blue-200 selection:text-gray-900">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(70vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/jobs-arabian-copy-scaled.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-[#192757] opacity-70"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          {/* Glass container */}
          <div className="mt-40 rounded-3xl px-8 py-12 md:px-12 md:py-16">
            {/* Breadcrumbs */}
            <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
              <ol className="inline-flex space-x-2">
                <li>
                  <a href="/" className="hover:text-white hover:underline">
                    Home
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li className="font-semibold text-white" aria-current="page">
                  Recruitment Solutions
                </li>
              </ol>
            </nav>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
              Recruitment Solutions
            </h1>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto flex max-w-8xl gap-8 px-6 py-16 text-lg">
        <div className="sticky top-32 flex h-full flex-col rounded-xl bg-gray-100 p-6">
          <nav className="flex flex-col space-y-6">
            {/* Recruitment Solutions (inactive) */}
            <button
              onClick={() => navigate("/services/recruitment")}
              className="group flex w-full items-center justify-between rounded-md bg-white px-4 py-2 text-left text-[#1A2B88] transition-colors hover:bg-blue-200 hover:text-blue-900"
            >
              <span>Recruitment Solutions</span>
              <FaArrowRight className="translate-x-[-6px] transition-all duration-300" />
            </button>

            {/* Adroyts Academy (ACTIVE) */}
            <button
              onClick={() => navigate("/services/academy")}
              className="group flex w-full items-center justify-between rounded-md px-4 py-2 text-left text-[#1A2B88]/60 transition-colors hover:bg-blue-200 hover:text-blue-900"
            >
              <span>Adroyts Academy</span>
              <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </button>

            {/* Assessment Center */}
            <button
              onClick={() => navigate("/services/assessment")}
              className="group flex w-full items-center justify-between rounded-md px-4 py-2 text-left text-[#1A2B88]/60 transition-colors hover:bg-blue-200 hover:text-blue-900"
            >
              <span>Assessment Center</span>
              <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </button>

            {/* Human Capital Consulting */}
            <button
              onClick={() => navigate("/services/consulting")}
              className="group flex w-full items-center justify-between rounded-md px-4 py-2 text-left text-[#1A2B88]/60 transition-colors hover:bg-blue-200 hover:text-blue-900"
            >
              <span>Human Capital Consulting</span>
              <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </button>
          </nav>
        </div>

        <div className="flex-[2] bg-white px-6">
          {/* INTRO */}
          <section className="container pb-16 md:max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#1A2B88]">
              About Our Recruitment Solutions
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              For nearly two decades, Adroyts has been a trusted recruitment partner for organizations across
              Saudi Arabia. We provide end-to-end hiring solutions that balance precision, speed, and cultural
              alignment—helping clients secure the right talent every time.
            </p>
          </section>
          <section className="relative w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-8">
            {/* Content */}
            <div className="relative mx-auto max-w-8xl">
              <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                {[
                  { num: 294, suffix: "", label: "Projects Done" },
                  { num: 987, suffix: "", label: "Satisfied Customers" },
                  { num: 60, suffix: "K", label: "Total Earned" },
                  { num: 1523, suffix: "", label: "Award Wins" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="p-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                  >
                    <h3 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
                      <CountUp
                        start={0}
                        enableScrollSpy={true}
                        end={item.num}
                        duration={2.5}
                        separator=","
                        suffix={item.suffix}
                      />
                    </h3>
                    <p className="mt-3 text-xl font-semibold text-white">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#1A1F36]">Our Recruitment Services</h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {servicesList.map(({ title, desc, icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  custom={i * 0.1}
                  viewport={{ once: true }}
                  className="group flex flex-col rounded-2xl bg-white p-8 shadow-md transition-transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition group-hover:bg-blue-200">
                    {icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
                  <p className="flex-grow text-gray-600">{desc}</p>
                  <span className="mt-4 text-sm font-semibold text-blue-700 underline decoration-2 underline-offset-2 transition group-hover:text-blue-900">
                    Learn More →
                  </span>
                </motion.a>
              ))}
            </div>
          </section>

          {/* EXECUTIVE SEARCH */}
          <section id="executive" className="bg-white py-20">
            <div className="container mx-auto px-6">
              <h2 className="mb-12 text-center text-3xl font-bold text-[#1A2B88]">Executive Search</h2>

              {/* Timeline */}
              <div className="relative mx-auto max-w-5xl">
                <div className="absolute left-0 right-0 top-5 mx-auto h-1 w-full max-w-5xl bg-blue-200"></div>
                <div className="relative flex justify-between gap-6">
                  {executiveSteps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-blue-700 bg-white font-semibold text-blue-700">
                        {i + 1}
                      </div>
                      <p className="mt-3 max-w-xs text-sm font-medium text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PROFESSIONAL SEARCH */}
          <section id="professional" className="container mx-auto px-6 py-20">
            <h2 className="mb-10 text-center text-3xl font-bold text-[#1A2B88]">Professional Search</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {profFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  custom={i * 0.15}
                  viewport={{ once: true }}
                  className="rounded-xl bg-white p-8 text-center shadow-md"
                >
                  <PiPersonLight className="mx-auto mb-4 h-10 w-10 text-blue-700" />
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-gray-300 bg-blue-700 p-10 text-center text-lg font-semibold text-white shadow-lg">
              While Executive Search targets leadership roles, Professional Search focuses on mid-level and
              technical talent—delivering speed, scalability, and precision.
            </div>
          </section>

          {/* RPO SECTION */}
          <section
            id="rpo"
            className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-600 px-6 py-20 text-white"
          >
            <div className="container mx-auto max-w-7xl">
              <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
                Recruitment Process Outsourcing (RPO)
              </h2>

              <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-white/90">
                Adroyts’ RPO service offers an end-to-end recruitment solution. Your dedicated Adroyts team
                becomes an extension of your HR function—equipped with sector-savvy recruiters, sourcing
                tools, and scalable capacity.
              </p>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                {rpoFeatures.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/30 bg-white/10 p-8 text-center backdrop-blur-md"
                  >
                    <PiGearSixLight className="mx-auto mb-3 h-10 w-10 text-white" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center text-xl font-semibold">
                Average time-to-fill reduction: 45%
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="relative bg-white px-6 py-20 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-blue-700">
              Ready to build your next great team?
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-700">
              Whether you’re seeking top executives, skilled professionals, or full recruitment support,
              Adroyts is ready to help.
            </p>

            <button className="rounded-xl border border-blue-700 bg-white px-10 py-4 text-lg font-semibold text-blue-700 shadow-sm transition hover:shadow-lg hover:ring-2 hover:ring-blue-200">
              Contact Us
            </button>

            {/* Sticky floating CTA */}
            <a
              href="#contact"
              className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-700 p-4 text-white shadow-lg transition hover:bg-blue-800 md:hidden"
              aria-label="Contact Us"
              title="Contact Us"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
