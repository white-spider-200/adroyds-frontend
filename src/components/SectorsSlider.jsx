import { motion } from "framer-motion";
import React from "react";

const sectors = [
  {
    title: "Government",
    description:
      "We support government entities in building efficient human capital systems, enhancing workforce performance, and fostering leadership capabilities to ensure sustainable organizational growth and public service excellence.",
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
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const SectorsSlider = () => {
  return (
    <div className="bg-[#f9fafb] py-14">
      <div className="mx-auto max-w-7xl px-0 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="mb-16 text-center text-4xl font-bold text-[#192757] md:text-5xl"
        >
          Sectors
        </motion.h2>

        <div className="flex justify-between">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="mx-1.5 min-w-0 flex-1 cursor-pointer rounded-xl bg-black/20 bg-cover p-6 pb-10"
              style={{ backgroundImage: `url(${sector.image})` }}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="mb-4 text-start text-[28px] font-bold text-white">{sector.title}</h3>
              <p className="text-start text-xl font-normal text-white">{sector.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectorsSlider;
