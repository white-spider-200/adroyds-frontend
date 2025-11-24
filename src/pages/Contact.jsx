import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaCheck, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"; // import icons

import mainServices from "../services/mainServices";
import { SplitText } from "../utils/SplitText";

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
      <section className="relative -mt-40 flex min-h-[calc(50vh+70px)] flex-col items-center justify-center bg-cover px-6 text-center">
        <img
          src="/assets/adroyts-office.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C3F] via-[#0E1C3F]/80 to-[#0E1C3F]/30"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          {/* Glass container */}
          <div className="mt-40 rounded-lg px-8 py-12 md:px-12 md:py-16">
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

      <section id="overview" className="w-full bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-3 w-fit rounded-md bg-[#e9fcff] px-4 py-2 text-sm font-semibold text-cyan-400"
            >
              Contact Us
            </motion.div>

            <SplitText className="mb-6 text-4xl font-extrabold text-[#0E1C3F]">
              Get in Touch Let's Start the Conversation
            </SplitText>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6 font-medium leading-relaxed text-gray-600"
            >
              We're here to help you find the right staffing solutions for your needs. Whether you're a
              company looking to hire top talent or a candidate seeking your next career opportunity,
            </motion.p>

            {/* Feature List */}
            <div className="flex flex-col gap-3">
              {[...Array(2)].map((_, idx) => (
                <div
                  key={idx}
                  className="group relative flex cursor-pointer gap-3 rounded-lg bg-gray-100 p-3 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-cyan-400"
                >
                  {/* Icon with circle background */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 px-4 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-cyan-400">
                    <FaPhoneAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
                      Gives us a Call
                    </h4>
                    <p className="text-sm leading-snug text-gray-600 transition-colors duration-300 group-hover:text-white">
                      123-456-7890
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* LEFT IMAGES + STATS */}
          <div className="relative flex gap-4 rounded-xl bg-gray-100 p-2 py-6 md:gap-6">
            <section className="w-full px-6 text-gray-800">
              <h2 className="mb-1 text-lg font-extrabold text-gray-900">Send us a Message</h2>
              <p className="mb-6 text-gray-500">
                Feel free to reach out to us with any questions, inquiries, or staffing requirements you may
                have. Our experienced
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    aria-label="First Name"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    name="lastName"
                    aria-label="Last Name"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    aria-label="Email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    aria-label="Phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  aria-label="Subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />

                <textarea
                  name="message"
                  aria-label="Message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-block rounded-md bg-cyan-400 px-12 py-3 text-lg font-semibold text-white transition hover:bg-cyan-500 disabled:opacity-50"
                  >
                    {status === "loading" ? "Submitting..." : "Submit Now"}
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
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
