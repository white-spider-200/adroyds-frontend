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
                <h1 className="mt-20 px-36 text-4xl font-extrabold text-white md:text-5xl">{t("sitemap")}</h1>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Constrained Content */}
          <div className="relative h-[45vh] md:h-auto">
            <img
              src="/assets/adroyts-office.webp"
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
