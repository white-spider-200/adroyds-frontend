import { motion } from "framer-motion";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import {
  FaArrowRight,
  FaAward,
  FaClipboardList,
  FaClock,
  FaIndustry,
  FaPhoneAlt,
  FaThumbsUp,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import { PiBriefcaseLight, PiClipboardTextLight, PiUsersThreeLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import { SplitText } from "../../utils/SplitText";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

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
  const navigate = useNavigate();
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
      <section className="relative -mt-40 min-h-[calc(43vh+80px)] overflow-hidden bg-[#0E1C3F]">
        <div className="grid min-h-[calc(43vh+80px)] grid-cols-1 md:grid-cols-2">
          {/* LEFT: Full-bleed Image */}
          <div className="relative flex items-center">
            <div className="mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <h1 className="mt-20 px-36 text-4xl font-extrabold text-white md:text-5xl">
                  {hrConsulting.title}
                </h1>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Constrained Content */}
          <div className="relative h-[45vh] md:h-auto">
            <img
              src="/assets/adroyts-consulting.png"
              alt="Adroyts office"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0E1C3F]/70 via-[#0E1C3F]/40 to-transparent" />
          </div>

          {/* Diagonal Divider */}
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
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#0E1C3F]">
              {hrConsulting.servicesTitle}
            </h2>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
              {services.map(({ title, description }, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true }}
                  className="group flex flex-col rounded-lg bg-white p-6 transition-transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <h3 className="mb-2 text-xl font-semibold text-[#0E1C3F]">{title}</h3>
                  <p className="flex-grow text-gray-700">{description}</p>
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
