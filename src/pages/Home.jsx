import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import SectorsSlider from "../components/SectorsSlider";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import mainServices from "../services/mainServices";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeUpContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // delay between children animations
      when: "beforeChildren",
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeInOut" },
};

// 1. Service Data Array with unique IDs
const services = [
  {
    id: "recruitment",
    mainTitle: "Recruitment Solutions",
    title: "Recruitment Solutions",
    subtitle: "for a Smarter Workforce",
    description:
      "We provide intelligent recruitment solutions designed to attract, assess, and retain top talent—empowering your organization to build a smarter, more efficient workforce that drives long-term success.",
    image: "/assets/services-1.png",
    buttonText: "View Solutions",
  },
  {
    id: "academy",
    mainTitle: "Adroyts Academy",
    title: "Adroyts Academy",
    subtitle: "Upskilling Tomorrow's Leaders",
    description:
      "Our academy offers specialized training and development programs to enhance the skills of your human capital, ensuring your team is equipped for future challenges and growth.",
    image: "/assets/services-1.png",
    buttonText: "Explore Academy",
  },
  {
    id: "assessment",
    mainTitle: "Assessment Center",
    title: "Assessment Center",
    subtitle: "Precision in Talent Evaluation",
    description:
      "We utilize advanced assessment tools and methodologies to accurately evaluate candidate competencies, ensuring a precise fit for critical roles within your organization.",
    image: "/assets/services-1.png",
    buttonText: "Learn About Assessments",
  },
  {
    id: "consulting",
    mainTitle: "Human Capital Consulting",
    title: "Human Capital Consulting",
    subtitle: "Strategic Workforce Planning",
    description:
      "Our consulting services help you align your human capital strategy with your business objectives, covering everything from organizational design to performance management.",
    image: "/assets/services-1.png",
    buttonText: "Consult Our Experts",
  },
];

const caseStudies = [
  {
    id: "cs1",
    title: "Succession Planning for a Government Entity",
    description:
      "Developing a structured and strategic approach to identify and prepare future leaders to ensure leadership continuity within government organizations.",
  },
  {
    id: "cs2",
    title: "Talent Development and Leadership Readiness",
    description:
      "Building the essential skills and capabilities of employees to effectively prepare them for future leadership roles and sustainable organizational growth.",
  },
];

