import React from "react";

const Assessment = () => {
  return (
    <div className="bg-white px-6 py-20 lg:px-24">
      <h1 className="mb-8 text-center text-4xl font-bold text-blue-900">Assessment Center Solutions</h1>
      <p className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-gray-700">
        Our Assessment Center Solutions provide a structured and objective approach to evaluating candidates’
        capabilities, potential, and development needs.
      </p>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        <div className="rounded-2xl border p-6 shadow">
          <h3 className="mb-3 text-xl font-semibold text-blue-800">Psychometric Tests</h3>
          <p className="text-gray-600">
            Scientifically validated tools to measure aptitude, personality, and work behavior.
          </p>
        </div>
        <div className="rounded-2xl border p-6 shadow">
          <h3 className="mb-3 text-xl font-semibold text-blue-800">Role Simulations</h3>
          <p className="text-gray-600">
            Real-world tasks to assess decision-making, problem-solving, and leadership skills.
          </p>
        </div>
        <div className="rounded-2xl border p-6 shadow">
          <h3 className="mb-3 text-xl font-semibold text-blue-800">Development Feedback</h3>
          <p className="text-gray-600">
            Detailed reports that guide individual growth and organizational development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
