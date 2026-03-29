import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaQuoteLeft } from "react-icons/fa";

import { SplitText } from "../utils/SplitText";

const caseStudiesByVariant = {
  assessment: {
    en: [
      {
        title: "Leadership Readiness for a Regional Bank",
        summary:
          "We designed a tailored assessment center for branch leaders, combining simulations, psychometrics, and structured interviews to improve promotion decisions.",
        result:
          "Reduced mis-hires for leadership roles and gave HR a clearer succession shortlist within 4 weeks.",
      },
      {
        title: "Graduate Screening for a Telecom Program",
        summary:
          "Our team screened high-volume graduate applicants using competency-based exercises and group assessments built around the client's future skills model.",
        result: "Cut shortlist review time by 55% while improving candidate quality and hiring confidence.",
      },
    ],
    ar: [
      {
        title: "جاهزية القيادات في بنك إقليمي",
        summary:
          "صممنا مركز تقييم مخصصا لقادة الفروع يجمع بين المحاكاة والاختبارات السيكومترية والمقابلات المنظمة لتحسين قرارات الترقية.",
        result: "ساهم المشروع في تقليل أخطاء التعيين في المناصب القيادية وتقديم قائمة إحلال أوضح خلال 4 أسابيع.",
      },
      {
        title: "فرز الخريجين لبرنامج في قطاع الاتصالات",
        summary:
          "قمنا بتقييم أعداد كبيرة من المتقدمين من خلال تمارين قائمة على الكفاءات وأنشطة جماعية مرتبطة بمهارات المستقبل لدى العميل.",
        result: "تم تقليص وقت مراجعة القوائم المختصرة بنسبة 55% مع تحسين جودة المرشحين ورفع ثقة فريق التوظيف.",
      },
    ],
  },
  academy: {
    en: [
      {
        title: "Sales Capability Upskilling for a Retail Group",
        summary:
          "Adroits Academy built a practical learning journey for front-line managers covering coaching, customer engagement, and performance follow-up.",
        result:
          "Improved training completion rates and gave the client a repeatable internal coaching model across branches.",
      },
      {
        title: "Future Leaders Program for a Government Entity",
        summary:
          "We created a blended academy experience with workshops, applied projects, and post-training evaluation for emerging leaders.",
        result:
          "Participants reported stronger leadership confidence and the client launched a second cohort based on the pilot's success.",
      },
    ],
    ar: [
      {
        title: "رفع جاهزية فرق المبيعات لدى مجموعة تجزئة",
        summary:
          "طورت أكاديمية أدرويتس رحلة تدريبية عملية لمديري الصف الأمامي ركزت على الإشراف والتفاعل مع العملاء ومتابعة الأداء.",
        result:
          "ساهم البرنامج في تحسين نسب إكمال التدريب وتزويد العميل بنموذج داخلي قابل للتكرار للتوجيه عبر الفروع.",
      },
      {
        title: "برنامج قادة المستقبل لجهة حكومية",
        summary:
          "صممنا تجربة أكاديمية مدمجة تشمل ورش عمل ومشاريع تطبيقية وقياسا للأثر بعد التدريب للفئات القيادية الواعدة.",
        result:
          "أظهر المشاركون ثقة أكبر في المهارات القيادية، وقرر العميل إطلاق دفعة ثانية اعتمادا على نجاح التجربة الأولى.",
      },
    ],
  },
  consulting: {
    en: [
      {
        title: "HR Operating Model for a Growing Startup",
        summary:
          "We reviewed the existing people structure, clarified roles, and built an HR operating model aligned with rapid scale and hiring plans.",
        result:
          "The company gained clearer ownership, faster people decisions, and a roadmap for sustainable growth.",
      },
      {
        title: "Policy and Workforce Review for an Industrial Client",
        summary:
          "Our consultants audited workforce practices, refreshed core HR policies, and prioritized process improvements for managers and HR teams.",
        result:
          "The client improved policy consistency and reduced delays in key employee lifecycle decisions.",
      },
    ],
    ar: [
      {
        title: "تصميم نموذج تشغيل الموارد البشرية لشركة ناشئة متنامية",
        summary:
          "راجعنا الهيكل القائم للموارد البشرية وحددنا الأدوار والمسؤوليات وصممنا نموذج تشغيل يدعم التوسع السريع وخطط التوظيف.",
        result:
          "حصلت الشركة على وضوح أكبر في الملكية المؤسسية وسرعة أعلى في اتخاذ القرارات وخارطة طريق للنمو المستدام.",
      },
      {
        title: "مراجعة السياسات والقوى العاملة لعميل صناعي",
        summary:
          "قمنا بتدقيق الممارسات الحالية وتحديث سياسات الموارد البشرية الأساسية وترتيب أولويات التحسين للمديرين وفرق الموارد البشرية.",
        result:
          "ساعد ذلك العميل على تحسين اتساق السياسات وتقليل التأخير في القرارات المرتبطة بدورة حياة الموظف.",
      },
    ],
  },
};

