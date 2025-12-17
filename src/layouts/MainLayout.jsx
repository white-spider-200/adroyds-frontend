import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaArrowUp, FaBars, FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import LanguageSwitcher from "../components/LanguageSwitcher";
import mainServices from "../services/mainServices";

const footerItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const MainLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [socialMedia, setSocialMedia] = useState([]);

  const [showScrollUp, setShowScrollUp] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

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

  useEffect(() => {
    const fetchSocialMedia = async () => {
      try {
        const [socialRes] = await Promise.all([mainServices.getSocialMedia(i18n.language)]);

        setSocialMedia(socialRes?.data?.data || []);
        console.log("socialRes?.data?.data", socialRes?.data?.data);
      } catch (err) {
        console.error("Home data fetch error:", err);
      }
    };

    fetchSocialMedia();
  }, [i18n.language]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const isActive = (path) =>
    location.pathname == path ? "text-cyan-400" : "text-white hover:text-blue-200 ";

  const isActiveParent = (prefix) =>
    location.pathname.startsWith(prefix) ? "text-cyan-400" : "text-white hover:text-blue-200";

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
          isScrolled ? "bg-black bg-opacity-25 backdrop-blur-md" : ""
        }`}
      >
        <div className="container mx-auto flex max-w-7xl items-center justify-between p-6 md:px-6">
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
                  { label: "overview", hash: "#overview" },
                  { label: "ourPillars", hash: "#pillars" },
                  { label: "corePerformance", hash: "#performance" },
                  { label: "whyUs", hash: "#why" },
                ].map((item) => (
                  <button
                    key={item.hash}
                    onClick={() => handleNav(`/about${item.hash}`)}
                    className="block w-full px-4 py-2 text-justify text-gray-700 hover:bg-blue-50"
                  >
                    {t(item.label)}
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
                {i18n.language === "ar" ? "خدماتنا" : "Our Services"}
                <FaChevronDown className="mt-0.5 text-xs" />
              </button>
              <div
                className={`absolute left-0 top-full mt-2 w-60 rounded-lg border bg-white py-2 shadow-md transition-all duration-200 ${
                  dropdown === "services" ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                {[
                  { label: "recruitmentSolutionsTitle", path: "/services/recruitment" },
                  { label: "academy.title", path: "/services/academy" },
                  { label: "talentAssessment.title", path: "/services/assessment" },
                  { label: "hrConsulting.title", path: "/services/consulting" },
                ].map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNav(item.path)}
                    className="block w-full px-4 py-2 text-justify text-gray-700 hover:bg-blue-50"
                  >
                    {t(item.label)}
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
              <button className={`flex items-center gap-1 ${isActiveParent("/media-center")}`}>
                {i18n.language === "ar" ? "مركز المعرفة" : "Knowledge & Media Center"}
                <FaChevronDown className="mt-0.5 text-xs" />
              </button>
              <div
                className={`absolute left-0 top-full mt-2 w-52 rounded-lg border bg-white py-2 shadow-md transition-all duration-200 ${
                  dropdown === "media" ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                {[
                  { label: "blog", hash: "media-center/blogs" },
                  { label: "news", hash: "media-center/news" },
                  { label: "caseStudies", hash: "media-center/case-studies" },
                ].map((item) => (
                  <button
                    key={item.hash}
                    onClick={() => handleNav(`/${item.hash}`)}
                    className="block w-full px-4 py-2 text-justify text-gray-700 hover:bg-blue-50"
                  >
                    {t(item.label)}
                  </button>
                ))}
              </div>
            </div>

            {/* Careers */}
            <Link to="/careers" className={isActive("/careers")}>
              {i18n.language === "ar" ? "الوظائف" : "Careers"}
            </Link>
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
              <FaArrowRight className={`${i18n.language === "ar" ? "rotate-180" : ""}`} />
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
                className="block w-full py-2 text-justify text-gray-700"
              >
                {t(item.label)}
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
          className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-12"
          variants={footerItemVariants}
        >
          {/* Your first big block (logo + text + social icons) */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <img src="/assets/logo.png" alt="Adroyts Logo" className="h-10 w-auto" />
            </div>

            <p className="mb-6 max-w-xs font-bold leading-relaxed text-[#ffffff99]">{t("footerDesc")}</p>

            <div className="flex space-x-3">
              {socialMedia.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition hover:text-gray-400"
                >
                  <img src={item.image} alt={`Icon`} className="h-6 w-6 bg-cover" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Link Columns */}
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-8"
            variants={footerItemVariants}
          >
            {/* Company Links Column */}
            <div>
              <h4 className="mb-4 text-xl uppercase tracking-widest text-white">{t("company")}</h4>
              <ul className="space-y-3 text-[#ffffff99]">
                <li>
                  <Link className="transition duration-150 hover:text-white" to="/about#overview">
                    {t("aboutUs")}
                  </Link>
                </li>
                <li>
                  <Link className="transition duration-150 hover:text-white" to="/contact">
                    {t("contactUs")}
                  </Link>
                </li>
                <li>
                  <Link className="transition duration-150 hover:text-white" to="/careers">
                    {t("careers")}
                  </Link>
                </li>
                <li>
                  <Link className="transition duration-150 hover:text-white" to="/sitemap">
                    {t("sitemap")}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Services Links Column */}
            <div>
              <h4 className="mb-4 text-xl uppercase tracking-widest text-white">{t("coreServices")}</h4>
              <ul className="space-y-3 text-[#ffffff99]">
                <li>
                  <a href="#" className="transition duration-150 hover:text-white">
                    {t("recruitmentSolutionsTitle")}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition duration-150 hover:text-white">
                    {t("academy.title")}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition duration-150 hover:text-white">
                    {t("talentAssessment.title")}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition duration-150 hover:text-white">
                    {t("hrConsulting.title")}
                  </a>
                </li>
              </ul>
            </div>
            {/* Resources Links Column */}
            <div>
              <h4 className="mb-4 text-xl uppercase tracking-widest text-white">{t("resources")}</h4>
              <ul className="space-y-3 text-[#ffffff99]">
                <li>
                  <a href="#" className="transition duration-150 hover:text-white">
                    {t("blog")}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition duration-150 hover:text-white">
                    {t("caseStudies")}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition duration-150 hover:text-white">
                    {t("faq")}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition duration-150 hover:text-white">
                    {t("news")}
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <div className="mx-auto max-w-7xl border-t border-gray-700"></div>

        <motion.div
          className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:gap-16"
          variants={footerItemVariants}
        >
          {/* Contact Information */}
          <div className="grid gap-4 text-sm sm:grid-cols-3 md:col-span-1 lg:col-span-2">
            <div className="flex items-start">
              <span className="mr-3 mt-1 text-white rtl:ml-3">
                <img src="/assets/location.png" alt="Location Icon" className="h-6 w-9 bg-cover" />
              </span>
              {i18n.language == "ar" ? (
                <p className="leading-relaxed text-[#ffffff99]">
                  ٣٣٨٥ طريق الثمامة، حي الندى، الرياض ١٣٣١٧،
                  <br />
                  المملكة العربية السعودية
                </p>
              ) : (
                <p className="leading-relaxed text-[#ffffff99]">
                  3385 Thumamah Road, Alnada District, Riyadh 13317,
                  <br />
                  Kingdom of Saudi Arabia
                </p>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="mr-3 text-white rtl:ml-3">
                  <img src="/assets/phone.png" alt="Phone Icon" className="h-6 w-6 bg-cover" />
                </span>
                <span>
                  {i18n.language === "ar" ? (
                    <a
                      href="tel:+966112342667"
                      className="text-[#ffffff99] hover:text-cyan-400 hover:underline"
                    >
                      667 42 23 11 966+
                    </a>
                  ) : (
                    <a
                      href="tel:+966112342667"
                      className="text-[#ffffff99] hover:text-cyan-400 hover:underline"
                    >
                      +966 11 23 42 667
                    </a>
                  )}
                </span>
              </div>

              <div className="flex items-start">
                <span className="mr-3 text-white rtl:ml-3">
                  <img src="/assets/email.png" alt="Email Icon" className="h-6 w-6 bg-cover" />
                </span>
                <a
                  href="mailto:contact@adroyts.com"
                  className="text-[#ffffff99] hover:text-cyan-400 hover:underline"
                >
                  contact@adroyts.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col">
            <p className="mb-3 text-sm text-[#ffffff99]">{t("stayUpToDate")}</p>
            <form className="flex">
              <input
                type="email"
                placeholder={t("yourEmail")}
                className="flex-grow border border-white/60 bg-transparent p-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button className="bg-white px-4 py-2 text-sm font-semibold text-black transition duration-150 hover:bg-gray-200">
                {t("send")}
              </button>
            </form>
          </div>
        </motion.div>

        <div className="mx-auto max-w-7xl border-t border-gray-700"></div>
      </motion.footer>

      <footer className="bg-[#0e1a41]">
        <div className="m-auto flex max-w-7xl items-center justify-between px-6 py-12 text-center text-sm text-white md:px-12">
          <p>
            {t("copyright")} {new Date().getFullYear()}. {t("companyName")}
          </p>
          <div className="flex items-center gap-8">
            <Link to="/privacy-policy" className="text-[#ffffff99] hover:underline">
              {t("privacyPolicy")}
            </Link>
            <Link to="/terms-of-use" className="text-[#ffffff99] hover:underline">
              {t("termsOfUse")}
            </Link>
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
