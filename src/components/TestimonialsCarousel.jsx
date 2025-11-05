import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

// Custom navigation arrows
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="rounded-full border-2 border-[#1dc0da] p-3 text-[#1dc0da] transition hover:bg-[#1dc0da] hover:text-white"
  >
    <FaArrowRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="rounded-full border-2 border-[#1dc0da] p-3 text-[#1dc0da] transition hover:bg-[#1dc0da] hover:text-white"
  >
    <FaArrowLeft />
  </button>
);

export const TestimonialsCarousel = ({ testimonials }) => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // disable built-in arrows
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative mx-auto max-w-8xl px-6 pb-10 pt-28 md:px-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
        {/* Left Section (Text + Arrows) */}
        <div className="col-span-1 flex flex-col items-start">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1dc0da]">Testimonial</p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="mt-2 text-left text-3xl font-bold leading-snug text-[#1b1b1b] sm:text-4xl"
          >
            What clients say about us
          </motion.h2>

          {/* Arrows below text */}
          <div className="absolute bottom-32 left-64 mt-8 flex items-center gap-4">
            <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current.slickNext()} />
          </div>
        </div>

        {/* Right Section (Carousel) */}
        <div className="relative col-span-3">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="px-4">
                <div className="flex h-[360px] flex-col justify-between rounded-2xl border-b-8 border-[#192757] bg-white shadow-lg transition">
                  <div className="p-8 text-gray-600">
                    <p className="text-left text-base italic leading-relaxed">“{t.comment}”</p>
                  </div>
                  <div className="flex items-center gap-4 bg-white px-8 py-5">
                    <img src={t.image} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold text-[#1dc0da]">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.job}</p>
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
