import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { SplitText } from "../utils/SplitText";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const TermsOfUse = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const currentDate = new Date().toLocaleDateString(i18n.language === "ar" ? "ar-EG" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="bg-white font-cairo text-gray-900 selection:bg-cyan-200 selection:text-gray-900"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {/* HERO SECTION */}
      <section className="relative -mt-20 overflow-hidden bg-[#0E1C3F] md:-mt-40">
        <div className="grid min-h-[20vh] grid-cols-1 md:min-h-[calc(43vh+80px)] md:grid-cols-2">
          {/* LEFT TEXT – DESKTOP ONLY */}
          <div className="relative hidden items-center md:flex">
            <div className="w-full px-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <h1 className="text-4xl font-extrabold text-white">
                  {i18n.language === "ar" ? "شروط الاستخدام" : "Terms of Use"}
                </h1>
              </motion.div>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative h-[45vh] md:h-auto">
            <img
              src="/assets/adroyts-office.webp"
              alt="Terms of Use"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C3F]/85 via-[#0E1C3F]/50 to-transparent md:bg-gradient-to-r md:from-[#0E1C3F]/70 md:via-[#0E1C3F]/40 md:to-transparent" />

            {/* MOBILE TITLE OVER IMAGE */}
            <div className="absolute inset-0 flex items-center justify-center px-6 md:hidden">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center text-3xl font-extrabold text-white sm:text-4xl"
              >
                {i18n.language === "ar" ? "شروط الاستخدام" : "Terms of Use"}
              </motion.h1>
            </div>
          </div>

          {/* DIAGONAL DIVIDER – DESKTOP ONLY */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-40 -translate-x-1/2 md:block">
            <div className="absolute inset-0 -skew-x-12 bg-[#0E1C3F]" />
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      {i18n.language === "ar" ? (
        <div className="mx-auto mb-10 mt-10 max-w-3xl px-6 text-right">
          <div className="rounded-xl bg-white/60 p-10 text-gray-900">
            <p className="mb-6 font-semibold">آخر تحديث: {currentDate}</p>

            <p className="mb-6 leading-relaxed">
              مرحبًا بك في موقع أدرويتس. عند دخولك إلى الموقع أو استخدامك لأي من خدماته، فإنك توافق على
              الالتزام بشروط الاستخدام الموضحة أدناه.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">1. قبول الشروط</h2>
            <p className="mb-6 leading-relaxed">
              باستخدامك للموقع، فإنك تقر بأنك قرأت وفهمت ووافقت على هذه الشروط. إن لم توافق، يرجى التوقف عن
              استخدام الموقع.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">2. استخدام الموقع</h2>
            <p className="mb-6 leading-relaxed">يسمح باستخدام الموقع للأغراض التالية:</p>
            <ul className="mb-6 list-inside list-disc space-y-1">
              <li>التصفح</li>
              <li>التقديم على الوظائف</li>
              <li>التسجيل في برامج التقييم أو التدريب</li>
              <li>التواصل معنا</li>
            </ul>
            <p className="mb-6 leading-relaxed">ويُحظر استخدام الموقع في:</p>
            <ul className="mb-6 list-inside list-disc space-y-1">
              <li>أي نشاط غير قانوني</li>
              <li>محاولة الوصول غير المصرح به</li>
              <li>تقديم بيانات مضللة أو غير صحيحة</li>
              <li>رفع ملفات ضارة أو فيروسات</li>
              <li>جمع بيانات مستخدمي آخرين دون إذن</li>
            </ul>

            <h2 className="mb-3 text-2xl font-semibold">3. دقة المعلومات</h2>
            <p className="mb-6 leading-relaxed">
              أنت تتحمل مسؤولية دقة وصحة المعلومات التي تقدمها عبر الموقع.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">4. الملكية الفكرية</h2>
            <p className="mb-6 leading-relaxed">
              جميع النصوص والتصاميم والهوية البصرية والصور ومواد الموقع هي ملك لشركة أدرويتس ومحميّة بموجب
              قوانين الملكية الفكرية. يمنع النسخ أو إعادة النشر دون إذن كتابي مسبق.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">5. المحتوى الوظيفي ومواد التقييم</h2>
            <p className="mb-6 leading-relaxed">
              لا تضمن أدرويتس توفر الوظائف دائمًا، كما أن التقديم لا يعني القبول. كما لا تتحمل الشركة مسؤولية
              أي محتوى يتم تقديمه من قبل العملاء ضمن الوظائف أو برامج التقييم.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">6. الروابط الخارجية</h2>
            <p className="mb-6 leading-relaxed">
              قد يحتوي الموقع على روابط لمواقع خارجية، ونحن غير مسؤولين عن محتوى أو أمان تلك المواقع. استخدامك
              للروابط يكون على مسؤوليتك الخاصة.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">7. حدود المسؤولية</h2>
            <p className="mb-6 leading-relaxed">لا تتحمل أدرويتس أي مسؤولية عن:</p>
            <ul className="mb-6 list-inside list-disc space-y-1">
              <li>توقف الموقع أو حدوث أعطال</li>
              <li>فقدان البيانات</li>
              <li>سوء استخدام الموقع</li>
              <li>نتائج القرارات المهنية الناتجة عن التقديم أو التقييم</li>
            </ul>

            <h2 className="mb-3 text-2xl font-semibold">8. التعديلات</h2>
            <p className="mb-6 leading-relaxed">
              قد يتم تعديل شروط الاستخدام في أي وقت. استمرارك في استخدام الموقع بعد التحديث يعني موافقتك على
              الشروط المعدلة.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">9. القانون المعمول به</h2>
            <p className="mb-6 leading-relaxed">تخضع هذه الشروط لأنظمة المملكة العربية السعودية.</p>

            <h2 className="mb-3 text-2xl font-semibold">10. التواصل</h2>
            <p>
              <a href="mailto:contact@adroyts.com" className="text-cyan-600 hover:underline">
                contact@adroyts.com
              </a>
            </p>
          </div>
        </div>
      ) : (
        <div className="mx-auto mb-10 mt-10 max-w-3xl px-6 text-left">
          <div className="rounded-xl bg-white/60 p-10 text-gray-900">
            <p className="mb-6 font-semibold">Last Updated: {currentDate}</p>

            <p className="mb-6 leading-relaxed">
              Welcome to the Adroyts website. By accessing or using this website, you agree to comply with the
              Terms of Use outlined below.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p className="mb-6 leading-relaxed">
              By using this website, you acknowledge that you have read, understood, and agreed to these
              terms. If you do not agree, please discontinue use immediately.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">2. Permitted Use</h2>
            <p className="mb-6 leading-relaxed">You may use the website for:</p>
            <ul className="mb-6 list-inside list-disc">
              <li>Browsing information</li>
              <li>Applying for job opportunities</li>
              <li>Registering for assessments or training programs</li>
              <li>Contacting us via available forms</li>
            </ul>
            <p className="mb-6 leading-relaxed">You may NOT:</p>
            <ul className="mb-6 list-inside list-disc">
              <li>Use the website for any illegal activity</li>
              <li>Attempt unauthorized access to the system</li>
              <li>Submit false, misleading, or inaccurate information</li>
              <li>Upload harmful files, malware, or viruses</li>
              <li>Collect data from other users without permission</li>
            </ul>

            <h2 className="mb-3 text-2xl font-semibold">3. Accuracy of Information</h2>
            <p className="mb-6 leading-relaxed">
              You are responsible for ensuring that all submitted information is accurate, complete, and
              truthful.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">4. Intellectual Property</h2>
            <p className="mb-6 leading-relaxed">
              All content, including text, design, branding, graphics, and website materials, is the exclusive
              property of Adroyts and is protected under applicable intellectual property laws. Copying,
              distributing, or reusing any materials without written approval is strictly prohibited.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">5. Job & Assessment Content</h2>
            <p className="mb-6 leading-relaxed">
              Adroyts does not guarantee job availability or the acceptance of any applicant. Submitting an
              application does not constitute a hiring commitment. We are also not responsible for content
              provided by clients.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">6. External Links</h2>
            <p className="mb-6 leading-relaxed">
              This website may contain links to external sites. Adroyts is not responsible for the content,
              security, or policies of those external websites. Use of external links is at your own risk.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">7. Limitation of Liability</h2>
            <p className="mb-6 leading-relaxed">Adroyts is not liable for:</p>
            <ul className="mb-6 list-inside list-disc">
              <li>Website interruptions or downtime</li>
              <li>Loss of data</li>
              <li>Misuse of the website</li>
              <li>Any decisions or outcomes related to job applications or assessments</li>
            </ul>

            <h2 className="mb-3 text-2xl font-semibold">8. Modifications</h2>
            <p className="mb-6 leading-relaxed">
              We may update these Terms of Use at any time. Your continued use of the website constitutes
              acceptance of the updated terms.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">9. Governing Law</h2>
            <p className="mb-6 leading-relaxed">
              These terms are governed by the laws of the Kingdom of Saudi Arabia.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">10. Contact</h2>
            <p>
              <a href="mailto:contact@adroyts.com" className="text-cyan-600 hover:underline">
                contact@adroyts.com
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsOfUse;
