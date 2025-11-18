import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Careers = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="font-cairo -mt-40 min-h-[calc(100vh+70px)] bg-[#0a1d56] px-6 py-20 text-gray-100 lg:px-24">
      <h1 className="mb-16 mt-40 text-center text-4xl font-extrabold text-white md:text-5xl">Careers</h1>

      {/* Join Us Section */}
      <section
        id="join"
        className="mx-auto mb-20 max-w-4xl rounded-xl bg-white/10 p-10 shadow-lg backdrop-blur-sm"
      >
        <h2 className="mb-6 text-center text-2xl font-semibold text-white">Join Us</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-300">
          We’re always looking for talented individuals to join our team. Fill in the form below to express
          your interest.
        </p>
        <form className="mx-auto grid max-w-3xl gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border border-white/30 bg-white/20 p-3 text-white placeholder-gray-300 focus:border-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-white/30 bg-white/20 p-3 text-white placeholder-gray-300 focus:border-white focus:outline-none"
          />
          <input
            type="file"
            className="w-full rounded-lg border border-white/30 bg-white/20 p-3 text-white placeholder-gray-300 focus:border-white focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-[#0a1d56] shadow-lg transition hover:scale-105 hover:bg-gray-100"
          >
            Submit Application
          </button>
        </form>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-2xl font-semibold text-white">Job Openings</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-white/20 bg-white/10 p-6 shadow transition hover:shadow-lg">
            <h3 className="mb-2 text-lg font-semibold text-white">HR Consultant</h3>
            <p className="mb-6 text-gray-300">
              Support HR transformation projects and organizational development initiatives.
            </p>
            <button className="rounded bg-white px-4 py-2 font-semibold text-[#0a1d56] transition hover:bg-gray-100">
              Apply Now
            </button>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/10 p-6 shadow transition hover:shadow-lg">
            <h3 className="mb-2 text-lg font-semibold text-white">Talent Acquisition Specialist</h3>
            <p className="mb-6 text-gray-300">
              Source, screen, and recruit top candidates for diverse roles.
            </p>
            <button className="rounded bg-white px-4 py-2 font-semibold text-[#0a1d56] transition hover:bg-gray-100">
              Apply Now
            </button>
          </div>

          {/* Add more job cards here if needed */}
        </div>
      </section>
    </div>
  );
};

export default Careers;
