import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Careers = () => {
  const location = useLocation();

  // Scroll to section if hash present
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // Form state for job application (like Contact form)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    resume: null,
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate sending form - replace with your API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ fullName: "", email: "", resume: null });
    }, 1500);
  };

  return (
    <div className="bg-white font-cairo text-gray-900 selection:bg-blue-200 selection:text-gray-900">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(70vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/WhatsApp-Image-2023-06-26-at-11.12.01-AM.webp"
          alt="Careers Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#192757] opacity-70"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <div className="mt-40 rounded-xl px-8 py-12 md:px-12 md:py-16">
            <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
              <ol className="inline-flex space-x-2">
                <li>
                  <a href="/" className="hover:text-white hover:underline">
                    Home
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li className="font-semibold text-white" aria-current="page">
                  Careers
                </li>
              </ol>
            </nav>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
              Careers
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Join Us Form Section */}
      <section className="px-6 py-20 pt-36 text-center" id="join">
        <p className="mb-2 text-sm tracking-widest text-[#8b78b1]">JOIN OUR TEAM</p>
        <h2 className="mb-12 text-4xl font-extrabold text-[#0f0f19] md:text-5xl">Express Your Interest</h2>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-5xl space-y-6 text-left"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="rounded-xl bg-[#f6f3fa] p-4 text-gray-700 placeholder-gray-500 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl bg-[#f6f3fa] p-4 text-gray-700 placeholder-gray-500 outline-none"
              required
            />
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="col-span-full rounded-xl bg-[#f6f3fa] p-4 text-gray-700 placeholder-gray-500 outline-none"
              accept=".pdf,.doc,.docx"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg bg-[#1DC0DA] px-12 py-4 font-semibold tracking-widest text-white hover:bg-[#19aac0] disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Submit Application"}
            </button>
          </div>
          {status === "success" && (
            <p className="mt-4 text-center text-green-600">Application sent successfully!</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-center text-red-600">Something went wrong. Try again.</p>
          )}
        </form>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="mx-auto max-w-6xl px-6 pb-20 pt-36">
        <h2 className="mb-12 text-center text-2xl font-semibold text-gray-900">Job Openings</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow transition hover:shadow-lg">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">HR Consultant</h3>
            <p className="mb-6 text-gray-700">
              Support HR transformation projects and organizational development initiatives.
            </p>
            <button className="rounded bg-[#1DC0DA] px-4 py-2 font-semibold text-white transition hover:bg-[#19aac0]">
              Apply Now
            </button>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow transition hover:shadow-lg">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Talent Acquisition Specialist</h3>
            <p className="mb-6 text-gray-700">
              Source, screen, and recruit top candidates for diverse roles.
            </p>
            <button className="rounded bg-[#1DC0DA] px-4 py-2 font-semibold text-white transition hover:bg-[#19aac0]">
              Apply Now
            </button>
          </div>

          {/* Add more job cards as needed */}
        </div>
      </section>
    </div>
  );
};

export default Careers;
