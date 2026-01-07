import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import CountUp from "react-countup";
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
                <h1 className="text-5xl font-extrabold text-white">{t("recruitmentSolutions")}</h1>
              </motion.div>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative h-[45vh] md:h-auto">
            <img
              src="/assets/business-meeting-saudi-arabia-1024x683.webp"
              alt="Recruitment Solutions"
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
                {t("recruitmentSolutions")}
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
        <div className="bg-white px-6">
          <div className="mb-24 flex flex-col gap-10 lg:flex-row lg:items-center">
            {/* IMAGE */}
            <div className="relative h-[450px] w-full overflow-hidden rounded-lg lg:w-1/2">
              <img
                src="/assets/business-meeting-saudi-arabia-1024x683.webp"
                alt="Recruitment Solutions"
                className="h-full w-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F] to-cyan-400 opacity-20"></div>
            </div>

            {/* TEXT */}
            <section className="w-full lg:w-1/2">
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
                          color: "#2081E2",
                          textDecoration: "none",
                          transition: "color 0.3s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#4c9ae7")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#2081E2")}
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
          <section id="executive" className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Content Side */}
                <div dir="rtl">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a4d7b]/10 px-4 py-2">
                    <FiTarget className="h-5 w-5 text-[#1a4d7b]" />
                    <span className="font-semibold text-[#1a4d7b]">خدمة متميزة</span>
                  </div>

                  <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">البحث التنفيذي</h2>

                  <p className="mb-6 text-xl leading-relaxed text-gray-600">
                    تتخصص أدرويتس في خدمة البحث التنفيذي (Search Executive) كركيزة استراتيجية لاستقطاب
                    القيادات العليا.
                  </p>

                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    لا نكتفي بالبحث عن المرشحين فقط، بل نسعى لاكتشاف القادة القادرين على إحداث نقلة نوعية
                    وتأثير مباشر في أداء المؤسسات.
                  </p>

                  <div className="mb-8 rounded-2xl bg-gradient-to-br from-[#1a4d7b]/5 to-[#2d5f8d]/5 p-8">
                    <h3 className="mb-4 text-xl font-bold text-gray-900">منهجيتنا الشاملة:</h3>
                    <ul className="space-y-4">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FiCheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#1a4d7b]" />
                          <span className="leading-relaxed text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed text-gray-600">
                    <strong className="text-gray-900">هدفنا:</strong> تحقيق رؤية استراتيجية واضحة للمؤسسات
                    التي نخدمها.
                  </p>
                </div>

                {/* Image Side */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1758599543146-f263d3b3321e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZXMlMjBtZWV0aW5nfGVufDF8fHx8MTc2Nzc3ODgyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Executive Search"
                      className="h-[600px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d7b]/40 to-transparent"></div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-2xl bg-gradient-to-br from-[#1a4d7b] to-[#2d5f8d]"></div>
                </div>
              </div>
            </div>
          </section>
          <section id="professional" className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative order-2 lg:order-1">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1758518731457-5ef826b75b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3Njc3MDc4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Professional Search"
                      className="h-[600px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fbbf24]/40 to-transparent"></div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-2xl bg-gradient-to-br from-[#fbbf24] to-[#f59e0b]"></div>
                </div>

                {/* Content Side */}
                <div className="order-1 lg:order-2" dir="rtl">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#fbbf24]/10 px-4 py-2">
                    <FaUser className="h-5 w-5 text-[#f59e0b]" />
                    <span className="font-semibold text-[#f59e0b]">بناء الفرق المهنية</span>
                  </div>

                  <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">البحث المهني</h2>

                  <p className="mb-6 text-xl leading-relaxed text-gray-600">
                    نُمكّن المنظمات من سد الفجوات المهنية عبر استقطاب الكفاءات المهنية التي تقود العمليات
                    التشغيلية.
                  </p>

                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    نركز على المستويات الإدارية، والإشرافية، والتخصصية لضمان بناء فريق عمل متكامل وفعّال.
                  </p>

                  <div className="mb-8 rounded-2xl bg-gradient-to-br from-[#fbbf24]/5 to-[#f59e0b]/5 p-8">
                    <h3 className="mb-4 text-xl font-bold text-gray-900">نهجنا في البحث المهني:</h3>
                    <ul className="space-y-4">
                      {features2.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FiCheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#f59e0b]" />
                          <span className="leading-relaxed text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg border-r-4 border-[#fbbf24] bg-[#fbbf24]/10 p-6">
                    <p className="leading-relaxed text-gray-700">
                      نوفر للمنظمة كوادر قادرة على التنفيذ المتميز وضمان استمرارية العمليات بأعلى معايير
                      الجودة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RPO */}
          <section id="rpo" className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Content Side */}
                <div dir="rtl">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#10b981]/10 px-4 py-2">
                    <FiBriefcase className="h-5 w-5 text-[#10b981]" />
                    <span className="font-semibold text-[#10b981]">حل متكامل</span>
                  </div>

                  <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">إسناد عمليات التوظيف</h2>

                  <p className="mb-6 text-xl leading-relaxed text-gray-600">
                    تقدم أدرُويتس خدمة إسناد عمليات التوظيف (RPO) من خلال توفير فرق استقطاب متخصصة بدوام كامل
                    أو جزئي.
                  </p>

                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    نموذج تشغيلي يعمل كامتداد لمنظومة الموارد البشرية داخل المؤسسات، حيث تعمل فرق الاستقطاب
                    وفق معايير مهنية دقيقة.
                  </p>

                  <div className="mb-8 rounded-2xl bg-gradient-to-br from-[#10b981]/5 to-[#059669]/5 p-8">
                    <h3 className="mb-6 text-xl font-bold text-gray-900">مزايا الخدمة:</h3>
                    <div className="space-y-6">
                      {features3.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#10b981]/10">
                            <feature.icon className="h-6 w-6 text-[#10b981]" />
                          </div>
                          <div className="flex-1">
                            <p className="leading-relaxed text-gray-700">{feature.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-[#10b981]/10 p-6 text-center">
                      <div className="mb-2 text-3xl font-bold text-[#10b981]">24/7</div>
                      <div className="text-sm text-gray-600">دعم مستمر</div>
                    </div>
                    <div className="rounded-xl bg-[#10b981]/10 p-6 text-center">
                      <div className="mb-2 text-3xl font-bold text-[#10b981]">100%</div>
                      <div className="text-sm text-gray-600">مواءمة مثالية</div>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3NzE0MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="RPO Service"
                      className="h-[600px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10b981]/40 to-transparent"></div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-2xl bg-gradient-to-br from-[#10b981] to-[#059669]"></div>
                </div>
              </div>
            </div>
          </section>
          {/* RECRUITMENT METHODOLOGY */}
          <section
            id="methodology"
            className="relative mt-24 overflow-hidden rounded-lg bg-navy-500 px-4 py-32 sm:px-6 lg:px-8"
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
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {t("recruitmentMethodology.steps", { returnObjects: true }).map((step, index) => {
                  const Icon = stepIcons[index];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10">
                        {/* Step Number */}
                        <div className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-cyan-600 text-lg font-bold text-white shadow-lg">
                          {index + 1}
                        </div>

                        {/* Icon */}
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-navy-500/50 transition-transform duration-300 group-hover:scale-110">
                          {Icon && <Icon className="h-7 w-7 text-white" />}
                        </div>

                        {/* Title */}
                        <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>

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
