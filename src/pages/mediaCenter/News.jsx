import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight, FaSpinner } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

import mainServices from "../../services/mainServices";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  }),
};

const News = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  // Scroll to top on mount and page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, i18n.language]);

  // Fetch paginated news on language or page change
  const fetchNews = async (page = 1) => {
    setLoading(true);
    try {
      const newsRes = await mainServices.getNews(i18n.language, page);
      const data = newsRes?.data?.data;

      setNews(data?.data || []);
      setCurrentPage(data?.current_page || 1);
      setLastPage(data?.last_page || 1);
    } catch (err) {
      console.error("News fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, i18n.language]);

  return (
    <div className="bg-white text-[#0E1C3F] selection:bg-cyan-400 selection:text-white">
      {/* HERO SECTION */}
      <section className="relative -mt-20 overflow-hidden bg-[#0E1C3F] md:-mt-40">
        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[20vh] max-w-7xl items-center px-6 py-20 md:min-h-[calc(43vh+80px)]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mt-20 text-center text-3xl font-extrabold text-white sm:text-4xl md:text-left"
          >
            {t("news")}
          </motion.h1>
        </div>

        {/* Clipped Image */}
        <div className="absolute top-0 z-0 h-full w-full overflow-hidden md:w-[40%] ltr:right-0 rtl:left-0">
          <img
            src="/assets/saudi11-blog-thumbnail.jpg"
            alt="Expert Training Career Growth"
            className="clipped-image h-full w-full object-cover"
          />
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C3F]/85 via-[#0E1C3F]/50 to-transparent md:bg-gradient-to-r md:from-[#0E1C3F]/70 md:via-[#0E1C3F]/40 md:to-transparent" />
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <FaSpinner className="animate-spin text-4xl text-cyan-400" />
            </div>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-3">
                {news?.map((item, i) => (
                  <motion.div
                    key={item.id || i}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    custom={i * 0.2}
                    whileHover={{ y: -8 }}
                    transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
                    className="group flex h-full flex-col overflow-hidden rounded-lg bg-white"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-64 w-full transform object-cover transition-transform duration-700 ease-out group-hover:rotate-[6deg] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 transition duration-500 ease-out group-hover:bg-transparent"></div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                      className="flex flex-grow flex-col px-6 py-4"
                    >
                      <div className="mb-2 text-sm font-semibold text-cyan-400">{item.category}</div>

                      <a
                        onClick={() => navigate(`/news/${item.id}`)}
                        href={item.url}
                        className="mb-4 cursor-pointer text-xl font-semibold text-[#0E1C3F] transition duration-700 hover:text-cyan-400"
                        aria-label={`Read more about ${item.title}`}
                      >
                        {item.title}
                      </a>

                      <div className="flex-grow" />

                      <button
                        onClick={() => navigate(`/news/${item.id}`)}
                        className="inline-flex w-max cursor-pointer items-center gap-1 rounded-md bg-white font-semibold text-black transition duration-300 hover:text-cyan-400"
                        aria-label={`Read more about ${item.title}`}
                      >
                        <span>{t("readMore")}</span>
                        <LuArrowUpRight
                          className={`transform transition duration-300 ${
                            i18n.language === "ar" ? "scale-x-[-1]" : ""
                          }`}
                        />
                      </button>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="mt-8 flex items-center justify-center space-x-4">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-center gap-2 rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                    currentPage === 1
                      ? "cursor-not-allowed border-gray-300 text-gray-400"
                      : "cursor-pointer bg-cyan-400 text-white hover:bg-cyan-500"
                  }`}
                  aria-label={t("previous")}
                >
                  <FaArrowLeft className={`${i18n.language === "ar" ? "rotate-180" : ""}`} />
                  <span>{t("previous")}</span>
                </button>

                <div className="text-sm font-semibold text-gray-700">
                  {t("page")} <span className="text-cyan-500">{currentPage}</span> {t("of")}{" "}
                  <span className="text-cyan-500">{lastPage}</span>
                </div>

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, lastPage))}
                  disabled={currentPage === lastPage}
                  className={`flex items-center justify-center gap-4 rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                    currentPage === lastPage
                      ? "cursor-not-allowed border-gray-300 text-gray-400"
                      : "cursor-pointer bg-cyan-400 text-white hover:bg-cyan-500"
                  }`}
                  aria-label={t("next")}
                >
                  <span>{t("next")}</span>
                  <FaArrowRight className={`${i18n.language === "ar" ? "rotate-180" : ""}`} />
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
