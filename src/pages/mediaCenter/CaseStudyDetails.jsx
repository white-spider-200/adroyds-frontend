import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

import { SplitText } from "../../utils/SplitText";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  }),
};

const CaseStudyDetails = () => {
  const [loading, setLoading] = useState(true);
  const [caseStudy, setBlog] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Simulate fetching data
    setTimeout(() => {
      setBlog({
        id: 1,
        title: "How Human Capital Consulting Can Transform Your Organization",
        date: "November 20, 2025",
        image: "/assets/adroyts-consulting.png",
        category: "Consulting",
        content: `
          <p>Adroyts has been helping organizations unlock the potential of their workforce for nearly two decades.</p>
          <p>Our Human Capital Consulting services align talent strategy with business objectives to drive growth and innovation.</p>
          <h2>Key Benefits:</h2>
          <ul>
            <li>Improved workforce performance</li>
            <li>Better talent retention</li>
            <li>Optimized recruitment strategies</li>
          </ul>
          <p>Partner with us to elevate your human capital strategy and empower your teams for success.</p>
        `,
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <FaCalendarAlt className="animate-spin text-4xl text-cyan-400" />
        <span className="ml-4 mt-1 text-lg font-semibold text-cyan-400">Loading...</span>
      </div>
    );
  }

  return (
    <div className="bg-white font-sans text-[#0E1C3F] selection:bg-cyan-400 selection:text-white">
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
                    Home
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li>
                  <a href="/" className="hover:text-white hover:underline">
                    Blogs
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li className="font-semibold text-white">{caseStudy.title}</li>
              </ol>
            </nav>

            <SplitText className="text-4xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
              {caseStudy.title}
            </SplitText>
            <p className="mt-4 flex items-center justify-center gap-2 text-white/75">
              <FaCalendarAlt /> {caseStudy.date}
            </p>
          </div>
        </motion.div>
      </section>

      {/* BLOG CONTENT */}
      <section className="container mx-auto max-w-3xl px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="prose prose-lg max-w-none text-gray-700"
        >
          {/* CaseStudy Image */}
          {caseStudy.image && (
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="mb-6 h-[450px] w-full rounded-lg object-cover"
            />
          )}

          {/* CaseStudy Date */}
          {caseStudy.date && (
            <p className="mb-4 text-sm text-gray-500">
              {new Date(caseStudy.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}

          {/* CaseStudy Content */}
          <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
        </motion.div>
      </section>
    </div>
  );
};

export default CaseStudyDetails;
