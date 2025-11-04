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
    <div className="bg-white px-6 py-20 lg:px-24">
      <h1 className="mb-12 text-center text-4xl font-bold text-blue-900">Careers</h1>

      {/* Join Us Section */}
      <section id="join" className="mb-20">
        <h2 className="mb-6 text-center text-2xl font-semibold text-blue-800">Join Us</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
          We’re always looking for talented individuals to join our team. Fill in the form below to express
          your interest.
        </p>
        <form className="mx-auto grid max-w-3xl gap-6">
          <input type="text" placeholder="Full Name" className="w-full rounded-lg border p-3" />
          <input type="email" placeholder="Email Address" className="w-full rounded-lg border p-3" />
          <input type="file" className="w-full rounded-lg border p-3" />
          <button className="rounded-lg bg-blue-900 px-6 py-3 text-white transition-all hover:bg-blue-800">
            Submit Application
          </button>
        </form>
      </section>

      {/* Job Openings Section */}
      <section id="openings">
        <h2 className="mb-6 text-center text-2xl font-semibold text-blue-800">Job Openings</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border p-6 shadow hover:shadow-lg">
            <h3 className="mb-2 text-lg font-semibold text-blue-900">HR Consultant</h3>
            <p className="mb-4 text-gray-600">
              Support HR transformation projects and organizational development initiatives.
            </p>
            <button className="font-semibold text-blue-700">Apply Now</button>
          </div>
          <div className="rounded-xl border p-6 shadow hover:shadow-lg">
            <h3 className="mb-2 text-lg font-semibold text-blue-900">Talent Acquisition Specialist</h3>
            <p className="mb-4 text-gray-600">
              Source, screen, and recruit top candidates for diverse roles.
            </p>
            <button className="font-semibold text-blue-700">Apply Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
