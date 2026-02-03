import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaBars,
  FaChevronDown,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
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
  const [searchOpen, setSearchOpen] = useState(false);

  const [showScrollUp, setShowScrollUp] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [mobileDropdown, setMobileDropdown] = useState(null);

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
    const handleEsc = (e) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
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
    location.pathname == path ? "text-cyan-400" : "text-white hover:text-cyan-200 ";

  const isActiveParent = (prefix) =>
    location.pathname.startsWith(prefix) ? "text-cyan-400" : "text-white hover:text-cyan-200";

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
        <div className="container mx-auto flex max-w-7xl items-center justify-between bg-navy-500 p-6 md:bg-transparent md:px-6">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2">
            <img
              src="/assets/logo.png" // adjust path based on your file location
              alt="Adroyts Logo"
              className="h-7 w-auto md:h-9" // adjust size as needed
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
                {i18n.language === "ar" ? "من نحن؟" : "About Us"}
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
                  // { label: "BoardOfDirectors", hash: "#board" },
                  // { label: "ExecutiveManagement", hash: "#executive" },
                ].map((item) => (
                  <button
                    key={item.hash}
                    onClick={() => handleNav(`/about${item.hash}`)}
                    className="block w-full px-4 py-2 text-justify text-gray-700 hover:bg-cyan-50"
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
                {i18n.language === "ar" ? "ماذا نقدّم؟" : "What We Do?"}
                <FaChevronDown className="mt-0.5 text-xs" />
              </button>
              <div
                className={`absolute left-0 top-full mt-2 w-60 rounded-lg border bg-white py-2 shadow-md transition-all duration-200 ${
                  dropdown === "services" ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                {[
                  { label: "recruitmentSolutionsTitle", path: "/services/recruitment" },
                  { label: "talentAssessment.title", path: "/services/assessment" },
                  { label: "academy.title", path: "/services/academy" },
                  { label: "hrConsulting.title", path: "/services/consulting" },
                ].map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNav(item.path)}
                    className="block w-full px-4 py-2 text-justify text-gray-700 hover:bg-cyan-50"
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
                    className="block w-full px-4 py-2 text-justify text-gray-700 hover:bg-cyan-50"
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
            <div className="hidden md:flex">
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden items-center rounded-full p-3 text-white transition md:flex"
            >
              <FaSearch />
            </button>
            <button
              onClick={() => handleNav("/contact")}
              className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full border-2 border-cyan-400 bg-transparent py-1 font-medium text-neutral-50 transition-colors duration-300 hover:text-neutral-50 ltr:pl-6 ltr:pr-16 rtl:pl-16 rtl:pr-6"
            >
              {/* Button Text */}
              <span className="z-10 pr-2">{i18n.language === "ar" ? "تواصل معنا" : "Contact Us"}</span>

              {/* Animated Background / Arrow */}
              <div
                className={`absolute ${
                  i18n.language === "ar" ? "left-1" : "right-1"
                } inline-flex h-12 w-12 items-center justify-end rounded-full bg-cyan-400 transition-[width] duration-300 group-hover:w-[calc(100%-8px)]`}
              >
                <div
                  className={`flex items-center justify-center ${
                    i18n.language === "ar" ? "ml-3.5" : "mr-3.5"
                  }`}
                >
                  {i18n.language === "ar" ? <FaArrowLeft /> : <FaArrowRight />}
                </div>
              </div>
            </button>

            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <FaTimes className="text-white" size={22} />
              ) : (
                <FaBars className="text-white" size={22} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="space-y-3 border-t border-gray-700 bg-navy-500 px-6 py-4 shadow-lg md:hidden">
            {/* Top-level links with optional submenus */}
            {[
              { label: "home", path: "/" },
              {
                label: "aboutUs",
                submenu: [
                  { label: "overview", hash: "#overview" },
                  { label: "ourPillars", hash: "#pillars" },
                  { label: "corePerformance", hash: "#performance" },
                  { label: "whyUs", hash: "#why" },
                  // { label: "BoardOfDirectors", hash: "#board" },
                  // { label: "ExecutiveManagement", hash: "#executive" },
                ],
              },
              {
                label: "exploreOurServices",
                submenu: [
                  { label: "recruitmentSolutionsTitle", path: "/services/recruitment" },
                  { label: "talentAssessment.title", path: "/services/assessment" },
                  { label: "academy.title", path: "/services/academy" },
                  { label: "hrConsulting.title", path: "/services/consulting" },
                ],
              },
              { label: "careers", path: "/careers" },
              {
                label: "mediaCenter",
                submenu: [
                  { label: "blog", path: "/media-center/blogs" },
                  { label: "news", path: "/media-center/news" },
                  { label: "caseStudies", path: "/media-center/case-studies" },
                ],
              },
            ].map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setMobileDropdown((prev) => (prev === item.label ? null : item.label))}
                      className="flex w-full justify-between py-2 text-white transition-colors hover:text-cyan-400 ltr:text-left rtl:text-right"
                    >
                      {t(item.label)}
                      <FaChevronDown
                        className={`mt-1 text-xs transition-transform duration-200 ${mobileDropdown === item.label ? "rotate-180" : "rotate-0"}`}
                      />
                    </button>
                    <div
                      className={`mt-1 space-y-1 pl-4 transition-all duration-200 ${
                        mobileDropdown === item.label ? "block" : "hidden"
                      }`}
                    >
                      {item.submenu.map((sub) => (
                        <button
                          key={sub.path || sub.hash}
                          onClick={() => handleNav(sub.path || `/about${sub.hash}`)}
                          className="block w-full py-1 text-gray-300 transition-colors hover:text-cyan-400 ltr:text-left rtl:text-right"
                        >
                          {t(sub.label)}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => handleNav(item.path)}
                    className="block w-full py-2 text-white transition-colors hover:text-cyan-400 ltr:text-left rtl:text-right"
                  >
                    {t(item.label)}
                  </button>
                )}
              </div>
            ))}
            <LanguageSwitcher />
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
            {new Date().getFullYear()} © {t("copyright")} {t("companyName")}
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
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999]"
          onClick={() => setSearchOpen(false)}
        >
          {/* TOP PANEL (30%) */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="mt-24 flex h-[30vh] w-full items-center justify-center px-6"
          >
            <div className="relative w-full max-w-3xl">
              {/* Close Button */}
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white"
              >
                <FaTimes size={22} />
              </button>

              {/* Search Input */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-6 py-5 shadow-xl">
                <FaSearch className="text-white/70" size={22} />
                <input
                  autoFocus
                  type="text"
                  placeholder={i18n.language === "ar" ? "ابحث هنا..." : "Search anything..."}
                  className="w-full bg-transparent text-xl text-white placeholder-white/60 outline-none"
                />
              </div>

              {/* Hint */}
              <p className="mt-4 text-center text-sm text-white/50">
                {i18n.language === "ar"
                  ? "اضغط Enter للبحث أو ESC للإغلاق"
                  : "Press Enter to search or ESC to close"}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default MainLayout;
