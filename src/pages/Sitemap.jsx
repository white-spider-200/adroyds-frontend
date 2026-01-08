import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Sitemap() {
  const { t } = useTranslation();

  return (
    <div className="text-gray-900 selection:bg-cyan-200 selection:text-gray-900">
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
            {t("sitemap")}
          </motion.h1>
        </div>

        {/* Clipped Image */}
        <div className="absolute top-0 z-0 h-full w-full overflow-hidden md:w-[40%] ltr:right-0 rtl:left-0">
          <img
            src="/assets/adroyts-office.webp"
            alt="Expert Training Career Growth"
            className="clipped-image h-full w-full object-cover"
          />
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C3F]/85 via-[#0E1C3F]/50 to-transparent md:bg-gradient-to-r md:from-[#0E1C3F]/70 md:via-[#0E1C3F]/40 md:to-transparent" />
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
