import { motion } from "framer-motion";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import {
  FaArrowRight,
  FaChalkboardTeacher,
  FaPhoneAlt,
  FaThumbsUp,
  FaUserCheck,
  FaUsersCog,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { SplitText } from "../../utils/SplitText";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const servicesList = [
  {
    title: "Professional Development Programs",
    desc: "Structured learning paths designed to enhance communication, leadership, productivity, and workplace readiness skills, empowering professionals to excel.",
    image: "/assets/istock-90868745-large-spxmmo.jpeg", // replace with your image path
    link: "#executive",
  },
  {
    title: "Technical Skills Training",
    desc: "Hands-on courses covering full-stack development, cloud computing, data analytics, and UI/UX fundamentals to prepare learners for tech-driven roles.",
    image: "/assets/shutterstock_591060992.jpg",
    link: "#professional",
  },
  {
    title: "Customized Corporate Training",
    desc: "Tailored programs aligned with your organization’s goals, focused on workforce upskilling, reskilling, and accelerating talent to meet evolving business needs.",
    image: "/assets/shutterstock_2212724739.jpg",
    link: "#rpo",
  },
];

const trainingSteps = [
  {
    title: "Assess",
    desc: "Identify individual and organizational skill gaps to tailor impactful training programs.",
  },
  {
    title: "Train",
    desc: "Deliver expert-led, interactive training sessions using a blended approach of online and in-person learning.",
  },
  {
    title: "Apply",
    desc: "Provide hands-on exercises and real-world projects to solidify knowledge and practical skills.",
  },
  {
    title: "Validate",
    desc: "Conduct assessments and certifications to ensure mastery and measurable outcomes.",
  },
];

const whyChooseUs = [
  "Experienced industry trainers with real-world expertise",
  "Comprehensive curriculum aligned with current market demands",
  "Blended learning models offering flexibility and engagement",
  "Robust assessment and certification to validate skills",
  "Partnership approach to support long-term talent development",
];

const statsData = [
  { num: 1200, label: "Graduates Certified", icon: <FaUserCheck size={32} /> },
  { num: 85, label: "Corporate Partners", icon: <FaUsersCog size={32} /> },
  { num: 500, label: "Training Sessions Delivered", icon: <FaChalkboardTeacher size={32} /> },
  { num: 95, label: "Satisfaction Rate (%)", icon: <FaThumbsUp size={32} /> },
];

const Academy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full bg-white font-sans text-[#0E1C3F] selection:bg-cyan-400/30 selection:text-[#0E1C3F]">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(60vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/SEC_Batch02_33.jpg"
          alt="Adroyts Academy Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F]/80 to-[#0E1C3F]/30"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-4 pt-28"
        >
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
            <ol className="inline-flex space-x-2">
              <li>
                <a href="/" className="hover:text-white hover:underline">
                  Home
                </a>
                <span className="mx-2">/</span>
              </li>
              <li className="font-semibold text-white">Adroyts Academy</li>
            </ol>
          </nav>
          <SplitText className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Expert Training, Career Growth Since 2006
          </SplitText>

          <motion.button
            onClick={() => navigate("/contact")}
            className="mt-6 rounded-lg border border-white/30 bg-cyan-400 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-cyan-500 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>

      <div className="mx-auto flex max-w-8xl gap-2 px-6 py-16 text-lg">
        {/* Sidebar Menu */}
        <div className="sticky top-32 h-full flex-1">
          {/* MENU BOX */}
          <div className="flex flex-col rounded-lg bg-[#0E1C3F] p-4 py-6 text-white">
            <nav className="flex flex-col space-y-4">
              {/* Recruitment Solutions (INACTIVE NOW) */}
              <button
                onClick={() => navigate("/services/recruitment")}
                className="group flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-white/80 transition-colors hover:bg-cyan-400/20 hover:text-white"
              >
                <span>Recruitment Solutions</span>
                <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </button>

              {/* Adroyts Academy (ACTIVE) */}
              <button
                onClick={() => navigate("/services/academy")}
                className="group flex w-full items-center justify-between rounded-lg bg-cyan-400 px-4 py-2 text-left font-semibold text-white transition-colors hover:bg-cyan-400/30"
              >
                <span>Adroyts Academy</span>
                <FaArrowRight className="translate-x-[-6px] transition-all duration-300 group-hover:translate-x-0" />
              </button>

              {/* Assessment Center */}
              <button
                onClick={() => navigate("/services/assessment")}
                className="group flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-white/80 transition-colors hover:bg-cyan-400/20 hover:text-white"
              >
                <span>Assessment Center</span>
                <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </button>

              {/* Human Capital Consulting */}
              <button
                onClick={() => navigate("/services/consulting")}
                className="group flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-white/80 transition-colors hover:bg-cyan-400/20 hover:text-white"
              >
                <span>Human Capital Consulting</span>
                <FaArrowRight className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </button>
            </nav>
          </div>

          {/* CONTACT BOX WITH OVERLAY */}
          <div className="relative mt-4 overflow-hidden rounded-lg">
            <img
              src="/assets/conatact-us-placeholder.jpg"
              alt="Contact"
              className="h-48 w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0E1C3F]/90"></div>

            {/* Text */}
            <div className="absolute inset-0 flex flex-col items-start justify-center space-y-4 p-8 text-white">
              <p className="text-xl font-semibold">If You Need Any Service Contact With Us</p>

              <p className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-6 py-2 font-semibold text-[#0E1C3F]">
                <FaPhoneAlt />
                +966112342667
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-[2.7] bg-white px-6">
          {/* HERO IMAGE */}
          <div className="relative mb-10 h-[450px] w-full overflow-hidden rounded-lg">
            <img
              src="/assets/SEC_Batch02_33.jpg"
              alt="Recruitment Solutions"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F] to-orange-400 opacity-20"></div>
          </div>

          {/* INTRO / ABOUT */}
          <section className="container pb-16 md:max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#0E1C3F]">About Adroyts Academy</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Adroyts Academy is committed to shaping the next generation of professionals and leaders across
              the region. Our programs combine industry-aligned knowledge, practical experience, and
              real-world application, empowering individuals and organizations to achieve measurable growth
              and lasting impact.
            </p>
          </section>

          {/* STATS SECTION */}
          <section className="relative overflow-hidden rounded-lg bg-cyan-400 p-10 text-white md:p-12">
            {/* Polygon overlay */}
            <svg
              className="absolute left-0 top-0 h-full w-full opacity-20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 800 400"
              fill="none"
            >
              <polygon points="0,0 800,0 800,100 0,300" fill="#1DC0DA" />
              <polygon points="800,400 0,400 0,300 800,100" fill="#15a8bf" />
            </svg>

            <div className="relative z-10 mx-auto flex max-w-8xl flex-col items-center gap-12 md:flex-row md:items-start md:gap-20">
              {/* Stats */}
              <div className="flex flex-1 justify-between">
                {statsData.map(({ icon, num, suffix, label }, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center px-6 ${
                      i < statsData.length - 1 ? "border-r border-white/30" : ""
                    }`}
                  >
                    <div className="mb-4 text-white">{icon}</div>
                    <div className="text-4xl font-bold">
                      <CountUp
                        end={num}
                        decimals={num % 1 !== 0 ? 2 : 0}
                        duration={2.5}
                        suffix={suffix}
                        start={0}
                        enableScrollSpy={true}
                        separator=","
                      />
                    </div>
                    <div className="mt-1 text-center text-xs tracking-widest">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#0E1C3F]">Our Recruitment Services</h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-1">
              {servicesList.map(({ title, desc, image, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  className="relative flex w-full flex-col justify-end overflow-hidden rounded-2xl bg-cover bg-center pt-32 shadow-lg"
                  style={{ backgroundImage: `url(${image})` }}
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  custom={index}
                  whileHover={{
                    scale: 1.05,
                    rotate: 0.5,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C3F]/80 to-transparent"></div>

                  {/* Frosted Glass Card with Cyan Accent */}
                  <div className="relative z-10 mx-4 mb-6 rounded-xl bg-white/10 p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#1DC0DA] hover:shadow-2xl">
                    <h3 className="mb-3 text-2xl font-semibold text-orange-400 drop-shadow-md">{title}</h3>
                    <p className="text-lg text-orange-400">{desc}</p>
                  </div>

                  {/* Soft Glow on Hover */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: "radial-gradient(circle at center, rgba(29,192,218,0.35), transparent 70%)",
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </section>

          {/* TRAINING APPROACH */}
          <section
            id="training"
            className="bg-navy-500 relative rounded-xl bg-cover bg-center bg-no-repeat py-28"
          >
            {/* Overlay */}
            <div className="absolute inset-0 rounded-xl bg-[#0E1C3F]/90"></div>

            {/* CONTENT — above overlay */}
            <div className="relative z-10 mx-auto max-w-8xl px-6">
              <h2 className="mb-16 text-center text-3xl font-bold text-white">Our Training Approach</h2>

              <div className="relative flex justify-between">
                {/* Horizontal Line */}
                <div className="absolute left-0 right-0 top-6 mx-auto h-[2px] bg-white/20"></div>

                {[
                  {
                    title: "Needs Assessment",
                    desc: "We collaborate with your organization to identify skill gaps and strategic objectives.",
                  },
                  {
                    title: "Customized Curriculum",
                    desc: "Our programs are tailored to meet your team’s unique goals and industry requirements.",
                  },
                  {
                    title: "Hands-On Learning",
                    desc: "Practical exercises, real-world case studies, and interactive sessions drive actionable skills.",
                  },
                  {
                    title: "Continuous Evaluation",
                    desc: "Regular assessments and feedback ensure measurable outcomes and long-term retention.",
                  },
                ].map(({ title, desc }, i) => (
                  <div key={i} className="flex w-44 flex-col items-center text-center">
                    {/* Number Badge */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-400 text-xl font-bold text-white">
                      {i + 1}
                    </div>

                    {/* Step Title */}
                    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>

                    {/* Step Description */}
                    <p className="mt-2 text-sm text-white/80">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="container mx-auto px-6 py-20">
            <h2 className="mb-10 text-center text-3xl font-bold text-[#0E1C3F]">
              Why Choose Adroyts Academy
            </h2>
            <ul className="mx-auto max-w-4xl list-inside list-disc space-y-4 text-lg text-gray-700">
              {[
                "Proven track record of transforming professionals into industry leaders.",
                "Industry-aligned programs designed for practical, real-world application.",
                "Expert instructors with decades of leadership and corporate experience.",
                "Customized solutions to meet organizational and individual objectives.",
              ].map((point, i) => (
                <motion.li
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </section>

          {/* FINAL CTA */}
          <section className="relative bg-white px-6 py-20 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-cyan-400">
              Invest in Your Team. Unlock Their Full Potential.
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-[#0E1C3F]">
              Join the hundreds of organizations and professionals who rely on Adroyts Academy for
              cutting-edge, results-driven training. Empower your teams with the skills and knowledge to excel
              in a competitive world.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="rounded-lg border border-cyan-400 bg-white px-10 py-4 text-lg font-semibold text-[#0E1C3F] shadow-sm transition hover:shadow-lg hover:ring-2 hover:ring-cyan-400/40"
            >
              Get Started Today
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Academy;
