import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa"; // optional spinner icon
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
  const [news, setNews] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchHomeData = async () => {
      setLoading(true);

      try {
        const [articlesRes, newsRes] = await Promise.all([
          mainServices.getArticles(i18n.language),
          mainServices.getNews(i18n.language),
        ]);

        setArticles(articlesRes?.data?.data?.data || []);
        setNews(newsRes?.data?.data?.data || []);
      } catch (err) {
        console.error("Home data fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, [i18n.language]);

  return (
    <div className="bg-white text-[#0E1C3F] selection:bg-cyan-400 selection:text-white">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(50vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/saudi11-blog-thumbnail.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F]/80 to-[#0E1C3F]/30"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          {/* Glass container */}
          <div className="mt-40 rounded-lg px-8 py-12 md:px-12 md:py-16">
            {/* Breadcrumbs */}
            <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
              <ol className="inline-flex space-x-2">
                <li>
                  <a href="/" className="hover:text-white hover:underline">
                    {t("home")}
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li className="font-semibold text-white" aria-current="page">
                  Our Blogs
                </li>
              </ol>
            </nav>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
              Our Blogs
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          {loading ? (
            // Loading UI
            <div className="flex justify-center py-20">
              <FaSpinner className="animate-spin text-4xl text-cyan-400" />
              <span className="ml-4 mt-1 text-lg font-semibold text-cyan-400">Loading...</span>
            </div>
          ) : (
            // Articles grid
            <div className="grid gap-6 md:grid-cols-3">
              {articles?.map((blog, i) => (
                <motion.div
                  key={i}
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
                      href={blog.url}
                      className="mb-4 cursor-pointer text-xl font-semibold text-[#0E1C3F] transition duration-300 hover:text-cyan-400"
                      aria-label={`Read more about ${blog.title}`}
                    >
                      {blog.title}
                    </a>
                    <div className="flex-grow" />
                    <button
                      onClick={() => navigate(`/blog?id=${blog.id}`)}
                      className="inline-flex w-max cursor-pointer items-center gap-1 rounded-md bg-white font-semibold text-black transition duration-300 hover:text-cyan-400"
                      aria-label={`Read more about ${blog.title}`}
                    >
                      <span>Read More</span>
                      <LuArrowUpRight className="transform transition duration-300" />
                    </button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}

          {/* View More button */}
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="hidden items-center gap-2 rounded-full border-2 border-[#0E1C3F] bg-transparent px-6 py-2 text-[#0E1C3F] transition duration-300 hover:border-cyan-400 hover:text-cyan-400 md:flex"
            >
              View More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
