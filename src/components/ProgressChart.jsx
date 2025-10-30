import React from "react";

const ProgressChart = () => {
  // Dummy data
  const progressData = [
    { label: "Math", value: 80 },
    { label: "Science", value: 65 },
    { label: "English", value: 90 },
    { label: "History", value: 50 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">Progress Overview</h3>
      <div className="space-y-4">
        {progressData.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 font-medium">{item.label}</span>
              <span className="text-gray-600">{item.value}%</span>
            </div>
            <div className="w-full bg-gray-200 h-4 rounded-full">
              <div
                className="bg-indigo-600 h-4 rounded-full"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressChart;
