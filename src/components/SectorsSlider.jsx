import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

import { SplitText } from "../utils/SplitText";

const sectors = [
  {
    title: "governmentTitle",
    description: "governmentDesc",
    image: "/assets/sec-1.png",
  },
  {
    title: "realEstateTitle",
    description: "realEstateDesc",
    image: "/assets/sec-2.png",
  },
  {
    title: "financeTitle",
    description: "financeDesc",
    image: "/assets/sec-3.png",
  },
  {
    title: "educationTitle",
    description: "educationDesc",
    image: "/assets/sec-4.png",
  },
  {
    title: "energyTitle",
    description: "energyDesc",
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
  const { t } = useTranslation();
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SplitText className="mb-14 text-center text-4xl font-bold tracking-tight text-[#0E1C3F] md:text-4xl">
          {t("sectorsWeServe")}
        </SplitText>

        {/* Uniform Card Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="flex w-full flex-col overflow-visible rounded-xl bg-cover bg-center pt-4"
              style={{ backgroundImage: `url(${sector.image})` }}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={index}
              whileHover={{ scale: 1.04, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              {/* Sticky Title */}
              <div className="z-20 mx-auto mb-16 w-[85%] rounded-xl bg-white/90 px-4 py-2 text-center shadow-lg backdrop-blur">
                <h3 className="text-lg font-bold text-[#0E1C3F]">{t(sector.title)}</h3>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 mx-2 mb-2 mt-auto rounded-xl p-3">
                <p className="text-center text-lg leading-relaxed text-white/90">{t(sector.description)}</p>
              </div>

              {/* Soft Glow */}
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
