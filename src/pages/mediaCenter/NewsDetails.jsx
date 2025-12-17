import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCalendarAlt, FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";

import mainServices from "../../services/mainServices";
import { SplitText } from "../../utils/SplitText";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const NewsDetails = () => {
  const { id } = useParams();
  const { i18n, t } = useTranslation();

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await mainServices.getNewsById(id, i18n.language);
        setNews(res?.data?.data || null);
      } catch (error) {
        console.error("News fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id, i18n.language]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <FaSpinner className="animate-spin text-4xl text-cyan-400" />
      </div>
    );
  }

  if (!news) {
    return <p className="py-20 text-center text-gray-500">{t("newsNotFound")}</p>;
  }

  return (
    <div className="bg-white text-[#0E1C3F] selection:bg-cyan-400 selection:text-white">
      {/* HERO */}
      <section className="relative -mt-40 flex min-h-[calc(50vh+70px)] items-center justify-center px-6 text-center">
        <img
          src={news.image || "/assets/adroyts-office.webp"}
          alt={news.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F]/80 to-[#0E1C3F]/30" />

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 mt-32">
          <SplitText className="text-4xl font-extrabold text-white">{news.title}</SplitText>

          {news.created_at && (
            <p className="mt-4 flex items-center justify-center gap-2 text-white/75">
              <FaCalendarAlt />
              {new Date(news.created_at).toLocaleDateString(i18n.language, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto max-w-3xl px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="prose prose-lg max-w-none text-gray-700"
        >
          <div dangerouslySetInnerHTML={{ __html: news.body }} />
        </motion.div>
      </section>
    </div>
  );
};

export default NewsDetails;
