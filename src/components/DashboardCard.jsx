import React from "react";

const DashboardCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-md transition">
      <h4 className="text-gray-500 text-sm">{title}</h4>
      <p className="text-2xl font-bold text-indigo-600">{value}</p>
    </div>
  );
};

export default DashboardCard;
