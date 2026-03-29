import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaBrain,
  FaCheckCircle,
  FaClipboard,
  FaClipboardList,
  FaComments,
  FaCompass,
  FaForward,
  FaStar,
  FaSyncAlt,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";

import { SplitText } from "../../utils/SplitText";

const assessmentTheme = {
  accent: "#22b8cf",
  accentSoft: "rgba(34, 184, 207, 0.12)",
  accentBorder: "rgba(34, 184, 207, 0.28)",
  accentGlow: "0 18px 40px rgba(34, 184, 207, 0.14)",
};

const icons = [
  <FaUserTie size={24} color="white" />, // Professional Development
  <FaClipboardList size={24} color="white" />, // Individual Development Plans
  <FaStar size={24} color="white" />, // High-Potential Talent Identification
  <FaUsers size={24} color="white" />, // Employee Placement
  <FaCompass size={24} color="white" />, // Career Guidance
  <FaCheckCircle size={24} color="white" />, // Recruitment & Selection
  <FaForward size={24} color="white" />, // Succession Planning
];

const assessmentIcons = [
  FaBrain, // Psychometric Assessments
  FaComments, // Competency-Based Interviews
  FaClipboard, // Case Study
  FaUsers, // Group Discussion
  FaUserTie, // Role-Playing Activities
  FaSyncAlt, // 360-Degree Assessment
  FaComments, // 360-Degree Assessment
];

const TalentAssessment = () => {
  const { t, i18n } = useTranslation();
  const talentAssessment = t("talentAssessment", { returnObjects: true });
  const assessmentTools = Object.values(talentAssessment.tools || {});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full bg-white text-[#0E1C3F] selection:bg-cyan-400/30 selection:text-[#0E1C3F]">
      {/* HERO SECTION */}
      <section className="relative -mt-20 overflow-hidden bg-[#0E1C3F] md:-mt-40">
        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[20vh] max-w-7xl items-center px-6 py-20 md:min-h-[calc(43vh+80px)]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mt-20 w-[60%] text-3xl font-extrabold text-white sm:text-4xl"
          >
            {t("assessmentCenterSolutions")}
          </motion.h1>
        </div>

        {/* Clipped Image */}
        <div className="absolute top-0 z-0 h-full w-full overflow-hidden md:w-[40%] ltr:right-0 rtl:left-0">
          <img
            src="/assets/businessman-using-laptop-mouse.jpg"
            alt="Expert Training Career Growth"
            className="clipped-image h-full w-full object-cover"
          />
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C3F]/85 via-[#0E1C3F]/50 to-transparent md:bg-gradient-to-r md:from-[#0E1C3F]/70 md:via-[#0E1C3F]/40 md:to-transparent" />
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl gap-2 px-6 py-16 text-lg">
        {/* Main Content */}
        <div className="bg-white">
          <div className="mb-24 flex flex-col gap-10 lg:flex-row lg:items-center">
            {/* IMAGE */}
            <div className="relative h-[450px] w-full overflow-hidden rounded-lg lg:w-1/2">
              <img
                src="/assets/businessman-using-laptop-mouse.jpg"
                alt="Recruitment Solutions"
                className="h-full w-full object-cover"
              />
            </div>

            {/* TEXT */}
            <section className="w-full lg:w-1/2">
              <div
                className="mb-5 inline-flex items-center rounded-full px-4 py-2 text-sm font-bold tracking-[0.18em]"
                style={{ backgroundColor: assessmentTheme.accentSoft, color: assessmentTheme.accent }}
              >
                ASSESSMENT
              </div>
              <SplitText className="mb-14 text-center text-4xl font-bold text-[#0E1C3F]">
                {talentAssessment.title}
              </SplitText>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
                className="font-medium leading-relaxed text-gray-600"
              >
                {talentAssessment.description}{" "}
              </motion.p>
            </section>
          </div>

          {/* SOLUTIONS SECTION */}
          <section className="bg-gray-100 py-8">
            <div className="container mx-auto max-w-7xl px-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="mb-14 text-center text-4xl font-bold text-[#0E1C3F]"
              >
                {t("talentSolutions.title")}
              </motion.h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {t("talentSolutions.items", { returnObjects: true }).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8 }}
                    viewport={{ once: false }}
                    className="group relative cursor-pointer rounded-lg bg-white p-6 transition-colors duration-300 ease-in-out"
                    style={{
                      boxShadow: assessmentTheme.accentGlow,
                      borderTop: `3px solid ${assessmentTheme.accent}`,
                    }}
                  >
                    <div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
                      style={{ backgroundColor: assessmentTheme.accent }}
                    >
                      {icons[index]}
                    </div>

                    <h3 className="mb-3 text-lg font-semibold text-[#0E1C3F] transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ASSESSMENT CENTER TOOLS */}
          <section
            id="assessment-tools"
            className="relative mt-14 overflow-hidden rounded-lg bg-navy-500 px-4 py-24 sm:px-6 lg:px-8"
            style={{ boxShadow: assessmentTheme.accentGlow }}
          >
            {/* Title */}
            <SplitText className="mb-16 text-center text-3xl font-bold text-white">
              {talentAssessment.toolsTitle}
            </SplitText>

            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 18, repeat: Infinity }}
                className="absolute right-0 top-0 h-96 w-96 rounded-full bg-navy-500/50 blur-3xl"
              />
              <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 22, repeat: Infinity }}
                className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-navy-500/50 blur-3xl"
              />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="flex flex-wrap justify-center gap-8">
                {assessmentTools.map((tool, index) => {
                  const Icon = assessmentIcons[index];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="w-full sm:w-[48%] lg:w-[30%] xl:w-[22%]" // responsive widths
                    >
                      <div
                        className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10"
                        style={{ borderTop: `3px solid ${assessmentTheme.accentBorder}` }}
                      >
                        {/* Icon */}
                        <div
                          className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: assessmentTheme.accentSoft }}
                        >
                          {Icon && <Icon className="h-7 w-7 text-white" />}
                        </div>

                        {/* Title */}
                        <h3 className="mb-3 text-xl font-bold text-white">{tool.title}</h3>

                        {/* Description */}
                        <p className="flex-grow text-sm leading-relaxed text-white/70">
                          {tool.description}
                        </p>

                        {/* Hover Overlay */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TalentAssessment;
