import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const scrollToHash = (hash) => {
  if (!hash) return;
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToHash(location.hash);
  }, [location.hash]);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Overview */}
      <section id="overview" className="relative px-8 py-24 text-center md:px-16">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-blue-100"></div>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-5xl font-extrabold text-blue-700 md:text-5xl"
        >
          About <span className="text-blue-600">Adroyts</span>
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={0.2}
          className="mx-auto mt-6 max-w-3xl text-lg text-gray-600"
        >
          Adroyts is a forward-thinking organization providing world-class Human Capital and Digital
          Transformation solutions — helping businesses achieve excellence through people and innovation.
        </motion.p>
      </section>

      {/* Vision */}
      <section id="vision" className="bg-white px-8 py-20 text-center md:px-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-4xl font-bold text-blue-700"
        >
          Our Vision
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={0.2}
          className="mx-auto mt-6 max-w-3xl text-gray-600"
        >
          To be the trusted global partner in building sustainable organizations through empowered human
          capital and transformative strategies.
        </motion.p>
      </section>

      {/* Mission */}
      <section id="mission" className="bg-gray-100 px-8 py-20 text-center md:px-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-4xl font-bold text-blue-700"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={0.2}
          className="mx-auto mt-6 max-w-3xl text-gray-600"
        >
          We strive to deliver impactful, data-driven HR solutions that enhance organizational performance,
          productivity, and employee well-being — empowering sustainable growth.
        </motion.p>
      </section>

      {/* Values */}
      <section id="values" className="bg-white px-8 py-20 text-center md:px-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-4xl font-bold text-blue-700"
        >
          Our Core Values
        </motion.h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Integrity",
              desc: "We uphold transparency, trust, and ethical practices in every decision.",
            },
            {
              title: "Innovation",
              desc: "We embrace creativity to deliver cutting-edge HR and digital solutions.",
            },
            {
              title: "Excellence",
              desc: "We are committed to continuous improvement and exceptional quality.",
            },
            {
              title: "Teamwork",
              desc: "We foster collaboration to achieve shared goals and lasting success.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={i * 0.2}
              className="group rounded-2xl bg-gradient-to-br from-white to-blue-50 p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-3xl text-blue-600 transition-transform duration-300 group-hover:scale-110">
                ⭐
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
              <p className="mt-3 text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Adroyts */}
      <section id="why" className="bg-gray-100 px-8 py-20 text-center md:px-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-4xl font-bold text-blue-700"
        >
          Why Choose Adroyts?
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={0.2}
          className="mx-auto mt-6 max-w-3xl text-gray-600"
        >
          We combine deep industry expertise with modern HR technologies and strategic insights, ensuring
          every client achieves measurable and lasting results.
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { title: "15+ Years of Experience", icon: "🏆" },
            { title: "Global Partnerships", icon: "🌍" },
            { title: "Proven Success Stories", icon: "📈" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={i * 0.2}
              className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-3 text-4xl">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Board of Directors */}
      <section id="board" className="bg-white px-8 py-20 text-center md:px-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-4xl font-bold text-blue-700"
        >
          Board of Directors
        </motion.h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {["Mohammed Al-Khaled", "Sara Al-Hassan", "Omar Qudsi", "Layla Al-Fahad"].map((name, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={i * 0.2}
              className="rounded-2xl bg-gray-50 p-6 shadow transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 h-28 w-28 rounded-full bg-gradient-to-br from-blue-200 to-blue-100"></div>
              <h3 className="font-semibold text-gray-800">{name}</h3>
              <p className="text-sm text-gray-500">Board Member</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Executive Management */}
      <section id="executive" className="bg-gray-100 px-8 py-20 text-center md:px-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-4xl font-bold text-blue-700"
        >
          Executive Management
        </motion.h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {["Khalid Ahmed", "Noura Saleh", "Hassan Omar", "Reem Faris"].map((name, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={i * 0.2}
              className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 h-28 w-28 rounded-full bg-gradient-to-br from-blue-100 to-blue-50"></div>
              <h3 className="font-semibold text-gray-800">{name}</h3>
              <p className="text-sm text-gray-500">Executive</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
