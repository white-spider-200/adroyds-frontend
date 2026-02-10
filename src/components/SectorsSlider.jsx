import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";

import mainServices from "../services/mainServices";
import { SplitText } from "../utils/SplitText";

const Arrow = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 z-30 -translate-y-1/2 text-2xl transition hover:scale-110 ${direction === "left" ? "-left-10" : "-right-10"}`}
  >
    {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
  </button>
);

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const sliderSettings = {
  dots: false,
  arrows: true,
  prevArrow: <Arrow direction="left" />,
  nextArrow: <Arrow direction="right" />,
  infinite: true,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 4 } },
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const SectorsSlider = () => {
  const { t, i18n } = useTranslation();

  const [sectors, setSectors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSectors = async () => {
      setLoading(true);
      try {
        const res = await mainServices.getSectors(i18n.language);
        setSectors(res?.data?.data || []);
      } catch (err) {
        console.error("Sectors fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSectors();
  }, [i18n.language]);

  if (loading) return null; // or skeleton loader

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SplitText className="mb-14 text-4xl font-bold tracking-tight text-[#0E1C3F]">
          {t("sectorsWeServe")}
        </SplitText>

        <Slider {...sliderSettings}>
          {sectors.map((sector, index) => (
            <div key={sector.id || index} className="px-2 py-2">
              <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="relative flex h-[420px] flex-col overflow-hidden rounded-xl bg-cover bg-center pt-4"
                style={{ backgroundImage: `url(${sector.image})` }}
              >
                {/* Title */}
                <div className="z-20 mx-auto mb-1 w-[85%] rounded-xl bg-white/90 px-4 py-2 text-center shadow-lg backdrop-blur">
                  <h3 className="text-lg font-bold text-[#0E1C3F]">{sector.title}</h3>
                </div>

                {/* Description */}
                <div className="relative z-10 mx-3 mb-3 mt-auto rounded-xl p-3">
                  <p className="text-lg text-white/90">{sector.description} </p>
                </div>

                {/* Glow */}
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
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectorsSlider;
