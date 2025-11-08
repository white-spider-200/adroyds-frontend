import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import SectorsSlider from "../components/SectorsSlider";
import ServicesSection from "../components/ServicesSection";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import mainServices from "../services/mainServices";

const buttonHoverPrimary = {
  scale: 1.05,
  boxShadow: "0 8px 15px rgba(29, 192, 218, 0.6)", // cyan glow
  transition: { duration: 0.3, ease: "easeOut" },
};

const buttonHoverSecondary = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeOut" },
};

const iconHover = {
  scale: 1.2,
  transition: { duration: 0.3, ease: "easeOut" },
};

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

const footerContainerVariants = {
  hidden: { opacity: 1, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const footerItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const scaleFadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

const scaleFadeItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
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
        className="relative -mt-40 flex h-[750px] flex-col items-center justify-center bg-cover px-6 text-center"
        style={{ backgroundImage: `url('/assets/hero-bg.png')` }}
      >
        <motion.div
          className="relative z-10 mt-32 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={scaleFadeContainer}
        >
          <motion.h1 className="mb-8 text-3xl font-black text-white md:text-4xl" variants={scaleFadeItem}>
            Building the Future Workforce
          </motion.h1>

          <motion.p className="mb-20 text-xl text-[#d2d2d2]" variants={scaleFadeItem}>
            Innovative recruitment, HR academy training, and human capital consulting
          </motion.p>

          <motion.div className="flex items-center justify-center space-x-8" variants={scaleFadeItem}>
            <motion.div className="flex items-center justify-center space-x-8" variants={fadeUpItem}>
              <motion.button
                className="rounded-full bg-[#1dc0da] px-6 py-3 text-xs font-black text-white shadow-md"
                whileHover={buttonHoverPrimary}
              >
                EXPLORE OUR SERVICES
              </motion.button>

              <motion.button
                className="flex items-center space-x-2 text-xs font-black text-white"
                whileHover={buttonHoverSecondary}
              >
                <motion.svg
                  className="h-6 w-6 fill-white"
                  viewBox="0 0 24 24"
                  whileHover={iconHover}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1" fill="none" />
                  <polygon points="10,8 16,12 10,16" fill="white" />
                </motion.svg>
                <span>Watch our video</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <div
        className="-mt-20 bg-cover bg-center bg-no-repeat p-12 pb-24 pt-40"
        style={{
          backgroundImage: `url('/assets/stats-bg.png')`,
          backgroundAttachment: "fixed", // <-- This keeps the background static
        }}
      >
        {/* About Section */}
        <motion.section
          className="relative z-20 mx-auto max-w-7xl rounded-xl bg-white bg-opacity-90 p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
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
          viewport={{ once: false }}
          variants={fadeUpContainer}
        >
          {highlights.map((item, index) => {
            const borderSides = ["border-b-8", "border-r-8", "border-t-8", "border-l-8"];
            const borderSide = borderSides[index % borderSides.length];
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
                    scrollSpyOnce={false}
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
      <ServicesSection />

      {/* --- */}

      {/* Trusted Companies */}
      <section className="bg-white py-20">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="mb-16 text-center text-4xl font-black text-[#192757] md:text-5xl"
          >
            Trusted by...
          </motion.h2>
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
            viewport={{ once: false }}
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
            <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-gray-900 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white">
              <span>All case studies</span>
              <FaArrowRight className="transition duration-300" />
            </button>
          </motion.div>

          {/* Right Side: Two cards side-by-side */}
          <div className="grid grid-cols-1 gap-8 md:w-2/3 md:grid-cols-2">
            {caseStudies.slice(0, 2).map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.2 }}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl"
              >
                <div className="flex h-full flex-col justify-between p-10">
                  <div>
                    <h3 className="mb-3 text-3xl font-black text-[#192757]">{caseStudy.title}</h3>
                    <p className="text-xl text-[#878da4]">{caseStudy.description}</p>
                  </div>
                  <div className="mt-6 cursor-pointer self-end rounded-full border-2 border-[#192757] p-4 text-gray-900 transition-transform duration-300 ease-in-out hover:scale-110">
                    <FaArrowRight />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-white">
        <div className="absolute top-0 h-[60%] w-full bg-[#eceff1]"></div>

        {/* Carousel */}
        <TestimonialsCarousel testimonials={testimonials} />
      </section>

      {/* Blog Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-8xl px-6 py-12 md:px-12">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="mb-12 text-center text-4xl font-black text-[#192757] md:text-5xl"
          >
            Latest Insights & News
          </motion.h2>

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
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <div>
            <h3 className="text-[40px] font-black text-[#192757]">Ready for Next-Gen Recruitment Tools?</h3>
            <p className="text-[26px] text-[#878da4]">
              Start your digital journey with a platform trusted by brands in Saudi Arabia.
            </p>
          </div>
          <button className="hidden items-center gap-4 rounded-full bg-[#192757] px-8 py-3 text-[26px] text-white transition duration-500 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 md:flex">
            <span>{i18n.language === "ar" ? "تواصل معنا" : "Contact Us Now"}</span>
            <FaArrowRight className="text-lg transition-transform duration-500 ease-in-out group-hover:translate-x-2" />
          </button>
        </motion.div>
      </section>

      <motion.footer
        className="bg-[#0e1a41] text-gray-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // animate every time, triggers when 20% visible
        variants={footerContainerVariants}
      >
        {/* Inside your footer, wrap key blocks with motion.div and apply item variants */}

        <motion.div
          className="mx-auto grid max-w-8xl gap-10 px-6 py-12 md:grid-cols-12 md:px-12"
          variants={footerItemVariants}
        >
          {/* Your first big block (logo + text + social icons) */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <img src="/assets/logo.png" alt="Adroyts Logo" className="h-10 w-auto" />
            </div>

            <p className="mb-6 max-w-xs font-bold leading-relaxed text-[#ffffff99]">
              Adroyts’ focus is on serving corporate clients in Saudi Arabia and other GCC markets by
              providing them with top experienced professionals in a range of key sectors.
            </p>

            <div className="flex space-x-3">
              <a href="#" aria-label="LinkedIn" className="text-white transition hover:text-gray-400">
                <img src="/assets/linkedin.png" alt="LinkedIn Icon" className="h-6 w-6 bg-cover" />
              </a>
              <a href="#" aria-label="X/Twitter" className="text-white transition hover:text-gray-400">
                <img src="/assets/x.png" alt="X/Twitter Icon" className="h-6 w-6 bg-cover" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white transition hover:text-gray-400">
                <img src="/assets/instagram.png" alt="Instagram Icon" className="h-6 w-6 bg-cover" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Link Columns */}
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-8"
            variants={footerItemVariants}
          >
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
          </motion.div>
        </motion.div>

        <div className="mx-auto max-w-8xl border-t border-gray-700"></div>

        <motion.div
          className="mx-auto grid max-w-8xl gap-8 px-6 py-10 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:gap-16"
          variants={footerItemVariants}
        >
          {/* Contact Information */}
          <div className="grid gap-4 text-sm sm:grid-cols-3 md:col-span-1 lg:col-span-2">
            <div className="flex items-start">
              <span className="mr-3 mt-1 text-white">
                <img src="/assets/location.png" alt="Location Icon" className="h-6 w-9 bg-cover" />
              </span>
              <p className="leading-relaxed text-[#ffffff99]">
                3385 Thumamah Road, Alnada District, Riyadh 13317,
                <br />
                Kingdom of Saudi Arabia
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="mr-3 text-white">
                  <img src="/assets/phone.png" alt="Phone Icon" className="h-6 w-6 bg-cover" />
                </span>
                <p className="text-[#ffffff99]">+966 11 23 42 667</p>
              </div>

              <div className="flex items-start">
                <span className="mr-3 text-white">
                  <img src="/assets/email.png" alt="Email Icon" className="h-6 w-6 bg-cover" />
                </span>
                <p className="text-[#ffffff99]">contact@adroyts.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex items-center">
            <p className="mb-3 text-sm text-[#ffffff99]">Stay up to date on the latest Adroyts news.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow border border-white/60 bg-transparent p-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button className="bg-white px-4 py-2 text-sm font-semibold text-black transition duration-150 hover:bg-gray-200">
                Send
              </button>
            </form>
          </div>
        </motion.div>

        <div className="mx-auto max-w-8xl border-t border-gray-700"></div>
      </motion.footer>
    </div>
  );
};

export default Home;
