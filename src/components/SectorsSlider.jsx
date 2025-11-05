import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";

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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-[#f9fafb] py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="mb-16 text-center text-4xl font-black text-[#192757] md:text-6xl"
        >
          Sectors
        </motion.h2>

        <Slider {...settings}>
          {sectors.map((sector, index) => (
            <div key={index}>
              <motion.div
                className="mx-2 h-full min-h-[554px] rounded-3xl bg-black/20 bg-cover p-8"
                style={{ backgroundImage: `url(${sector.image})` }}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                custom={index}
              >
                <h3 className="mb-7 text-start text-[28px] font-black text-white">{sector.title}</h3>
                <p className="text-start text-xl font-normal text-white">{sector.description}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectorsSlider;
