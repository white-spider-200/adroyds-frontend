import { motion } from "framer-motion";
import React, { useEffect } from "react";
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

          <SplitText className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
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
        <div className="sticky top-32 h-full flex-1">
          {/* MENU BOX */}
          <div className="flex flex-col rounded-lg bg-[#0E1C3F] p-4 py-6 text-white">
            <nav className="flex flex-col space-y-4">
              {/* Recruitment Solutions (ACTIVE) */}
              <button
                onClick={() => navigate("/services/recruitment")}
                className="group flex w-full items-center justify-between rounded-lg bg-cyan-400 px-4 py-2 text-left font-semibold text-white transition-colors hover:bg-cyan-400/30"
              >
                <span>{t("recruitmentSolutionsTitle")}</span>
                <FaArrowRight className="translate-x-[-6px] transition-all duration-300 group-hover:translate-x-0" />
              </button>

              {/* {t("academy.title")} */}
              <button
                onClick={() => navigate("/services/academy")}
                className="group flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-white/80 transition-colors hover:bg-cyan-400/20 hover:text-white"
              >
                <span>{t("academy.title")}</span>
                <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </button>

              {/* Assessment Center */}
              <button
                onClick={() => navigate("/services/assessment")}
                className="group flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-white/80 transition-colors hover:bg-cyan-400/20 hover:text-white"
              >
                <span>{t("talentAssessment.title")}</span>
                <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </button>

              {/* Human Capital Consulting */}
              <button
                onClick={() => navigate("/services/consulting")}
                className="group flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-white/80 transition-colors hover:bg-cyan-400/20 hover:text-white"
              >
                <span>{t("hrConsulting.title")}</span>
                <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </button>
            </nav>
          </div>

          {/* CONTACT BOX WITH OVERLAY */}
          <div className="relative mt-4 overflow-hidden rounded-lg">
            <img
              src="/assets/conatact-us-placeholder.jpg"
              alt="Contact"
              className="h-48 w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0E1C3F]/90"></div>

            {/* Text */}
            <div className="absolute inset-0 flex flex-col items-start justify-center space-y-4 p-8 text-white">
              <p className="text-xl font-semibold">{t("needServiceContactUs")}</p>

              <p className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-6 py-2 font-semibold text-[#0E1C3F]">
                <FaPhoneAlt />
                {i18n.language == "ar" ? <span>966112342667+</span> : <span>+966112342667</span>}
              </p>
            </div>
          </div>
        </div>

        <div className="flex-[2.7] bg-white px-6">
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
          <section className="container pb-16 md:max-w-4xl">
            <SplitText className="mb-6 text-3xl font-bold tracking-tight text-[#0E1C3F]">
              {t("aboutOurRecruitmentSolutions")}
            </SplitText>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
              className="mb-6 font-medium leading-relaxed text-gray-600"
            >
              {t("adroytsIntro")}
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
                      i < statsData.length - 1 ? "border-r border-white/30" : ""
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
                    <div className="mt-1 text-center text-xs tracking-widest">{t(label)}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className="container mx-auto px-6 py-24">
            <SplitText className="mb-14 text-center text-4xl font-bold text-[#0E1C3F]">
              {t("ourRecruitmentServices")}
            </SplitText>

            <div className="flex flex-col gap-10">
              {servicesList.map(({ i18nKey, image, link }, index) => (
                <motion.a
                  key={i18nKey}
                  href={link}
                  className="group relative flex h-[320px] w-full items-end overflow-hidden rounded-2xl shadow-xl"
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  custom={index}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 180, damping: 20 }}
                >
                  {/* Background Image */}
                  <img
                    src={image}
                    alt={t(`recruitment.${i18nKey}.title`)}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0E1C3F]/95 via-[#0E1C3F]/60 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 max-w-xl p-8">
                    <h3 className="mb-4 text-3xl font-bold text-white">
                      {t(`recruitment.${i18nKey}.title`)}
                    </h3>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-white">
                      {t("learnMore")}
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Accent bar */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
                </motion.a>
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
              <p className="mb-12 max-w-4xl text-center leading-relaxed">
                {t("recruitment.executiveSearch.description")}
              </p>

              <h4 className="mb-4 text-center text-xl font-semibold">
                {t("recruitment.executiveSearch.methodologyTitle")}
              </h4>
              <p className="mb-10 text-center">{t("recruitment.executiveSearch.methodologyIntro")}</p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                {Object.entries(t("recruitment.executiveSearch.steps", { returnObjects: true })).map(
                  ([key, step]) => (
                    <motion.div
                      key={key}
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeUp}
                      custom={Number(key) * 0.1}
                      viewport={{ once: false }}
                      className="rounded-lg bg-white/10 p-6 text-white backdrop-blur-md"
                    >
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-lg font-bold text-white">
                        {key}
                      </div>
                      <h5 className="mb-1 font-semibold">{step.title}</h5>
                      <p className="text-sm text-white/80">{step.details}</p>
                    </motion.div>
                  )
                )}
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
