import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBookOpen,
  faChartLine,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const { pathname } = useLocation();
  const links = [
    { path: "/", label: "Dashboard", icon: faHome },
    { path: "/routine", label: "Study Routine", icon: faBookOpen },
    { path: "/progress", label: "Progress", icon: faChartLine },
    { path: "/settings", label: "Settings", icon: faCog },
  ];

  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4">
      <h1 className="text-2xl font-bold text-indigo-600 mb-6">SmartEdu</h1>
      <nav className="space-y-2">
        {links.map(({ path, label, icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-100 ${
              pathname === path
                ? "bg-indigo-200 text-indigo-800 font-medium"
                : ""
            }`}
          >
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
