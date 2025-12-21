import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";

import mainServices from "../../services/mainServices";
import { SplitText } from "../../utils/SplitText";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const CaseStudiesDetails = () => {
  const { id } = useParams();
  const { i18n, t } = useTranslation();

  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchCaseStudy = async () => {
      setLoading(true);
      try {
        const res = await mainServices.getCaseStudyById(id, i18n.language);
        setCaseStudy(res?.data?.data || null);
      } catch (error) {
        console.error("Case study fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [id, i18n.language]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <FaSpinner className="animate-spin text-4xl text-cyan-400" />
      </div>
    );
  }

  if (!caseStudy) {
    return <p className="py-20 text-center text-gray-500">{t("caseStudyNotFound")}</p>;
  }

  return (
    <div className="bg-white text-[#0E1C3F]">
      {/* HERO */}
      <section className="relative -mt-40 flex min-h-[calc(50vh+70px)] items-center justify-center px-6 text-center">
        <img
          src={caseStudy.image || "/assets/placeholder.png"}
          alt={caseStudy.name}
          className={`absolute inset-0 h-full w-full ${
            caseStudy.image ? "object-cover" : "bg-[#0E1C3F] object-contain p-12"
          }`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F]/80 to-[#0E1C3F]/40" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 mt-32 max-w-4xl"
        >
          <SplitText className="text-4xl font-extrabold text-white">{caseStudy.name}</SplitText>
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
          <div dangerouslySetInnerHTML={{ __html: caseStudy.description }} />
        </motion.div>
      </section>
    </div>
  );
};

export default CaseStudiesDetails;
