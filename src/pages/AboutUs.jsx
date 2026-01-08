import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { FaBook, FaBullseye, FaEye, FaFlag, FaHandshake, FaLinkedinIn } from "react-icons/fa";
import { FiBriefcase, FiCheckCircle } from "react-icons/fi";
import { useLocation } from "react-router-dom";

import mainServices from "../services/mainServices";
import { SplitText } from "../utils/SplitText";

const pillarIcons = [
  FaBook, // Knowledge Depth
  FaBullseye, // Strategic Focus
  FaHandshake, // Sustainable Relationship
];
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

  const [teamMembers, setTeamMembers] = React.useState([]);
  // Load arrays and strings from translation files
  const pillars = t("pillars", { returnObjects: true });
  const perf = t("perfList", { returnObjects: true });
  const features = t("whySectionFeatures", { returnObjects: true });

  useEffect(() => {
    scrollToHash(location.hash);
  }, [location.hash]);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const [teamMembersRes] = await Promise.all([mainServices.getTeamMembers(i18n.language)]);
        // store in state
        setTeamMembers(teamMembersRes?.data?.data || []);
        console.log("Team Members:", teamMembersRes?.data?.data || []);
      } catch (err) {
        console.error("Home data fetch error:", err);
      }
    };

    fetchHomeData();
  }, [i18n.language]);

  return (
    <div className="bg-white font-cairo text-gray-900 selection:bg-cyan-200 selection:text-gray-900">
      {/* HERO SECTION */}
      <section className="relative -mt-20 overflow-hidden bg-[#0E1C3F] md:-mt-40">
        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[20vh] max-w-7xl items-center px-6 py-20 md:min-h-[calc(43vh+80px)]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mt-20 text-center text-3xl font-extrabold text-white sm:text-4xl md:text-left"
          >
            {t("aboutUs")}
          </motion.h1>
        </div>

        {/* Clipped Image */}
        <div className="absolute top-0 z-0 h-full w-full overflow-hidden md:w-[40%] ltr:right-0 rtl:left-0">
          <img
            src="/assets/adroyts-office.webp"
            alt="Expert Training Career Growth"
            className="clipped-image h-full w-full object-cover"
          />
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C3F]/85 via-[#0E1C3F]/50 to-transparent md:bg-gradient-to-r md:from-[#0E1C3F]/70 md:via-[#0E1C3F]/40 md:to-transparent" />
        </div>
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
                <p className="text-4xl font-extrabold text-white">20+</p>
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-200/10 p-6 px-8">
              <span className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
                <SplitText className="text-3xl font-extrabold text-gray-900">{t("aboutUs")}</SplitText>
              </span>
            </div>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
              className="mb-6 font-medium leading-relaxed text-gray-600"
            >
              <Trans
                i18nKey="desc1"
                components={{
                  1: <strong className="font-bold text-black" />,
                }}
              />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
              className="mb-6 font-medium leading-relaxed text-gray-600"
            >
              <Trans
                i18nKey="desc2"
                components={{
                  1: <strong className="font-bold text-black" />,
                }}
              />
            </motion.p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="w-full bg-gray-100 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <SplitText className="mb-4 text-4xl font-extrabold text-gray-900">
            {t("pillarsSectionTitle")}
          </SplitText>

          <p className="m-auto mb-12 max-w-5xl font-bold text-gray-700">{t("pillarsSectionSubtitle")}</p>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillarIcons[i];

              return (
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
                    <Icon size={24} />
                  </div>
                  <h4 className="mb-3 text-justify text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
                    {pillar.title}
                  </h4>
                  <p className="text-justify text-gray-600 transition-colors duration-300 group-hover:text-white">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="performance" className="w-full bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center">
          {/* Section Title */}

          <SplitText className="mb-6 text-4xl font-extrabold text-gray-900">{t("teamTabAlt")}</SplitText>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center md:gap-20">
            {/* Left Image with subtle zoom on hover */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src="/assets/adroyts-office.webp"
                alt={t("whySectionTab")}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Right Features */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
                className="mb-8 text-justify font-medium leading-relaxed text-gray-700"
              >
                <Trans i18nKey="perf1" components={{ 1: <strong className="font-bold text-black" /> }} />
              </motion.p>

              <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {perf.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    {/* Icon with background */}
                    <div className="flex-shrink-0">
                      {/* Replace this with any icon component */}
                      {feature.icon ? (
                        <feature.icon className="h-6 w-6" />
                      ) : (
                        <FiCheckCircle className="mt-1 h-6 w-6 text-[#1a4d7b]" />
                      )}
                    </div>

                    {/* Feature text */}
                    <p className="font-medium leading-snug text-black/90">
                      <Trans
                        i18nKey={feature.title}
                        components={{ 1: <strong className="font-bold text-black" /> }}
                      />
                    </p>
                  </li>
                ))}
              </ul>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: false }}
                className="mt-8 text-justify font-medium leading-relaxed text-gray-700"
              >
                <Trans i18nKey="perf2" components={{ 1: <strong className="font-bold text-black" /> }} />
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section id="performance" className="relative w-full bg-gray-100 py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0E1C3F]">
              {t("visionMissionSectionTitle")}
            </h2>
          </motion.div>

          {/* Content */}
          <div className="grid gap-12 md:grid-cols-2">
            {/* Vision */}
            <motion.div
              className="group relative cursor-pointer rounded-lg bg-white p-6 transition-colors duration-300 ease-in-out hover:bg-cyan-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
            >
              {/* Left border */}
              <span className="absolute top-[4px] h-[96%] w-1 bg-cyan-400 ltr:left-0 ltr:rounded-l-2xl rtl:right-0 rtl:rounded-r-2xl" />

              <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[#0E1C3F] transition-colors duration-300 group-hover:text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-cyan-400 transition-colors duration-300 group-hover:bg-white group-hover:text-cyan-400">
                  <FaEye size={24} />
                </div>
                {t("ourVisionTitle")}
              </h3>

              <p className="leading-loose text-gray-700 transition-colors duration-300 group-hover:text-white">
                <Trans
                  i18nKey="ourVisionDesc"
                  components={{
                    1: <strong className="font-semibold" />,
                  }}
                />
              </p>
            </motion.div>
            {/* Mission */}
            <motion.div
              className="group relative cursor-pointer rounded-lg bg-white p-6 transition-colors duration-300 ease-in-out hover:bg-cyan-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
            >
              {/* Left border */}
              <span className="absolute top-[4px] h-[96%] w-1 bg-cyan-400 ltr:left-0 ltr:rounded-l-2xl rtl:right-0 rtl:rounded-r-2xl" />

              <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[#0E1C3F] transition-colors duration-300 group-hover:text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-cyan-400 transition-colors duration-300 group-hover:bg-white group-hover:text-cyan-400">
                  <FaFlag size={24} />
                </div>
                {t("ourMissionTitle")}
              </h3>

              <p className="leading-loose text-gray-700 transition-colors duration-300 group-hover:text-white">
                <Trans
                  i18nKey="ourMissionDesc"
                  components={{
                    1: <strong className="font-semibold" />,
                  }}
                />
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="why" className="w-full bg-gradient-to-r from-[#0E1C3F] via-[#123456] to-[#0E1C3F]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-14 text-center"
          >
            <div className="inline-block rounded-full bg-[#1DC0DA]/30 px-6 py-2 text-lg font-bold uppercase tracking-widest text-cyan-400">
              {t("whySectionTab")}
            </div>
            <h2 className="mt-4 text-5xl font-extrabold leading-tight text-white sm:text-4xl">
              {t("whySectionTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg font-medium leading-relaxed text-[#e5e5e5]">
              <Trans
                i18nKey="whySectionParagraph"
                components={{
                  1: <strong className="font-bold text-white" />,
                }}
              />
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
            {/* Left Image with subtle zoom on hover */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src="/assets/adroyts-office.webp"
                alt={t("whySectionTab")}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Right Features */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <ul className="space-y-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 font-semibold text-white shadow-md">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-lg leading-snug text-white/85">
                      <Trans
                        i18nKey={feature}
                        components={{
                          1: <strong className="font-bold text-white" />,
                        }}
                      />
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Board of Directors Section */}
        <section id="board" className="bg-gray-100 py-32">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <SplitText className="text-4xl font-extrabold text-gray-900">{t("BoardOfDirectors")}</SplitText>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-lg text-gray-600"
            >
              {t("boardDescription")}
            </motion.p>

            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.slice(0, 3).map(({ name, job_title, image, linkedin }, i) => (
                <motion.div
                  key={`${name}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-80 w-full overflow-hidden">
                    <img
                      src={image}
                      alt={name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* LinkedIn Overlay */}
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0A66C2] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <FaLinkedinIn className="text-lg" />
                    </a>
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                    <p className="mt-1 text-sm font-medium text-gray-500">{job_title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Management Section */}
        <section id="executive" className="bg-white py-32">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <SplitText className="text-4xl font-extrabold text-gray-900">
              {t("ExecutiveManagement")}
            </SplitText>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-lg text-gray-600"
            >
              {t("executiveDescription")}
            </motion.p>

            <div className="mt-12 grid justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3">
              {teamMembers.slice(3).map(({ name, job_title, image, linkedin }, i) => (
                <motion.div
                  key={`${name}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex max-w-[15rem] cursor-pointer flex-col items-center transition-transform duration-300 hover:scale-105"
                >
                  {/* Circular image container */}
                  <div className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-gray-200 bg-gray-100">
                    <img
                      src={image}
                      alt={name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* LinkedIn icon */}
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-8 right-8 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0A66C2] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-label={`${name} LinkedIn Profile`}
                    >
                      <FaLinkedinIn className="text-lg" />
                    </a>
                  </div>

                  {/* Text */}
                  <div className="mt-3 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{job_title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutUs;
