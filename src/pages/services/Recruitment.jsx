import { motion } from "framer-motion";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import { FaArrowRight, FaAward, FaClipboardList, FaPhoneAlt, FaThumbsUp, FaUserCheck } from "react-icons/fa";
import {
  PiBriefcaseLight,
  PiClipboardTextLight,
  PiGearSixLight,
  PiPersonLight,
  PiUsersThreeLight,
} from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import { SplitText } from "../../utils/SplitText";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const servicesList = [
  {
    title: "Executive Search",
    desc: "Identifying and engaging exceptional leaders who drive transformation.",
    icon: <PiBriefcaseLight className="h-12 w-12 text-cyan-400" />,
    link: "#executive",
  },
  {
    title: "Professional Search",
    desc: "Delivering high-performing professionals to power your business growth.",
    icon: <PiUsersThreeLight className="h-12 w-12 text-cyan-400" />,
    link: "#professional",
  },
  {
    title: "RPO (Recruitment Process Outsourcing)",
    desc: "Full-cycle recruitment ownership from sourcing to onboarding.",
    icon: <PiClipboardTextLight className="h-12 w-12 text-cyan-400" />,
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

const statsData = [
  { num: 1200, suffix: "+", label: "Candidates Successfully Placed", icon: <FaUserCheck size={32} /> },
  { num: 250, suffix: "+", label: "Recruitment Projects Completed", icon: <FaClipboardList size={32} /> },
  { num: 95.93, suffix: "%", label: "Passed Probation Period", icon: <FaThumbsUp size={32} /> },
  { num: 19, suffix: "+", label: "Years of Recruitment Excellence", icon: <FaAward size={32} /> },
];

const Recruitment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full bg-white font-sans text-[#0E1C3F] selection:bg-cyan-400/30 selection:text-[#0E1C3F]">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(60vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/jobs-arabian-copy-scaled.png"
          alt="Recruitment Solutions"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-[#0E1C3F] opacity-80"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-4 pt-28"
        >
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
            <ol className="inline-flex space-x-2">
              <li>
                <a href="/" className="hover:text-white hover:underline">
                  Home
                </a>
                <span className="mx-2">/</span>
              </li>
              <li className="font-semibold text-white">Recruitment Solutions</li>
            </ol>
          </nav>

          <SplitText className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Recruitment Solutions that Empower Organizations Since 2006
          </SplitText>

          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-6 rounded-lg border border-white/30 bg-white/10 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>

      <div className="mx-auto flex max-w-6xl gap-2 px-6 py-16 text-lg">
        <div className="sticky top-32 h-full flex-1">
          {/* MENU BOX */}
          <div className="flex flex-col rounded-lg bg-gray-100 p-4 py-6">
            <p className="mb-4 font-semibold">Our Services</p>
            <nav className="flex flex-col space-y-4">
              {/* Recruitment Solutions (ACTIVE) */}
              <button
                onClick={() => navigate("/services/recruitment")}
                className="group flex w-full items-center justify-between rounded-lg bg-white px-4 py-2 text-left font-semibold text-[#0E1C3F] transition-colors hover:bg-cyan-400/20 hover:text-[#0E1C3F]"
              >
                <span>Recruitment Solutions</span>
                <FaArrowRight className="translate-x-[-6px] transition-all duration-300" />
              </button>

              {/* Adroyts Academy */}
              <button
                onClick={() => navigate("/services/academy")}
                className="group flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-[#0E1C3F]/60 transition-colors hover:bg-cyan-400/20 hover:text-[#0E1C3F]"
              >
                <span>Adroyts Academy</span>
                <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </button>

              {/* Assessment Center */}
              <button
                onClick={() => navigate("/services/assessment")}
                className="group flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-[#0E1C3F]/60 transition-colors hover:bg-cyan-400/20 hover:text-[#0E1C3F]"
              >
                <span>Assessment Center</span>
                <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </button>

              {/* Human Capital Consulting */}
              <button
                onClick={() => navigate("/services/consulting")}
                className="group flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-[#0E1C3F]/60 transition-colors hover:bg-cyan-400/20 hover:text-[#0E1C3F]"
              >
                <span>Human Capital Consulting</span>
                <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </button>
            </nav>
          </div>

          {/* CONTACT BOX WITH OVERLAY */}
          <div className="relative mt-4 overflow-hidden rounded-lg">
            <img src="/assets/24-01-17-01-02.jpg" alt="Contact" className="h-48 w-full object-cover" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0E1C3F]/90"></div>

            {/* Text */}
            <div className="absolute inset-0 flex flex-col items-start justify-center space-y-4 p-8 text-white">
              <p className="text-xl font-semibold">If You Need Any Service Contact With Us</p>

              <p className="flex w-full items-center gap-3 rounded-md bg-white px-6 py-2 font-semibold text-[#0E1C3F]">
                <FaPhoneAlt />+ 92 666 888 0000
              </p>
            </div>
          </div>
        </div>

        <div className="flex-[2.3] bg-white px-6">
          <div className="relative mb-10 h-[450px] w-full overflow-hidden rounded-lg">
            <img
              src="/assets/jobs-arabian-copy-scaled.png"
              alt="Recruitment Solutions"
              className="h-full w-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-[#0E1C3F] opacity-10"></div>
          </div>

          {/* INTRO */}
          <section className="container pb-16 md:max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#0E1C3F]">
              About Our Recruitment Solutions
            </h2>

            <p className="text-lg leading-relaxed text-gray-700">
              For nearly two decades, Adroyts has been a trusted recruitment partner for organizations across
              Saudi Arabia. We provide end-to-end hiring solutions that balance precision, speed, and cultural
              alignment—helping clients secure the right talent every time.
            </p>
          </section>

          {/* STATS SECTION */}
          <section className="relative overflow-hidden rounded-lg bg-cyan-400 p-10 text-white md:p-12">
            {/* Polygon overlay */}
            <svg
              className="absolute left-0 top-0 h-full w-full opacity-20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 800 400"
              fill="none"
            >
              <polygon points="0,0 800,0 800,100 0,300" fill="#a05df4" />
              <polygon points="800,400 0,400 0,300 800,100" fill="#6c35d9" />
            </svg>

            <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-start md:gap-20">
              {/* Stats */}
              <div className="flex flex-1 justify-between">
                {statsData.map(({ icon, num, suffix, label }, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center px-6 ${
                      i < statsData.length - 1 ? "border-r border-white/30" : ""
                    }`}
                  >
                    <div className="mb-4 text-white">{icon}</div>
                    <div className="text-4xl font-bold">
                      <CountUp
                        end={num}
                        decimals={num % 1 !== 0 ? 2 : 0}
                        duration={2.5}
                        suffix={suffix}
                        start={0}
                        enableScrollSpy={true}
                        separator=","
                      />
                    </div>
                    <div className="mt-1 text-center text-xs tracking-widest">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#0E1C3F]">Our Recruitment Services</h2>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
              {servicesList.map(({ title, desc, icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  custom={i * 0.1}
                  viewport={{ once: true }}
                  className="group flex flex-col rounded-lg bg-white p-6 transition-transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400 transition group-hover:bg-cyan-400/40">
                    {icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#0E1C3F]">{title}</h3>
                  <p className="flex-grow text-gray-700">{desc}</p>
                  <span className="mt-4 text-sm font-semibold text-cyan-400 underline decoration-2 underline-offset-2 transition group-hover:text-[#0A9AB8]">
                    Learn More →
                  </span>
                </motion.a>
              ))}
            </div>
          </section>

          {/* EXECUTIVE SEARCH */}
          <section id="executive" className="bg-white py-20">
            <div className="container mx-auto px-6">
              <h2 className="mb-12 text-center text-3xl font-bold text-[#0E1C3F]">Executive Search</h2>

              {/* Timeline */}
              <div className="relative mx-auto max-w-5xl">
                <div className="absolute left-0 right-0 top-5 mx-auto h-1 w-full max-w-5xl bg-cyan-400/40"></div>
                <div className="relative flex justify-between gap-6">
                  {executiveSteps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-cyan-400 bg-white font-semibold text-[#0E1C3F]">
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
            <h2 className="mb-10 text-center text-3xl font-bold text-[#0E1C3F]">Professional Search</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {profFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  custom={i * 0.15}
                  viewport={{ once: true }}
                  className="rounded-lg bg-white p-8 text-center shadow-md"
                >
                  <PiPersonLight className="mx-auto mb-4 h-10 w-10 text-cyan-400" />
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 rounded-lg border border-gray-300 bg-[#0E1C3F] p-10 text-center text-lg font-semibold text-white shadow-lg">
              While Executive Search targets leadership roles, Professional Search focuses on mid-level and
              technical talent—delivering speed, scalability, and precision.
            </div>
          </section>

          {/* RPO SECTION */}
          <section
            id="rpo"
            className="rounded-lg bg-gradient-to-br from-[#0E1C3F] via-[#0B1640] to-[#0A163B] px-6 py-20 text-white"
          >
            <div className="container mx-auto max-w-6xl">
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
                    className="rounded-lg border border-white/30 bg-white/10 p-8 text-center backdrop-blur-md"
                  >
                    <PiGearSixLight className="mx-auto mb-3 h-10 w-10 text-white" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center text-xl font-semibold text-cyan-400">
                Average time-to-fill reduction: 45%
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="relative bg-white px-6 py-20 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-cyan-400">
              Ready to build your next great team?
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-[#0E1C3F]">
              Whether you’re seeking top executives, skilled professionals, or full recruitment support,
              Adroyts is ready to help.
            </p>

            <button className="rounded-lg border border-cyan-400 bg-white px-10 py-4 text-lg font-semibold text-[#0E1C3F] shadow-sm transition hover:shadow-lg hover:ring-2 hover:ring-cyan-400/40">
              Contact Us
            </button>

            {/* Sticky floating CTA */}

            <a
              href="#contact"
              className="fixed bottom-6 right-6 z-50 rounded-full bg-cyan-400 p-4 text-white shadow-lg transition hover:bg-[#17a8bb] md:hidden"
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
