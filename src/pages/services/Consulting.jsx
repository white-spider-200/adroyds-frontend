import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { PiBriefcaseLight, PiClipboardTextLight, PiUsersThreeLight } from "react-icons/pi";
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

const services = [
  {
    title: "Organizational Design",
    desc: "Create effective structures, workflows, and operating models that boost efficiency and enable scalable growth.",
    icon: <PiBriefcaseLight className="h-12 w-12 text-cyan-400" />,
    link: "#executive",
  },
  {
    title: "HR Strategy",
    desc: "Build robust HR frameworks, policies, and talent development plans aligned with organizational objectives.",
    icon: <PiUsersThreeLight className="h-12 w-12 text-cyan-400" />,
    link: "#professional",
  },
  {
    title: "Performance Optimization",
    desc: "Implement systems that measure, develop, and reward performance to drive sustained productivity.",
    icon: <PiClipboardTextLight className="h-12 w-12 text-cyan-400" />,
    link: "#rpo",
  },
];

const approachSteps = [
  "Initial Assessment & Diagnostics",
  "Strategy Development & Alignment",
  "Solution Design & Implementation",
  "Training & Change Enablement",
  "Ongoing Support & Continuous Improvement",
];

const clientBenefits = [
  "Customized solutions aligned with your business objectives",
  "Improved workforce productivity and engagement",
  "Agile and scalable organizational structures",
  "Data-driven performance and talent management",
  "Smooth transitions during periods of change",
];

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "HR Director, GlobalTech",
    quote:
      "Adroyts’ consulting team transformed our HR processes, enabling faster decision-making and higher employee satisfaction.",
  },
  {
    name: "Mohammed Al-Farsi",
    role: "CEO, FinServ Corp",
    quote:
      "Their expertise in organizational design helped us realign our structure, resulting in significant operational improvements.",
  },
];

const Consulting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full bg-white font-sans text-[#0E1C3F] selection:bg-cyan-400/30 selection:text-[#0E1C3F]">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(60vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/eew.jpg"
          alt="Consulting Background"
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
              <li className="font-semibold text-white">Human Capital Consulting</li>
            </ol>
          </nav>

          <SplitText className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Human Capital Solutions that Strengthen Organizations Since 2006
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
        {/* Sidebar Menu */}
        <div className="sticky top-32 h-full flex-1">
          <div className="flex flex-col rounded-lg bg-gray-100 p-4 py-6">
            <p className="mb-4 font-semibold">Our Services</p>
            <nav className="flex flex-col space-y-4">
              {/* Recruitment Solutions */}
              <button
                onClick={() => navigate("/services/recruitment")}
                className="group flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-[#0E1C3F]/60 transition-colors hover:bg-cyan-400/20 hover:text-[#0E1C3F]"
              >
                <span>Recruitment Solutions</span>
                <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
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

              {/* Human Capital Consulting (Active) */}
              <button
                onClick={() => navigate("/services/consulting")}
                className="group flex w-full items-center justify-between rounded-lg bg-cyan-400/20 px-4 py-2 text-left text-[#0E1C3F] transition-colors hover:bg-cyan-400/40 hover:text-[#0E1C3F]/90"
              >
                <span>Human Capital Consulting</span>
                <FaArrowRight className="translate-x-[-6px] text-[#0E1C3F] transition-all duration-300" />
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

        {/* Main Content */}
        <div className="flex-[2.3] bg-white px-6">
          {/* Banner Image */}
          <div className="relative mb-10 h-[450px] w-full overflow-hidden rounded-lg">
            <img
              src="/assets/eew.jpg"
              alt="Human Capital Consulting Banner"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0E1C3F] opacity-10"></div>
          </div>

          {/* INTRO */}
          <section className="container pb-16 md:max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#0E1C3F]">
              About Our Human Capital Consulting
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              For nearly two decades, Adroyts has helped organizations across the region build agile,
              high-performing, and future-ready workforces. Our Human Capital Consulting services align talent
              strategy with business objectives to unlock the full potential of your people and drive
              sustainable growth.
            </p>
          </section>

          {/* SERVICES */}
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#0E1C3F]">Our Recruitment Services</h2>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
              {services.map(({ title, desc, icon, link }, i) => (
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

          {/* APPROACH */}
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-10 text-center text-3xl font-bold text-[#0E1C3F]">Our Approach</h2>
            <div className="mx-auto max-w-5xl space-y-10">
              {approachSteps.map((step, i) => (
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
                  <p className="max-w-xl text-gray-700">{step}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CLIENT BENEFITS */}
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-10 text-center text-3xl font-bold text-[#0E1C3F]">Client Benefits</h2>
            <ul className="mx-auto max-w-4xl list-inside list-disc space-y-4 text-lg text-gray-700">
              {clientBenefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </section>

          {/* TESTIMONIALS */}
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#0E1C3F]">What Our Clients Say</h2>
            <div className="mx-auto max-w-4xl space-y-12">
              {testimonials.map(({ name, role, quote }, i) => (
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
                >
                  <p className="mb-4 italic text-gray-700">"{quote}"</p>
                  <footer className="font-semibold text-gray-900">
                    — {name}, <span className="font-normal text-gray-600">{role}</span>
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="relative bg-white px-6 py-20 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-cyan-400">
              Ready to Transform Your Workforce?
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-[#0E1C3F]">
              Partner with Adroyts Consulting to implement strategic, data-driven human capital solutions that
              deliver measurable results.
            </p>

            <button
              className="rounded-lg border border-cyan-400 bg-white px-10 py-4 text-lg font-semibold text-[#0E1C3F] shadow-sm transition hover:shadow-lg hover:ring-2 hover:ring-cyan-400/40"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
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

export default Consulting;
