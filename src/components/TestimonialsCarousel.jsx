import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

import { SplitText } from "../utils/SplitText";

// Custom navigation arrows, now receive isRTL to decide icon
const NextArrow = ({ onClick, isRTL }) => (
  <button
    type="button"
    onClick={onClick}
    className="rounded-full border-2 border-cyan-400 p-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-white"
    aria-label="Next"
  >
    {isRTL ? <FaArrowLeft /> : <FaArrowRight />}
  </button>
);

const PrevArrow = ({ onClick, isRTL }) => (
  <button
    type="button"
    onClick={onClick}
    className="rounded-full border-2 border-cyan-400 p-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-white"
    aria-label="Previous"
  >
    {isRTL ? <FaArrowRight /> : <FaArrowLeft />}
  </button>
);

export const TestimonialsCarousel = ({ testimonials }) => {
  const sliderRef = React.useRef(null);
  const { t, i18n } = useTranslation();

  const isRTL = i18n.dir() === "rtl";

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // using custom arrows
    rtl: isRTL,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section dir={isRTL ? "rtl" : "ltr"} className="relative mx-auto max-w-7xl px-6 pb-10 pt-28">
      <div
        className={`grid grid-cols-1 gap-1 lg:grid-cols-4 ${
          isRTL ? "text-right" : "text-left"
        } ${isRTL ? "lg:flex-row-reverse" : ""}`} // optional layout flip on large screens
      >
        {/* Left Section */}
        <div className="relative col-span-1 flex flex-col items-start lg:items-start">
          <SplitText
            className={`mt-2 text-3xl font-bold leading-snug text-[#1b1b1b] sm:text-4xl ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {t("clientsSay")}
          </SplitText>

          <div
            className={`mt-8 flex items-center gap-4 sm:absolute sm:bottom-0 sm:left-0 sm:justify-start ${
              isRTL ? "sm:left-auto sm:right-0" : ""
            }`}
          >
            <PrevArrow onClick={() => sliderRef.current.slickPrev()} isRTL={isRTL} />
            <NextArrow onClick={() => sliderRef.current.slickNext()} isRTL={isRTL} />
          </div>
        </div>

        {/* Right Section (Carousel) */}
        <div className="ltr-ignore relative col-span-1 lg:col-span-3">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item, idx) => (
              <div key={idx} className="px-2">
                <div className="flex h-auto min-h-[320px] flex-col justify-between rounded-lg border-b-8 border-[#192757] bg-white shadow-lg transition sm:h-[360px]">
                  <div className="p-6 text-gray-600">
                    <p
                      dir={isRTL ? "rtl" : "ltr"}
                      className={`text-base italic leading-relaxed sm:text-lg ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      “{item.comment}”
                    </p>
                  </div>
                  <div className="flex items-center gap-4 bg-white px-6 py-4 sm:px-8 sm:py-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
                    />
                    <div className={isRTL ? "text-right" : "text-left"}>
                      <h4 className="font-semibold text-cyan-400">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.job}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
