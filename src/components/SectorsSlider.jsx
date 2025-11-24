import { motion } from "framer-motion";
import React from "react";

import { SplitText } from "../utils/SplitText";

const sectors = [
  {
    title: "Government",
    description:
      "We support government entities in building efficient human capital systems, enhancing workforce performance, and fostering leadership capabilities to ensure sustainable growth and public service excellence",
    image: "/assets/sec-1.png",
  },
  {
    title: "Real Estate",
    description:
      "We help real estate companies attract top talent, optimize organizational structures, and develop effective leadership to drive growth and deliver exceptional customer value.",
    image: "/assets/sec-2.png",
  },
  {
    title: "Finance",
    description:
      "We empower financial institutions to build high-performing teams, strengthen compliance culture, and enhance leadership effectiveness for long-term stability and innovation.",
    image: "/assets/sec-3.png",
  },
  {
    title: "Education",
    description:
      "We partner with educational institutions to develop qualified talent, improve staff engagement, and foster leadership that drives academic excellence and institutional success.",
    image: "/assets/sec-4.png",
  },
  {
    title: "Energy",
    description:
      "We assist energy sector organizations in optimizing workforce capabilities, promoting safety culture, and preparing leaders to navigate the evolving challenges of a dynamic industry.",
    image: "/assets/sec-5.png",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const SectorsSlider = () => {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-8xl px-6 text-center">
        <SplitText className="mb-14 text-center text-4xl font-bold tracking-tight text-[#0E1C3F] md:text-5xl">
          Sectors We Serve
        </SplitText>

        {/* Uniform Card Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="relative flex w-full flex-col justify-end overflow-hidden rounded-xl bg-cover bg-center pt-32"
              style={{ backgroundImage: `url(${sector.image})` }}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={index}
              whileHover={{
                scale: 1.04,
                rotate: 0.5,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              {/* Gradient Overlay */}

              {/* Content */}
              <div className="relative z-10 mx-6 mb-4 rounded-xl border border-white/20 bg-white/10 p-3">
                <h3 className="mb-3 text-left text-2xl font-semibold text-white">{sector.title}</h3>
                <p className="text-left text-lg leading-relaxed text-white/90">{sector.description}</p>
              </div>

              {/* Soft Glow on Hover */}
              <motion.div
                className="pointer-events-none absolute inset-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.25 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: "radial-gradient(circle at center, rgba(255,255,255,0.25), transparent 70%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectorsSlider;
