import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import {
  FaBookOpen,
  FaBrain,
  FaBriefcase,
  FaChalkboardTeacher,
  FaClipboard,
  FaClock,
  FaCogs,
  FaComments,
  FaSearch,
  FaSmile,
  FaSyncAlt,
  FaTasks,
  FaUserGraduate,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { SplitText } from "../../utils/SplitText";

const methodologyIcons = [
  <FaSearch size={24} color="white" />, // Training Needs Analysis
  <FaTasks size={24} color="white" />, // Design & Implementation of Plans
  <FaBookOpen size={24} color="white" />, // Training Content & Curriculum
];

const statsData = [
  {
    num: 3000,
    suffix: "+",
    label: "trainees",
    icon: <FaUserGraduate size={32} />,
  },
  {
    num: 60000,
    suffix: "+",
    label: "trainingHours",
    icon: <FaClock size={32} />,
  },
  {
    num: 95.38,
    suffix: "%",
    label: "customerSatisfaction",
    icon: <FaSmile size={32} />,
  },
  {
    num: 100,
    suffix: "+",
    label: "clientsServed2",
    icon: <FaUsers size={32} />,
  },
];

const assessmentIcons = [
  <FaChalkboardTeacher size={24} color="white" />, // Psychometric Assessments
  <FaUsers size={24} color="white" />, // Competency-Based Interviews
  <FaBriefcase size={24} color="white" />, // Case Study
  <FaCogs size={24} color="white" />, // Group Discussion
];

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
                  {t("expertTrainingCareerGrowth")}
                </h1>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Constrained Content */}
          <div className="relative h-[45vh] md:h-auto">
            <img
              src="/assets/SEC_Batch02_33.jpg"
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
                src="/assets/SEC_Batch02_33.jpg"
                alt="Recruitment Solutions"
                className="h-full w-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F] to-cyan-400 opacity-20"></div>
            </div>

            {/* TEXT */}
            <section className="w-full lg:w-1/2">
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
          {/* ACADEMY METHODOLOGY */}
          <section className="bg-[#F8FAFC] py-24">
            <div className="container mx-auto max-w-7xl px-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="mb-14 text-center text-4xl font-bold text-[#0E1C3F]"
              >
                {t("academyMethodology.title")}
              </motion.h2>

              <div className="grid gap-10 md:grid-cols-3">
                {t("academyMethodology.items", { returnObjects: true }).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-lg font-bold text-white">
                      {methodologyIcons[index]}
                    </div>

                    <h3 className="mb-3 text-lg font-semibold text-[#0E1C3F]">{item.title}</h3>

                    <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          <section className="container px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#0E1C3F]">{academy.solutionsTitle}</h2>

            <div className="mx-auto grid grid-cols-1 gap-10 md:grid-cols-2">
              {Object.values(academy.solutions).map(({ title, description }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {" "}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-lg font-bold text-white">
                    {assessmentIcons[index]}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-[#0E1C3F]">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </motion.div>
              ))}
            </div>
          </section>
          {/* Academic Collaboration Section */}
          <section className="container px-6 py-20">
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
                    {/* Front Side */}
                    <div className="flex h-56 cursor-pointer items-center justify-center rounded-lg bg-white px-10 shadow-md transition-transform duration-300">
                      <img src={img} alt={`Partner ${index + 1}`} className="max-h-36 object-contain" />
                    </div>

                    {/* Back Side */}
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default Academy;
