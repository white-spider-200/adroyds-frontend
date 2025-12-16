import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TalentAssessment = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const talentAssessment = t("talentAssessment", { returnObjects: true });

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
        {/* Sidebar Menu */}
        <div className="sticky top-32 h-full flex-1">
          {/* MENU BOX */}
          <div className="flex flex-col rounded-lg bg-[#0E1C3F] p-4 py-6 text-white">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => navigate("/services/recruitment")}
                className="group flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-white/80 transition-colors hover:bg-cyan-400/20 hover:text-white"
              >
                <span>{t("recruitmentSolutionsTitle")}</span>
                <FaArrowRight
                  className={`translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${i18n.language === "ar" ? "rotate-180" : ""}`}
                />{" "}
              </button>

              <button
                onClick={() => navigate("/services/academy")}
                className="group flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-white/80 transition-colors hover:bg-cyan-400/20 hover:text-white"
              >
                <span>{t("academy.title")}</span>
                <FaArrowRight
                  className={`translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${i18n.language === "ar" ? "rotate-180" : ""}`}
                />{" "}
              </button>

              <button
                onClick={() => navigate("/services/assessment")}
                className="group flex w-full items-center justify-between rounded-lg bg-cyan-400 px-4 py-2 text-left font-semibold text-white transition-colors hover:bg-cyan-400/30"
              >
                <span>{talentAssessment.title}</span>
                <FaArrowRight
                  className={`translate-x-[-6px] transition-all duration-300 group-hover:translate-x-0 ${i18n.language === "ar" ? "rotate-180" : ""}`}
                />{" "}
              </button>

              <button
                onClick={() => navigate("/services/consulting")}
                className="group flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-white/80 transition-colors hover:bg-cyan-400/20 hover:text-white"
              >
                <span>{t("hrConsulting.title")}</span>
                <FaArrowRight
                  className={`translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${i18n.language === "ar" ? "rotate-180" : ""}`}
                />{" "}
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
              <p className="text-xl font-semibold">{t("needServiceContactUs")} </p>

              <p className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-6 py-2 font-semibold text-[#0E1C3F]">
                <FaPhoneAlt />
                +966112342667
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-[2.7] bg-white px-6">
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
          <section className="container pb-16 md:max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#0E1C3F]">
              {talentAssessment.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">{talentAssessment.description}</p>
          </section>

          {/* Tools Section */}
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#0E1C3F]">
              {talentAssessment.toolsTitle}
            </h2>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
              {Object.values(talentAssessment.tools).map(({ title, description }, index) => (
                <div key={index} className="rounded-lg border border-gray-200 p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-semibold text-[#0E1C3F]">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TalentAssessment;
