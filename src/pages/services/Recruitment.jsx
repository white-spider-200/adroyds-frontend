import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useTranslation } from "react-i18next";
import {
  FaArrowRight,
  FaAward,
  FaClipboardList,
  FaClock,
  FaThumbsUp,
  FaUser,
  FaUserCheck,
} from "react-icons/fa";
import {
  FiBriefcase,
  FiCheckCircle,
  FiClipboard,
  FiFileText,
  FiSearch,
  FiTarget,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { SplitText } from "../../utils/SplitText";

const recruitmentTheme = {
  accent: "#1a6fce",
  accentSoft: "rgba(26, 111, 206, 0.14)",
  accentBorder: "rgba(26, 111, 206, 0.3)",
  accentGlow: "0 18px 40px rgba(26, 111, 206, 0.14)",
};

const features = [
  "تحليل عميق لاحتياجات العميل",
  "عملية تحديد دقيقة للكفاءات القيادية المناسبة",
  "تقييم احترافي للمرشحين من الصف الأول",
  "تقديم توصيات نهائية مبنية على أدلة تثبت المواءمة مع متطلبات النجاح",
];

const features2 = [
  "استقطاب متوسطي الخبرة والمحترفين الذين يشكلون القوة التشغيلية للمنظمة",
  "منهجية فحص دقيقة لضمان مواءمة المهارات الفنية مع متطلبات الوظيفة الفعلية",
  "التركيز على الكوادر القادرة على التنفيذ المتميز",
  "ضمان استدامة الأداء في المنظمة",
];

const features3 = [
  {
    icon: FaUser,
    text: "فرق استقطاب متخصصة تعمل وفق معايير مهنية دقيقة",
  },
  {
    icon: FaClock,
    text: "تسريع عمليات التوظيف وتحسين جودة المرشحين",
  },
  {
    icon: FaAward,
    text: "خبرة واسعة في استقطاب الكفاءات لمختلف القطاعات",
  },
  {
    icon: FiTarget,
    text: "قدرة عالية على تلبية المتطلبات الوظيفية بكافة مستوياتها (التنفيذية، والإدارية، والتخصصية)",
  },
];

const stepIcons = [FiSearch, FiClipboard, FiUsers, FiFileText, FiUserCheck, FiBriefcase, FiCheckCircle];

const servicesList = [
  {
    i18nKey: "executiveSearch",
    image: "/assets/business-meeting-saudi-arabia-1024x683.webp",
    link: "#executive",
  },
  {
    i18nKey: "professionalSearch",
    image: "/assets/amina-atar-MA4aW8ZOzLM-unsplash.jpg",
    link: "#professional",
  },
  {
    i18nKey: "recruitmentOutsourcing",
    image: "/assets/photo-1718220216044-006f43e3a9b1.jpg",
    link: "#rpo",
  },
];

const statsData = [
  {
    value: 1200,
    suffix: "+",
    label: "candidatesSuccessfullyPlaced",
    icon: "people",
  },
  {
    value: 250,
    suffix: "+",
    label: "recruitmentProjectsCompleted",
    icon: "id",
  },
  {
    value: 9593,
    suffix: "%",
    label: "passedProbationPeriod",
    icon: "thumbs",
    isPercentage: true,
  },
  {
    value: 19,
    suffix: "+",
    label: "yearsOfRecruitmentExcellence",
    icon: "star",
  },
];

const StatIcon = ({ type }) => {
  const common = "h-[22px] w-[22px] fill-current";

  if (type === "people") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="M16 11c1.66 0 3-1.57 3-3.5S17.66 4 16 4s-3 1.57-3 3.5 1.34 3.5 3 3.5Zm-8 0c1.66 0 3-1.57 3-3.5S9.66 4 8 4 5 5.57 5 7.5 6.34 11 8 11Zm0 2c-2.67 0-8 1.34-8 4v2h10v-2c0-1.15.6-2.13 1.56-2.94C10.55 13.39 9.09 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.2.84 1.97 1.97 1.97 3.45v2H24v-2c0-2.66-5.33-4-8-4Z" />
      </svg>
    );
  }

  if (type === "id") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.5 8A2.5 2.5 0 1 1 6 10.5 2.5 2.5 0 0 1 8.5 8Zm5.5 9H5.5v-.6A3.9 3.9 0 0 1 9.4 12.5h.2a3.9 3.9 0 0 1 3.9 3.9Zm4-7h-3V8h3Zm0 4h-3v-2h3Z" />
      </svg>
    );
  }

  if (type === "thumbs") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="M2 21h4V9H2Zm20-11a2 2 0 0 0-2-2h-6.31l.95-4.57.03-.32a1.5 1.5 0 0 0-.44-1.06L13.17 1 6.59 7.59A2 2 0 0 0 6 9v10a2 2 0 0 0 2 2h8a2 2 0 0 0 1.84-1.22l3.02-7.05A2 2 0 0 0 22 12Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
      <path d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21Z" />
    </svg>
  );
};

const formatStatValue = ({ value, suffix, isPercentage }) => {
  if (isPercentage) {
    return `${(value / 100).toFixed(2)}${suffix}`;
  }

  return `${Math.round(value).toLocaleString("en-US")}${suffix}`;
};

