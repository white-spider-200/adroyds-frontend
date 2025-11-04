import React from "react";

const Recruitment = () => {
  return (
    <div className="bg-white px-6 py-20 lg:px-24">
      <h1 className="mb-8 text-center text-4xl font-bold text-blue-900">Recruitment Solutions</h1>
      <p className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-gray-700">
        Our Recruitment Solutions are designed to help organizations find the right talent efficiently. We use
        advanced assessment tools, a vast professional network, and an experienced recruitment team to ensure
        candidates are the perfect fit for your business needs.
      </p>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        <div className="rounded-2xl border p-6 shadow transition-all hover:shadow-lg">
          <h3 className="mb-3 text-xl font-semibold text-blue-800">Talent Acquisition</h3>
          <p className="text-gray-600">
            Connecting top-tier professionals with the right companies using modern hiring strategies.
          </p>
        </div>
        <div className="rounded-2xl border p-6 shadow transition-all hover:shadow-lg">
          <h3 className="mb-3 text-xl font-semibold text-blue-800">Executive Search</h3>
          <p className="text-gray-600">Specialized recruitment for senior and executive-level positions.</p>
        </div>
        <div className="rounded-2xl border p-6 shadow transition-all hover:shadow-lg">
          <h3 className="mb-3 text-xl font-semibold text-blue-800">Screening & Assessment</h3>
          <p className="text-gray-600">
            Comprehensive candidate screening and assessment to match job profiles accurately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
