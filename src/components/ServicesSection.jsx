import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlusCircle } from "react-icons/fa";

import { SplitText } from "../utils/SplitText";

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
      "We help organizations identify, attract, and onboard the right talent through innovative acquisition strategies — combining data-driven insights with personalized engagement for lasting success.",
    image: "/assets/services-2.png",
    buttonText: "View Service",
  },
  {
    id: 3,
    title: "Assessment Center Solutions",
    subtitle: "Professional Development Programs",
    description:
      "Our assessment centers provide comprehensive evaluation tools to measure skills, competencies, and potential — supporting data-informed decisions in leadership development and succession planning.",
    image: "/assets/services-3.png",
    buttonText: "View Service",
  },
  {
    id: 4,
    title: "Human Capital Consulting",
    subtitle: "Strategic HR and Organizational Development",
    description:
      "We partner with organizations to align people strategy with business goals — optimizing structures, enhancing performance, and driving cultural transformation for sustainable growth.",
    image: "/assets/services-4.png",
    buttonText: "View Service",
  },
];

const COLLAPSED_WIDTH_DESKTOP = 100;
const COLLAPSED_WIDTH_MOBILE = 80;
const EXPANDED_WIDTH_DESKTOP = 780;
const EXPANDED_WIDTH_MOBILE = "100%";
const CARD_HEIGHT_DESKTOP = 500;
const CARD_HEIGHT_MOBILE = 320;

const ServiceCard = ({ service, isActive, onHover }) => {
  const [contentVisible, setContentVisible] = useState(isActive);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  // Update isMobile and windowWidth on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial check

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const collapsedWidth = isMobile ? COLLAPSED_WIDTH_MOBILE : COLLAPSED_WIDTH_DESKTOP;
  const expandedWidth = isMobile ? windowWidth * 0.95 : EXPANDED_WIDTH_DESKTOP;
  const cardHeight = isMobile ? CARD_HEIGHT_MOBILE : CARD_HEIGHT_DESKTOP;

  // Delay showing content for 400ms after hover
  useEffect(() => {
    let timeout;
    if (isActive) {
      timeout = setTimeout(() => setContentVisible(true), 400);
    } else {
      setContentVisible(false);
    }
    return () => clearTimeout(timeout);
  }, [isActive]);

  return (
    <motion.div
      layout
      animate={{
        width: isActive ? expandedWidth : collapsedWidth,
        padding: isActive ? (isMobile ? 16 : 32) : isMobile ? 8 : 16,
        height: cardHeight,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative flex flex-shrink-0 cursor-pointer flex-col justify-end overflow-hidden rounded-lg shadow-lg"
      style={{
        backgroundImage: `url(${service.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minWidth: collapsedWidth,
        boxShadow: isActive ? "0 10px 25px rgba(0,0,0,0.3)" : "none",
      }}
      onMouseEnter={() => onHover(service.id)}
      onMouseLeave={() => onHover(null)}
      onTouchStart={() => onHover(service.id)} // touch support (mobile)
      onTouchEnd={() => onHover(null)}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-[#0e1a4137]"
        animate={{ opacity: isActive ? 0.3 : 0.6 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      />

      {/* Plus Icon */}
      {!isActive && (
        <div className="absolute bottom-4 right-8 text-white opacity-75 transition-opacity duration-300 group-hover:opacity-100">
          <FaPlusCircle size={28} />
        </div>
      )}

      {/* Decorative Shape */}
      {isActive && (
        <motion.div
          aria-hidden="true"
          className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-30 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      )}

      {/* Rotating Title */}
      <h3
        className={`absolute w-72 text-2xl leading-tight text-white transition-transform duration-1000 ease-linear ${
          isActive
            ? "left-6 top-6 translate-x-0 translate-y-0 rotate-0"
            : "bottom-72 left-[40px] -translate-x-1/2 rotate-[-90deg] text-right"
        }`}
        style={{
          fontSize: isMobile ? "1.1rem" : "1.5rem",
          width: isMobile ? 180 : 298,
        }}
      >
        {service.title}
      </h3>

      {/* Content (shows after delay) */}
      <motion.div
        className="relative z-10 max-w-full select-none text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          pointerEvents: contentVisible ? "auto" : "none",
          minHeight: "180px",
          maxWidth: isMobile ? "90%" : "600px",
          paddingBottom: isMobile ? 16 : 0,
        }}
      >
        <h3 className={`text-2xl font-bold ${isMobile ? "text-xl" : "text-3xl"}`}>{service.subtitle}</h3>
        <p className={`mt-2 whitespace-normal break-words text-base ${isMobile ? "text-sm" : "text-lg"}`}>
          {service.description}
        </p>

        <button
          className={`mt-6 flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-gray-900 transition duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white ${
            contentVisible ? "block" : "hidden"
          }`}
        >
          {service.buttonText} <FaArrowRight />
        </button>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#0E1C3F] py-16 sm:py-24">
      {/* Decorative Backgrounds */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-teal-400 opacity-20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-purple-700 via-pink-500 to-red-400 opacity-20 blur-3xl"
      />

      <SplitText className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        Core Services
      </SplitText>

      <div className="scrollbar-hide mx-auto flex max-w-6xl space-x-4 overflow-x-auto px-4 sm:px-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isActive={hoveredId ? hoveredId === service.id : service.id === 1}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
