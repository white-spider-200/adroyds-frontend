import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaSpinner } from "react-icons/fa";
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

const Blogs = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Fetch articles for the current page and language
  const fetchArticles = async (page = 1) => {
    setLoading(true);
    try {
      const articlesRes = await mainServices.getArticles(i18n.language, page);
      const data = articlesRes?.data?.data;

      setArticles(data?.data || []);
      setCurrentPage(data?.current_page || 1);
      setLastPage(data?.last_page || 1);
    } catch (err) {
      console.error("Articles fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Refetch when language or page changes
  useEffect(() => {
    fetchArticles(currentPage);
  }, [i18n.language, currentPage]);

  return (
    <div className="bg-white text-[#0E1C3F] selection:bg-cyan-400 selection:text-white">
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
                <h1 className="mt-20 px-36 text-4xl font-extrabold text-white md:text-5xl">{t("blog")}</h1>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Constrained Content */}
          <div className="relative h-[45vh] md:h-auto">
            <img
              src="/assets/saudi11-blog-thumbnail.jpg"
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

      {/* Blog Section */}
      <section id="blog" className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <FaSpinner className="animate-spin text-4xl text-cyan-400" />
            </div>
          ) : (
            <>
              {/* Articles Grid */}
              <div className="grid gap-6 md:grid-cols-3">
                {articles.map((blog, i) => (
                  <motion.div
                    key={blog.id}
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
                      <a
                        onClick={() => navigate(`/blog/${blog.id}`)}
                        href={blog.url}
                        className="mb-4 cursor-pointer text-xl font-semibold text-[#0E1C3F] transition duration-300 hover:text-cyan-400"
                        aria-label={`Read more about ${blog.title}`}
                      >
                        {blog.title}
                      </a>
                      <div className="flex-grow" />
                      <button
                        onClick={() => navigate(`/blog/${blog.id}`)}
                        className="inline-flex w-max cursor-pointer items-center gap-1 rounded-md bg-white font-semibold text-black transition duration-300 hover:text-cyan-400"
                        aria-label={`Read more about ${blog.title}`}
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
                  <span>
                    <FaArrowLeft className={`${i18n.language === "ar" ? "rotate-180" : ""}`} />
                  </span>
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
                  <span>
                    <FaArrowRight className={`${i18n.language === "ar" ? "rotate-180" : ""}`} />
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