const RecruitmentStats = ({ t }) => {
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
    <section className="px-1 py-10 md:px-0 md:py-12">
      <div className="mx-auto w-full max-w-[1240px] rounded-[20px] bg-[#1a6fce] px-6 py-8 shadow-[0_20px_60px_rgba(26,111,206,0.35)] md:px-8 md:py-10">
        <div className="grid grid-cols-4 overflow-hidden rounded-[20px] max-[600px]:grid-cols-2">
          {statsData.map((item, index) => {
            const showDesktopDivider = index < statsData.length - 1;
            const showMobileDivider = index === 0 || index === 2;

            return (
              <div
                key={item.label}
                className="group relative flex min-h-[180px] flex-col items-center justify-center bg-[#1a6fce] px-4 py-8 text-center transition-colors duration-300 hover:bg-[#1860b8] md:min-h-[190px] md:px-6 md:py-10"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                  <StatIcon type={item.icon} />
                </span>

                <div className="text-[2.4rem] font-bold leading-none tracking-[-0.5px] text-white [font-family:Georgia,serif]">
                  {formatStatValue({
                    value: animatedValues[index],
                    suffix: item.suffix,
                    isPercentage: item.isPercentage,
                  })}
                </div>

                <div className="mt-4 max-w-[220px] text-center text-[0.78rem] font-medium uppercase tracking-[0.03em] text-white/75">
                  {t(item.label)}
                </div>

                {showDesktopDivider && (
                  <span className="absolute right-0 top-[20%] hidden h-[60%] w-px bg-white/20 min-[601px]:block" />
                )}

                {showMobileDivider && (
                  <span className="absolute right-0 top-[20%] h-[60%] w-px bg-white/20 min-[601px]:hidden" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

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
            {t("recruitmentSolutions")}
          </motion.h1>
        </div>

        {/* Clipped Image */}
        <div className="absolute top-0 z-0 h-full w-full overflow-hidden md:w-[40%] ltr:right-0 rtl:left-0">
          <img
            src="/assets/2nd.jpg"
            alt="Expert Training Career Growth"
            className="clipped-image h-full w-full object-cover"
          />
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C3F]/85 via-[#0E1C3F]/50 to-transparent md:bg-gradient-to-r md:from-[#0E1C3F]/70 md:via-[#0E1C3F]/40 md:to-transparent" />
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl gap-2 px-4 py-16 text-lg md:px-0">
        <div className="bg-white px-1 md:px-6">
          <div className="mb-24 flex flex-col gap-10 lg:flex-row lg:items-center">
            {/* IMAGE */}
            <div className="relative h-[450px] w-full overflow-hidden rounded-lg lg:w-1/2">
              <img src="/assets/2nd.jpg" alt="Recruitment Solutions" className="h-full w-full object-cover" />
            </div>

            {/* TEXT */}
            <section className="w-full lg:w-1/2">
              <div
                className="mb-5 inline-flex items-center rounded-full px-4 py-2 text-sm font-bold tracking-[0.18em]"
                style={{ backgroundColor: recruitmentTheme.accentSoft, color: recruitmentTheme.accent }}
              >
                RECRUITMENT
              </div>
              <SplitText className="mb-14 text-center text-4xl font-bold text-[#0E1C3F]">
                {t("recruitmentSolutionsTitle")}
              </SplitText>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
                className="font-medium leading-relaxed text-gray-600"
              >
                {t("adroytsIntro2")}
              </motion.p>
            </section>
          </div>

          <RecruitmentStats t={t} />

          {/* SERVICES */}
          <section className="container mx-auto py-24">
            <SplitText className="mb-14 text-center text-4xl font-bold text-[#0E1C3F]">
              {t("ourRecruitmentServices")}
            </SplitText>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {servicesList.slice(0, 3).map(({ i18nKey, image, link }, index) => (
                <div
                  key={i18nKey}
                  className="mx-auto w-full max-w-[390px] cursor-pointer"
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
                        borderTop: `4px solid ${recruitmentTheme.accent}`,
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        boxShadow: recruitmentTheme.accentGlow,
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
                        borderTop: `4px solid ${recruitmentTheme.accent}`,
                        backgroundColor: "#0E1C3F",
                        boxShadow: recruitmentTheme.accentGlow,
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
                          color: recruitmentTheme.accent,
                          textDecoration: "none",
                          transition: "color 0.3s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#4c9ae7")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = recruitmentTheme.accent)}
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

          {/* ================= EXECUTIVE SEARCH ================= */}
          <section id="executive" className="bg-white py-20 md:py-32">
            <div className="container mx-auto">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* CONTENT */}
                <div>
                  <SplitText className="mb-8 text-4xl font-bold text-[#0E1C3F]">
                    {t("recruitment2.executive.title")}
                  </SplitText>

                  <p className="mb-6 leading-relaxed text-gray-600">{t("recruitment2.executive.intro")}</p>

                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    {t("recruitment2.executive.description")}
                  </p>

                  <div
                    className="mb-8 rounded-2xl p-8"
                    style={{ background: `linear-gradient(135deg, ${recruitmentTheme.accentSoft}, rgba(255,255,255,0.55))` }}
                  >
                    <h3 className="mb-4 font-semibold text-gray-900">
                      {t("recruitment2.executive.methodologyTitle")}
                    </h3>

                    <ul className="space-y-4">
                      {t("recruitment2.executive.features", { returnObjects: true }).map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FiCheckCircle className="mt-1 h-6 w-6 text-[#1a4d7b]" />
                          <span className="leading-relaxed text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-lg text-gray-600">
                    <strong className="text-gray-900">{t("recruitment2.executive.goalTitle")}</strong>{" "}
                    {t("recruitment2.executive.goal")}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src="/assets/business-meeting-saudi-arabia-1024x683.webp"
                    alt="Executive Search"
                    className="h-[600px] w-full rounded-2xl object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ================= PROFESSIONAL SEARCH ================= */}
          <section id="professional" className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
            <div className="container mx-auto">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* IMAGE */}
                <div className="order-2 lg:order-1">
                  <img
                    src="/assets/amina-atar-MA4aW8ZOzLM-unsplash.jpg"
                    alt="Professional Search"
                    className="h-[600px] w-full rounded-2xl object-cover shadow-2xl"
                  />
                </div>

                {/* CONTENT */}
                <div className="order-1 lg:order-2">
                  <SplitText className="mb-8 text-4xl font-bold text-[#0E1C3F]">
                    {t("recruitment2.professional.title")}
                  </SplitText>

                  <p className="mb-6 leading-relaxed text-gray-600">{t("recruitment2.professional.intro")}</p>

                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    {t("recruitment2.professional.description")}
                  </p>

                  <div className="rounded-2xl bg-[#fbbf24]/5 p-8">
                    <h3 className="mb-4 font-semibold text-gray-900">
                      {t("recruitment2.professional.methodologyTitle")}
                    </h3>

                    <ul className="space-y-4">
                      {t("recruitment2.professional.features", { returnObjects: true }).map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FiCheckCircle className="mt-1 h-6 w-6 text-[#f59e0b]" />
                          <span className="leading-relaxed text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= RPO ================= */}
          <section id="rpo" className="bg-white py-20 md:py-32">
            <div className="container mx-auto">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* CONTENT */}
                <div>
                  <SplitText className="mb-8 text-4xl font-bold text-[#0E1C3F]">
                    {t("recruitment2.rpo.title")}
                  </SplitText>

                  <p className="mb-6 leading-relaxed text-gray-600">{t("recruitment2.rpo.intro")}</p>

                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    {t("recruitment2.rpo.description")}
                  </p>

                  <div className="rounded-2xl bg-[#10b981]/5 p-8">
                    <h3 className="mb-6 font-semibold text-gray-900">
                      {t("recruitment2.rpo.benefitsTitle")}
                    </h3>

                    <div className="space-y-6">
                      {t("recruitment2.rpo.features", { returnObjects: true }).map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <FiCheckCircle className="mt-1 h-6 w-6 text-[#10b981]" />
                          <p className="leading-relaxed text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* IMAGE */}
                <div>
                  <img
                    src="/assets/photo-1718220216044-006f43e3a9b1.jpg"
                    alt="RPO"
                    className="h-[600px] w-full rounded-2xl object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* RECRUITMENT METHODOLOGY */}
          <section
            id="methodology"
            className="relative mt-24 overflow-hidden rounded-lg bg-navy-500 px-4 py-32 sm:px-6 lg:px-8"
            style={{ boxShadow: recruitmentTheme.accentGlow }}
          >
            {/* Title */}
            <SplitText className="mb-6 text-center text-3xl font-bold text-white">
              {t("recruitmentMethodology.title")}
            </SplitText>

            {/* Intro */}
            <p className="mx-auto mb-16 max-w-4xl text-center text-lg leading-relaxed text-white/70">
              {t("recruitmentMethodology.intro")}
            </p>

            {/* Subtle Animated Background */}
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
              <div className="flex flex-wrap justify-center gap-8">
                {t("recruitmentMethodology.steps", { returnObjects: true }).map((step, index) => {
                  const Icon = stepIcons[index];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="w-full sm:w-[48%] lg:w-[30%] xl:w-[22%]" // responsive widths
                    >
                      <div
                        className="group relative mx-3 flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 md:mx-0"
                        style={{ borderTop: `3px solid ${recruitmentTheme.accentBorder}` }}
                      >
                        {/* Step Number */}
                        <div
                          className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-lg font-bold text-white shadow-lg"
                          style={{ backgroundColor: recruitmentTheme.accent }}
                        >
                          {index + 1}
                        </div>

                        {/* Icon */}
                        <div
                          className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: recruitmentTheme.accentSoft }}
                        >
                          {Icon && <Icon className="h-7 w-7 text-white" />}
                        </div>

                        {/* Title */}
                        <h3 className="mb-3 font-bold text-white">{step.title}</h3>

                        {/* Description */}
                        <p className="flex-grow text-sm leading-relaxed text-white/70">{step.desc}</p>

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

export default Recruitment;
