import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

const TrustedCompanies = ({ clients }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="bg-white py-20">
      <div className="text-center">
        <h2 className="mb-12 text-4xl font-black text-[#192757] md:text-5xl">Trusted by...</h2>
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center">
              <img
                src={client.image}
                alt={client.name}
                className="h-20 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrustedCompanies;
