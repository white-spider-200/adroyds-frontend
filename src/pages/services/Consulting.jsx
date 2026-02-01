import { motion } from "framer-motion";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import {
  FaBook,
  FaClipboardList,
  FaClock,
  FaHandsHelping,
  FaIndustry,
  FaProjectDiagram,
  FaSearch,
  FaSitemap,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";

import { SplitText } from "../../utils/SplitText";

const servicesIcons = [
  FaProjectDiagram, // Psychometric Assessments
  FaSitemap, // Competency-Based Interviews
  FaBook, // Case Study
  FaSearch, // Group Discussion
  FaClipboardList, // Role-Playing Activities
  FaUserCheck, // 360-Degree Assessment
  FaHandsHelping, // 360-Degree Assessment
];

const statsData = [
  {
    num: 100000,
    suffix: "+",
    label: "consultingHours",
    icon: <FaClock size={32} />,
  },
  {
    num: 10,
    suffix: "+",
    label: "sectorsCovered",
    icon: <FaIndustry size={32} />,
  },
  {
    num: 100,
    suffix: "+",
    label: "clientsServed",
    icon: <FaUsers size={32} />,
  },
];

const Consulting = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Load hrConsulting content
  const hrConsulting = t("hrConsulting", { returnObjects: true });
  // Extract services as array for mapping
  const services = Object.values(hrConsulting.services);

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
            {t("humanCapitalConsulting")}
          </motion.h1>
        </div>

        {/* Clipped Image */}
        <div className="absolute top-0 z-0 h-full w-full overflow-hidden md:w-[40%] ltr:right-0 rtl:left-0">
          <img
            src="/assets/adroyts-consulting.png"
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
                src="/assets/adroyts-consulting.png"
                alt="Recruitment Solutions"
                className="h-full w-full object-cover"
              />
            </div>

            {/* TEXT */}
            <section className="w-full lg:w-1/2">
              <SplitText className="mb-14 text-center text-4xl font-bold text-[#0E1C3F]">
                {hrConsulting.title}
              </SplitText>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
                className="font-medium leading-relaxed text-gray-600"
              >
                {hrConsulting.description}{" "}
              </motion.p>
            </section>
          </div>

          {/* STATS SECTION */}
          <section className="relative overflow-hidden rounded-lg bg-cyan-400 p-10 text-white md:p-12">
            {/* Polygon overlay */}
            <svg
              className="absolute left-0 top-0 h-full w-full opacity-20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 800 400"
              fill="none"
            >
              <polygon points="0,0 800,0 800,100 0,300" fill="#1DC0DA" />
              <polygon points="800,400 0,400 0,300 800,100" fill="#15a8bf" />
            </svg>

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-12 md:flex-row md:items-start md:gap-20">
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-10 md:justify-between">
                {statsData.map(({ icon, num, suffix, label }, i) => (
                  <div key={i} className={`flex flex-col items-center px-6`}>
                    <div className="mb-4 text-white">{icon}</div>
                    <div className="text-4xl font-bold">
                      <CountUp
                        end={num}
                        decimals={num % 1 !== 0 ? 2 : 0}
                        duration={2.5}
                        suffix={suffix}
                        start={0}
                        enableScrollSpy={true}
                        separator=","
                      />
                    </div>
                    <div className="mt-1 text-center font-bold tracking-widest">{t(label)}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* SERVICES */}
          <section
            id="services"
            className="relative mt-24 overflow-hidden rounded-lg bg-navy-500 px-4 py-32 sm:px-6 lg:px-8"
          >
            {/* Title */}
            <SplitText className="mb-16 text-center text-3xl font-bold text-white">
              {hrConsulting.servicesTitle}
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
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map(({ title, description }, index) => {
                  const Icon = servicesIcons[index];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10">
                        {/* Icon */}
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-navy-500/50 transition-transform duration-300 group-hover:scale-110">
                          {Icon && <Icon className="h-7 w-7 text-white" />}
                        </div>

                        {/* Title */}
                        <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>

                        {/* Description */}
                        <p className="flex-grow text-sm leading-relaxed text-white/70">{description}</p>

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

export default Consulting;
