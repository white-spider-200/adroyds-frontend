import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useTranslation } from "react-i18next";
import {
  FaBookOpen,
  FaBriefcase,
  FaChalkboardTeacher,
  FaClock,
  FaCogs,
  FaSearch,
  FaSmile,
  FaTasks,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";

import ServiceProofSections from "../../components/ServiceProofSections";
import { SplitText } from "../../utils/SplitText";

const academyTheme = {
  accent: "#c79b3b",
  accentSoft: "rgba(199, 155, 59, 0.14)",
  accentBorder: "rgba(199, 155, 59, 0.3)",
  accentGlow: "0 18px 40px rgba(199, 155, 59, 0.12)",
};

const methodologyIcons = [
  FaSearch, // Training Needs Analysis
  FaTasks, // Design & Implementation of Plans
  FaBookOpen, // Training Content & Curriculum
];

const statsData = [
  {
    value: 3000,
    suffix: "+",
    label: "trainees",
    icon: "graduate",
  },
  {
    value: 60000,
    suffix: "+",
    label: "trainingHours",
    icon: "clock",
  },
  {
    value: 9538,
    suffix: "%",
    label: "customerSatisfaction",
    icon: "smile",
    isPercentage: true,
  },
  {
    value: 100,
    suffix: "+",
    label: "clientsServed2",
    icon: "clients",
  },
];

const assessmentIcons = [
  <FaChalkboardTeacher size={24} color="white" />, // Psychometric Assessments
  <FaUsers size={24} color="white" />, // Competency-Based Interviews
  <FaBriefcase size={24} color="white" />, // Case Study
  <FaCogs size={24} color="white" />, // Group Discussion
];

const statsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const statCardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const AcademyStatIcon = ({ type }) => {
  const common = "h-[22px] w-[22px] fill-current";

  if (type === "clients") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="M16 11c1.66 0 3-1.57 3-3.5S17.66 4 16 4s-3 1.57-3 3.5 1.34 3.5 3 3.5Zm-8 0c1.66 0 3-1.57 3-3.5S9.66 4 8 4 5 5.57 5 7.5 6.34 11 8 11Zm0 2c-2.67 0-8 1.34-8 4v2h10v-2c0-1.15.6-2.13 1.56-2.94C10.55 13.39 9.09 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.2.84 1.97 1.97 1.97 3.45v2H24v-2c0-2.66-5.33-4-8-4Z" />
      </svg>
    );
  }

  if (type === "smile") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-3 7a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 9 9Zm3 9a6.22 6.22 0 0 1-5.33-3h10.66A6.22 6.22 0 0 1 12 18Zm3-6a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 15 12Z" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.25 14.16-5-3a1 1 0 0 1-.5-.86V7h2v4.73l4.53 2.72Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
      <path d="M12 3 1 9l11 6 9-4.91V17h2V9Zm-6.91 8.09L5 15l7 4 7-4v-3.91l-7 3.82Z" />
    </svg>
  );
};

const formatAcademyStatValue = ({ value, suffix, isPercentage }) => {
  if (isPercentage) {
    return `${(value / 100).toFixed(2)}${suffix}`;
  }

  return `${Math.round(value).toLocaleString("en-US")}${suffix}`;
};

