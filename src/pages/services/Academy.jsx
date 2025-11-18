import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const services = [
  {
    title: "Professional Development Programs",
    desc: "Structured learning paths designed to enhance communication, leadership, productivity, and workplace readiness skills, empowering professionals to excel.",
  },
  {
    title: "Technical Skills Training",
    desc: "Hands-on courses covering full-stack development, cloud computing, data analytics, and UI/UX fundamentals to prepare learners for tech-driven roles.",
  },
  {
    title: "Customized Corporate Training",
    desc: "Tailored programs aligned with your organization’s goals, focused on workforce upskilling, reskilling, and accelerating talent to meet evolving business needs.",
  },
  {
    title: "Youth & Graduate Programs",
    desc: "Targeted training to prepare fresh graduates and job seekers with employability skills, career coaching, and real-world project experience.",
  },
  {
    title: "Workshops & Short Courses",
    desc: "Intensive sessions on communication, project management, presentation skills, and technical fundamentals designed for quick skill upgrades.",
  },
];

const trainingSteps = [
  {
    title: "Assess",
    desc: "Identify individual and organizational skill gaps to tailor impactful training programs.",
  },
  {
    title: "Train",
    desc: "Deliver expert-led, interactive training sessions using a blended approach of online and in-person learning.",
  },
  {
    title: "Apply",
    desc: "Provide hands-on exercises and real-world projects to solidify knowledge and practical skills.",
  },
  {
    title: "Validate",
    desc: "Conduct assessments and certifications to ensure mastery and measurable outcomes.",
  },
];

const whyChooseUs = [
  "Experienced industry trainers with real-world expertise",
  "Comprehensive curriculum aligned with current market demands",
  "Blended learning models offering flexibility and engagement",
  "Robust assessment and certification to validate skills",
  "Partnership approach to support long-term talent development",
];

const stats = [
  { num: 1200, label: "Graduates Certified" },
  { num: 85, label: "Corporate Partners" },
  { num: 500, label: "Training Sessions Delivered" },
  { num: 95, label: "Satisfaction Rate (%)" },
];

