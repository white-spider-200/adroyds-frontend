import React from "react";

const Consulting = () => {
  return (
    <div className="bg-gray-50 px-6 py-20 lg:px-24">
      <h1 className="mb-8 text-center text-4xl font-bold text-blue-900">Human Capital Consulting</h1>
      <p className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-gray-700">
        We partner with organizations to design human capital strategies that align with their goals. From
        organizational restructuring to performance management, our experts deliver impactful solutions.
      </p>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="mb-3 text-xl font-semibold text-blue-800">Organizational Design</h3>
          <p className="text-gray-600">Build effective structures and workflows that enhance efficiency.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="mb-3 text-xl font-semibold text-blue-800">HR Strategy</h3>
          <p className="text-gray-600">
            Develop policies and processes that support talent management and business growth.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="mb-3 text-xl font-semibold text-blue-800">Performance Optimization</h3>
          <p className="text-gray-600">
            Implement systems that measure, manage, and reward employee performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
