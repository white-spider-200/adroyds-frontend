import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlusCircle } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Recruitment Solutions",
    subtitle: "Recruitment Solutions for a Smarter Workforce",
    description:
      "We provide intelligent recruitment solutions designed to attract, assess, and retain top talent — empowering your organization to build a smarter, more efficient workforce that drives long-term success.",
    image: "/assets/services-1.png",
    buttonText: "View Service",
  },
  {
    id: 2,
    title: "Adroyts Academy",
    subtitle: "Talent Acquisition Solutions",
    description:
      "Our recruitment services connect you with top-tier professionals. We blend technology with a human touch to ensure perfect culture and skill alignment.",
    image: "/assets/services-1.png",
    buttonText: "View Service",
  },
  {
    id: 3,
    title: "Assessment Center Solutions",
    subtitle: "Professional Development Programs",
    description:
      "We design tailored learning experiences to build leadership, enhance productivity, and drive continuous improvement across all levels.",
    image: "/assets/services-1.png",
    buttonText: "View Service",
  },
  {
    id: 4,
    title: "Human Capital Consulting",
    subtitle: "Professional Development Programs",
    description:
      "We design tailored learning experiences to build leadership, enhance productivity, and drive continuous improvement across all levels.",
    image: "/assets/services-1.png",
    buttonText: "View Service",
  },
];

// Responsive widths
const COLLAPSED_WIDTH_DESKTOP = 120;
const COLLAPSED_WIDTH_MOBILE = 80;
const EXPANDED_WIDTH_DESKTOP = 900; // px
const EXPANDED_WIDTH_MOBILE = "100%";
const CARD_HEIGHT_DESKTOP = 500;
const CARD_HEIGHT_MOBILE = 320;

const ServiceCard = ({ service, isSelected, index, services, setSelectedServiceId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [contentVisible, setContentVisible] = useState(isSelected); // <-- Init based on selected

  // Simple window width check for responsiveness
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const collapsedWidth = isMobile ? COLLAPSED_WIDTH_MOBILE : COLLAPSED_WIDTH_DESKTOP;
  const expandedWidth = isMobile ? window.innerWidth : EXPANDED_WIDTH_DESKTOP;
  const cardHeight = isMobile ? CARD_HEIGHT_MOBILE : CARD_HEIGHT_DESKTOP;

  const hoverIncrease = isMobile ? 30 : 40;
  const width = isSelected ? expandedWidth : isHovered ? collapsedWidth + hoverIncrease : collapsedWidth;
  const padding = isSelected ? 32 : 16;

  // Update contentVisible when selection changes
  useEffect(() => {
    if (isSelected) {
      setContentVisible(true);
    } else {
      setContentVisible(false);
    }
  }, [isSelected]);

  // Navigation handlers
  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (index - 1 + services.length) % services.length;
    setSelectedServiceId(services[prevIndex].id);
  };
  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (index + 1) % services.length;
    setSelectedServiceId(services[nextIndex].id);
  };

  return (
    <motion.div
      layout
      initial={false}
      animate={{
        width,
        padding,
        height: cardHeight,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative flex flex-shrink-0 cursor-pointer flex-col justify-end overflow-hidden rounded-xl"
      style={{
        backgroundImage: `url(${service.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minWidth: collapsedWidth,
      }}
      onClick={() => setSelectedServiceId(service.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onUpdate={(latest) => {
        let currentWidth;
        if (typeof latest.width === "string" && latest.width.endsWith("%")) {
          currentWidth = window.innerWidth;
        } else {
          currentWidth = Number(latest.width);
        }
        if (currentWidth >= expandedWidth - 5) {
          if (!contentVisible) setContentVisible(true);
        } else {
          if (contentVisible) setContentVisible(false);
        }
      }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-black"
        animate={{ opacity: isSelected ? 0.3 : 0.6 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      />

      {/* Plus Icon */}
      {!isSelected && (
        <div className="absolute bottom-4 right-12 text-white opacity-75 transition-opacity duration-300 group-hover:opacity-100">
          <FaPlusCircle size={28} />
        </div>
      )}

      {/* Decorative shape */}
      {isSelected && (
        <motion.div
          aria-hidden="true"
          className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 opacity-30 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      )}

      <h3
        className={`absolute text-2xl leading-tight text-white transition-transform duration-700 ease-in-out ${
          isSelected
            ? "left-10 top-6 translate-x-0 translate-y-0 rotate-0"
            : "bottom-80 left-[50px] -translate-x-1/2 rotate-[-90deg] whitespace-nowrap"
        } `}
      >
        {service.title}
      </h3>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[600px] select-none text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          pointerEvents: contentVisible ? "auto" : "none",
          minHeight: "180px",
        }}
      >
        <h3 className="text-3xl font-bold">{service.subtitle}</h3>
        <p className="mt-2 whitespace-normal break-words text-lg">{service.description}</p>

        <button
          className={`mt-6 flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-gray-900 transition duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white ${
            contentVisible ? "block" : "hidden"
          }`}
        >
          {service.buttonText} <FaArrowRight />
        </button>
        <div className={`z-50 mt-6 flex justify-end gap-4 ${contentVisible ? "flex" : "hidden"}`}>
          <button
            onClick={handlePrev}
            className="rounded-full border-4 border-white p-2 text-white transition hover:bg-white hover:text-black"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full border-4 border-white p-2 text-white transition hover:bg-white hover:text-black"
          >
            <FaArrowRight />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);

  return (
    <section className="relative overflow-hidden bg-[#0E1C3F] py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-teal-400 opacity-20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-purple-700 via-pink-500 to-red-400 opacity-20 blur-3xl"
      />

      <h2 className="mb-6 text-center text-4xl font-black text-white md:text-5xl">Core Services</h2>

      <div className="scrollbar-hide mx-auto flex max-w-8xl space-x-4 overflow-x-auto px-6 pt-6 md:px-12">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            isSelected={service.id === selectedServiceId}
            index={index}
            services={services}
            setSelectedServiceId={setSelectedServiceId}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