const AcademyStats = ({ t }) => {
  const [animatedValues, setAnimatedValues] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 1800;
    const targets = statsData.map((item) => item.value);
    let frameId;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);

      setAnimatedValues(targets.map((target) => target * eased));

      if (elapsed < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="px-1 py-8 md:px-0 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-[1240px] overflow-hidden rounded-[20px] bg-[#1a6fce] px-6 py-6 shadow-[0_20px_60px_rgba(26,111,206,0.35)] md:px-8 md:py-7"
      >
        <motion.div
          aria-hidden="true"
          animate={{ x: ["-20%", "110%"] }}
          transition={{ duration: 3.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2 }}
          className="pointer-events-none absolute inset-y-0 left-[-20%] w-[28%] bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-xl"
        />

        <motion.div
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-4 overflow-hidden rounded-[20px] max-[600px]:grid-cols-2"
        >
          {statsData.map((item, index) => {
            const showDesktopDivider = index < statsData.length - 1;
            const showMobileDivider = index === 0 || index === 2;

            return (
              <motion.div
                key={item.label}
                variants={statCardVariants}
                className="group relative flex min-h-[150px] flex-col items-center justify-center bg-[#1a6fce] px-4 py-6 text-center transition-colors duration-300 hover:bg-[#1860b8] md:min-h-[160px] md:px-6 md:py-7"
              >
                <motion.span
                  animate={{ y: [0, -4, 0], scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 }}
                  className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white shadow-[0_0_0_8px_rgba(255,255,255,0.04)]"
                >
                  <AcademyStatIcon type={item.icon} />
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.18 + index * 0.08 }}
                  className="text-[2.4rem] font-bold leading-none tracking-[-0.5px] text-white [font-family:Georgia,serif]"
                >
                  {formatAcademyStatValue({
                    value: animatedValues[index],
                    suffix: item.suffix,
                    isPercentage: item.isPercentage,
                  })}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.24 + index * 0.08 }}
                  className="mt-3 max-w-[220px] text-center text-[0.78rem] font-medium uppercase tracking-[0.03em] text-white/75"
                >
                  {t(item.label)}
                </motion.div>

                {showDesktopDivider && (
                  <span className="absolute right-0 top-[20%] hidden h-[60%] w-px bg-white/20 min-[601px]:block" />
                )}

                {showMobileDivider && (
                  <span className="absolute right-0 top-[20%] h-[60%] w-px bg-white/20 min-[601px]:hidden" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

const Academy = () => {
  const { t, i18n } = useTranslation();
  const academy = t("academy", { returnObjects: true });
  const partners = [
    {
      img: "/assets/edu-1.svg",
      text: t("academy.academicCollaboration.description1"),
    },
    {
      img: "/assets/edu-2.jpg",
      text: t("academy.academicCollaboration.description2"),
    },
    {
      img: "/assets/edu-3.jpg",
      text: t("academy.academicCollaboration.description3"),
    },
    {
      img: "/assets/edu-4.webp",
      text: t("academy.academicCollaboration.description4"),
    },
    {
      img: "/assets/edu-5.png",
      text: t("academy.academicCollaboration.description5"),
    },
    {
      img: "/assets/edu-6.jpg",
      text: t("academy.academicCollaboration.description6"),
    },
    {
      img: "/assets/edu-7.png",
      text: t("academy.academicCollaboration.description7"),
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [hovered, setHovered] = useState(new Array(partners.length).fill(false));

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
            {t("expertTrainingCareerGrowth")}
          </motion.h1>
        </div>

        {/* Clipped Image */}
        <div className="absolute top-0 z-0 h-full w-full overflow-hidden md:w-[40%] ltr:right-0 rtl:left-0">
          <img
            src="/assets/SEC_Batch02_33.jpg"
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
                src="/assets/SEC_Batch02_33.jpg"
                alt="Recruitment Solutions"
                className="h-full w-full object-cover"
              />
            </div>

            {/* TEXT */}
            <section className="w-full lg:w-1/2">
              <div
                className="mb-5 inline-flex items-center rounded-full px-4 py-2 text-sm font-bold tracking-[0.18em]"
                style={{ backgroundColor: academyTheme.accentSoft, color: academyTheme.accent }}
              >
                ACADEMY
              </div>
              <SplitText className="mb-14 text-center text-4xl font-bold text-[#0E1C3F]">
                {academy.title}
              </SplitText>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
                className="font-medium leading-relaxed text-gray-600"
              >
                {academy.description}{" "}
              </motion.p>
            </section>
          </div>

          <AcademyStats t={t} />
          {/* ACADEMY METHODOLOGY */}
          <section
            id="academy-methodology"
            className="relative mt-24 overflow-hidden rounded-lg bg-navy-500 px-4 py-24 sm:px-6 lg:px-8"
            style={{ boxShadow: academyTheme.accentGlow }}
          >
            {/* Title */}
            <SplitText className="mb-16 text-center text-3xl font-bold text-white">
              {t("academyMethodology.title")}
            </SplitText>

            {/* Intro (optional – remove if you don’t have intro text) */}
            {t("academyMethodology.intro", { defaultValue: "" }) && (
              <p className="mx-auto mb-16 max-w-4xl text-center text-lg leading-relaxed text-white/70">
                {t("academyMethodology.intro")}
              </p>
            )}

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
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {t("academyMethodology.items", { returnObjects: true }).map((item, index) => {
                  const Icon = methodologyIcons[index];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div
                        className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10"
                        style={{ borderTop: `3px solid ${academyTheme.accentBorder}` }}
                      >
                        {/* Step Number */}
                        <div
                          className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-lg font-bold text-white shadow-lg"
                          style={{ backgroundColor: academyTheme.accent }}
                        >
                          {index + 1}
                        </div>

                        {/* Icon */}
                        <div
                          className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: academyTheme.accentSoft }}
                        >
                          {Icon && <Icon className="h-7 w-7 text-white" />}
                        </div>

                        {/* Title */}
                        <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>

                        {/* Description */}
                        <p className="flex-grow text-sm leading-relaxed text-white/70">{item.desc}</p>

                        {/* Hover Overlay */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          <section className="container mt-24 bg-gray-100 px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#0E1C3F]">{academy.solutionsTitle}</h2>

            <div className="mx-auto grid grid-cols-1 gap-10 md:grid-cols-2">
              {Object.values(academy.solutions).map(({ title, description }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: false }}
                  className="group relative cursor-pointer rounded-lg bg-white p-6 transition-colors duration-300 ease-in-out"
                  style={{
                    boxShadow: academyTheme.accentGlow,
                    borderTop: `3px solid ${academyTheme.accent}`,
                  }}
                >
                  {" "}
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
                    style={{ backgroundColor: academyTheme.accent }}
                  >
                    {assessmentIcons[index]}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-[#0E1C3F] transition-colors duration-300 group-hover:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 transition-colors duration-300 group-hover:text-white">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          <ServiceProofSections
            accent={academyTheme.accent}
            accentSoft={academyTheme.accentSoft}
            variant="academy"
          />
          {/* <section className="container px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#0E1C3F]">
              {t("academy.academicCollaborationTitle")}
            </h2>

            <div className="grid grid-cols-1 gap-6 py-4 sm:grid-cols-2 md:grid-cols-4">
              {partners.map(({ img, text }, index) => (
                <div
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  key={index}
                  className="flex-shrink-0"
                >
                  <ReactCardFlip isFlipped={hovered[index]} flipDirection="horizontal">
                    <div className="flex h-56 cursor-pointer items-center justify-center rounded-lg bg-white px-10 shadow-md transition-transform duration-300">
                      <img src={img} alt={`Partner ${index + 1}`} className="max-h-36 object-contain" />
                    </div>

                    <div
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      className="flex h-56 cursor-pointer flex-col items-center justify-center rounded-lg bg-cyan-600 p-4 text-center text-white shadow-md"
                    >
                      <p className="text-sm leading-relaxed">{text}</p>
                    </div>
                  </ReactCardFlip>
                </div>
              ))}
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default Academy;
