import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  }),
};

const BlogDetails = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Simulate fetching data
    setTimeout(() => {
      setBlog({
        id: 1,
        title: "How Human Capital Consulting Can Transform Your Organization",
        date: "November 20, 2025",
        image: "/assets/eew.jpg",
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
      <section className="relative -mt-40 flex min-h-[calc(50vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img src={blog.image} alt={blog.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#0E1C3F] opacity-70"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl font-extrabold text-white drop-shadow md:text-5xl">{blog.title}</h1>
          <p className="mt-4 flex items-center justify-center gap-2 text-white/80">
            <FaCalendarAlt /> {blog.date}
          </p>
        </motion.div>
      </section>

      {/* BLOG CONTENT */}
      <section className="container mx-auto max-w-4xl px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="prose prose-lg max-w-none text-gray-700"
        >
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </motion.div>

        <div className="mt-10 flex justify-between">
          <button
            onClick={() => alert("Navigate back to Blogs")}
            className="rounded-lg border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-white"
          >
            Back to Blogs
          </button>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-white transition hover:bg-cyan-500"
          >
            Top
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
