import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaAward, FaClipboardList, FaPhoneAlt, FaThumbsUp, FaUserCheck } from "react-icons/fa";
import { PiGearSixLight, PiPersonLight } from "react-icons/pi";
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

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const servicesList = [
  {
    i18nKey: "executiveSearch",
    image: "/assets/istock-90868745-large-spxmmo.jpeg",
    link: "#executive",
  },
  {
    i18nKey: "professionalSearch",
    image: "/assets/shutterstock_591060992.jpg",
    link: "#professional",
  },
  {
    i18nKey: "recruitmentOutsourcing",
    image: "/assets/shutterstock_2212724739.jpg",
    link: "#rpo",
  },
];

const statsData = [
  { num: 1200, suffix: "+", label: "candidatesSuccessfullyPlaced", icon: <FaUserCheck size={32} /> },
  { num: 250, suffix: "+", label: "recruitmentProjectsCompleted", icon: <FaClipboardList size={32} /> },
  { num: 95.93, suffix: "%", label: "passedProbationPeriod", icon: <FaThumbsUp size={32} /> },
  { num: 19, suffix: "+", label: "yearsOfRecruitmentExcellence", icon: <FaAward size={32} /> },
];

const Recruitment = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [hovered, setHovered] = useState(new Array(servicesList.length).fill(false));

  const handleMouseEnter = (index) => {
    setHovered((prev) => {
      const newArr = [...prev];
      newArr[index] = true;
      return newArr;
    });
  };

  const handleMouseLeave = (index) => {
    setHovered((prev) => {
      const newArr = [...prev];
      newArr[index] = false;
      return newArr;
    });
  };

  return (
    <div className="w-full bg-white text-[#0E1C3F] selection:bg-cyan-400/30 selection:text-[#0E1C3F]">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(60vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/business-meeting-saudi-arabia-1024x683.webp"
          alt="Recruitment Solutions"
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
                  {t("home")}
                </a>
                <span className="mx-2">/</span>
              </li>
              <li className="font-semibold text-white">{t("recruitmentSolutionsTitle")}</li>
            </ol>
          </nav>

          <SplitText className="mb-4 text-4xl font-extrabold text-white md:text-4xl">
            {t("recruitmentSolutions")}
          </SplitText>

          <motion.button
            onClick={() => navigate("/contact")}
            className="mt-6 rounded-lg border border-white/30 bg-cyan-400 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-cyan-500 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {t("contactUs")}
          </motion.button>
        </motion.div>
      </section>

      <div className="mx-auto flex max-w-7xl gap-2 px-6 py-16 text-lg">
        <div className="bg-white px-6">
          <div className="relative mb-10 h-[450px] w-full overflow-hidden rounded-lg">
            <img
              src="/assets/business-meeting-saudi-arabia-1024x683.webp"
              alt="Recruitment Solutions"
              className="h-full w-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F] to-cyan-400 opacity-20"></div>
          </div>

          {/* INTRO */}
          <section className="container pb-8">
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
              className="mb-6 font-medium leading-relaxed text-gray-600"
            >
              {t("adroytsIntro2")}
            </motion.p>
          </section>

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
                  <div
                    key={i}
                    className={`flex flex-col items-center px-6 ${
                      i < statsData.length - 1 ? "border-white/30 ltr:border-r rtl:border-l" : ""
                    }`}
                  >
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
          <section className="container mx-auto py-24">
            <SplitText className="mb-14 text-center text-4xl font-bold text-[#0E1C3F]">
              {t("ourRecruitmentServices")}
            </SplitText>

            <div className="flex justify-between gap-8">
              {servicesList.slice(0, 3).map(({ i18nKey, image, link }, index) => (
                <div
                  key={i18nKey}
                  style={{ width: 390, height: 320, cursor: "pointer" }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <ReactCardFlip isFlipped={hovered[index]} flipDirection="horizontal">
                    {/* Front Side */}
                    <div
                      style={{
                        width: "390px",
                        height: "320px",
                        borderRadius: 16,
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        boxShadow: "0 10px 15px rgba(0,0,0,0.2)",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: 24,
                        position: "relative",
                        userSelect: "none",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to right, rgba(14, 28, 63, 0.9), rgba(14, 28, 63, 0.7), transparent)",
                          zIndex: 0,
                        }}
                      />
                      <h3 style={{ zIndex: 1, fontSize: "1.875rem", fontWeight: "700", marginBottom: 16 }}>
                        {t(`recruitment.${i18nKey}.title`)}
                      </h3>
                    </div>

                    {/* Back Side */}
                    <div
                      style={{
                        width: "390px",
                        height: "320px",
                        borderRadius: 16,
                        backgroundColor: "#0E1C3F",
                        boxShadow: "0 10px 15px rgba(0,0,0,0.2)",
                        padding: 24,
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        userSelect: "none",
                      }}
                    >
                      <p style={{ marginBottom: 24, lineHeight: 1.5 }}>
                        {t(`recruitment.${i18nKey}.descriptionShort`)}
                      </p>
                      <a
                        href={link}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          fontWeight: "600",
                          color: "#22d3ee",
                          textDecoration: "none",
                          transition: "color 0.3s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#22d3ee")}
                      >
                        {t("readMore")}
                        <FaArrowRight
                          className={i18n.language === "ar" ? "rotate-180" : ""}
                          style={{ transition: "transform 0.3s" }}
                        />
                      </a>
                    </div>
                  </ReactCardFlip>
                </div>
              ))}
            </div>
          </section>

          {/* EXECUTIVE SEARCH DETAILS */}
          <section
            id="executive"
            className="relative rounded-xl bg-navy-500 bg-cover bg-center bg-no-repeat py-28"
            style={{ backgroundImage: "url('/assets/istock-90868745-large-spxmmo.jpeg')" }}
          >
            <div className="absolute inset-0 rounded-xl bg-[#0E1C3F]/90"></div>
            <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">
              <SplitText className="mb-6 text-center text-3xl font-bold">
                {t("recruitment.executiveSearch.title")}
              </SplitText>
              <p className="mb-8" style={{ whiteSpace: "pre-line" }}>
                {t("recruitment.executiveSearch.description")}
              </p>
            </div>
          </section>

          {/* PROFESSIONAL SEARCH */}
          <section id="professional" className="bg-white py-28">
            <SplitText className="mb-10 text-center text-3xl font-bold text-[#0E1C3F]">
              {t("recruitment.professionalSearch.title")}
            </SplitText>
            <p className="mx-auto mb-12 max-w-4xl text-center text-lg text-gray-700">
              {t("recruitment.professionalSearch.description")}
            </p>

            {/* Here you can add features or other content similarly */}
          </section>

          {/* RPO */}
          <section
            id="rpo"
            className="relative rounded-xl bg-navy-500 bg-cover bg-center bg-no-repeat px-6 py-28"
            style={{ backgroundImage: "url('/assets/shutterstock_2212724739.jpg')" }}
          >
            <div className="absolute inset-0 rounded-xl bg-[#0E1C3F]/90"></div>
            <div className="container relative z-10 mx-auto max-w-7xl text-white">
              <SplitText className="mb-8 text-center text-3xl font-bold tracking-tight">
                {t("recruitment.recruitmentOutsourcing.title")}
              </SplitText>
              <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-white/90">
                {t("recruitment.recruitmentOutsourcing.description")}
              </p>
            </div>
          </section>
          {/* RECRUITMENT METHODOLOGY */}
          <section className="bg-[#F8FAFC] py-28">
            <div className="container mx-auto max-w-7xl px-6">
              <SplitText className="mb-6 text-center text-3xl font-bold text-[#0E1C3F]">
                {t("recruitmentMethodology.title")}
              </SplitText>

              <p className="mx-auto mb-16 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
                {t("recruitmentMethodology.intro")}
              </p>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {t("recruitmentMethodology.steps", { returnObjects: true }).map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-lg font-bold text-white">
                      {index + 1}
                    </div>

                    <h4 className="mb-2 text-lg font-semibold text-[#0E1C3F]">{step.title}</h4>

                    <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>
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

export default Recruitment;
