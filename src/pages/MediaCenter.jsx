import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  useEffect(() => scrollToHash(location.hash), [location.hash]);

  return (
    <div className="bg-white font-cairo text-gray-900 selection:bg-blue-200 selection:text-gray-900">
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

      {/* CASE STUDIES */}
      <div className="mx-auto mb-20 max-w-8xl rounded-xl bg-gray-100 p-10 shadow-md">
        <motion.section
          id="case-studies"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">Case Studies</h2>
          <p className="mx-auto max-w-2xl text-gray-700">
            Explore transformation journeys showcasing the impact of Adroyts’ HR and digital solutions.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg"
              >
                <div className="mb-4 h-32 w-full rounded-xl bg-gray-300"></div>
                <h3 className="text-lg font-semibold text-gray-900">Case Study {i}</h3>
                <p className="mt-2 text-sm text-gray-700">
                  A brief overview of the strategic impact and business outcomes.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Separator */}
      <div className="mx-auto my-16 h-px w-40 rounded bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"></div>

      {/* BLOG */}
      <motion.section
        id="blog"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        custom={0.2}
        className="mx-auto mb-20 max-w-8xl rounded-xl bg-gray-100 p-10 text-center shadow-md"
      >
        <h2 className="mb-4 text-3xl font-semibold text-gray-900">Blog</h2>
        <p className="mx-auto max-w-2xl text-gray-700">
          Expert insights, leadership perspectives, and HR innovation trends.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg"
            >
              <div className="h-36 w-full bg-gray-300"></div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">Blog Post {i}</h3>
                <p className="mt-2 text-sm text-gray-700">Latest trends and expert thought leadership.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Separator */}
      <div className="mx-auto my-16 h-px w-40 rounded bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"></div>

      {/* NEWS */}
      <motion.section
        id="news"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        custom={0.4}
        className="mx-auto mb-20 max-w-8xl rounded-xl bg-gray-100 p-10 text-center shadow-md"
      >
        <h2 className="mb-4 text-3xl font-semibold text-gray-900">News</h2>
        <p className="mx-auto max-w-2xl text-gray-700">
          Stay updated on announcements, events, and organizational milestones.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900">News Update {i}</h3>
              <p className="mt-2 text-sm text-gray-700">
                Highlights of recent achievements and announcements.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Separator */}
      <div className="mx-auto my-16 h-px w-40 rounded bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"></div>

      {/* GALLERY */}
      <motion.section
        id="gallery"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        custom={0.6}
        className="mx-auto max-w-8xl rounded-xl bg-gray-100 p-10 text-center shadow-md"
      >
        <h2 className="mb-4 text-3xl font-semibold text-gray-900">Media Gallery</h2>
        <p className="mx-auto max-w-2xl text-gray-700">
          A visual journey through events, milestones, and team moments.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="h-56 w-full cursor-pointer rounded-xl bg-gray-300 shadow transition hover:shadow-lg"
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default MediaCenter;
