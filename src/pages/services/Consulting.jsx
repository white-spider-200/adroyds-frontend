import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const Consulting = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Organizational Design",
      desc: "Create effective structures, workflows, and operating models that boost efficiency and enable scalable growth.",
    },
    {
      title: "HR Strategy",
      desc: "Build robust HR frameworks, policies, and talent development plans aligned with organizational objectives.",
    },
    {
      title: "Performance Optimization",
      desc: "Implement systems that measure, develop, and reward performance to drive sustained productivity.",
    },
    {
      title: "Change Management",
      desc: "Guide organizations through transformation using structured change frameworks and stakeholder engagement.",
    },
    {
      title: "Workforce Planning",
      desc: "Align talent supply with organizational needs through structured workforce analysis and forecasting.",
    },
    {
      title: "Culture & Engagement",
      desc: "Strengthen organizational culture and improve engagement through targeted programs and diagnostics.",
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
              className="group flex w-full items-center justify-between rounded-md px-4 py-2 text-left text-[#1A2B88]/60 transition-colors hover:bg-blue-200 hover:text-blue-900"
            >
              <span>Recruitment Solutions</span>
              <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
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
              className="group flex w-full items-center justify-between rounded-md bg-white px-4 py-2 text-left text-[#1A2B88] transition-colors hover:bg-blue-200 hover:text-blue-900"
            >
              <span>Human Capital Consulting</span>
              <FaArrowRight className="translate-x-[-6px] transition-all duration-300" />
            </button>
          </nav>
        </div>

        <div className="flex-[2] bg-white px-6">
          {/* SERVICES SECTION */}
          <section className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mb-12 text-center text-3xl font-bold text-[#1A2B88]"
              >
                Our Consulting Services
              </motion.h2>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: i * 0.15 }}
                    className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-[#1A2B88] hover:shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-[#1A1F36]">{service.title}</h3>
                    <p className="mt-3 text-gray-600">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* APPROACH SECTION */}
          <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-7xl">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mb-10 text-center text-3xl font-bold text-[#1A2B88]"
              >
                Our Approach
              </motion.h2>

              <div className="grid gap-10 md:grid-cols-5">
                {approachSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1A2B88] text-xl font-semibold text-[#1A2B88]">
                      {i + 1}
                    </div>
                    <p className="max-w-xs text-gray-700">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* BENEFITS SECTION */}
          <section className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mb-10 text-center text-3xl font-bold text-[#1A2B88]"
              >
                Client Benefits
              </motion.h2>

              <ul className="mx-auto max-w-4xl list-inside list-disc space-y-4 text-gray-600 md:text-lg">
                {clientBenefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>

          {/* TESTIMONIALS SECTION */}
          <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-5xl text-center">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mb-12 text-3xl font-bold text-[#1A2B88]"
              >
                What Our Clients Say
              </motion.h2>

              <div className="space-y-12">
                {testimonials.map((t, i) => (
                  <motion.blockquote
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
                  >
                    <p className="mb-4 italic text-gray-700">"{t.quote}"</p>
                    <footer className="font-semibold text-gray-900">
                      — {t.name}, <span className="font-normal text-gray-600">{t.role}</span>
                    </footer>
                  </motion.blockquote>
                ))}
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="bg-gradient-to-br from-[#1A2B88] to-[#4BC9F0] px-6 py-24 text-center text-white">
            <h2 className="mb-6 text-4xl font-bold tracking-tight">
              Ready to elevate your human capital strategy?
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg opacity-90">
              Partner with Adroyts Consulting to unlock your organization's full potential through innovative,
              tailored solutions.
            </p>

            <button className="rounded-xl bg-white px-10 py-4 text-lg font-semibold text-[#1A2B88] shadow-xl transition hover:scale-110">
              Contact Us
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