const Academy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full bg-white font-sans text-[#0E1C3F] selection:bg-[#1DC0DA]/30 selection:text-[#0E1C3F]">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[80vh] items-center justify-center bg-cover bg-center px-6 text-center">
        <img
          src="/assets/saudi-arabia-s-digital-transformation-free-photo.jpeg"
          alt="Adroyts Academy Background"
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
              <li className="font-semibold text-white">Adroyts Academy</li>
            </ol>
          </nav>

          <motion.h1
            className="mb-4 text-4xl font-extrabold text-white md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Adroyts Academy
          </motion.h1>

          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-6 rounded-xl border border-white/30 bg-white/10 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>

      <div className="mx-auto flex max-w-7xl gap-2 px-6 py-16 text-lg">
        {/* Sidebar Menu */}
        <div className="sticky top-32 h-full flex-1">
          <div className="flex flex-col rounded-xl bg-gray-100 p-6">
            <nav className="flex flex-col space-y-6">
              {/* Recruitment Solutions */}
              <button
                onClick={() => navigate("/services/recruitment")}
                className="group flex w-full items-center justify-between rounded-xl px-4 py-2 text-left text-[#0E1C3F]/60 transition-colors hover:bg-[#1DC0DA]/20 hover:text-[#0E1C3F]"
              >
                <span>Recruitment Solutions</span>
                <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </button>

              {/* Adroyts Academy (Active) */}
              <button
                onClick={() => navigate("/services/academy")}
                className="group flex w-full items-center justify-between rounded-xl bg-[#1DC0DA]/20 px-4 py-2 text-left text-[#0E1C3F] transition-colors hover:bg-[#1DC0DA]/40 hover:text-[#0E1C3F]/90"
              >
                <span>Adroyts Academy</span>
                <FaArrowRight className="translate-x-[-6px] text-[#0E1C3F] transition-all duration-300" />
              </button>

              {/* Assessment Center */}
              <button
                onClick={() => navigate("/services/assessment")}
                className="group flex w-full items-center justify-between rounded-xl px-4 py-2 text-left text-[#0E1C3F]/60 transition-colors hover:bg-[#1DC0DA]/20 hover:text-[#0E1C3F]"
              >
                <span>Assessment Center</span>
                <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </button>

              {/* Human Capital Consulting */}
              <button
                onClick={() => navigate("/services/consulting")}
                className="group flex w-full items-center justify-between rounded-xl px-4 py-2 text-left text-[#0E1C3F]/60 transition-colors hover:bg-[#1DC0DA]/20 hover:text-[#0E1C3F]"
              >
                <span>Human Capital Consulting</span>
                <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </button>
            </nav>
          </div>

          {/* CONTACT BOX WITH OVERLAY */}
          <div className="relative mt-4 overflow-hidden rounded-xl py-6">
            <img src="/assets/24-01-17-01-02.jpg" alt="Contact" className="h-56 w-full object-cover" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0E1C3F]/90"></div>

            {/* Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
              {/* Icon in Circle */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 py-5 backdrop-blur-sm">
                <FaPhoneAlt className="text-2xl text-white" />
              </div>

              <p className="text-center text-xl font-semibold uppercase">Best Quality</p>
              <p className="text-center text-xl font-semibold uppercase">Services</p>

              <p className="mt-4 text-center text-sm opacity-90">Call us Anytime</p>
              <p className="text-center text-xl font-bold">+ 92 666 888 0000</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-[2.3] bg-white px-6">
          <div className="relative mb-10 h-[450px] w-full overflow-hidden rounded-xl">
            <img
              src="/assets/saudi-arabia-s-digital-transformation-free-photo.jpeg"
              alt="Recruitment Solutions"
              className="h-full w-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-[#0E1C3F] opacity-10"></div>
          </div>
          {/* SERVICES */}
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#0E1C3F]">Our Services</h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {services.map(({ title, desc }, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group flex flex-col rounded-xl bg-white p-8 shadow-md transition-transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <h3 className="mb-2 text-xl font-semibold text-[#0E1C3F]">{title}</h3>
                  <p className="flex-grow text-gray-700">{desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* TRAINING APPROACH */}
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-10 text-center text-3xl font-bold text-[#0E1C3F]">Our Training Approach</h2>
            <div className="mx-auto max-w-5xl space-y-10">
              {trainingSteps.map(({ title, desc }, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0E1C3F] font-semibold text-[#0E1C3F]">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-[#0E1C3F]">{title}</h3>
                    <p className="text-gray-700">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-10 text-center text-3xl font-bold text-[#0E1C3F]">
              Why Choose Adroyts Academy
            </h2>
            <ul className="mx-auto max-w-4xl list-inside list-disc space-y-4 text-lg text-gray-700">
              {whyChooseUs.map((point, i) => (
                <motion.li
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </section>

          {/* STATS SECTION */}
          <section className="relative overflow-hidden rounded-lg bg-[#1DC0DA] p-10 text-white md:p-12">
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

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:items-start md:gap-20">
              <div className="flex flex-1 justify-between">
                {stats.map(({ num, label }, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center px-6 ${
                      i < stats.length - 1 ? "border-r border-white/30" : ""
                    }`}
                  >
                    <div className="text-4xl font-bold">{num.toLocaleString()}</div>
                    <div className="mt-1 text-center text-xs tracking-widest">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="relative bg-white px-6 py-20 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#1DC0DA]">
              Ready to Invest in Your Team’s Growth?
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-[#0E1C3F]">
              Join hundreds of organizations and professionals who trust Adroyts Academy for impactful,
              results-driven training.
            </p>

            <button className="rounded-xl border border-[#1DC0DA] bg-white px-10 py-4 text-lg font-semibold text-[#0E1C3F] shadow-sm transition hover:shadow-lg hover:ring-2 hover:ring-[#1DC0DA]/40">
              Contact Us
            </button>

            {/* Sticky floating CTA */}
            <a
              href="#contact"
              className="fixed bottom-6 right-6 z-50 rounded-full bg-[#1DC0DA] p-4 text-white shadow-lg transition hover:bg-[#17a8bb] md:hidden"
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

export default Academy;
