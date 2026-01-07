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
  <FaProjectDiagram size={24} color="white" />, // Psychometric Assessments
  <FaSitemap size={24} color="white" />, // Competency-Based Interviews
  <FaBook size={24} color="white" />, // Case Study
  <FaSearch size={24} color="white" />, // Group Discussion
  <FaClipboardList size={24} color="white" />, // Role-Playing Activities
  <FaUserCheck size={24} color="white" />, // 360-Degree Assessment
  <FaHandsHelping size={24} color="white" />, // 360-Degree Assessment
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
                <h1 className="text-5xl font-extrabold text-white">{hrConsulting.title}</h1>
              </motion.div>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative h-[45vh] md:h-auto">
            <img
              src="/assets/adroyts-consulting.png"
              alt="HR Consulting"
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
                {hrConsulting.title}
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
                src="/assets/adroyts-consulting.png"
                alt="Recruitment Solutions"
                className="h-full w-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F] to-cyan-400 opacity-20"></div>
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

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:items-start md:gap-20">
              {/* Stats */}
              <div className="flex flex-1 justify-between">
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
          <section className="container mx-auto mt-14 bg-gray-100 px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#0E1C3F]">
              {hrConsulting.servicesTitle}
            </h2>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
              {services.map(({ title, description }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-lg font-bold text-white">
                    {servicesIcons[index]}
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-[#0E1C3F]">{title}</h3>

                  <p className="text-sm leading-relaxed text-gray-600">{description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
