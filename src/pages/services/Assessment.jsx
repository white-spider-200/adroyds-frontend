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
      <section className="relative -mt-40 flex min-h-[calc(60vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/businessman-using-laptop-mouse.jpg"
          alt="Talent Assessment Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F]/80 to-[#0E1C3F]/30"></div>

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
                  {t("home", "Home")}
                </a>
                <span className="mx-2">/</span>
              </li>
              <li className="font-semibold text-white">{talentAssessment.title}</li>
            </ol>
          </nav>

          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-4xl">{talentAssessment.title}</h1>

          <motion.button
            onClick={() => navigate("/contact")}
            className="mt-6 rounded-lg border border-white/30 bg-cyan-400 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-cyan-500 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {t("contactUs")}{" "}
          </motion.button>
        </motion.div>
      </section>

      <div className="mx-auto flex max-w-7xl gap-2 px-6 py-16 text-lg">
        {/* Main Content */}
        <div className="bg-white">
          {/* HERO IMAGE */}
          <div className="relative mb-10 h-[450px] w-full overflow-hidden rounded-lg">
            <img
              src="/assets/businessman-using-laptop-mouse.jpg"
              alt={talentAssessment.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F] to-cyan-400 opacity-20"></div>
          </div>

          {/* About Section */}
          <section className="container pb-16">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#0E1C3F]">
              {talentAssessment.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">{talentAssessment.description}</p>
          </section>
          {/* SOLUTIONS SECTION */}
          <section className="py-24">
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
