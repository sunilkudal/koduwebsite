import React from "react";
import { CheckCircle } from "lucide-react";

const outcomes = [
  "Master Full Stack & AI Skills – Develop industry-ready projects",
  "Build a Strong Portfolio – Work on real-world projects",
  "Crack Job Interviews – Get 100% job assistance",
  "Confidence in Problem-Solving – Enhance logical thinking & coding",
  "Freelancing & Startups – Monetize skills beyond a 9-to-5 job",
  "Industry Connections & Networking – Exclusive alumni & mentor community",
];

const ExpectedOutcomes = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-6 md:px-12 rounded-xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
        🎯 Expected Outcomes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {outcomes.map((outcome, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition-all"
          >
            <CheckCircle className="text-green-400 w-6 h-6" />
            <span className="text-base">{outcome}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpectedOutcomes;
