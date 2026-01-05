import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSpinner } from "react-icons/fa";

import mainServices from "../services/mainServices";
import { SplitText } from "../utils/SplitText";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faq, setFAQ] = useState([]);
  const [loading, setLoading] = useState(false);

  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchFAQ = async () => {
      setLoading(true);
      try {
        const res = await mainServices.getFAQ(i18n.language);

        setFAQ(res?.data?.data || []);
      } catch (err) {
        console.error("FAQ fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQ();
  }, [i18n.language]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white font-cairo text-gray-900">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(50vh+70px)] flex-col items-center justify-center">
        <img
          src="/assets/jobs-arabian-copy-scaled.png"
          alt="FAQs Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F]/80 to-[#0E1C3F]/30" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 mt-40 text-center"
        >
          <h1 className="mb-6 text-4xl font-extrabold text-white">{t("faqs")}</h1>
        </motion.div>
      </section>

      {/* FAQ SECTION */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        {loading && (
          <div className="flex justify-center py-20">
            <FaSpinner className="animate-spin text-4xl text-cyan-400" />
          </div>
        )}

        {!loading && faq.length === 0 && <p className="text-center text-gray-500">{t("noFaqsFound")}</p>}

        <div className="space-y-3">
          {faq.map((item, index) => (
            <div
              key={item.id || index}
              className="cursor-pointer rounded-md border p-3 shadow transition hover:shadow-md"
              style={{ backgroundColor: "#EAF6FF", borderColor: "#BEE3F8" }}
              onClick={() => toggle(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#0E1C3F]">{item.question}</h3>
                <span className="select-none text-xl font-bold text-cyan-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <div
                  className="mt-2 text-sm text-gray-800"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faqs;