const Home = () => {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [selectedServiceId, setSelectedServiceId] = useState("recruitment");
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [articles, setArticles] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [clients, setClients] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    const fetchHomeData = async () => {
      setLoading(true);
      try {
        const [articlesRes, testimonialsRes, clientsRes, highlightsRes, socialRes] = await Promise.all([
          mainServices.getArticles(i18n.language),
          mainServices.getTestimonials(i18n.language),
          mainServices.getClients(i18n.language),
          mainServices.getCompanyHighlights(i18n.language),
          mainServices.getSocialMedia(i18n.language),
        ]);

        // store in state
        setArticles(articlesRes?.data?.data?.data || []);
        setTestimonials(testimonialsRes?.data?.data || []);
        setClients(clientsRes?.data?.data || []);
        setHighlights(highlightsRes?.data?.data || []);
        setSocialMedia(socialRes?.data?.data?.data || []);
      } catch (err) {
        console.error("Home data fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, [i18n.language]);

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="bg-white font-lato text-gray-800">
      <section
        className="curved-bottom relative -mt-24 flex h-[700px] flex-col items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: `url('/assets/hero-bg.png')` }}
      >
        {/* <div className="absolute inset-0 bg-[#0E1C3F]/40"></div> */}
        <motion.div
          className="relative z-10 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeUpContainer}
        >
          <motion.h1 className="mb-8 text-3xl font-black text-white md:text-4xl" variants={fadeUpItem}>
            Building the Future Workforce
          </motion.h1>

          <motion.p className="mb-20 text-xl text-[#d2d2d2]" variants={fadeUpItem}>
            Innovative recruitment, HR academy training, and human capital consulting
          </motion.p>

          <motion.div className="flex items-center justify-center space-x-8" variants={fadeUpItem}>
            <motion.button
              className="rounded-full bg-[#1dc0da] px-6 py-3 text-xs font-black text-white transition"
              whileHover={buttonHover}
            >
              EXPLORE OUR SERVICES
            </motion.button>

            <motion.button
              className="flex items-center space-x-2 text-xs font-black text-white transition"
              whileHover={buttonHover}
            >
              <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1" fill="none" />
                <polygon points="10,8 16,12 10,16" fill="white" />
              </svg>
              <span>Watch our video</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
      <div className="-mt-20 bg-cover p-12 pt-40" style={{ backgroundImage: `url('/assets/stats-bg.png')` }}>
        {/* About Section */}
        <motion.section
          className="relative z-20 mx-auto max-w-7xl rounded-xl bg-white bg-opacity-90 p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpContainer}
        >
          <motion.p className="mx-auto mb-4 text-xl text-[#546e7a]" variants={fadeUp} custom={0}>
            Adroyts is a leading firm in the field of human capital management and development, offering
            comprehensive and integrated solutions tailored to the needs of organizations in this vital
            sector. With years of experience and dedication, we have established our position as a trusted
            provider of high-quality consulting services and innovative solutions across diverse industries.
          </motion.p>

          <motion.div variants={fadeUp} custom={0.2} className="flex">
            <motion.button
              className="flex items-center space-x-3 font-semibold text-[#0E1C3F] hover:text-[#00CFFF]"
              whileHover={buttonHover}
            >
              <span>View more</span>
              <FaArrowRight className="mt-1" />
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="relative z-20 mx-auto mt-12 flex max-w-7xl flex-wrap justify-around gap-8 rounded-xl bg-white bg-opacity-90 p-8 text-center md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpContainer}
        >
          {highlights.map((item, index) => {
            const borderSides = ["border-b-8", "border-r-8", "border-t-8", "border-l-8"];
            const borderSide = borderSides[index % borderSides.length]; // repeat pattern
            const suffix = index < 3 ? "+" : "%";

            return (
              <motion.div
                key={item.label}
                className="flex flex-col items-center rounded-xl py-0"
                variants={fadeUp}
                custom={index * 0.2}
              >
                <div
                  className={`mb-3 flex h-36 w-36 items-center justify-center rounded-full border-4 ${borderSide}`}
                  style={{ borderColor: item?.value_color || "#2563EB" }}
                >
                  <CountUp
                    start={0}
                    end={parseInt(item.value)}
                    duration={3}
                    separator={item?.isYear ? "" : ","}
                    suffix={suffix}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    className="text-5xl font-black"
                    style={{ color: item?.value_color || "#2563EB" }}
                  />
                </div>
                <p className="mt-4 text-2xl font-bold text-[#546e7a]">{item.title}</p>
              </motion.div>
            );
          })}
        </motion.section>
      </div>

      {/* 2. Services Section: The Expandable Container */}
      <section className="relative bg-[#0E1C3F] py-24">
        <h2 className="mb-12 text-center text-4xl font-black text-white md:text-6xl">Core Services </h2>
        <div className="mx-auto flex h-[80vh] max-w-8xl space-x-4 overflow-hidden px-6 pt-6 md:px-12">
          {services.map((service, index) => {
            const isSelected = service.id === selectedServiceId;

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
                key={service.id}
                className={`group relative cursor-pointer rounded-xl transition-all duration-700 ease-in-out ${
                  isSelected ? "flex-grow-[4] p-10" : "w-20 flex-grow p-4"
                } flex items-end bg-cover bg-center`}
                style={{ backgroundImage: `url(${service.image})` }}
                onClick={() => setSelectedServiceId(service.id)}
              >
                {/* Overlay */}
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-700 ${
                    isSelected ? "bg-black/40" : "bg-black/70 group-hover:bg-black/50"
                  }`}
                ></div>

                {/* Content */}
                <div className="z-10 text-white transition-all duration-700">
                  <h3
                    className={`absolute font-extrabold leading-tight ${
                      isSelected
                        ? "right-10 top-6 text-2xl"
                        : "bottom-96 left-[50px] -translate-x-1/2 rotate-[-90deg] whitespace-nowrap text-2xl"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {isSelected && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                      custom={0.2}
                      className="max-w-4xl space-y-4 px-16"
                    >
                      <h3 className="text-5xl font-semibold text-white">{service.subtitle}</h3>
                      <p className="text-lg text-gray-100">{service.description}</p>

                      {/* Main Button */}
                      <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-200">
                        <span>{service.buttonText}</span>
                        <FaArrowRight className="text-gray-900" />
                      </button>

                      {/* Navigation Buttons */}
                      <div className="mt-4 flex justify-end gap-4">
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
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* --- */}

      {/* Trusted Companies */}
      <section className="bg-white py-20">
        <div className="text-center">
          <h2 className="mb-16 text-center text-4xl font-black text-[#192757] md:text-6xl">Trusted by...</h2>
          <div className="relative overflow-hidden">
            <div className="animate-marquee flex space-x-24">
              {[...clients, ...clients].map((client, index) => (
                <img
                  key={`${client.name}-${index}`}
                  src={client.image}
                  alt={client.name}
                  className="h-24 w-auto object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectorsSlider />

      {/* Case Studies */}
      <section
        className="bg-gray-50 bg-cover p-12 py-20 pt-40"
        style={{ backgroundImage: `url('/assets/studies-bg.png')` }}
      >
        <div className="mx-auto max-w-8xl px-6 md:flex md:items-start md:justify-between md:gap-12 md:px-12">
          {/* Left Side: Title, description, button */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } }}
            viewport={{ once: true }}
            className="mb-12 max-w-xl md:mb-0"
          >
            <h2 className="mb-6 text-6xl font-bold text-white">Case Studies</h2>
            <p className="mb-8 text-xl leading-relaxed text-white">
              Our case studies show real examples of how we help companies find the right people and improve
              their hiring process.
              <br /> Each story explains the company’s problem, what we did to solve it, and the results they
              achieved. <br /> These examples show how our recruitment and HR solutions make hiring faster,
              easier, and more effective.
            </p>
            <button className="rounded-full bg-white px-6 py-3 text-black transition hover:bg-gray-200">
              All case studies
            </button>
          </motion.div>

          {/* Right Side: Two cards side-by-side */}
          <div className="grid grid-cols-1 gap-8 md:w-2/3 md:grid-cols-2">
            {caseStudies.slice(0, 2).map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl"
              >
                <div className="flex h-full flex-col justify-between p-10">
                  <div>
                    <h3 className="mb-3 text-3xl font-black text-[#192757]">{caseStudy.title}</h3>
                    <p className="text-xl text-[#878da4]">{caseStudy.description}</p>
                  </div>
                  <div className="mt-6 self-end rounded-full border-2 border-[#192757] p-4 text-[#192757]">
                    <FaArrowRight className="text-[#192757]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-white">
        <div className="absolute top-0 h-[60%] w-full bg-gray-100"></div>

        <div className="mx-auto max-w-8xl px-6 text-center md:px-12">
          {/* Carousel */}
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-8xl px-6 py-12 md:px-12">
          <h2 className="mb-12 text-center text-4xl font-black text-[#192757] md:text-6xl">
            Latest Insights & News
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {articles?.map((blog, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                custom={i * 0.2}
                className="group cursor-pointer overflow-hidden rounded-lg bg-white"
              >
                {/* Image with zoom + overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-64 w-full transform object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition duration-500 ease-out group-hover:bg-black/0"></div>
                </div>

                {/* Text under the image with fade-up */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="py-2"
                >
                  <div className="mb-2 text-sm font-semibold text-blue-500">{blog.category}</div>
                  <p className="mb-2 text-sm text-gray-500">{blog.date}</p>
                  <h3 className="text-xl text-[#192757]">{blog.title}</h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eceff1] text-gray-300">
        <motion.div
          className="mx-auto flex max-w-8xl items-center justify-between gap-10 px-6 py-12 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div>
            <h3 className="text-[40px] font-black text-[#192757]">Ready for Next-Gen Recruitment Tools?</h3>
            <p className="text-[26px] text-[#878da4]">
              Start your digital journey with a platform trusted by brands in Saudi Arabia.
            </p>
          </div>
          <button className="hidden items-center gap-4 rounded-full bg-[#192757] px-8 py-3 text-[26px] text-white transition md:flex">
            <span>{i18n.language === "ar" ? "تواصل معنا" : "Contact Us"}</span>
            <FaArrowRight className="text-lg" />
          </button>
        </motion.div>
      </section>

      {/* Assuming 'socialMedia' array and icons like FaLinkedinIn, FaTwitter, FaInstagram are defined */}
      <footer className="bg-[#0e1a41] text-gray-300">
        {/* Upper Footer Section - Logo, Description, Socials, and Link Columns */}
        <div className="mx-auto grid max-w-8xl gap-10 px-6 py-12 md:grid-cols-12 md:px-12">
          {/* LEFT SIDE: Logo, Description, and Socials (Spans 4 columns on desktop) */}
          <div className="md:col-span-4">
            {/* Logo and Description */}
            <div className="mb-6">
              {/* Placeholder for the ADROYTS logo/text. A custom SVG or font/line style would be needed for a perfect match. */}
              <img
                src="/assets/logo.png" // adjust path based on your file location
                alt="Adroyts Logo"
                className="h-10 w-auto" // adjust size as needed
              />
              {/* Or use an image if available: <img src="/images/adroyts-logo.png" alt="ADROYTS since 2006" className="h-8" /> */}
            </div>

            <p className="mb-6 max-w-xs font-bold leading-relaxed text-[#ffffff99]">
              Adroyts’ focus is on serving corporate clients in Saudi Arabia and other GCC markets by
              providing them with top experienced professionals in a range of key sectors.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              {/* Using simple placeholders for the icons (LinkedIn, X/Twitter, Instagram) */}
              <a href="#" aria-label="LinkedIn" className="text-white transition hover:text-gray-400">
                {/* <FaLinkedinIn className="h-6 w-6" /> */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.085-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" aria-label="X/Twitter" className="text-white transition hover:text-gray-400">
                {/* <FaTwitter className="h-6 w-6" /> */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153C20.374 1.83 20.897 3.515 20.22 4.988l-6.275 13.17c-.705 1.481-2.434 2.112-3.87 1.341l-2.022-1.127c-.718-.4-1.428-.795-2.12-.916l-1.928-.33c-1.524-.263-2.903-1.458-3.047-3.01L.22 7.749c-.21-2.122 1.394-4.04 3.51-4.254l16.171-1.41zM22 4.25c0 .75-.625 1.375-1.375 1.375s-1.375-.625-1.375-1.375S19.875 2.875 20.5 2.875 22 3.5 22 4.25z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-white transition hover:text-gray-400">
                {/* <FaInstagram className="h-6 w-6" /> */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.744.175 5.204 1.957 5.378 5.485.057 1.267.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.174 3.528-1.634 5.31-5.378 5.485-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.744-.174-5.204-1.956-5.378-5.485-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.174-3.528 1.634-5.31 5.378-5.485 1.266-.057 1.646-.07 4.85-.07zm0 2.132c-3.195 0-3.57.012-4.814.07c-3.267.153-4.14 1.41-4.293 4.67-.057 1.244-.07 1.614-.07 4.814s.013 3.57.07 4.814c.153 3.26 1.026 4.517 4.293 4.67 1.244.057 1.614.07 4.814.07s3.57-.013 4.814-.07c3.267-.153 4.14-1.41 4.293-4.67.057-1.244.07-1.614.07-4.814s-.013-3.57-.07-4.814c-.153-3.26-1.026-4.517-4.293-4.67-1.244-.057-1.614-.07-4.814-.07zm0 4.191c-2.072 0-3.75 1.678-3.75 3.75s1.678 3.75 3.75 3.75 3.75-1.678 3.75-3.75-1.678-3.75-3.75-3.75zm0 2.132c.937 0 1.688.75 1.688 1.688s-.75 1.688-1.688 1.688-1.688-.75-1.688-1.688.75-1.688 1.688-1.688zm5.22-.969c0 .717-.582 1.298-1.298 1.298s-1.298-.582-1.298-1.298.582-1.298 1.298-1.298 1.298.582 1.298 1.298z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Link Columns (Spans 8 columns on desktop) */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {/* Company Links Column */}
              <div>
                <h4 className="mb-4 text-xl uppercase tracking-widest text-white">Company</h4>
                <ul className="space-y-3 text-[#ffffff99]">
                  <li>
                    <a href="#" className="transition duration-150 hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition duration-150 hover:text-white">
                      Board of Directors
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition duration-150 hover:text-white">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition duration-150 hover:text-white">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services Links Column */}
              <div>
                <h4 className="mb-4 text-xl uppercase tracking-widest text-white">Services</h4>
                <ul className="space-y-3 text-[#ffffff99]">
                  <li>
                    <a href="#" className="transition duration-150 hover:text-white">
                      Adroyts Academy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition duration-150 hover:text-white">
                      Assessment Center Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition duration-150 hover:text-white">
                      Human Capital Consulting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition duration-150 hover:text-white">
                      Recruitment Solutions
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources Links Column */}
              <div>
                <h4 className="mb-4 text-xl uppercase tracking-widest text-white">Resources</h4>
                <ul className="space-y-3 text-[#ffffff99]">
                  <li>
                    <a href="#" className="transition duration-150 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition duration-150 hover:text-white">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition duration-150 hover:text-white">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition duration-150 hover:text-white">
                      Media Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition duration-150 hover:text-white">
                      News
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- Separator Line --- */}
        <div className="mx-auto max-w-8xl border-t border-gray-700"></div>

        {/* Bottom Footer Section - Contact Info and Newsletter */}
        <div className="mx-auto grid max-w-8xl gap-8 px-6 py-10 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:gap-16">
          {/* Contact Information (Address, Phone, Email) - Col 1/2 */}
          <div className="grid gap-4 space-y-4 text-sm sm:grid-cols-3 md:col-span-1 lg:col-span-2">
            {/* Address */}
            <div className="flex items-start">
              <span className="mr-3 mt-1 text-white">
                {/* Location Icon (FaMapMarkerAlt equivalent) */}
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 20s-8-12-8-16a8 8 0 1 1 16 0c0 4-8 16-8 16zM10 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
              </span>
              <p className="leading-relaxed">
                3385 Thumanah Road, Alnada District, Riyadh 13317,
                <br />
                Kingdom of Saudi Arabia
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <span className="mr-3 text-white">
                {/* Phone Icon (FaPhone equivalent) */}
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a2 2 0 0 1 2-2h3.5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H5a1 1 0 0 0-1 1v1.5a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H5a1 1 0 0 0-1 1v1.5a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3z" />
                </svg>
              </span>
              <p>+966 11 23 42 667</p>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <span className="mr-3 text-white">
                {/* Email Icon (FaEnvelope equivalent) */}
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z" />
                </svg>
              </span>
              <p>contact@adroyts.com</p>
            </div>
          </div>

          {/* Newsletter / Stay up to date - Col 3 */}
          <div className="flex flex-col justify-start lg:col-span-1">
            <p className="mb-3 text-sm text-white">Stay up to date on the latest Adroyts news.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                // Updated background/border to match image's dark input style
                className="flex-grow border border-white/20 bg-transparent p-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button className="bg-white px-4 py-2 text-sm font-semibold text-black transition duration-150 hover:bg-gray-200">
                Send
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
