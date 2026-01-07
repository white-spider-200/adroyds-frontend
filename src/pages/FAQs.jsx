import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown, FaChevronUp, FaSpinner } from "react-icons/fa";

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
                <h1 className="mt-20 px-36 text-4xl font-extrabold text-white md:text-5xl">{t("faqs")}</h1>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Constrained Content */}
          <div className="relative h-[45vh] md:h-auto">
            <img
              src="/assets/jobs-arabian-copy-scaled.png"
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
              className="cursor-pointer rounded-md bg-gray-100 p-5"
              onClick={() => toggle(index)}
              style={{
                backgroundColor: openIndex === index ? "#2470c3" : "#f3f5f5",
                color: openIndex === index ? "white" : "black",
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{item.question}</h3>
                {openIndex === index ? (
                  <span className="h-fit rounded-full bg-white p-2 text-black">
                    <FaChevronUp />{" "}
                  </span>
                ) : (
                  <span className="h-fit rounded-full bg-cyan-400 p-2 text-white">
                    <FaChevronDown />{" "}
                  </span>
                )}
              </div>

              {openIndex === index && (
                <div className="mt-2 text-sm" dangerouslySetInnerHTML={{ __html: item.answer }} />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faqs;
