import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
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

  return (
    <div className="w-full bg-white font-sans text-[#1A1F36] selection:bg-blue-200 selection:text-gray-900">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(70vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/saudi-arabia-s-digital-transformation-free-photo.jpeg"
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
                  Adroyts Academy
                </li>
              </ol>
            </nav>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
              Adroyts Academy
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
              className="group flex w-full items-center justify-between rounded-md px-4 py-2 text-left text-[#1A2B88]/60 transition-colors hover:bg-blue-200 hover:text-blue-900"
            >
              <span>Recruitment Solutions</span>
              <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </button>

            {/* Adroyts Academy (ACTIVE) */}
            <button
              onClick={() => navigate("/services/academy")}
              className="group flex w-full items-center justify-between rounded-md bg-white px-4 py-2 text-left text-[#1A2B88] transition-colors hover:bg-blue-200 hover:text-blue-900"
            >
              <span>Adroyts Academy</span>
              <FaArrowRight className="translate-x-[-6px] transition-all duration-300" />
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
          {/* SERVICES */}
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#1A1F36]">Our Services</h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {services.map(({ title, desc }, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group flex flex-col rounded-2xl bg-white p-8 shadow-md transition-transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
                  <p className="flex-grow text-gray-600">{desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* TRAINING APPROACH */}
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-10 text-center text-3xl font-bold text-[#1A2B88]">Our Training Approach</h2>
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1A2B88] font-semibold text-[#1A2B88]">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-[#1A2B88]">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-10 text-center text-3xl font-bold text-[#1A2B88]">
              Why Choose Adroyts Academy
            </h2>
            <ul className="mx-auto max-w-4xl list-inside list-disc space-y-4 text-lg text-gray-600">
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

          {/* STATS */}
          <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-6 py-20 text-white">
            <div className="container mx-auto max-w-7xl">
              <h2 className="mb-14 text-center text-3xl font-bold">Academy Success Metrics</h2>
              <div className="grid grid-cols-2 gap-12 text-center md:grid-cols-4">
                {stats.map(({ num, label }, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl"
                  >
                    <h3 className="text-5xl font-bold tracking-tight">{num.toLocaleString()}</h3>
                    <p className="mt-3 text-lg font-semibold">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="relative bg-white px-6 py-20 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-blue-700">
              Ready to Invest in Your Team’s Growth?
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-700">
              Join hundreds of organizations and professionals who trust Adroyts Academy for impactful,
              results-driven training.
            </p>

            <button className="rounded-xl border border-blue-700 bg-white px-10 py-4 text-lg font-semibold text-blue-700 shadow-sm transition hover:shadow-lg hover:ring-2 hover:ring-blue-200">
              Contact Us
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Academy;
