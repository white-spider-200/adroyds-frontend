import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import mainServices from "../services/mainServices";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  }),
};

const scrollToHash = (hash) => {
  if (!hash) return;
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const MediaCenter = () => {
  const { i18n } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [news, setNews] = useState([]);

  const location = useLocation();

  useEffect(() => scrollToHash(location.hash), [location.hash]);

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
    <div className="bg-white font-sans text-[#0E1C3F] selection:bg-[#1DC0DA] selection:text-white">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(70vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/saudi11-blog-thumbnail.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-[#192757] opacity-70"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          {/* Glass container */}
          <div className="mt-40 rounded-xl px-8 py-12 md:px-12 md:py-16">
            {/* Breadcrumbs */}
            <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
              <ol className="inline-flex space-x-2">
                <li>
                  <a href="/" className="hover:text-white hover:underline">
                    Home
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li className="font-semibold text-white" aria-current="page">
                  Knowledge & Media Center
                </li>
              </ol>
            </nav>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
              Knowledge & Media Center
            </h1>
          </div>
        </motion.div>
      </section>

      {/* CASE STUDIES SECTION - PREMIUM */}
      <motion.section
        id="case-studies"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        custom={0.4}
        className="bg-[#f8fbfe] py-32"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-center text-4xl font-extrabold text-gray-900"
          >
            Case Studies
          </motion.h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700">
            Explore impactful transformations delivered across different industries and sectors.
          </p>

          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Enhancing Workforce Productivity",
                desc: "A large enterprise increased operational efficiency by 37% through structured learning programs.",
                icon: "📈",
              },
              {
                title: "Digital Transformation Enablement",
                desc: "Adroyts helped a government entity build digital competencies across all departments.",
                icon: "💻",
              },
              {
                title: "Leadership Development",
                desc: "An organization strengthened its leadership pipeline through customized development solutions.",
                icon: "🏆",
              },
            ].map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="group rounded-2xl bg-white p-10 shadow-xl ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1DC0DA]/10 text-3xl">
                  {study.icon}
                </div>

                <h3 className="mb-3 text-xl font-semibold text-[#0E1C3F]">{study.title}</h3>
                <p className="leading-relaxed text-[#5b6d85]">{study.desc}</p>

                <button className="mt-6 inline-flex items-center gap-2 font-semibold text-[#1DC0DA] hover:underline">
                  Read Case Study <FaArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blog Section */}
      <section id="blog" className="bg-white py-16 pt-36">
        <div className="mx-auto max-w-8xl px-6 py-12 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-center text-4xl font-extrabold text-gray-900"
          >
            News & Articles
          </motion.h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700">
            Explore impactful transformations delivered across different industries and sectors.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {articles?.map((blog, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                custom={i * 0.2}
                className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                {/* Image with zoom + overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-64 w-full transform object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition duration-500 ease-out group-hover:bg-transparent"></div>
                </div>

                {/* Text under the image with fade-up */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="px-6 py-4"
                >
                  <div className="mb-2 text-sm font-semibold text-[#1DC0DA]">{blog.category}</div>
                  <p className="mb-2 text-sm text-[#6b7c93]">{blog.date}</p>
                  <h3 className="mb-4 text-xl text-[#0E1C3F]">{blog.title}</h3>

                  {/* Show Details button */}
                  <button
                    className="inline-flex items-center gap-3 rounded-md border border-[#1DC0DA] bg-white px-5 py-3 font-semibold text-[#1DC0DA] transition duration-300 hover:bg-[#1DC0DA] hover:text-white"
                    aria-label={`Show details about ${blog.title}`}
                  >
                    <span>Show Details</span>
                    <FaArrowRight className="transform transition duration-300 group-hover:translate-x-1" />
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* View More button */}
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="hidden items-center gap-2 rounded-full border-2 border-[#0E1C3F] bg-transparent px-6 py-2 text-[#0E1C3F] transition duration-300 hover:border-[#1DC0DA] hover:text-[#1DC0DA] md:flex"
            >
              View More
            </button>
          </div>
        </div>
      </section>

      {/* NEWS SECTION - IMPROVED */}
      <motion.section
        id="news"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        className="bg-white py-32"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-center text-4xl font-extrabold text-gray-900"
          >
            Latest News{" "}
          </motion.h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700">
            Discover the latest updates and announcements from our organization.
          </p>

          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {news.map((item, i) => (
              <motion.div
                key={i}
                className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="px-6 py-6">
                  <p className="mb-2 text-sm text-[#6b7c93]">{item.date}</p>
                  <h3 className="text-xl font-semibold text-[#0E1C3F]">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* GALLERY SECTION - IMPROVED */}
      <motion.section
        id="gallery"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        className="mx-auto mt-20 max-w-8xl rounded-2xl bg-[#f0f4f8] px-10 py-32 text-center shadow-lg"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-center text-4xl font-extrabold text-gray-900"
        >
          Media Gallery
        </motion.h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700">
          Explore special moments captured from events, gatherings, and achievements.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="h-64 w-full cursor-pointer rounded-xl bg-[#d3e8f9] shadow-md transition hover:shadow-xl"
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default MediaCenter;
