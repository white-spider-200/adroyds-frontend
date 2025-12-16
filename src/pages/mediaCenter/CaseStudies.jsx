import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  }),
};

const dummyCaseStudies = [
  {
    id: 1,
    title: "Transforming Hiring Process for a Tech Giant",
    summary:
      "Implemented AI-powered recruitment automation to reduce hiring time by 40%, enhancing candidate experience and improving quality of hire.",
    category: "Technology",
    date: "2024-06-01",
    client: "Tech Solutions Inc.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Boosting Sales Through Strategic Talent Acquisition",
    summary:
      "Partnered with a leading retail chain to identify and onboard top sales talent, resulting in a 25% increase in quarterly revenue.",
    category: "Retail",
    date: "2024-04-15",
    client: "RetailPro Ltd.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Leadership Development for Financial Services",
    summary:
      "Designed and delivered tailored leadership programs, leading to a 30% increase in internal promotions and improved succession planning.",
    category: "Finance",
    date: "2024-03-10",
    client: "FinanceCore Group",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
];

const CaseStudies = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
                  {t("caseStudies")}
                </li>
              </ol>
            </nav>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white drop-shadow md:text-4xl">
              {t("caseStudies")}
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Case Studies Grid */}
      <section id="blog" className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {dummyCaseStudies.map((caseStudy, i) => (
              <motion.article
                key={caseStudy.id}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                custom={i * 0.2}
                className="group cursor-pointer overflow-hidden rounded-lg bg-white transition-shadow hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 flex flex-wrap items-center justify-between text-sm font-semibold text-cyan-400">
                    <span>{caseStudy.category}</span>
                    <time dateTime={caseStudy.date}>
                      {new Date(caseStudy.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-[#0E1C3F] transition-colors group-hover:text-cyan-400">
                    {caseStudy.title}
                  </h3>

                  <p className="mb-4 line-clamp-3 text-gray-600">{caseStudy.summary}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Client: {caseStudy.client}</span>
                    <button
                      onClick={() => navigate(`/case-study?id=${caseStudy.id}`)}
                      aria-label={`Read more about ${caseStudy.title}`}
                      className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-[#0E1C3F]"
                    >
                      <span>{t("readMore")}</span>
                      <LuArrowUpRight
                        className={`transform transition duration-300 ${i18n.language === "ar" ? "scale-x-[-1]" : ""}`}
                      />{" "}
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View More Button */}
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="hidden items-center gap-3 rounded-full border-2 border-[#0E1C3F] bg-transparent px-8 py-3 font-semibold text-[#0E1C3F] transition hover:border-cyan-400 hover:text-cyan-400 md:flex"
            >
              {t("viewMore")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
