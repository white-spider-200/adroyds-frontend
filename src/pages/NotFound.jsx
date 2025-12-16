import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { SplitText } from "../utils/SplitText";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const NotFound = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  return (
    <div className="bg-white font-cairo text-gray-900 selection:bg-blue-200 selection:text-gray-900">
      {/* HERO SECTION */}
      <section
        id="overview"
        className="relative -mt-40 flex min-h-[calc(50vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center"
      >
        <img
          src="/assets/adroyts-office.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F]/80 to-[#0E1C3F]/30"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6"
        >
          <div className="mt-32 rounded-lg px-8 py-12 md:px-12 md:py-16">
            <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
              <ol className="inline-flex space-x-2">
                <li>
                  <a href="/" className="hover:text-white hover:underline">
                    {t("home")}
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li className="font-semibold text-white">404 Error</li>
              </ol>
            </nav>

            <SplitText className="text-4xl font-extrabold leading-tight text-white drop-shadow md:text-4xl">
              Page Not Found
            </SplitText>
          </div>
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      <div className="mx-auto mb-10 mt-10 max-w-3xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-xl bg-white/60 p-10"
        >
          {/* ICON */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <FaExclamationTriangle className="mb-6 text-7xl text-[#0E1C3F]" />
          </motion.div>

          {/* STATUS NUMBER */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-5xl font-extrabold text-[#0E1C3F]"
          >
            404
          </motion.h1>

          {/* BUTTON */}
          <div className="mt-8 flex justify-center">
            <button
              className="rounded-full bg-[#0E1C3F] px-8 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
              onClick={() => navigate("/")}
            >
              Go Back Home
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
