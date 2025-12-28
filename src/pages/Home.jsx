import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

import SectorsSlider from "../components/SectorsSlider";
import ServicesSection from "../components/ServicesSection";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import mainServices from "../services/mainServices";
import { SplitText } from "../utils/SplitText";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeUpContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // delay between children animations
      when: "beforeChildren",
    },
  },
};
const stripHtml = (html = "") => html.replace(/<[^>]*>?/gm, "").slice(0, 190) + "...";

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeInOut" },
};

const scaleFadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

const scaleFadeItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [loading, setLoading] = useState(true);

  const [articles, setArticles] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [clients, setClients] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchHomeData = async () => {
      setLoading(true);
      try {
        const [articlesRes, testimonialsRes, clientsRes, highlightsRes, caseStudiesRes] = await Promise.all([
          mainServices.getArticles(i18n.language),
          mainServices.getTestimonials(i18n.language),
          mainServices.getClients(i18n.language),
          mainServices.getCompanyHighlights(i18n.language),
          mainServices.getCaseStudies(i18n.language),
        ]);

        // store in state
        setArticles(articlesRes?.data?.data?.data || []);
        setTestimonials(testimonialsRes?.data?.data || []);
        setClients(clientsRes?.data?.data || []);
        setHighlights(highlightsRes?.data?.data || []);
        setCaseStudies(caseStudiesRes?.data?.data?.data || []);
      } catch (err) {
        console.error("Home data fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, [i18n.language]);

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="bg-white font-cairo text-gray-800">
      <section className="relative -mt-40 flex min-h-[calc(100vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/adroyts-video.mp4" // replace with your video path
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay (optional for better text contrast) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F]/80 to-[#0E1C3F]/30"></div>
        <motion.div
          className="relative z-10 mt-32 max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={scaleFadeContainer}
        >
          <SplitText className="mb-8 text-3xl font-bold text-white md:text-5xl">
            {t("qualitativeSkills")}
          </SplitText>

          <motion.p className="mb-20 text-2xl text-[#d2d2d2]" variants={scaleFadeItem}>
            {t("professionalExpertise")}
          </motion.p>

          <motion.div className="flex items-center justify-center space-x-8" variants={scaleFadeItem}>
            <motion.div className="flex items-center justify-center space-x-8" variants={fadeUpItem}>
              <div className="flex items-center justify-center">
                <motion.button
                  onClick={() => {
                    const section = document.getElementById("services");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-full bg-cyan-400 px-6 py-4 font-bold text-white shadow-md hover:bg-cyan-500"
                  whileHover={{ scale: 1.1 }}
                >
                  {t("exploreOurServices")}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <div
        className="relative bg-cover bg-center bg-no-repeat p-20 pb-16 pt-20"
        style={{
          backgroundImage: `url('/assets/mamalakah.jpg')`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Gradient Overlay */}
        {/* <div className="to-navy-500/50 absolute inset-0 bg-gradient-to-r from-cyan-400/60 via-cyan-400/40"></div> */}

        {/* About Section */}
        <motion.section
          className="relative z-20 mx-auto flex max-w-7xl flex-wrap justify-center gap-8 rounded-xl p-12 text-center shadow-xl backdrop-blur-xl md:p-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeUpContainer}
        >
          <motion.p
            className="mx-auto mb-6 text-xl leading-relaxed text-white drop-shadow-lg"
            variants={fadeUp}
            custom={0}
          >
            {t("desc1")}
          </motion.p>

          <motion.div variants={fadeUp} custom={0.2} className="flex">
            <motion.button
              onClick={() => navigate("/about#overview")}
              className="flex items-center space-x-3 font-semibold text-white hover:text-[#00CFFF]"
              whileHover={buttonHover}
            >
              <span>{t("viewMore")}</span>
              <FaArrowRight className={`mt-1 ${i18n.language === "ar" ? "rotate-180" : ""}`} />
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="relative z-20 mx-auto mt-12 flex max-w-7xl flex-wrap justify-center gap-16 rounded-xl p-6 px-0 text-center shadow-xl backdrop-blur-xl"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeUpContainer}
        >
          {highlights.map((item, index) => {
            const suffix = index < 3 ? "+" : "%";
            const value = parseInt(item.value);

            return (
              <motion.div
                key={item.label}
                className="flex flex-col items-center"
                variants={fadeUp}
                custom={index * 0.2}
              >
                <div
                  className={`mb-5 flex h-44 w-44 items-center justify-center rounded-full border-[6px] bg-white/10 backdrop-blur-3xl transition-transform duration-500 hover:scale-105`}
                  style={{
                    borderColor: item?.value_color || "#00CFFF",
                  }}
                >
                  <CountUp
                    start={0}
                    end={value}
                    separator={item?.isYear ? "" : ","}
                    suffix={suffix}
                    enableScrollSpy={true}
                    scrollSpyOnce={false}
                    className={`text-5xl font-extrabold ${index < 3 ? "text-gradient" : ""}`}
                    style={{ color: item?.value_color || "#00CFFF" }}
                  />
                </div>
                <p className="mt-4 text-xl font-semibold text-white drop-shadow-lg">{item.title}</p>
              </motion.div>
            );
          })}
        </motion.section>
      </div>

      {/* 2. Services Section: The Expandable Container */}
      <ServicesSection />

      {/* Trusted Companies */}

      <section className="ltr-ignore bg-gray-100 py-20">
        <div className="text-center">
          <SplitText className="mb-8 text-center text-4xl font-bold tracking-tight text-[#0E1C3F] md:text-4xl">
            {t("trustedBy")}
          </SplitText>
          <Marquee direction={i18n.language == "ar" ? "right" : "left"}>
            {clients.map((client, index) => (
              <img
                key={index}
                src={client.image}
                alt={client.name}
                className="mx-9 h-44 w-44 cursor-pointer object-contain opacity-80 grayscale filter transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </Marquee>
        </div>
      </section>

      <SectorsSlider />

      {/* Case Studies */}
      <section
        className="bg-gray-50 bg-cover py-16 pt-40 md:py-28"
        style={{ backgroundImage: `url('/assets/studies-bg.png')` }}
      >
        <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-start md:justify-between md:gap-44">
          {/* Left Side: Title, description, button */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }}
            viewport={{ once: false }}
            className="mb-12 max-w-xl md:mb-0"
          >
            <SplitText className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-4xl">
              {t("caseStudies")}
            </SplitText>

            <p
              className="mb-8 max-w-lg text-base leading-relaxed text-white sm:text-lg md:text-xl"
              dangerouslySetInnerHTML={{ __html: t("caseStudiesDesc") }}
            ></p>

            <button
              onClick={() => navigate("/media-center/case-studies")}
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-gray-900 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white"
            >
              <span>{t("allCaseStudies")}</span>
              <FaArrowRight className={`${i18n.language === "ar" ? "rotate-180" : ""}`} />
            </button>
          </motion.div>

          {/* Right Side: Two cards side-by-side on md+, stacked on sm */}
          <div className="grid w-full gap-12 md:w-2/3 md:grid-cols-2">
            {caseStudies.slice(0, 2).map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col justify-between overflow-hidden rounded-lg bg-white p-6 py-6 shadow-lg transition hover:shadow-2xl"
              >
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-[#192757] sm:text-3xl">{caseStudy?.name}</h3>
                  <p className="text-base text-[#878da4] sm:text-xl">{stripHtml(caseStudy.description)}</p>
                </div>
                <div
                  onClick={() => navigate(`/case-study/${caseStudy.id}`)}
                  className="mt-6 cursor-pointer self-end rounded-full border-2 border-[#192757] p-3 text-gray-900 transition-transform duration-300 ease-in-out hover:scale-110 sm:p-4"
                >
                  <FaArrowRight className={`${i18n.language === "ar" ? "rotate-180" : ""}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-white">
        <div className="absolute top-0 h-[60%] w-full bg-[#eceff1]"></div>

        {/* Carousel */}
        <TestimonialsCarousel testimonials={testimonials} />
      </section>

      {/* Blog Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <SplitText className="mb-12 text-center text-4xl font-bold tracking-tight text-[#0E1C3F] md:text-4xl">
            {t("news&Articles")}
          </SplitText>

          <div className="grid gap-10 md:grid-cols-3">
            {articles?.map((blog, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                custom={i * 0.2}
                whileHover={{ y: -8 }}
                transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
                className="group flex h-full flex-col overflow-hidden rounded-lg bg-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-64 w-full transform object-cover transition-transform duration-700 ease-out group-hover:rotate-[6deg] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition duration-500 ease-out group-hover:bg-transparent"></div>
                </div>

                {/* Text and button container */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="flex flex-grow flex-col px-6 py-4"
                >
                  <div className="mb-2 text-sm font-semibold text-cyan-400">{blog.category}</div>
                  <p className="mb-2 flex items-center gap-2 text-sm text-[#6b7c93]">
                    <FaCalendarAlt className="text-black" />
                    {blog.date}
                  </p>
                  {/* Title as clickable link */}
                  <a
                    href={blog.url}
                    className="mb-4 cursor-pointer text-xl font-semibold text-[#0E1C3F] transition duration-300 hover:text-cyan-400"
                    aria-label={`Read more about ${blog.title}`}
                  >
                    {blog.title}
                  </a>
                  {/* Spacer to push button down */}
                  <div className="flex-grow" />

                  {/* Read More button */}
                  <button
                    onClick={() => navigate(`/blog?id=${blog.id}`)}
                    className="inline-flex w-max cursor-pointer items-center gap-1 rounded-md bg-white p-2 font-semibold text-black transition duration-300 hover:text-cyan-400"
                    aria-label={`Read more about ${blog.title}`}
                  >
                    <span>{t("readMore")}</span>
                    <LuArrowUpRight
                      className={`transform transition duration-300 ${i18n.language === "ar" ? "scale-x-[-1]" : ""}`}
                    />
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
          {/* View More button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => navigate("/media-center/blogs")}
              type="button"
              className="hidden items-center gap-2 rounded-full border-2 border-[#0E1C3F] bg-transparent px-6 py-2 text-[#0E1C3F] transition duration-300 hover:border-cyan-400 hover:text-cyan-400 md:flex"
            >
              {t("viewMore")}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#eceff1] text-gray-300">
        <motion.div
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:gap-10 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <div>
            <h3 className="mb-2 text-2xl font-bold text-[#192757] sm:text-3xl md:text-4xl">
              {t("readyForNextGenRecruitment")}
            </h3>
            <p className="text-base text-[#878da4] sm:text-lg md:text-xl">{t("startYourDigitalJourney")}</p>
          </div>
          <button className="hidden items-center gap-4 rounded-full bg-[#192757] px-8 py-3 text-[22px] text-white transition duration-500 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 md:flex">
            <span>{i18n.language === "ar" ? "تواصل معنا" : "Contact Us Now"}</span>
            <FaArrowRight className={`${i18n.language === "ar" ? "rotate-180" : ""}`} />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
