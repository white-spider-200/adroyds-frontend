import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
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
    <div className="font-lato bg-gray-50 px-8 py-20 text-gray-800">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        className="mb-12 text-center text-4xl font-bold text-blue-600"
      >
        Knowledge & Media Center
      </motion.h1>

      {/* Case Studies */}
      <motion.section
        id="case-studies"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        className="mb-20 text-center"
      >
        <h2 className="mb-4 text-3xl font-semibold text-blue-600">Case Studies</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Explore our success stories and transformation journeys that demonstrate the power of Adroyts’
          innovative HR and digital solutions.
        </p>
      </motion.section>

      {/* Blog */}
      <motion.section
        id="blog"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        custom={0.2}
        className="mb-20 text-center"
      >
        <h2 className="mb-4 text-3xl font-semibold text-blue-600">Blog</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Read expert insights, leadership advice, and the latest trends in HR innovation, technology, and
          management.
        </p>
      </motion.section>

      {/* News */}
      <motion.section
        id="news"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        custom={0.4}
        className="mb-20 text-center"
      >
        <h2 className="mb-4 text-3xl font-semibold text-blue-600">News</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Stay updated on Adroyts’ announcements, events, and the impact we’re making across industries.
        </p>
      </motion.section>

      {/* Gallery */}
      <motion.section
        id="gallery"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        custom={0.6}
        className="text-center"
      >
        <h2 className="mb-4 text-3xl font-semibold text-blue-600">Media Gallery</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Explore our visual journey — events, team moments, and milestones captured in photos and videos.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-56 w-full rounded-xl bg-gray-200 shadow transition hover:scale-105 hover:shadow-lg"
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default MediaCenter;
