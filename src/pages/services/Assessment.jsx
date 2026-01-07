import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
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
import { useNavigate } from "react-router-dom";

import { SplitText } from "../../utils/SplitText";

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
  <FaBrain size={24} color="white" />, // Psychometric Assessments
  <FaComments size={24} color="white" />, // Competency-Based Interviews
  <FaClipboard size={24} color="white" />, // Case Study
  <FaUsers size={24} color="white" />, // Group Discussion
  <FaUserTie size={24} color="white" />, // Role-Playing Activities
  <FaSyncAlt size={24} color="white" />, // 360-Degree Assessment
];

const TalentAssessment = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const talentAssessment = t("talentAssessment", { returnObjects: true });
  const [hovered, setHovered] = useState(
    new Array(t("psychometricProviders.items", { returnObjects: true }).length).fill(false)
  );

  const handleMouseEnter = (index) => {
    setHovered((prev) => {
      const copy = [...prev];
      copy[index] = true;
      return copy;
    });
  };

  const handleMouseLeave = (index) => {
    setHovered((prev) => {
      const copy = [...prev];
      copy[index] = false;
      return copy;
    });
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full bg-white text-[#0E1C3F] selection:bg-cyan-400/30 selection:text-[#0E1C3F]">
      {/* HERO SECTION */}
      <section className="relative -mt-20 overflow-hidden bg-[#0E1C3F] md:-mt-40">
        <div className="grid min-h-[20vh] grid-cols-1 md:min-h-[calc(43vh+80px)] md:grid-cols-2">
          {/* LEFT TEXT – DESKTOP ONLY */}
          <div className="relative hidden items-center md:flex">
            <div className="w-full px-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <h1 className="text-5xl font-extrabold text-white">{talentAssessment.title}</h1>
              </motion.div>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative h-[45vh] md:h-auto">
            <img
              src="/assets/businessman-using-laptop-mouse.jpg"
              alt="Talent Assessment"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C3F]/85 via-[#0E1C3F]/50 to-transparent md:bg-gradient-to-r md:from-[#0E1C3F]/70 md:via-[#0E1C3F]/40 md:to-transparent" />

            {/* MOBILE TITLE OVER IMAGE */}
            <div className="absolute inset-0 flex items-center justify-center px-6 md:hidden">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center text-3xl font-extrabold text-white sm:text-4xl"
              >
                {talentAssessment.title}
              </motion.h1>
            </div>
          </div>

          {/* DIAGONAL DIVIDER – DESKTOP ONLY */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-40 -translate-x-1/2 md:block">
            <div className="absolute inset-0 -skew-x-12 bg-[#0E1C3F]" />
          </div>
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

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F] to-cyan-400 opacity-20"></div>
            </div>

            {/* TEXT */}
            <section className="w-full lg:w-1/2">
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
          <section className="py-8">
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
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-lg font-bold text-white">
                      {icons[index]}
                    </div>

                    <h3 className="mb-3 text-lg font-semibold text-[#0E1C3F]">{item.title}</h3>

                    <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ASSESSMENT CENTER TOOLS */}
          <section className="bg-[#F8FAFC] py-24">
            <div className="container mx-auto max-w-7xl px-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="mb-16 text-center text-4xl font-bold text-[#0E1C3F]"
              >
                {t("assessmentCenterTools.title")}
              </motion.h2>

              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {t("assessmentCenterTools.items", { returnObjects: true }).map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-lg font-bold text-white">
                      {assessmentIcons[index]}
                    </div>

                    <h3 className="mb-3 text-lg font-semibold text-[#0E1C3F]">{tool.title}</h3>

                    <p className="text-sm leading-relaxed text-gray-600">{tool.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* PSYCHOMETRIC PROVIDERS */}
          <section className="bg-white py-28">
            <div className="container mx-auto max-w-7xl px-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="mb-16 text-center text-4xl font-bold text-[#0E1C3F]"
              >
                {t("psychometricProviders.title")}
              </motion.h2>

              <div className="no-scrollbar flex justify-between gap-8">
                {t("psychometricProviders.items", { returnObjects: true }).map((provider, index) => (
                  <motion.div
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-64 flex-shrink-0"
                  >
                    <ReactCardFlip isFlipped={hovered[index]} flipDirection="horizontal">
                      {/* Front Side */}
                      <div className="flex h-64 w-64 cursor-pointer items-center justify-center rounded-xl bg-[#F8FAFC] shadow-md transition-transform duration-300">
                        {provider.image ? (
                          <img
                            src={provider.image}
                            alt={provider.name}
                            className="h-32 w-32 rounded-full object-contain"
                          />
                        ) : (
                          <div className="text-center text-gray-400">No Image</div>
                        )}
                      </div>

                      {/* Back Side */}
                      <div
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        className="flex h-64 w-64 cursor-pointer flex-col items-center justify-center rounded-xl bg-[#0E1C3F] p-6 text-white shadow-md"
                      >
                        <p className="text-center text-sm leading-relaxed">{provider.desc}</p>
                      </div>
                    </ReactCardFlip>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TalentAssessment;
