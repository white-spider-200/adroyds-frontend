import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { SplitText } from "../utils/SplitText";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};
export default function Sitemap() {
  const { i18n, t } = useTranslation();

  return (
    <div className="text-gray-900 selection:bg-cyan-200 selection:text-gray-900">
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
                <li className="font-semibold text-white">{t("sitemap")}</li>
              </ol>
            </nav>

            <SplitText className="text-4xl font-extrabold leading-tight text-white drop-shadow md:text-4xl">
              {t("sitemap")}
            </SplitText>
          </div>
        </motion.div>
      </section>
      <div className="mx-auto mb-16 mt-12 max-w-4xl px-6">
        <nav aria-label={t("sitemapNavigation")}>
          <ul className="grid grid-cols-1 gap-x-16 gap-y-6 md:grid-cols-2">
            <li>
              <Link
                to="/"
                className="text-lg font-semibold text-gray-900 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              >
                {t("home")}
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-lg font-semibold text-gray-900 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              >
                {t("aboutUs")}
              </Link>
            </li>

            <li>
              <span className="text-lg font-semibold text-gray-900">{t("coreServices")}</span>
              <ul className="ml-5 mt-2 list-inside list-disc space-y-2 text-gray-700">
                <li>
                  <Link
                    to="/services/recruitment"
                    className="hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  >
                    {t("recruitmentSolutionsTitle")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/academy"
                    className="hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  >
                    {t("academy.title")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/assessment"
                    className="hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  >
                    {t("talentAssessment.title")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/consulting"
                    className="hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  >
                    {t("hrConsulting.title")}
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <span className="text-lg font-semibold text-gray-900">{t("mediaCenter")}</span>
              <ul className="ml-5 mt-2 list-inside list-disc space-y-2 text-gray-700">
                <li>
                  <Link
                    to="/media-center/blogs"
                    className="hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  >
                    {t("blog")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/media-center/news"
                    className="hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  >
                    {t("news")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/media-center/case-studies"
                    className="hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  >
                    {t("caseStudies")}
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/careers"
                className="text-lg font-semibold text-gray-900 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              >
                {t("careers")}
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-lg font-semibold text-gray-900 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              >
                {t("contactUs")}
              </Link>
            </li>

            <li>
              <Link
                to="/faqs"
                className="text-lg font-semibold text-gray-900 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              >
                {t("faq")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
