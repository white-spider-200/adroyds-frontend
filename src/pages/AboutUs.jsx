import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaCheck, FaHandshake, FaLightbulb, FaMedal, FaUsers } from "react-icons/fa";
import { FaChartLine, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const listStagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  hidden: {},
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const scrollToHash = (hash) => {
  if (!hash) return;
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const AboutUs = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    scrollToHash(location.hash);
  }, [location.hash]);

  const teamMembers = [
    { name: "Alex Brown", role: "CEO & Founder", image: "/assets/profile-image.jpg" },
    { name: "Marina Doe", role: "Product Manager", image: "/assets/profile-image.jpg" },
    { name: "Michael Smith", role: "COO & Founder", image: "/assets/profile-image.jpg" },
  ];

  const whyChooseUs = [
    {
      titleEn: "Outstanding Track Record",
      titleAr: "سجلّ متميز",
      descEn:
        "High successful placement rate across various sectors, serving over 500 leading companies and government entities.",
      descAr: `سجلّ متميز بنسبة توظيف ناجحة عالية في مختلف القطاعات.
نخدم أكثر من 500 عميل من الشركات الرائدة والجهات الحكومية.`,
      icon: FaChartLine,
    },
    {
      titleEn: "Exclusive Talent Database",
      titleAr: "قاعدة بيانات حصرية",
      descEn: "An exclusive database of top talents updated annually to meet market needs.",
      descAr: "قاعدة بيانات حصرية تضم أفضل الكفاءات ويتم تحديثها بشكل سنوي.",
      icon: FaDatabase,
    },
    {
      titleEn: "Professional Consulting Team",
      titleAr: "فريق استشاري محترف",
      descEn: "A professional consulting team with deep expertise in the Saudi and regional labor market.",
      descAr: "فريق استشاري محترف يتمتع بخبرة عميقة في سوق العمل السعودي والإقليمي.",
      icon: FaUsers,
    },
    {
      titleEn: "Employment Guarantee",
      titleAr: "ضمان للمرشحين",
      descEn: "A 12-month guarantee for hired candidates to ensure quality and sustainable employment.",
      descAr: "ضمان للمرشحين المعينين يمتد حتى 12 شهرًا لضمان جودة التوظيف واستدامته.",
      icon: FaShieldAlt,
    },
  ];

  const content = {
    en: {
      title: "Get to know about Adroyts",
      brief:
        "We partner with top companies in Saudi Arabia and the GCC, delivering expert leadership and skilled professionals. With over 400 clients served, we focus on personalized, high-quality service and building strong, lasting client relationships.",
      features: [
        "Develop a vision statement",
        "Grow your customer base",
        "Increase your monthly sales",
        "Beat your competition",
      ],
    },
    ar: {
      subtitle: "اقرأ عنا",
      title: "تعرف على حلول وكالة أدرويتس",
      brief:
        "نخدم أبرز الشركات في السعودية ودول الخليج، من خلال توفير قيادات محترفة وكفاءات متخصصة. بعد دعمنا لأكثر من 400 عميل، نركز على تقديم خدمات مخصصة وعالية الجودة وبناء علاقات قوية ومستدامة مع عملائنا.",
      features: ["تطوير بيان الرؤية", "زيادة قاعدة العملاء", "زيادة مبيعاتك الشهرية", "التفوق على منافسيك"],
    },
  };

  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  return (
    <div className="bg-white font-cairo text-gray-900 selection:bg-blue-200 selection:text-gray-900">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(70vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/WhatsApp-Image-2023-06-26-at-11.12.01-AM.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#192757] opacity-70"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6"
        >
          <div className="mt-40 rounded-xl px-8 py-12 md:px-12 md:py-16">
            <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
              <ol className="inline-flex space-x-2">
                <li>
                  <a href="/" className="hover:text-white hover:underline">
                    Home
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li className="font-semibold text-white">About Us</li>
              </ol>
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-4xl font-extrabold leading-tight text-white drop-shadow md:text-5xl"
            >
              About Us
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="w-full bg-white py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 md:grid-cols-2 md:gap-28">
          {/* IMAGE */}
          <div className="relative">
            <motion.img
              src="/assets/WhatsApp-Image-2023-06-26-at-11.12.01-AM.webp"
              alt={content[lang].title}
              className="w-full rounded-xl object-cover shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <div className="absolute left-[-40px] top-24 -translate-y-1/2 rounded-full bg-[#1DC0DA] px-7 py-9 text-center text-lg font-bold text-white shadow-xl md:left-[-55px]">
              {i18n.language === "ar" ? (
                <>
                  تأسست <br /> عام 2006
                </>
              ) : (
                <>
                  Founded <br /> in 2006
                </>
              )}
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              className="mb-6 text-4xl font-extrabold text-[#0E1C3F] md:text-5xl"
            >
              {content[lang].title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-10 text-xl font-medium leading-relaxed text-[#1DC0DA]"
            >
              {content[lang].brief}
            </motion.p>

            {/* Feature list */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={listStagger}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2"
            >
              {content[lang].features.map((feature, idx) => (
                <motion.div key={idx} variants={listItem} className="flex items-start gap-3">
                  <FaCheck className="mt-1 text-xl text-[#1DC0DA]" />
                  <p className="leading-relaxed text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white px-6 py-32 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-20 md:grid-cols-2 md:gap-28">
          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              className="text-4xl font-extrabold text-gray-900 md:text-5xl"
            >
              {i18n.language === "ar" ? "لماذا تختار أدرويتس؟" : "Why Choose Adroyts?"}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-gray-700"
            >
              {i18n.language === "ar"
                ? "نحن ندمج الخبرة العميقة..."
                : "We combine deep industry expertise..."}
            </motion.p>

            {/* Feature items */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={listStagger}
              className="mt-14 flex flex-col gap-12"
            >
              {whyChooseUs.map(({ titleEn, titleAr, descEn, descAr, icon: Icon }, i) => (
                <motion.div
                  key={i}
                  variants={listItem}
                  className="group flex items-start gap-6 border-l-4 border-gray-200 pl-6 transition-all duration-300 hover:border-[#1DC0DA]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1DC0DA] p-5 shadow-md transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#0E1C3F]">
                    <Icon className="text-3xl text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {i18n.language === "ar" ? titleAr : titleEn}
                    </h3>
                    <p className="mt-2 leading-relaxed text-gray-600">
                      {i18n.language === "ar" ? descAr : descEn}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <img
              src="/assets/arab-businessmen-wearing-saudi-kandura-600nw-2614630187.webp"
              alt="Why Choose Us"
              className="w-full max-w-lg rounded-xl object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </section>
      {/* CTA BANNER */}
      <section
        className="relative flex items-center justify-center bg-cover bg-fixed bg-center py-32"
        style={{ backgroundImage: "url('/assets/saudi-arabia-s-digital-transformation-free-photo.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6 text-center">
          <h1 className="mb-4 text-6xl font-semibold uppercase text-white">Adroyts is ready to protect</h1>
          <h1 className="mb-12 text-6xl font-semibold uppercase text-white">Your Businesses</h1>

          <button className="rounded-xl bg-[#1DC0DA] px-16 py-5 text-lg font-semibold uppercase text-white shadow-md">
            Discover More
          </button>
        </div>
      </section>
      {/* DIRECTORS */}
      <section id="board" className="bg-gray-100 py-32">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-4xl font-extrabold text-gray-900"
          >
            Board Of Directors
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg text-gray-600"
          >
            Meet the leaders guiding our strategic vision
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={listStagger}
            className="mt-16 grid gap-14 sm:grid-cols-2 md:grid-cols-3"
          >
            {teamMembers.map(({ name, role, image }, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="group flex flex-col items-center rounded-2xl bg-white px-10 py-10 shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={image}
                    alt={name}
                    className="h-32 w-32 rounded-full object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">{name}</h3>
                <p className="mt-1 text-sm font-medium text-gray-500">{role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXECUTIVE MANAGEMENT */}
      <section id="executive" className="bg-white py-32">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-4xl font-extrabold text-gray-900"
          >
            Executive Management
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg text-gray-600"
          >
            The team responsible for operational excellence
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={listStagger}
            className="mt-16 grid gap-14 sm:grid-cols-2 md:grid-cols-3"
          >
            {teamMembers.map(({ name, role, image }, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="flex flex-col items-center rounded-2xl bg-gray-50 px-10 py-10 shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={image}
                  alt={name}
                  className="h-28 w-28 rounded-full object-cover grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0"
                />

                <h3 className="mt-6 text-xl font-semibold text-gray-900">{name}</h3>
                <p className="mt-1 text-sm text-gray-600">{role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
