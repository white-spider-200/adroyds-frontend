import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight, FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { usePages } from "../context/PagesContext";
import { SplitText } from "../utils/SplitText";

const services = [
  {
    id: 1,
    title: "recruitmentSolutionsTitle",
    description: "adroytsIntro",
    image: "/assets/services-1.png",
    buttonText: "viewDetails",
    path: "/services/recruitment",
  },
  {
    id: 2,
    title: "academy.title",
    description: "academy.description",
    image: "/assets/services-2.png",
    buttonText: "viewDetails",
    path: "/services/academy",
  },
  {
    id: 3,
    title: "talentAssessment.title",
    description: "talentAssessment.description",
    image: "/assets/services-3.png",
    buttonText: "viewDetails",
    path: "/services/assessment",
  },
  {
    id: 4,
    title: "hrConsulting.title",
    description: "hrConsulting.description2",
    image: "/assets/services-4.png",
    buttonText: "viewDetails",
    path: "/services/consulting",
  },
];

const COLLAPSED_WIDTH_DESKTOP = 100;
const COLLAPSED_WIDTH_MOBILE = 80;
const EXPANDED_WIDTH_DESKTOP = 910;
const CARD_HEIGHT_DESKTOP = 500;
const CARD_HEIGHT_MOBILE = 320;

const ServiceCard = ({ service, isActive, onHover }) => {
  const navigate = useNavigate();
  const [contentVisible, setContentVisible] = useState(isActive);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  const { t, i18n } = useTranslation();
  // Update isMobile and windowWidth on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
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
      onMouseLeave={() => {}}
      onTouchStart={() => onHover(service.id)}
      onTouchEnd={() => {}}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-[#0e1a4137]"
        animate={{ opacity: isActive ? 0.3 : 0.6 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      />

      {/* Plus Icon */}
      {!isActive && (
        <div className="absolute bottom-8 right-12 text-white opacity-75 transition-opacity duration-300 group-hover:opacity-100">
          <FaPlusCircle size={28} />
        </div>
      )}

      {/* Decorative Shape */}
      {isActive && (
        <motion.div
          aria-hidden="true"
          className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-tr from-cyan-400 to-cyan-500 opacity-30 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      )}

      {/* Rotating Title */}
      <h3
        className={`absolute w-72 text-2xl leading-tight text-white transition-transform duration-1000 ease-linear ${
          isActive
            ? "left-6 top-6 translate-x-0 translate-y-0 rotate-0 rtl:right-6"
            : "bottom-72 left-[55px] -translate-x-1/2 rotate-[-90deg] text-right"
        }`}
        style={{
          fontSize: isMobile ? "1.1rem" : "1.5rem",
          width: isMobile ? 180 : 298,
        }}
      >
        {t(service.title)}
      </h3>

      {/* Content */}
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
        <h3 className={`text-2xl font-bold ${isMobile ? "text-xl" : "text-3xl"}`}>{t(service.subtitle)}</h3>
        <p className={`mt-2 whitespace-normal break-words text-base ${isMobile ? "text-sm" : "text-lg"}`}>
          {t(service.description)}
        </p>

        <button
          onClick={() => navigate(service.path)}
          className="group relative mt-8 inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-cyan-400 py-1 font-medium text-neutral-50 transition-colors duration-300 hover:text-neutral-50 ltr:pl-6 ltr:pr-16 rtl:pl-16 rtl:pr-6"
        >
          {/* Button Text */}
          <span className="z-10 pr-2">{t(service.buttonText)}</span>

          {/* Animated Background / Arrow */}
          <div
            className={`absolute ${
              i18n.language === "ar" ? "left-1" : "right-1"
            } inline-flex h-12 w-12 items-center justify-end rounded-full bg-cyan-200 transition-[width] duration-300 group-hover:w-[calc(100%-8px)]`}
          >
            <div
              className={`flex items-center justify-center ${i18n.language === "ar" ? "ml-3.5" : "mr-3.5"}`}
            >
              {i18n.language === "ar" ? <FaArrowLeft /> : <FaArrowRight />}
            </div>
          </div>
        </button>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { isActive } = usePages(); // 👈 from context

  const [hoveredId, setHoveredId] = useState(1); // first card active by default
  const { t } = useTranslation();
  const handleHover = (id) => {
    if (id !== null) setHoveredId(id);
    // Do NOT reset on leave
  };

  const filteredServices = services.filter((service) => {
    if (service.path === "/services/recruitment") {
      return isActive("what_we_do_recruitment_solutions");
    }

    if (service.path === "/services/assessment") {
      return isActive("what_we_do_talent_assessment");
    }

    if (service.path === "/services/academy") {
      return isActive("what_we_do_adroyts_academy");
    }

    if (service.path === "/services/consulting") {
      return isActive("what_we_do_human_resource_consulting");
    }

    return false;
  });
  if (filteredServices.length === 0) return null;

  return (
    <section id="services" className="relative overflow-hidden bg-[#0E1C3F] py-16 sm:py-24">
      {/* Decorative Backgrounds */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-cyan-600 via-cyan-400 to-teal-400 opacity-20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-purple-700 via-pink-500 to-red-400 opacity-20 blur-3xl"
      />

      <SplitText className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-4xl">
        {t("coreServices")}
      </SplitText>

      <div className="scrollbar-hide mx-auto flex max-w-7xl space-x-4 overflow-x-auto px-4 sm:px-6">
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isActive={hoveredId === service.id}
            onHover={handleHover}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
