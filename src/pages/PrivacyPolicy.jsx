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

const currentDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-white font-cairo text-gray-900 selection:bg-blue-200 selection:text-gray-900">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(50vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/adroyts-office.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F]/80 to-[#0E1C3F]/30"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6"
        >
          <div className="mt-32 rounded-lg px-8 py-12 md:px-12 md:py-16">
            <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
              <ol className="inline-flex space-x-2">
                <li>
                  <a href="/" className="hover:text-white hover:underline">
                    {t("home")}
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li className="font-semibold text-white">{t("privacyPolicy")}</li>
              </ol>
            </nav>

            <SplitText className="text-4xl font-extrabold leading-tight text-white drop-shadow md:text-4xl">
              {t("privacyPolicy")}
            </SplitText>
          </div>
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      {i18n.language == "ar" ? (
        <div className="mx-auto mb-10 mt-10 max-w-3xl px-6 text-right">
          <p className="mb-6 font-semibold">آخر تحديث: {currentDate}</p>

          <p className="mb-6 leading-relaxed">
            توضح سياسة الخصوصية هذه كيفية قيام الشركة أدرويتس (”نحن“، ” لنا“، الشركة) بجمع واستخدام وتخزين
            وحماية ومشاركة معلوماتك الشخصية عند زيارتك لموقعنا الإلكتروني أو استخدامك لأي من خدماتنا، بما في
            ذلك خدمات التوظيف، التقييم، الاستشارات، التدريب، أو التواصل معنا.
            <br />
            باستخدامك لموقعنا أو بتقديمك لبياناتك، فإنك توافق على أحكام هذه السياسة.
          </p>

          <h2 className="mb-3 text-2xl font-semibold">1. المعلومات التي نقوم بجمعها</h2>

          <h3 className="mb-2 text-xl font-semibold">1.1 بيانات الهوية والتواصل</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>الاسم الكامل</li>
            <li>البريد الإلكتروني</li>
            <li>رقم الجوال</li>
            <li>المدينة أو الدولة</li>
            <li>الجنسية</li>
            <li>المسمى الوظيفي</li>
            <li>اسم الشركة</li>
          </ul>

          <h3 className="mb-2 text-xl font-semibold">1.2 بيانات التوظيف</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>السيرة الذاتية (CV)</li>
            <li>الخبرات المهنية</li>
            <li>المؤهلات والدورات</li>
            <li>سنوات الخبرة</li>
            <li>الراتب الحالي والمتوقع</li>
            <li>مدة الإشعار</li>
            <li>الروابط المهنية (Portfolio – LinkedIn)</li>
            <li>أي معلومات أخرى يقدمها المتقدم للوظيفة</li>
          </ul>

          <h3 className="mb-2 text-xl font-semibold">1.3 بيانات التقييم</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>نتائج الاختبارات السايكومترية</li>
            <li>نتائج مركز التقييم (Center Assessment)</li>
            <li>ملاحظات المقيمين</li>
            <li>درجات القياس السلوكي والقيادي</li>
            <li>خطط التطوير الفردية (Plans Development Individual)</li>
          </ul>

          <h3 className="mb-2 text-xl font-semibold">1.4 بيانات التدريب</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>تسجيل المتدربين</li>
            <li>الحضور والترشيح</li>
            <li>نتائج الاختبارات التدريبية</li>
            <li>الشهادات والمستندات التدريبية</li>
          </ul>

          <h3 className="mb-2 text-xl font-semibold">1.5 البيانات التقنية</h3>
          <ul className="mb-6 list-inside list-disc">
            <li>عنوان الـIP</li>
            <li>نوع المتصفح</li>
            <li>نوع الجهاز</li>
            <li>الصفحات التي تمت زيارتها</li>
            <li>مدة الجلسة</li>
            <li>ملفات تعريف الارتباط (Cookies)</li>
          </ul>

          <h3 className="mb-2 text-xl font-semibold">1.6 أي بيانات أخرى</h3>
          <p className="mb-6 leading-relaxed">يتم تقديمها طوعًا ضمن نماذج التواصل أو البريد الإلكتروني.</p>

          <h2 className="mb-3 text-2xl font-semibold">2. كيفية استخدام المعلومات</h2>
          <p className="mb-6 leading-relaxed">نستخدم بياناتك للأغراض التالية:</p>
          <ul className="mb-6 list-inside list-disc">
            <li>مراجعة الطلبات</li>
            <li>تقييم المتقدمين</li>
            <li>ترشيح المرشحين للوظائف المناسبة</li>
            <li>مشاركة السيرة الذاتية مع عملائنا فقط للوظائف المناسبة</li>
            <li>إدارة برامج التقييم</li>
            <li>تحليل الأداء</li>
            <li>إصدار التقارير الفردية</li>
            <li>إعداد خطط تطويرية بناءً على النتائج</li>
            <li>تقديم خدمات الموارد البشرية</li>
            <li>مشاريع التطوير التنظيمي</li>
            <li>إعداد تقارير وحلول مهنية</li>
            <li>تسجيل المتدربين</li>
            <li>إدارة الحضور</li>
            <li>إعداد الشهادات</li>
            <li>تقديم مواد وبرامج تدريبية</li>
            <li>الرد على الاستفسارات</li>
            <li>متابعة الطلبات</li>
            <li>وضع مواعيد الاجتماعات</li>
            <li>تطوير تجربة المستخدم</li>
            <li>تحليل أداء الموقع</li>
            <li>تحسين جودة خدمات التوظيف والتقييم والاستشارات</li>
            <li>تلبية المتطلبات القانونية والتنظيمية في المملكة العربية السعودية أو أي جهة مخولة أخرى</li>
          </ul>

          <h2 className="mb-3 text-2xl font-semibold">3. مشاركة البيانات</h2>
          <p className="mb-6 leading-relaxed">قد نشارك بياناتك فقط ضمن الحالات التالية:</p>
          <ul className="mb-6 list-inside list-disc">
            <li>
              مع العملاء لمعالجة طلبات التوظيف أو التقييم، حيث يتم مشاركة بيانات المرشحين فقط مع أصحاب العمل
              المعنيين أو الجهة الطالبة.
            </li>
            <li>
              مع مزودي الخدمات مثل مزودي حلول التقنية، أنظمة التقييم، خدمات الحماية والأمن السيبراني، واستضافة
              البيانات.
            </li>
            <li>مع الجهات الحكومية عند وجود طلب رسمي أو الزام قانوني.</li>
          </ul>
          <p className="mb-6 font-semibold text-red-600">❗لا نقوم ببيع بياناتك لأي طرف ثالث.</p>

          <h2 className="mb-3 text-2xl font-semibold">4. حماية البيانات</h2>
          <ul className="mb-6 list-inside list-disc">
            <li>تشفير البيانات عبر HTTPS</li>
            <li>خوادم آمنة</li>
            <li>نظام صلاحيات وصول محدود</li>
            <li>مراقبة أمنية مستمرة</li>
            <li>حماية من الوصول غير المصرح به</li>
            <li>مع العلم أنه لا يمكن لأي نظام أن يضمن حماية 100٪</li>
          </ul>

          <h2 className="mb-3 text-2xl font-semibold">5. مدة الاحتفاظ بالبيانات</h2>
          <ul className="mb-6 list-inside list-disc">
            <li>بيانات التوظيف: حتى 24 شهرًا</li>
            <li>بيانات التقييم: حتى 36 شهرًا أو حسب العقد</li>
            <li>بيانات التدريب: حسب متطلبات البرامج</li>
            <li>البيانات التقنية: حسب إعدادات ملفات الارتباط</li>
          </ul>
          <p className="mb-6 leading-relaxed">يمكنك طلب حذف بياناتك في أي وقت.</p>

          <h2 className="mb-3 text-2xl font-semibold">6. ملفات تعريف الارتباط (Cookies)</h2>
          <p className="mb-6 leading-relaxed">
            نستخدم ملفات الارتباط لأغراض تحسين الأداء، تحليل الزوار، وتخصيص تجربة المستخدم. ويمكنك التحكم بها
            عبر إعدادات المتصفح.
          </p>

          <h2 className="mb-3 text-2xl font-semibold">7. نقل البيانات خارج المملكة</h2>
          <p className="mb-6 leading-relaxed">
            قد يتم نقل البيانات خارج المملكة العربية السعودية عند الحاجة لتقديم الخدمات، مع الالتزام بضمانات
            حماية تتوافق مع معايير أمن البيانات.
          </p>

          <h2 className="mb-3 text-2xl font-semibold">8. حقوق المستخدم</h2>
          <ul className="mb-6 list-inside list-disc">
            <li>الوصول إلى بياناتك</li>
            <li>تصحيح البيانات غير الدقيقة</li>
            <li>حذف البيانات</li>
            <li>سحب الموافقة</li>
            <li>إيقاف معالجة البيانات في حالات معينة</li>
          </ul>
          <p className="mb-6 leading-relaxed">ويتم ذلك عبر التواصل معنا مباشرة.</p>

          <h2 className="mb-3 text-2xl font-semibold">9. التحديثات</h2>
          <p className="mb-6 leading-relaxed">
            قد نقوم بتحديث هذه السياسة من وقت لآخر، وسيتم توضيح تاريخ التحديث أعلى الصفحة.
          </p>

          <h2 className="mb-3 text-2xl font-semibold">10. معلومات التواصل</h2>
          <p>
            لأي استفسارات حول سياسة الخصوصية:{" "}
            <a href="mailto:Contact@adroyts.com" className="text-blue-600 hover:underline">
              Contact@adroyts.com
            </a>
          </p>
        </div>
      ) : (
        <div className="mx-auto mb-10 mt-10 max-w-3xl px-6 text-left">
          <div className="rounded-xl bg-white/60 p-10 text-gray-900">
            <h1 className="mb-8 text-3xl font-bold">Adroyts Privacy Policy – Full Version</h1>

            <p className="mb-6">Last Updated: {currentDate}</p>

            <p className="mb-6">
              This Privacy Policy explains how Adroyts (“we”, “our”) collects, uses, stores, shares, and
              protects personal information submitted through our website or any of our services, including
              recruitment, assessments, consulting, and training.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">1. Information We Collect</h2>

            <h3 className="mb-2 text-xl font-semibold">1.1 Identity and Contact Information:</h3>
            <ul className="mb-4 list-inside list-disc">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>City / Country</li>
              <li>Nationality</li>
              <li>Job title and company name</li>
            </ul>

            <h3 className="mb-2 text-xl font-semibold">1.2 Recruitment Data:</h3>
            <ul className="mb-4 list-inside list-disc">
              <li>CV / Resume</li>
              <li>Work experience</li>
              <li>Skills and qualifications</li>
              <li>Current and expected salary</li>
              <li>Education details</li>
              <li>Years of experience and notice period</li>
              <li>Professional links (e.g., LinkedIn)</li>
            </ul>

            <h3 className="mb-2 text-xl font-semibold">1.3 Assessment Data:</h3>
            <ul className="mb-4 list-inside list-disc">
              <li>Psychometric test results</li>
              <li>Assessment center outputs</li>
              <li>Evaluator comments</li>
              <li>Individual development plans</li>
            </ul>

            <h3 className="mb-2 text-xl font-semibold">1.4 Training Data:</h3>
            <ul className="mb-4 list-inside list-disc">
              <li>Trainee registration information</li>
              <li>Attendance</li>
              <li>Scores and evaluations</li>
            </ul>

            <h3 className="mb-2 text-xl font-semibold">1.5 Technical Data:</h3>
            <ul className="mb-6 list-inside list-disc">
              <li>Browser type</li>
              <li>IP address</li>
              <li>Pages visited</li>
              <li>Session duration</li>
              <li>Cookies and tracking technologies</li>
            </ul>

            <h2 className="mb-3 text-2xl font-semibold">2. How We Use Your Information</h2>
            <p className="mb-6">We use your data for:</p>
            <ul className="mb-6 list-inside list-disc">
              <li>Processing job applications</li>
              <li>Managing assessment programs</li>
              <li>Delivering consulting services</li>
              <li>Handling training registrations</li>
              <li>Responding to inquiries</li>
              <li>Improving our website</li>
              <li>Meeting legal obligations</li>
            </ul>

            <h2 className="mb-3 text-2xl font-semibold">3. Sharing Your Information</h2>
            <p className="mb-6">We may share your data with:</p>
            <ul className="mb-6 list-inside list-disc">
              <li>Clients for recruitment or assessment purposes</li>
              <li>Technical service providers</li>
              <li>Assessment platforms</li>
              <li>Government authorities when required by law</li>
            </ul>
            <p className="mb-6">We do not sell personal data to any third party.</p>

            <h2 className="mb-3 text-2xl font-semibold">4. Data Security</h2>
            <ul className="mb-6 list-inside list-disc">
              <li>HTTPS encryption</li>
              <li>Secure servers</li>
              <li>Controlled access levels</li>
              <li>Routine security audits</li>
            </ul>

            <h2 className="mb-3 text-2xl font-semibold">5. Data Retention</h2>
            <ul className="mb-6 list-inside list-disc">
              <li>Recruitment data: up to 24 months</li>
              <li>Assessment data: per project requirements (up to 36 months)</li>
              <li>Technical logs: based on cookie settings</li>
            </ul>

            <h2 className="mb-3 text-2xl font-semibold">6. Cookies</h2>
            <p className="mb-6">We use cookies for performance and analytics.</p>

            <h2 className="mb-3 text-2xl font-semibold">7. International Data Transfers</h2>
            <p className="mb-6">Data may be processed outside your country with appropriate safeguards.</p>

            <h2 className="mb-3 text-2xl font-semibold">8. User Rights</h2>
            <ul className="mb-6 list-inside list-disc">
              <li>Access</li>
              <li>Correction</li>
              <li>Deletion</li>
              <li>Withdrawal of consent</li>
            </ul>

            <h2 className="mb-3 text-2xl font-semibold">9. Policy Updates</h2>
            <p className="mb-6">Updates may be posted on this page.</p>

            <h2 className="mb-3 text-2xl font-semibold">10. Contact Us</h2>
            <p>
              <a href="mailto:Contact@adroyts.com" className="text-blue-600 hover:underline">
                Contact@adroyts.com
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;
