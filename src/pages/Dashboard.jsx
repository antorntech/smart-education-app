import React from "react";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Welcome Back, Student!</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Total Subjects" value="5" />
        <DashboardCard title="Completed Tasks" value="12" />
        <DashboardCard title="Weekly Progress" value="78%" />
      </div>
    </div>
  );
};

export default Dashboard;
