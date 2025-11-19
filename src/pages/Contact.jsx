import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"; // import icons

import mainServices from "../services/mainServices";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await mainServices.sendContactMessage(formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-white font-cairo text-gray-900 selection:bg-blue-200 selection:text-gray-900">
      {/* HERO SECTION */}
      <section className="relative -mt-40 flex min-h-[calc(70vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/WhatsApp-Image-2023-06-26-at-11.12.01-AM.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-[#192757] opacity-70"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          {/* Glass container */}
          <div className="mt-40 rounded-xl px-8 py-12 md:px-12 md:py-16">
            {/* Breadcrumbs */}
            <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
              <ol className="inline-flex space-x-2">
                <li>
                  <a href="/" className="hover:text-white hover:underline">
                    Home
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li className="font-semibold text-white" aria-current="page">
                  Contact Us
                </li>
              </ol>
            </nav>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
              Contact Us
            </h1>
          </div>
        </motion.div>
      </section>
      {/* Address & Contact Cards Section */}
      <section className="mx-auto mb-12 mt-24 flex max-w-5xl flex-col gap-6 px-6 md:flex-row md:justify-center">
        <div className="flex flex-col items-center gap-4 rounded-xl bg-gray-100 p-16 text-center md:w-1/2">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#1DC0DA]">
            <FaMapMarkerAlt className="text-5xl text-white" />
          </div>

          <div>
            <h3 className="mb-1 text-2xl font-bold text-gray-900">Address</h3>
            <p className="text-xl text-gray-500">
              60 broklyn golden street, New york. United States of America
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 rounded-xl bg-gray-100 p-16 text-center md:w-1/2">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#1DC0DA]">
            <FaPhoneAlt className="text-5xl text-white" />
          </div>

          <div>
            <h3 className="mb-1 text-2xl font-bold text-gray-900">Contact</h3>
            <p className="text-xl text-gray-500">needhelp@company.com 92 666 888 0000 </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        {/* Subtitle */}
        <p className="mb-2 text-sm tracking-widest text-[#8b78b1]">CONTACT WITH US</p>

        {/* Title */}
        <h2 className="mb-12 text-4xl font-extrabold text-[#0f0f19] md:text-5xl">HAVE ANY QUESTIONS?</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mx-auto max-w-5xl space-y-6 text-left">
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl bg-[#f6f3fa] p-4 text-gray-700 placeholder-gray-500 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl bg-[#f6f3fa] p-4 text-gray-700 placeholder-gray-500 outline-none"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="rounded-xl bg-[#f6f3fa] p-4 text-gray-700 placeholder-gray-500 outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="rounded-xl bg-[#f6f3fa] p-4 text-gray-700 placeholder-gray-500 outline-none"
              required
            />
          </div>

          {/* Message Box */}
          <textarea
            name="message"
            placeholder="Write a message"
            value={formData.message}
            onChange={handleChange}
            className="h-48 w-full rounded-xl bg-[#f6f3fa] p-4 text-gray-700 placeholder-gray-500 outline-none"
            required
          />

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg bg-[#1DC0DA] px-12 py-4 font-semibold tracking-widest text-white hover:bg-[#19aac0] disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "SEND A MESSAGE"}
            </button>
          </div>
        </form>
      </section>

      {status === "success" && <p className="mt-4 text-green-600">Message sent successfully!</p>}
      {status === "error" && <p className="mt-4 text-red-600">Something went wrong. Try again.</p>}

      <div className="mt-12">
        <iframe
          loading="lazy"
          title="map"
          className="mx-auto block h-96 w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.414942835388!2d46.6835779!3d24.8154796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efca4e5d9079b%3A0x38b0da0c1514cbc9!2sADROYTS!5e0!3m2!1sen!2sjo!4v1763543313809!5m2!1sen!2sjo"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