const testimonialsByVariant = {
  assessment: {
    en: [
      {
        quote:
          "The assessment center gave us a far more objective way to identify leadership potential. The process was structured, professional, and easy for our team to trust.",
        name: "HR Director",
        company: "Regional Financial Institution",
      },
      {
        quote:
          "We were impressed by how well the exercises reflected our real business challenges. The final recommendations were practical and immediately useful.",
        name: "Talent Manager",
        company: "National Telecom Company",
      },
    ],
    ar: [
      {
        quote:
          "أعطانا مركز التقييم طريقة أكثر موضوعية لاكتشاف الإمكانات القيادية. كانت العملية منظمة واحترافية وسهلة الاعتماد من قبل فريقنا.",
        name: "مدير الموارد البشرية",
        company: "مؤسسة مالية إقليمية",
      },
      {
        quote:
          "أعجبنا مدى ارتباط التمارين بتحديات العمل الحقيقية لدينا. كانت التوصيات النهائية عملية ويمكن الاستفادة منها مباشرة.",
        name: "مدير استقطاب المواهب",
        company: "شركة اتصالات وطنية",
      },
    ],
  },
  academy: {
    en: [
      {
        quote:
          "The academy experience was engaging from start to finish. Our teams left with tools they could apply right away, not just theory.",
        name: "Learning and Development Lead",
        company: "Retail Group",
      },
      {
        quote:
          "Adroits helped us shape a program that felt premium, relevant, and measurable. The participant feedback was one of the strongest we have seen.",
        name: "Program Sponsor",
        company: "Public Sector Client",
      },
    ],
    ar: [
      {
        quote:
          "كانت تجربة الأكاديمية ثرية من البداية إلى النهاية. خرجت فرقنا بأدوات عملية يمكن تطبيقها مباشرة، وليس بمجرد محتوى نظري.",
        name: "مسؤول التعلم والتطوير",
        company: "مجموعة تجزئة",
      },
      {
        quote:
          "ساعدتنا أدرويتس في بناء برنامج نوعي ومرتبط باحتياجنا وقابل للقياس. وكانت ملاحظات المشاركين من الأقوى التي حصلنا عليها.",
        name: "الراعي التنفيذي للبرنامج",
        company: "عميل من القطاع العام",
      },
    ],
  },
  consulting: {
    en: [
      {
        quote:
          "Their consulting team quickly understood our business stage and translated broad people challenges into a clear action plan.",
        name: "Chief Operating Officer",
        company: "High-Growth Startup",
      },
      {
        quote:
          "The recommendations were strategic but still practical for day-to-day operations. We now have stronger HR foundations to build on.",
        name: "Head of Shared Services",
        company: "Industrial Services Company",
      },
    ],
    ar: [
      {
        quote:
          "فهم فريق الاستشارات لدينا بسرعة طبيعة المرحلة التي نمر بها، وحول تحديات الموارد البشرية العامة إلى خطة عمل واضحة.",
        name: "الرئيس التنفيذي للعمليات",
        company: "شركة ناشئة عالية النمو",
      },
      {
        quote:
          "كانت التوصيات استراتيجية وعملية في الوقت نفسه، ويمكن تطبيقها في التشغيل اليومي. أصبح لدينا الآن أساس أقوى للموارد البشرية.",
        name: "مدير الخدمات المشتركة",
        company: "شركة خدمات صناعية",
      },
    ],
  },
};

const sectionLabels = {
  en: {
    caseStudies: "Case Studies",
    proofTitle: "Proof In Practice",
    proofNote: "Demo content for now. Replace these cards later with real success stories from your clients.",
    result: "Result",
    testimonials: "What Our Clients Say",
    trustTitle: "Trusted By Teams We Support",
  },
  ar: {
    caseStudies: "دراسات الحالة",
    proofTitle: "نماذج من واقع العمل",
    proofNote: "هذا محتوى تجريبي حاليا. يمكن استبداله لاحقا بقصص نجاح حقيقية من عملائكم.",
    result: "النتيجة",
    testimonials: "ماذا يقول عملاؤنا",
    trustTitle: "موثوقون لدى الفرق التي ندعمها",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" },
  }),
};

const ServiceProofSections = ({ accent, accentSoft, variant }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const currentLanguage = i18n.language === "ar" ? "ar" : "en";
  const labels = sectionLabels[currentLanguage];
  const caseStudies = caseStudiesByVariant[variant]?.[currentLanguage] || [];
  const testimonials = testimonialsByVariant[variant]?.[currentLanguage] || [];

  return (
    <div className="mt-24 space-y-24">
      <section className="rounded-[28px] bg-[#f7fafc] px-6 py-16 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div className={isRTL ? "text-right" : "text-left"}>
              <div
                className="mb-4 inline-flex rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em]"
                style={{ backgroundColor: accentSoft, color: accent }}
              >
                {labels.caseStudies}
              </div>
              <SplitText className="text-3xl font-bold text-[#0E1C3F] sm:text-4xl">
                {labels.proofTitle}
              </SplitText>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-[#64748b]">{labels.proofNote}</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={index * 0.12}
                className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_18px_38px_rgba(15,23,42,0.08)]"
              >
                <h3 className="mb-4 text-2xl font-bold text-[#0E1C3F]">{item.title}</h3>
                <p className="mb-5 text-base leading-relaxed text-[#475569]">{item.summary}</p>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: accent }}>
                    {labels.result}
                  </div>
                  <p className="text-sm leading-relaxed text-[#334155]">{item.result}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="overflow-hidden rounded-[28px] px-6 py-16 text-white md:px-10"
        style={{
          background: `linear-gradient(135deg, #0E1C3F 0%, ${accent} 160%)`,
        }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className={`mb-10 ${isRTL ? "text-right" : "text-left"}`}
          >
            <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em]">
              {labels.testimonials}
            </div>
            <SplitText className="text-3xl font-bold sm:text-4xl">{labels.trustTitle}</SplitText>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <motion.article
                key={`${item.name}-${index}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={index * 0.12}
                className="rounded-[24px] border border-white/10 bg-white/8 p-7 backdrop-blur-sm"
              >
                <FaQuoteLeft className="mb-5 text-2xl text-white/70" />
                <p className="mb-6 text-lg leading-relaxed text-white/90">{item.quote}</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="text-base font-semibold">{item.name}</div>
                  <div className="text-sm text-white/70">{item.company}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceProofSections;
