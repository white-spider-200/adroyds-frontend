import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { SplitText } from "../utils/SplitText";

const faqData = [
  {
    question: "How can I apply for a job?",
    answer:
      "You can apply by filling out the application form on our Careers page and submitting your resume.",
  },
  {
    question: "What is the recruitment process?",
    answer:
      "Our recruitment process involves application review, initial interview, technical assessment, and final interview.",
  },
  {
    question: "Can I submit multiple applications?",
    answer:
      "Yes, you can apply for multiple positions, but please tailor your resume and cover letter accordingly.",
  },
  {
    question: "Do you offer internships?",
    answer:
      "Yes, we offer internships periodically. Please check the Job Openings section for available internship positions.",
  },
  {
    question: "How do I contact the HR department?",
    answer:
      "You can contact HR via the contact information on our Contact page or by emailing hr@company.com.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { i18n, t } = useTranslation();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white font-cairo text-gray-900 selection:bg-blue-200 selection:text-gray-900">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(50vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/jobs-arabian-copy-scaled.png"
          alt="FAQs Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F]/80 to-[#0E1C3F]/30"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <div className="mt-40 rounded-lg px-8 py-12 md:px-12 md:py-16">
            <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
              <ol className="inline-flex space-x-2">
                <li>
                  <a href="/" className="hover:text-white hover:underline">
                    {t("home")}
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li className="font-semibold text-white" aria-current="page">
                  FAQs
                </li>
              </ol>
            </nav>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
              Frequently Asked Questions
            </h1>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <SplitText className="mb-12 text-center text-4xl font-extrabold text-[#0f0f19] md:text-5xl">
          Your Questions Answered
        </SplitText>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-lg border p-6 shadow transition hover:shadow-lg"
              style={{
                backgroundColor: "#EAF6FF",
                borderColor: "#BEE3F8",
              }}
              onClick={() => toggle(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold" style={{ color: "#0E1C3F" }}>
                  {faq.question}
                </h3>
                <span className="select-none text-2xl font-bold" style={{ color: "#06B6D4" }}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-4" style={{ color: "#1F2937" }}>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faqs;
