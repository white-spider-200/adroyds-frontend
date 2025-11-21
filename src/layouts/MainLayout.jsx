import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaArrowUp, FaBars, FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import LanguageSwitcher from "../components/LanguageSwitcher";

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

const MainLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setShowScrollUp(scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const isActive = (path) => (location.pathname === path ? "text-white" : "text-white hover:text-blue-200 ");

  const handleNav = (path) => {
    setDropdown(null);
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <div className="relative flex min-h-screen flex-col" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <header
        className={`border-b-1 sticky top-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-[#0E1C3F]/40 backdrop-blur-md" : ""
        }`}
      >
        <div className="container mx-auto flex max-w-6xl items-center justify-between p-6 md:px-6">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2">
            <img
              src="/assets/logo.png" // adjust path based on your file location
              alt="Adroyts Logo"
              className="h-9 w-auto" // adjust size as needed
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="relative hidden items-center gap-8 md:flex">
            <Link to="/" className={isActive("/")}>
              {i18n.language === "ar" ? "الرئيسية" : "Home"}
            </Link>

            {/* About Us */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("about")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className={`flex items-center gap-1 ${isActive("/about")}`}>
                {i18n.language === "ar" ? "من نحن" : "About Us"}
                <FaChevronDown className="mt-0.5 text-xs" />
              </button>
              <div
                className={`absolute left-0 top-full mt-2 w-56 rounded-lg border bg-white py-2 shadow-md transition-all duration-200 ${
                  dropdown === "about" ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                {[
                  { label: "Overview", hash: "#overview" },
                  { label: "Core Values", hash: "#values" },
                  { label: "Why Adroyts", hash: "#why" },
                  { label: "Mission & Vision", hash: "#mission-vision" },
                  { label: "Board of Directors", hash: "#board" },
                  { label: "Executive Management", hash: "#executive" },
                ].map((item) => (
                  <button
                    key={item.hash}
                    onClick={() => handleNav(`/about${item.hash}`)}
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-50"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("services")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className={`flex items-center gap-1 ${isActive("/services/recruitment")}`}>
                {i18n.language === "ar" ? "الخدمات" : "Services"}
                <FaChevronDown className="mt-0.5 text-xs" />
              </button>
              <div
                className={`absolute left-0 top-full mt-2 w-60 rounded-lg border bg-white py-2 shadow-md transition-all duration-200 ${
                  dropdown === "services" ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                {[
                  { label: "Recruitment Solutions", path: "/services/recruitment" },
                  { label: "Adroyts Academy", path: "/services/academy" },
                  { label: "Assessment Center", path: "/services/assessment" },
                  { label: "Human Capital Consulting", path: "/services/consulting" },
                ].map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNav(item.path)}
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-50"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Media Center */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("media")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className={`flex items-center gap-1 ${isActive("/media")}`}>
                {i18n.language === "ar" ? "مركز المعرفة" : "Knowledge & Media Center"}
                <FaChevronDown className="mt-0.5 text-xs" />
              </button>
              <div
                className={`absolute left-0 top-full mt-2 w-52 rounded-lg border bg-white py-2 shadow-md transition-all duration-200 ${
                  dropdown === "media" ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                {[
                  { label: "Blog", hash: "media-center/blogs" },
                  { label: "News", hash: "media-center/news" },
                  { label: "Case Studies", hash: "media-center/case-studies" },
                ].map((item) => (
                  <button
                    key={item.hash}
                    onClick={() => handleNav(`/${item.hash}`)}
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-50"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Careers */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("careers")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className={`flex items-center gap-1 ${isActive("/careers")}`}>
                {i18n.language === "ar" ? "الوظائف" : "Careers"}
                <FaChevronDown className="mt-0.5 text-xs" />
              </button>
              <div
                className={`absolute left-0 top-full mt-2 w-44 rounded-lg border bg-white py-2 shadow-md transition-all duration-200 ${
                  dropdown === "careers" ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                <button
                  onClick={() => handleNav("/careers#join")}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-50"
                >
                  Join Us
                </button>
                <button
                  onClick={() => handleNav("/careers#openings")}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-50"
                >
                  Job Openings
                </button>
              </div>
            </div>

            <Link to="/FAQs" className={isActive("/FAQs")}>
              {i18n.language === "ar" ? "الاسئلة الشائعة" : "FAQs"}
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            <LanguageSwitcher />
            <button
              onClick={() => handleNav("/contact")}
              className="relative hidden items-center gap-2 rounded-full border-2 border-white bg-transparent px-4 py-2 text-white transition duration-300 ease-in-out hover:border-cyan-400 hover:text-cyan-400 md:flex"
            >
              <span>{i18n.language === "ar" ? "تواصل معنا" : "Contact Us"}</span>
              <FaArrowRight className="transition duration-300 ease-in-out group-hover:translate-x-1" />
            </button>

            {/* <button
              onClick={() => handleNav("/contact")}
              className="hidden items-center rounded-full bg-white p-3 text-black transition md:flex"
            >
              <FaSearch />
            </button> */}
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="space-y-3 border-t bg-white px-6 py-4 shadow-md md:hidden">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services/recruitment" },
              { label: "Careers", path: "/careers" },
              { label: "Media", path: "/media" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className="block w-full py-2 text-left text-gray-700"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("/contact")}
              className="w-full rounded-lg bg-white px-4 py-2 text-black shadow"
            >
              {i18n.language === "ar" ? "تواصل الآن" : "Get in Touch"}
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">{children}</main>

      {/* Footer */}
      <motion.footer className="bg-[#0e1a41] text-gray-300" initial="hidden" whileInView="visible">
        {/* Inside your footer, wrap key blocks with motion.div and apply item variants */}

        <motion.div
          className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-12 md:px-12"
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

        <div className="mx-auto max-w-6xl border-t border-gray-700"></div>

        <motion.div
          className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:gap-16"
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

        <div className="mx-auto max-w-6xl border-t border-gray-700"></div>
      </motion.footer>

      <footer className="bg-[#0e1a41]">
        <div className="m-auto flex max-w-6xl items-center justify-between px-6 py-12 text-center text-sm text-white md:px-12">
          <p>Copyright© {new Date().getFullYear()}. Adroyts Executive Search.</p>
          <div className="flex items-center gap-8">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </footer>

      {/* Scroll Up Button */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-6 z-50 rounded-full bg-cyan-400 p-3 text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default MainLayout;
