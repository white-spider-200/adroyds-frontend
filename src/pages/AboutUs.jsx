import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { FaChartLine, FaGlobe, FaHandshake, FaLightbulb, FaLock, FaMedal, FaTrophy } from "react-icons/fa";
import {
  PiBankLight,
  PiChartBarLight,
  PiGearSixLight,
  PiHeartbeatLight,
  PiMonitorLight,
  PiShareNetworkLight,
} from "react-icons/pi";
import { useLocation } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const scrollToHash = (hash) => {
  if (!hash) return;
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToHash(location.hash);
  }, [location.hash]);

  const coreValues = [
    {
      title: "Integrity",
      desc: "We uphold transparency, trust, and ethical practices in every decision.",
      icon: <FaLock className="mx-auto mb-4 text-6xl text-blue-900 opacity-90" />,
    },
    {
      title: "Innovation",
      desc: "We embrace creativity to deliver cutting-edge HR and digital solutions.",
      icon: <FaLightbulb className="mx-auto mb-4 text-6xl text-blue-900 opacity-90" />,
    },
    {
      title: "Excellence",
      desc: "We are committed to continuous improvement and exceptional quality.",
      icon: <FaMedal className="mx-auto mb-4 text-6xl text-blue-900 opacity-90" />,
    },
    {
      title: "Teamwork",
      desc: "We foster collaboration to achieve shared goals and lasting success.",
      icon: <FaHandshake className="mx-auto mb-4 text-6xl text-blue-900 opacity-90" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "15+ Years of Experience",
      icon: <FaTrophy className="mb-6 text-6xl text-blue-900 opacity-90" />,
    },
    { title: "Global Partnerships", icon: <FaGlobe className="mb-6 text-6xl text-blue-900 opacity-90" /> },
    {
      title: "Proven Success Stories",
      icon: <FaChartLine className="mb-6 text-6xl text-blue-900 opacity-90" />,
    },
  ];

  const boardMembers = [
    { name: "Mohammed Al-Khaled", role: "Chairman" },
    { name: "Sara Al-Hassan", role: "Board Member" },
    { name: "Omar Qudsi", role: "Board Member" },
    { name: "Layla Al-Fahad", role: "Board Member" },
  ];

  const executiveManagement = [
    { name: "Khalid Ahmed", role: "CEO" },
    { name: "Noura Saleh", role: "COO" },
    { name: "Hassan Omar", role: "CFO" },
    { name: "Reem Faris", role: "CTO" },
  ];

  return (
    <div className="bg-white font-cairo text-gray-900 selection:bg-blue-200 selection:text-gray-900">
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
                  About Us
                </li>
              </ol>
            </nav>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
              About Us
            </h1>
          </div>
        </motion.div>
      </section>
      <section className="w-full bg-white py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row">
          {/* LEFT IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src="/assets/jobs-arabian-copy-scaled.png"
              alt="About Adroyts"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
              Welcome to Adroyts
            </h4>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-[#1A2B88] md:text-5xl">
              Work together for your <br /> business success
            </h2>

            <p className="mb-6 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit. Simply free
              text available ornare eu est. Maecenas maximus, mi eget euismod lacinia.
            </p>

            {/* FEATURES */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm text-white">
                  ✓
                </span>
                <p className="text-gray-700">
                  <strong className="text-[#1A2B88]">Free Consultation</strong> — Lorem ipsum is not dolor sit
                  amet, consectetur notted.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm text-white">
                  ✓
                </span>
                <p className="text-gray-700">
                  <strong className="text-[#1A2B88]">Best team members</strong> — Lorem ipsum is not dolor sit
                  amet, consectetur notted.
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <button className="mt-8 rounded-xl bg-[#1A2B88] px-8 py-4 font-semibold text-white shadow-md transition hover:bg-blue-900">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section
        className="relative flex items-center justify-center bg-cover bg-fixed bg-center py-20"
        style={{ backgroundImage: "url('/assets/saudi-arabia-s-digital-transformation-free-photo.jpeg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-6 text-center">
          <h1 className="mb-4 text-6xl font-semibold uppercase tracking-tight text-white">
            Adroyts is ready to protect
          </h1>
          <h1 className="mb-10 text-6xl font-semibold uppercase tracking-tight text-white">
            Your Businesses
          </h1>

          <button className="rounded-xl bg-white px-8 py-4 text-lg font-semibold tracking-tight text-[#1A2B88] shadow-md transition hover:bg-gray-100">
            Discover More
          </button>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 px-6 py-24 text-center md:px-12 lg:px-20">
        {/* Section subtitle */}
        <h4 className="text-sm font-semibold tracking-widest text-gray-500">SERVICES WE’RE OFFERING</h4>

        {/* Main Title */}
        <h2 className="mt-5 text-3xl font-extrabold leading-snug text-gray-900 md:text-4xl">
          We’re Dedicated to Serve <br /> you All Time
        </h2>

        {/* Services Grid */}
        <div className="mx-auto mt-16 grid max-w-screen-xl gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {[
            { title: "Banking", icon: <PiBankLight className="text-gray-900" /> },
            { title: "Healthcare", icon: <PiHeartbeatLight className="text-gray-900" /> },
            { title: "Education", icon: <PiMonitorLight className="text-gray-900" /> },
            { title: "Manufacturing", icon: <PiGearSixLight className="text-gray-900" /> },
            { title: "Capital Markets", icon: <PiChartBarLight className="text-gray-900" /> },
            { title: "Networking", icon: <PiShareNetworkLight className="text-gray-900" /> },
          ].map((item, i) => (
            <div
              key={i}
              className="flex cursor-pointer flex-col items-center justify-center rounded-xl bg-white px-5 py-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-6 text-6xl opacity-90">{item.icon}</div>
              <p className="text-base font-semibold text-gray-900">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="bg-white px-6 py-24 text-center md:px-12 lg:px-20">
        <div className="mx-auto max-w-screen-xl">
          {/* Section subtitle */}
          <h4 className="text-sm font-semibold tracking-widest text-gray-500">WHY CHOOSE US</h4>

          {/* Main Title */}
          <h2 className="mt-5 text-3xl font-extrabold leading-snug text-gray-900 md:text-4xl">
            Why Choose Adroyts?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-4xl text-base font-light leading-relaxed text-gray-700 md:text-lg">
            We combine deep industry expertise with modern HR technologies and strategic insights, ensuring
            every client achieves measurable and lasting results.
          </p>

          {/* Grid */}
          <div className="mx-auto mt-16 grid max-w-screen-xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map(({ title, icon }, i) => (
              <div
                key={i}
                className="mx-auto flex max-w-sm cursor-pointer flex-col items-center justify-center rounded-xl bg-gray-50 px-5 py-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {icon}
                <p className="text-base font-semibold text-gray-900">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section id="board" className="bg-gray-50 py-24 text-center md:px-12 lg:px-20">
        <div className="mx-auto max-w-screen-xl">
          {/* Section subtitle */}
          <h4 className="text-sm font-semibold tracking-widest text-gray-500">OUR TEAM</h4>

          {/* Main Title */}
          <h2 className="mt-5 text-3xl font-extrabold leading-snug text-gray-900 md:text-4xl">
            Board of Directors
          </h2>

          {/* Grid */}
          <div className="mx-auto mt-16 grid max-w-screen-xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {boardMembers.map(({ name, role }, i) => (
              <div
                key={i}
                className="flex cursor-pointer flex-col items-center justify-center rounded-xl bg-white px-6 py-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Image Placeholder */}
                <div
                  aria-hidden="true"
                  className="mx-auto mb-6 h-28 w-28 rounded-full bg-gradient-to-br from-blue-300 to-blue-100 shadow"
                />
                <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                <p className="mt-1 text-sm tracking-wide text-gray-700">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Management Section */}
      <section id="executive" className="bg-white py-24 text-center md:px-12 lg:px-20">
        <div className="mx-auto max-w-screen-xl">
          {/* Section subtitle */}
          <h4 className="text-sm font-semibold tracking-widest text-gray-500">MEET THE TEAM</h4>

          {/* Main Title */}
          <h2 className="mt-5 text-3xl font-extrabold leading-snug text-gray-900 md:text-4xl">
            Executive Management
          </h2>

          {/* Grid */}
          <div className="mx-auto mt-16 grid max-w-screen-xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {executiveManagement.map(({ name, role }, i) => (
              <div
                key={i}
                className="flex cursor-pointer flex-col items-center justify-center rounded-xl bg-white px-6 py-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Image Placeholder */}
                <div
                  aria-hidden="true"
                  className="mx-auto mb-6 h-28 w-28 rounded-full bg-gradient-to-br from-blue-300 to-blue-100 shadow"
                />
                <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                <p className="mt-1 text-sm tracking-wide text-gray-700">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
