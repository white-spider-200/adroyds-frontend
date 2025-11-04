import React from "react";

const Academy = () => {
  return (
    <div className="bg-gray-50 px-6 py-20 lg:px-24">
      <h1 className="mb-8 text-center text-4xl font-bold text-blue-900">Adroyts Academy</h1>
      <p className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-gray-700">
        Adroyts Academy is committed to empowering professionals through learning and development. We offer
        specialized programs, corporate training, and certification courses that enhance skills and drive
        growth.
      </p>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="mb-3 text-xl font-semibold text-blue-800">Corporate Training</h3>
          <p className="text-gray-600">
            Customized workshops and learning solutions for companies aiming to enhance workforce capability.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="mb-3 text-xl font-semibold text-blue-800">Professional Courses</h3>
          <p className="text-gray-600">
            Skill-based programs that equip individuals with real-world competencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Academy;
