import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { SplitText } from "../utils/SplitText";

const sectorsData = [
  {
    id: "government",
    titleAr: "القطاع الحكومي",
    titleEn: "Government Sector",
    descriptionAr:
      "ندعم الجهات الحكومية في بناء أنظمة فعالة لتعزيز رأس المال البشري وتطوير القيادات ورفع كفاءة الأداء المؤسسي.",
    descriptionEn:
      "We support government entities with talent systems, leadership development, and stronger institutional performance.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "real-estate",
    titleAr: "القطاع العقاري",
    titleEn: "Real Estate Sector",
    descriptionAr:
      "نساعد شركات القطاع العقاري على استقطاب أفضل المواهب وبناء فرق قادرة على تحقيق النمو وتقديم قيمة مستدامة.",
    descriptionEn:
      "We help real estate companies attract strong talent and build teams that support sustainable growth.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "financial",
    titleAr: "القطاع المالي",
    titleEn: "Financial Sector",
    descriptionAr:
      "نمكّن المؤسسات المالية من بناء فرق عالية الكفاءة وتعزيز ثقافة الامتثال ورفع الجاهزية للتميز والنمو.",
    descriptionEn:
      "We enable financial institutions to build high-performing teams with stronger compliance and growth readiness.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "education",
    titleAr: "قطاع التعليم",
    titleEn: "Education Sector",
    descriptionAr:
      "نتعاون مع المؤسسات التعليمية لتطوير الكفاءات ورفع جاهزية الموظفين وتمكين بيئات تعليمية أكثر تأثيراً.",
    descriptionEn:
      "We partner with education organizations to develop capabilities and create more effective learning environments.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "energy",
    titleAr: "قطاع الطاقة",
    titleEn: "Energy Sector",
    descriptionAr:
      "نساند مؤسسات الطاقة في تطوير القيادات وتعزيز ثقافة السلامة وبناء فرق جاهزة للتحديات المستقبلية.",
    descriptionEn:
      "We support energy organizations with leadership development, safety culture, and future-ready teams.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
  },
];

const buildSectors = (items, count) => {
  if (count <= items.length) return items.slice(0, count);

  const output = [];
  while (output.length < count) {
    items.forEach((item, index) => {
      if (output.length < count) {
        output.push({
          ...item,
          loopKey: `${item.id}-${output.length}-${index}`,
        });
      }
    });
  }

  return output;
};

const SectorsSlider = ({ cardCount = 5 }) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const sectors = buildSectors(sectorsData, cardCount);
  const orderedSectors = isArabic ? sectors : [...sectors].reverse();
  const activeIndex = Math.floor((orderedSectors.length - 1) / 2);
  const sliderRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = () => {
    const container = sliderRef.current;
    if (!container) return;

    const maxScroll = Math.max(container.scrollWidth - container.clientWidth, 0);
    const normalizedScroll = Math.min(Math.max(Math.abs(container.scrollLeft), 0), maxScroll);

    setCanScrollPrev(normalizedScroll > 8);
    setCanScrollNext(normalizedScroll < maxScroll - 8);
  };

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    updateScrollState();
    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [isArabic, orderedSectors.length]);

  const scrollSlider = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const step = Math.max(container.clientWidth * 0.72, 220);
    const delta = direction === "next" ? step : -step;

    container.scrollBy({
      left: delta,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f6f5f3] py-16 md:py-20" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-10 h-px max-w-6xl bg-[#0E1C3F]/25" />

        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <SplitText className="text-center text-3xl font-bold tracking-tight text-[#0E1C3F] md:text-4xl">
            {isArabic ? "القطاعات التي نخدمها" : "The Sectors We Serve"}
          </SplitText>

          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollSlider("prev")}
              disabled={!canScrollPrev}
              aria-label={isArabic ? "الانتقال إلى القطاعات السابقة" : "Show previous sectors"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0E1C3F]/15 bg-white text-[#0E1C3F] shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
            >
              {isArabic ? <FaArrowRight /> : <FaArrowLeft />}
            </button>

            <button
              type="button"
              onClick={() => scrollSlider("next")}
              disabled={!canScrollNext}
              aria-label={isArabic ? "الانتقال إلى القطاعات التالية" : "Show next sectors"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0E1C3F]/15 bg-white text-[#0E1C3F] shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
            >
              {isArabic ? <FaArrowLeft /> : <FaArrowRight />}
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex min-w-max items-stretch justify-center gap-3 px-2 md:gap-4">
            {orderedSectors.map((sector, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.article
                  key={sector.loopKey || sector.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`relative flex h-[250px] w-[160px] flex-shrink-0 flex-col overflow-hidden rounded-[12px] border border-white/40 bg-white/10 shadow-[0_12px_40px_rgba(14,28,63,0.10)] backdrop-blur-sm md:h-[300px] md:w-[180px] ${
                    isActive ? "md:-translate-y-3 md:scale-[1.04]" : "md:translate-y-2 md:scale-[0.98]"
                  }`}
                  style={{
                    transform: `perspective(1000px) rotateY(${isArabic ? 6 - index * 3 : index * 3 - 6}deg)`,
                  }}
                >
                  <img
                    src={sector.image}
                    alt={isArabic ? sector.titleAr : sector.titleEn}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#23395f]/60 via-[#1f355a]/55 to-[#0b1a39]/88" />

                  <div className="relative z-10 mx-auto mt-3 w-[84%] rounded-[10px] border border-[#d2d8e5]/70 bg-white/90 px-3 py-2 text-center shadow-sm">
                    <h3 className="text-xs font-bold text-[#0E1C3F] md:text-sm">
                      {isArabic ? sector.titleAr : sector.titleEn}
                    </h3>
                  </div>

                  <div className="relative z-10 my-auto px-3 text-center">
                    <p className="text-xs font-medium leading-6 text-white md:text-sm md:leading-7">
                      {isArabic ? sector.descriptionAr : sector.descriptionEn}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSlider;
