import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.scss";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Faqs from "./pages/FAQs";
import Home from "./pages/Home";
import BlogDetails from "./pages/mediaCenter/BlogDetails";
import Blogs from "./pages/mediaCenter/Blogs";
import CaseStudies from "./pages/mediaCenter/CaseStudies";
import CaseStudyDetails from "./pages/mediaCenter/CaseStudyDetails";
import News from "./pages/mediaCenter/News";
import NewsDetails from "./pages/mediaCenter/NewsDetails";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Academy from "./pages/services/Academy";
import Assessment from "./pages/services/Assessment";
import Consulting from "./pages/services/Consulting";
import Recruitment from "./pages/services/Recruitment";
import Sitemap from "./pages/Sitemap";
import TermsOfUse from "./pages/TermsOfUse";

export default function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    let lang = searchParams.get("lang");

    if (!lang) {
      lang = i18n.language || "ar";
      searchParams.set("lang", lang);
      navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    }

    // ---- UPDATE BODY CLASS ----
    if (lang === "ar") {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
    // Update i18n if needed
    if (lang !== i18n.language) i18n.changeLanguage(lang);
  }, [location.search, i18n, navigate, location.pathname]);

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services/recruitment" element={<Recruitment />} />
        <Route path="/services/academy" element={<Academy />} />
        <Route path="/services/assessment" element={<Assessment />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/media-center/blogs" element={<Blogs />} />
        <Route path="/media-center/news" element={<News />} />
        <Route path="/media-center/case-studies" element={<CaseStudies />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQs" element={<Faqs />} />
        <Route path="/blog" element={<BlogDetails />} />
        <Route path="/news" element={<NewsDetails />} />
        <Route path="/case-study" element={<CaseStudyDetails />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}
