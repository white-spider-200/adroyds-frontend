import React from "react";
import { useTranslation } from "react-i18next";
import { HiGlobeAlt } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("lang", newLang);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 rounded-full px-2 py-1 text-white transition hover:bg-white/30"
    >
      <span className="text-sm">{i18n.language === "ar" ? "English" : "عربي"}</span>
      <HiGlobeAlt className="mt-[2px] text-lg" />
    </button>
  );
}
