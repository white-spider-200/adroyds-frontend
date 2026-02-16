import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import mainServices from "../services/mainServices";

const PagesContext = createContext();

export const PagesProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const res = await mainServices.getPages(i18n.language);
        setSections(res?.data?.data || []);
      } catch (err) {
        console.error("Sections fetch error:", err);
      }
    };

    fetchSections();
  }, [i18n.language]);

  const isActive = (key) => {
    return sections.find((s) => s.key === key)?.is_active === true;
  };

  return <PagesContext.Provider value={{ isActive }}>{children}</PagesContext.Provider>;
};

export const usePages = () => useContext(PagesContext);
