import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaCheck, FaChevronCircleRight, FaChevronRight, FaStar, FaUsers } from "react-icons/fa";
import { FaAward, FaCalculator, FaChartLine, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import { SplitText } from "../utils/SplitText";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const slideGroup = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const listStagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  hidden: {},
};

const scrollToHash = (hash) => {
  if (!hash) return;
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const AboutUs = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    scrollToHash(location.hash);
  }, [location.hash]);

  const teamMembers = [
    { name: "Alex Brown", role: "CEO & Founder", image: "/assets/team1-img1.png" },
    { name: "Marina Doe", role: "Product Manager", image: "/assets/team1-img2.png" },
    { name: "Michael Smith", role: "COO & Founder", image: "/assets/team1-img9.png" },
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-white font-cairo text-gray-900 selection:bg-blue-200 selection:text-gray-900">
      {/* HERO SECTION */}
      <section
        id="overview"
        className="relative -mt-40 flex min-h-[calc(50vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center"
      >
        <img
          src="/assets/adroyts-office.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F]/80 to-[#0E1C3F]/30"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6"
        >
          <div className="mt-32 rounded-lg px-8 py-12 md:px-12 md:py-16">
            <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
              <ol className="flex items-center justify-center space-x-2">
                <li className="flex items-center">
                  <a href="/" className="hover:text-white hover:underline">
                    Home
                  </a>
                  <FaChevronRight className="mx-2 text-cyan-400" />
                </li>
                <li className="font-semibold text-white">About Us</li>
              </ol>
            </nav>

            <SplitText className="text-4xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
              About Us
            </SplitText>
          </div>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <section className="w-full bg-white py-28">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
          {/* LEFT IMAGES + STATS */}
          <div className="relative flex gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="overflow-hidden rounded-lg">
                <div className="overflow-hidden rounded-lg">
                  <motion.img
                    src="/assets/istockphoto-1395570261-612x612.jpg"
                    alt="About"
                    className="h-[380px] w-full object-cover transition-transform duration-500 ease-out hover:scale-110 md:h-[400px]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>

              <div className="rounded-lg bg-orange-400 p-6 text-center">
                <p className="text-4xl font-extrabold text-white">15+</p>
                <p className="mt-2 text-base text-white/70">Years of Excellence</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <div className="rounded-lg bg-[#0E1C3F] p-6 text-center">
                <p className="text-4xl font-extrabold text-white">500+</p>
                <p className="mt-2 text-base text-white/70">Leadership Placements</p>
              </div>

              <div className="overflow-hidden rounded-lg">
                <motion.img
                  src="/assets/Screenshot 2025-11-23 103258.png"
                  alt="About"
                  className="h-[380px] w-full object-cover md:h-[400px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-3 w-fit rounded-md bg-[#e9fcff] px-4 py-2 text-sm font-semibold text-cyan-400"
            >
              About Us
            </motion.div>

            <SplitText className="mb-6 text-4xl font-extrabold text-[#0E1C3F]">
              Empowering Organizations Through Exceptional Talent
            </SplitText>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
              className="mb-6 font-medium leading-relaxed text-gray-600"
            >
              Since 2006, ADROYTS has been at the forefront of executive search and HR consulting, connecting
              organizations with leaders who inspire growth. With deep regional insight and a strong global
              network, we deliver strategic hiring solutions tailored to each client’s culture and vision.
            </motion.p>

            {/* Feature List */}
            <motion.div
              variants={slideGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="flex flex-col gap-3"
            >
              {[
                {
                  title: "Strategic Talent Partnerships",
                  desc: "We collaborate closely with clients to understand their long-term goals and provide leadership that drives measurable impact.",
                },
                {
                  title: "Expert Executive Search",
                  desc: "Our rigorous search and assessment processes ensure that every placement is aligned with your organization’s values and ambitions.",
                },
                {
                  title: "Global Reach, Local Understanding",
                  desc: "With strong regional expertise and international alliances, we source exceptional talent across industries and markets.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex cursor-pointer gap-3 rounded-lg bg-gray-100 p-3 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-cyan-400"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 px-4 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-cyan-400">
                    <FaCheck className="text-lg" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-snug text-gray-600 transition-colors duration-300 group-hover:text-white">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="relative flex items-center justify-center bg-cover bg-fixed bg-center py-28"
        style={{ backgroundImage: "url('/assets/saudi-arabia-s-digital-transformation-free-photo.jpeg')" }}
      >
        {/* Overlay */}
        <div className="to-navy-500/50 absolute inset-0 bg-gradient-to-r from-orange-400/60 via-cyan-400/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl px-6 text-center">
          <SplitText className="mb-10 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Adroyts Is Ready to Secure, Support & Elevate Your Business
          </SplitText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto mb-10 max-w-3xl text-lg text-white/80 md:text-xl"
          >
            Partner with a team that brings strategic insight, proven expertise, and full-spectrum HR advisory
            solutions to help your organization thrive.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.12, backgroundColor: "#22d3ee" }}
            className="rounded-lg bg-cyan-400 px-16 py-5 text-lg font-semibold uppercase text-white transition-all"
          >
            Discover More
          </motion.button>
        </div>
      </section>

      {/* OUR VALUES */}
      <section id="values" className="w-full bg-gray-100 px-6 py-20">
        <div className="mx-auto max-w-8xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="m-auto mb-3 w-40 rounded-md bg-[#e9fcff] px-4 py-2 text-center text-sm font-semibold text-cyan-400"
          >
            Our Values
          </motion.div>

          <SplitText className="mb-4 text-4xl font-extrabold text-[#0E1C3F]">Core Values</SplitText>

          <p className="m-auto mb-12 max-w-xl text-gray-700">
            Our values define how we work, how we serve, and how we build meaningful partnerships rooted in
            trust and excellence.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Integrity",
                description:
                  "We maintain the highest ethical standards, ensuring transparency, confidentiality, and trust in every engagement.",
              },
              {
                title: "Excellence",
                description:
                  "We deliver superior quality through rigorous assessments, deep market research, and a commitment to continuous improvement.",
              },
              {
                title: "Partnership",
                description:
                  "We collaborate closely with clients, becoming strategic allies who understand their vision and help build lasting success.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -8 }}
                viewport={{ once: false }}
                custom={i}
                className="group relative cursor-pointer rounded-lg bg-white p-6 transition-colors duration-300 ease-in-out hover:bg-orange-400"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-cyan-400 transition-colors duration-300 group-hover:bg-white group-hover:text-cyan-400">
                  <FaStar size={24} />
                </div>

                <h4 className="mb-3 text-left text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
                  {value.title}
                </h4>

                <p className="text-left text-gray-600 transition-colors duration-300 group-hover:text-white">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="w-full bg-[#0E1C3F] py-16">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-6 md:grid-cols-[3fr_2fr]">
          {/* LEFT SIDE */}
          <div className="flex gap-4">
            {/* Cards */}
            <div className="flex flex-col gap-4">
              {/* CARD 1 */}
              <div className="group rounded-lg bg-[#1F2B4D] p-6 text-center transition duration-300 ease-in-out hover:-translate-y-2 hover:bg-orange-400">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg text-[#1DC0DA] transition-colors duration-300 group-hover:text-white">
                  <FaCalculator className="h-8 w-8" />
                </div>
                <h3 className="whitespace-nowrap text-2xl font-bold text-white transition-colors duration-300 group-hover:text-white">
                  98%
                </h3>
                <p className="mt-2 whitespace-nowrap text-[#B0B0B0] transition-colors duration-300 group-hover:text-white">
                  Client Satisfaction
                </p>
              </div>

              {/* CARD 2 */}
              <div className="group rounded-lg bg-[#1F2B4D] p-6 text-center transition duration-300 ease-in-out hover:-translate-y-2 hover:bg-orange-400">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg text-[#1DC0DA] transition-colors duration-300 group-hover:text-white">
                  <FaAward className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-white">
                  15+
                </h3>
                <p className="mt-2 whitespace-nowrap text-[#B0B0B0] transition-colors duration-300 group-hover:text-white">
                  Years of Expertise
                </p>
              </div>

              {/* CARD 3 */}
              <div className="group rounded-lg bg-[#1F2B4D] p-6 text-center transition duration-300 ease-in-out hover:-translate-y-2 hover:bg-orange-400">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg text-[#1DC0DA] transition-colors duration-300 group-hover:text-white">
                  <FaUsers className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-white">
                  Global
                </h3>
                <p className="mt-2 whitespace-nowrap text-[#B0B0B0] transition-colors duration-300 group-hover:text-white">
                  Talent Network
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <motion.img
                src="/assets/adroyts-office.webp"
                alt="Why Choose Us"
                className="h-full w-full max-w-xl rounded-lg object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-3 w-fit rounded-md bg-[#1DC0DA]/20 px-4 py-2 text-sm font-semibold text-[#1DC0DA]"
            >
              Why ADROYTS?
            </motion.div>

            <SplitText className="mb-6 text-4xl font-extrabold text-white">
              Your Strategic Partner in Leadership & Talent Solutions
            </SplitText>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
              className="mb-6 font-medium leading-relaxed text-[#B0B0B0]"
            >
              At ADROYTS, we combine deep market insight, global networks, and a commitment to excellence to
              deliver leadership and HR solutions that transform organizations. We focus on understanding your
              culture, challenges, and long-term goals to provide talent that drives meaningful impact.
            </motion.p>

            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {[
                "Deep Regional & Global Expertise",
                "Tailored Executive Search Solutions",
                "Data-Driven Talent Assessment",
                "Proven Record of Client Success",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1DC0DA] text-sm text-white">
                    ✓
                  </span>
                  <p className="font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section id="mission-vision" className="w-full bg-gray-50 py-24">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
          {/* MISSION */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -8 }}
            viewport={{ once: false }}
            className="group relative cursor-pointer rounded-lg bg-white p-6 transition-colors duration-300 ease-in-out hover:bg-cyan-400"
          >
            <div className="mb-4 w-fit rounded-md bg-[#e9fcff] px-4 py-2 text-sm font-semibold text-cyan-400">
              Our Mission
            </div>

            <h3 className="mb-4 text-2xl font-bold text-[#0E1C3F] group-hover:text-white">
              Empowering Organizations With Exceptional Talent
            </h3>

            <p className="font-medium leading-relaxed text-gray-600 group-hover:text-white">
              To deliver world-class executive search, talent assessment, and HR consulting solutions that
              empower organizations to attract and develop exceptional leadership. We are committed to
              understanding our clients’ goals, providing strategic insights, and building long-term
              partnerships that drive sustainable growth.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -8 }}
            viewport={{ once: false }}
            className="group relative cursor-pointer rounded-lg bg-white p-6 transition-colors duration-300 ease-in-out hover:bg-cyan-400"
          >
            <div className="mb-4 w-fit rounded-md bg-[#e9fcff] px-4 py-2 text-sm font-semibold text-cyan-400">
              Our Vision
            </div>

            <h3 className="mb-4 text-2xl font-bold text-[#0E1C3F] group-hover:text-white">
              Shaping the Future of Strategic Talent Advisory
            </h3>

            <p className="font-medium leading-relaxed text-gray-600 group-hover:text-white">
              To be the region’s most trusted and influential talent advisory firm — recognized for our
              integrity, expertise, and ability to transform organizations through outstanding leaders who
              drive meaningful impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DIRECTORS */}
      <section id="board" className="bg-gray-100 py-32">
        <div className="mx-auto max-w-8xl px-6 text-center">
          <SplitText className="text-4xl font-extrabold text-gray-900">Board Of Directors</SplitText>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg text-gray-600"
          >
            Meet the leaders guiding our strategic vision
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={listStagger}
            className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
          >
            {teamMembers.map(({ name, role, image }, i) => (
              <motion.div
                key={`${name}-${i}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 20 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={image}
                    alt={name}
                    className="h-72 w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="w-full bg-gray-100 px-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                  <p className="mt-1 text-sm font-medium text-gray-500">{role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXECUTIVE MANAGEMENT */}
      <section id="executive" className="bg-white py-32">
        <div className="mx-auto max-w-8xl text-center">
          <SplitText className="text-4xl font-extrabold text-gray-900">Executive Management</SplitText>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg text-gray-600"
          >
            The team responsible for operational excellence
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={listStagger}
            className="mt-16 grid gap-14 sm:grid-cols-2 md:grid-cols-3"
          >
            {teamMembers.map(({ name, role, image }, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 20 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                className="flex cursor-pointer flex-col items-center rounded-lg bg-gray-50 px-8 py-10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg hover:ring-1 hover:ring-gray-300"
              >
                <img
                  src={image}
                  alt={name}
                  className="h-28 w-28 rounded-full object-cover transition duration-300 hover:scale-110 hover:grayscale-0"
                />

                <h3 className="mt-6 text-2xl font-semibold text-gray-900">{name}</h3>
                <p className="mt-1 text-base italic text-gray-700">{role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
