import { motion } from "framer-motion";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import { FaArrowRight, FaAward, FaClipboardList, FaPhoneAlt, FaThumbsUp, FaUserCheck } from "react-icons/fa";
import { PiGearSixLight, PiPersonLight } from "react-icons/pi";
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

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const services = [
  // {
  //   title: "Recruitment Solutions",
  //   path: "/services/recruitment",
  //   image: "/assets/business-meeting-saudi-arabia-1024x683.webp",
  // },
  {
    title: "Adroyts Academy",
    path: "/services/academy",
    image: "/assets/SEC_Batch02_33.jpg",
  },
  {
    title: "Assessment Center",
    path: "/services/assessment",
    image: "/assets/businessman-using-laptop-mouse.jpg",
  },
  {
    title: "Human Capital Consulting",
    path: "/services/consulting",
    image: "/assets/adroyts-consulting.png",
  },
];

const servicesList = [
  {
    title: "Executive Search",
    desc: "Identifying and engaging exceptional leaders who drive transformation.",
    image: "/assets/istock-90868745-large-spxmmo.jpeg",
    link: "#executive",
  },
  {
    title: "Professional Search",
    desc: "Delivering high-performing professionals to power your business growth.",
    image: "/assets/shutterstock_591060992.jpg",
    link: "#professional",
  },
  {
    title: "RPO (Recruitment Process Outsourcing)",
    desc: "Full-cycle recruitment ownership from sourcing to onboarding.",
    image: "/assets/shutterstock_2212724739.jpg",
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
  {
    num: 1200,
    suffix: "+",
    label: "Candidates Successfully Placed",
    icon: <FaUserCheck size={32} />,
  },
  {
    num: 250,
    suffix: "+",
    label: "Recruitment Projects Completed",
    icon: <FaClipboardList size={32} />,
  },
  {
    num: 95.93,
    suffix: "%",
    label: "Passed Probation Period",
    icon: <FaThumbsUp size={32} />,
  },
  {
    num: 19,
    suffix: "+",
    label: "Years of Recruitment Excellence",
    icon: <FaAward size={32} />,
  },
];

const Recruitment4 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full bg-white font-sans text-white selection:bg-cyan-400/30">
      {/* HERO */}
      <section className="relative -mt-40 flex min-h-[calc(60vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/business-meeting-saudi-arabia-1024x683.webp"
          className="absolute inset-0 h-full w-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F]/80 to-[#0E1C3F]/30"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl px-4 pt-28"
        >
          <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
            <ol className="inline-flex space-x-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
                <span className="mx-2">/</span>
              </li>
              <li className="font-semibold">Recruitment Solutions</li>
            </ol>
          </nav>

          <SplitText className="mb-4 text-4xl font-extrabold md:text-5xl">
            Recruitment Solutions that Empower Organizations Since 2006
          </SplitText>

          <motion.button
            onClick={() => navigate("/contact")}
            className="mt-6 rounded-lg bg-cyan-400 px-10 py-4 text-lg font-semibold text-white shadow-lg backdrop-blur-md hover:bg-cyan-500"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="py-16 text-lg">
        {/* ---- MAIN CONTENT ---- */}
        <div className="w-full">
          {/* BANNER TOP */}
          <div className="relative mx-auto mb-10 h-[450px] w-full max-w-7xl overflow-hidden rounded-xl px-6">
            <img
              src="/assets/business-meeting-saudi-arabia-1024x683.webp"
              className="h-full w-full rounded-xl object-cover"
              alt=""
            />
          </div>

          {/* INTRO */}
          <section className="container mx-auto max-w-7xl px-6 pb-16">
            <h2 className="mb-6 text-3xl font-bold text-navy-500">About Our Recruitment Solutions</h2>
            <p className="text-lg leading-relaxed text-navy-500/80">
              For nearly two decades, Adroyts has been a trusted recruitment partner for organizations across
              Saudi Arabia. We provide end-to-end hiring solutions that balance precision, speed, and cultural
              alignment—helping clients secure the right talent every time.
            </p>
          </section>

          {/* STATS */}
          <section className="relative mx-auto max-w-7xl overflow-hidden rounded-lg bg-cyan-400 p-10 px-6 text-white md:p-12">
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-20">
              <div className="flex flex-1 justify-between">
                {statsData.map(({ icon, num, suffix, label }, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center px-6 ${
                      i < statsData.length - 1 ? "border-r border-white/30" : ""
                    }`}
                  >
                    <div className="mb-4">{icon}</div>
                    <div className="text-4xl font-bold">
                      <CountUp
                        end={num}
                        decimals={num % 1 !== 0 ? 2 : 0}
                        duration={2.5}
                        suffix={suffix}
                        separator=","
                      />
                    </div>
                    <div className="mt-1 text-center text-xs tracking-widest">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="container mx-auto max-w-7xl px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-navy-500">Our Recruitment Services</h2>

            {/* GRID LAYOUT */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicesList.map(({ title, desc, image, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  className="relative flex h-72 w-full flex-col justify-end overflow-hidden rounded-2xl bg-cover bg-center shadow-lg"
                  style={{ backgroundImage: `url(${image})` }}
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  custom={index}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C3F]/80 to-transparent"></div>

                  {/* Text box */}
                  <div className="relative z-10 mx-4 mb-6 rounded-xl bg-white/10 p-6 backdrop-blur-md">
                    <h3 className="mb-3 text-2xl font-semibold text-orange-400">{title}</h3>
                    <p className="text-lg text-orange-400">{desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* EXECUTIVE SECTION */}
          <section
            id="executive"
            className="relative bg-cover bg-center py-28"
            style={{ backgroundImage: "url('/assets/istock-90868745-large-spxmmo.jpeg')" }}
          >
            <div className="absolute inset-0 bg-[#0E1C3F]/90"></div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
              <h2 className="mb-16 text-center text-3xl font-bold text-white">Executive Search</h2>

              <div className="relative flex justify-between">
                <div className="absolute left-0 right-0 top-6 h-[2px] bg-white/20"></div>

                {executiveSteps.map((step, i) => (
                  <div key={i} className="flex w-40 flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-400 text-xl font-bold text-white">
                      {i + 1}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{step}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PROFESSIONAL */}
          <section id="professional" className="mx-auto max-w-7xl px-6 py-28">
            <h2 className="mb-10 text-center text-3xl font-bold text-navy-500">Professional Search</h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {profFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i * 0.15}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-lg p-8 text-center shadow-md"
                >
                  <PiPersonLight className="mx-auto mb-4 h-10 w-10 text-cyan-400" />
                  <p className="text-navy-500/80">{feature}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 rounded-lg bg-[#0E1C3F] p-10 text-center text-lg font-semibold">
              While Executive Search targets leadership roles, Professional Search focuses on mid-level and
              technical talent.
            </div>
          </section>

          {/* RPO */}
          <section
            id="rpo"
            className="relative bg-cover bg-center px-6 py-28"
            style={{ backgroundImage: "url('/assets/shutterstock_2212724739.jpg')" }}
          >
            <div className="absolute inset-0 bg-[#0E1C3F]/90"></div>

            <div className="relative z-10 mx-auto max-w-7xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-white">
                Recruitment Process Outsourcing (RPO)
              </h2>

              <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-white/90">
                Adroyts’ RPO service offers an end-to-end recruitment solution...
              </p>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
                {rpoFeatures.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-white/30 bg-white/10 p-8 text-center backdrop-blur-md"
                  >
                    <PiGearSixLight className="mx-auto mb-3 h-10 w-10 text-white" />
                    <p className="text-white">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center text-xl font-semibold text-cyan-400">
                Average time-to-fill reduction: 45%
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="relative mx-auto max-w-7xl px-6 py-20 text-center">
            <h2 className="mb-6 text-4xl font-bold text-cyan-400">Ready to build your next great team?</h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-navy-500">
              Whether you’re seeking top executives, skilled professionals, or full recruitment support...
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="rounded-lg bg-cyan-400 px-10 py-4 text-lg font-semibold text-white shadow-sm hover:ring-2 hover:ring-cyan-400/40"
            >
              Contact Us
            </button>
          </section>
        </div>

        {/* ---- VIEW MORE SERVICES ---- */}
        <section className="mx-auto mt-20 max-w-7xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-navy-500 md:text-4xl">View More Services</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, path, image }, index) => (
              <div
                key={index}
                onClick={() => navigate(path)}
                className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              >
                {/* Background Image */}
                <img src={image} alt={title} className="h-72 w-full object-cover" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 hover:from-black/70"></div>

                {/* Bottom Overlay for Title */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-lg font-semibold text-white drop-shadow-lg">{title}</h3>
                </div>

                {/* Optional Hover Icon */}
                <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <FaArrowRight className="text-xl text-white drop-shadow-md" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Recruitment4;
