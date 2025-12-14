import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";
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

const scrollToHash = (hash) => {
  if (!hash) return;
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const AboutUs = () => {
  const location = useLocation();
  const { i18n, t } = useTranslation();

  // Load arrays and strings from translation files
  const pillars = t("pillars", { returnObjects: true });
  const features = t("whySectionFeatures", { returnObjects: true });

  useEffect(() => {
    scrollToHash(location.hash);
  }, [location.hash]);

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
                    {t("home")}
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li className="font-semibold text-white">{t("aboutUs") || "About Us"}</li>
              </ol>
            </nav>

            <SplitText className="text-4xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
              {t("aboutUs")}
            </SplitText>
          </div>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <section className="w-full bg-white py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
          {/* LEFT IMAGES + STATS */}
          <div className="relative flex gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-6">
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

              <div className="rounded-lg bg-cyan-400 p-6 text-center">
                <p className="text-4xl font-extrabold text-white">15+</p>
                <p className="mt-2 text-base text-white/70">{t("YearsofExcellence")}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <div className="rounded-lg bg-[#0E1C3F] p-6 text-center">
                <p className="text-4xl font-extrabold text-white">500+</p>
                <p className="mt-2 text-base text-white/70">{t("LeadershipPlacements")}</p>
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
              {t("aboutUs")}
            </motion.div>

            <SplitText className="mb-6 text-4xl font-extrabold text-[#0E1C3F]">
              {t("qualitativeSkills")} {t("professionalExpertise")}
            </SplitText>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
              className="mb-6 font-medium leading-relaxed text-gray-600"
            >
              {t("desc1")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
              className="mb-6 font-medium leading-relaxed text-gray-600"
            >
              {t("desc2")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="w-full bg-gray-100 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-[#0E1C3F]">{t("pillarsSectionTitle")}</h2>

          <p className="m-auto mb-12 max-w-xl text-gray-700">{t("pillarsSectionSubtitle")}</p>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                className="group relative cursor-pointer rounded-lg bg-white p-6 transition-colors duration-300 ease-in-out hover:bg-cyan-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-cyan-400 transition-colors duration-300 group-hover:bg-white group-hover:text-cyan-400">
                  <FaStar size={24} />
                </div>
                <h4 className="mb-3 text-justify text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
                  {pillar.title}
                </h4>
                <p className="text-justify text-gray-600 transition-colors duration-300 group-hover:text-white">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="performance" className="w-full bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="m-auto mb-6 w-48 rounded-md bg-[#e9fcff] px-4 py-2 text-center text-sm font-semibold text-cyan-400"
          >
            {t("teamTabAlt")}
          </motion.div>

          <p className="mx-auto max-w-5xl text-lg leading-relaxed text-gray-700">{t("teamDescription")}</p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="w-full bg-[#0E1C3F] py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-[1fr_2fr]">
          {/* LEFT SIDE */}
          <div className="flex gap-4">
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <motion.img
                src="/assets/adroyts-office.webp"
                alt={t("whySectionTab")}
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
              {t("whySectionTab")}
            </motion.div>

            <SplitText className="mb-6 text-4xl font-extrabold text-white">{t("whySectionTitle")}</SplitText>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
              className="mb-6 font-medium leading-relaxed text-[#B0B0B0]"
            >
              {t("whySectionParagraph")}
            </motion.p>

            <div className="mt-6 grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1DC0DA] text-sm text-white">
                    ✓
                  </span>
                  <p className="font-medium text-white">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

{
  /* DIRECTORS */
}
{
  /* <section id="board" className="bg-gray-100 py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
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
      </section> */
}

{
  /* EXECUTIVE MANAGEMENT */
}
{
  /* <section id="executive" className="bg-white py-32">
        <div className="mx-auto max-w-7xl text-center">
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
      </section> */
}
