import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

import { SplitText } from "../utils/SplitText";

// Custom navigation arrows
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="rounded-full border-2 border-cyan-400 p-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-white"
  >
    <FaArrowRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="rounded-full border-2 border-cyan-400 p-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-white"
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
    <section className="relative mx-auto max-w-6xl px-6 pb-10 pt-28">
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-4">
        {/* Left Section (Text + Arrows) */}
        <div className="relative col-span-1 flex flex-col items-start">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Testimonial</p>

          <SplitText className="mt-2 text-left text-3xl font-bold leading-snug text-[#1b1b1b] sm:text-4xl">
            What clients say about us
          </SplitText>

          {/* Arrows below text - reposition for small screens */}
          <div className="mt-8 flex items-center gap-4 sm:absolute sm:bottom-0 sm:left-0">
            <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current.slickNext()} />
          </div>
        </div>

        {/* Right Section (Carousel) */}
        <div className="relative col-span-1 lg:col-span-3">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="px-2">
                <div className="flex h-auto min-h-[320px] flex-col justify-between rounded-lg border-b-8 border-[#192757] bg-white shadow-lg transition sm:h-[360px]">
                  <div className="p-6 text-gray-600">
                    <p className="text-left text-base italic leading-relaxed sm:text-lg">“{t.comment}”</p>
                  </div>
                  <div className="flex items-center gap-4 bg-white px-6 py-4 sm:px-8 sm:py-5">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
                    />
                    <div>
                      <h4 className="font-semibold text-cyan-400">{t.name}</h4>
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
