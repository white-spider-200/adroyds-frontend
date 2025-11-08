import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaArrowUp, FaBars, FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import LanguageSwitcher from "../components/LanguageSwitcher";

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

  const isActive = (path) => (location.pathname === path ? "text-white" : "text-white hover:text-blue-700 ");

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
        <div className="container mx-auto flex max-w-8xl items-center justify-between p-6 md:px-12">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2">
            <img
              src="/assets/logo.png" // adjust path based on your file location
              alt="Adroyts Logo"
              className="h-10 w-auto" // adjust size as needed
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
                className={`absolute left-0 top-full mt-2 w-56 rounded-xl border bg-white py-2 shadow-md transition-all duration-200 ${
                  dropdown === "about" ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                {[
                  { label: "Overview", hash: "#overview" },
                  { label: "Vision & Mission", hash: "#vision" },
                  { label: "Our Values", hash: "#values" },
                  { label: "Why Adroyts", hash: "#why" },
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
                className={`absolute left-0 top-full mt-2 w-60 rounded-xl border bg-white py-2 shadow-md transition-all duration-200 ${
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
                className={`absolute left-0 top-full mt-2 w-52 rounded-xl border bg-white py-2 shadow-md transition-all duration-200 ${
                  dropdown === "media" ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                {[
                  { label: "Case Studies", hash: "#case-studies" },
                  { label: "Blog", hash: "#blog" },
                  { label: "News", hash: "#news" },
                  { label: "Media Center", hash: "#gallery" },
                ].map((item) => (
                  <button
                    key={item.hash}
                    onClick={() => handleNav(`/media${item.hash}`)}
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
                className={`absolute left-0 top-full mt-2 w-44 rounded-xl border bg-white py-2 shadow-md transition-all duration-200 ${
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

            <Link to="/contact" className={isActive("/contact")}>
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

            <button
              onClick={() => handleNav("/contact")}
              className="hidden items-center rounded-full bg-white p-3 text-black transition md:flex"
            >
              <FaSearch />
            </button>
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

      <footer className="bg-[#0e1a41]">
        <div className="m-auto flex max-w-8xl items-center justify-between px-6 py-12 text-center text-sm text-white md:px-12">
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
          className="fixed bottom-4 right-6 z-50 rounded-full bg-[#1dc0da] p-3 text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default MainLayout;
