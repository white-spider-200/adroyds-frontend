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
            {t("faqs")}
          </motion.h1>
        </div>

        {/* Clipped Image */}
        <div className="absolute top-0 z-0 h-full w-full overflow-hidden md:w-[40%] ltr:right-0 rtl:left-0">
          <img
            src="/assets/jobs-arabian-copy-scaled.png"
            alt="Expert Training Career Growth"
            className="clipped-image h-full w-full object-cover"
          />
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C3F]/85 via-[#0E1C3F]/50 to-transparent md:bg-gradient-to-r md:from-[#0E1C3F]/70 md:via-[#0E1C3F]/40 md:to-transparent" />
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
