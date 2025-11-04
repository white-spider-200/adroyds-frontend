import React, { useState } from "react";

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
    <div className="bg-gray-50 px-8 py-20 text-center text-gray-800">
      <h1 className="mb-8 text-4xl font-bold text-blue-600">Contact Us</h1>

      <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4 text-left">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded border p-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded border p-3"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded border p-3"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded border p-3"
          required
        />

        <button
          type="submit"
          className="mt-4 w-full rounded bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" && <p className="mt-4 text-green-600">Message sent successfully!</p>}
      {status === "error" && <p className="mt-4 text-red-600">Something went wrong. Try again.</p>}

      <div className="mt-12">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
          className="mx-auto h-64 w-full max-w-2xl rounded-lg shadow"
          loading="lazy"
        ></iframe>

        <div className="mt-6 space-x-6">
          <a href="#" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Instagram
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            X (Twitter)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
