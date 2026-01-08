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

const CaseStudies = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [caseStudies, setCaseStudies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  // Scroll to top on mount and when page or language changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, i18n.language]);

  // Fetch case studies for current page and language
  const fetchCaseStudies = async (page = 1) => {
    setLoading(true);
    try {
      const res = await mainServices.getCaseStudies(i18n.language, page);
      const data = res?.data?.data;
      setCaseStudies(data?.data || []);
      setCurrentPage(data?.current_page || 1);
      setLastPage(data?.last_page || 1);
    } catch (err) {
      console.error("Case studies fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies(currentPage);
  }, [currentPage, i18n.language]);

  return (
    <div className="bg-white text-[#0E1C3F] selection:bg-cyan-400 selection:text-white">
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
                <h1 className="text-4xl font-extrabold text-white">{t("caseStudies")}</h1>
              </motion.div>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative h-[45vh] md:h-auto">
            <img
              src="/assets/saudi11-blog-thumbnail.jpg"
              alt="Case Studies"
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
                {t("caseStudies")}
              </motion.h1>
            </div>
          </div>

          {/* DIAGONAL DIVIDER – DESKTOP ONLY */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-40 -translate-x-1/2 md:block">
            <div className="absolute inset-0 -skew-x-12 bg-[#0E1C3F]" />
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <FaSpinner className="animate-spin text-4xl text-cyan-400" />
            </div>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-3">
                {caseStudies.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    custom={i * 0.2}
                    whileHover={{ y: -8 }}
                    transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
                    className="group flex h-full flex-col overflow-hidden rounded-lg bg-white"
                  >
                    <div className="relative h-56 overflow-hidden bg-gray-100">
                      {!item.image && (
                        <div className="pointer-events-none absolute inset-0 z-0 bg-[#182756]" />
                      )}
                      <img
                        src={item.image || "/assets/placeholder.png"}
                        alt={item.name}
                        className={`relative z-10 h-full w-full transition duration-500 group-hover:scale-105 ${
                          item.image ? "object-cover" : "object-contain p-6"
                        }`}
                      />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                      className="flex flex-grow flex-col px-6 py-4"
                    >
                      <h3
                        onClick={() => navigate(`/case-study/${item.id}`)}
                        className="mb-3 cursor-pointer text-xl font-semibold transition hover:text-cyan-400"
                      >
                        {item.name}
                      </h3>

                      <div className="flex-grow" />

                      <button
                        onClick={() => navigate(`/case-study/${item.id}`)}
                        className="inline-flex w-max items-center gap-1 font-semibold text-black transition hover:text-cyan-400"
                      >
                        <span>{t("readMore")}</span>
                        <LuArrowUpRight
                          className={`transition ${i18n.language === "ar" ? "scale-x-[-1]" : ""}`}
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

export default CaseStudies;
