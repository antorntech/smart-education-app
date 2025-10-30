import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-40 flex justify-between items-center px-4 md:px-6">
      {/* Hamburger for mobile */}
      <button
        className="md:hidden p-2 text-gray-600 hover:text-indigo-600"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <h2 className="text-xl font-semibold text-gray-800">
        Smart Education Dashboard
      </h2>

      <button className="p-2 text-gray-600 hover:text-indigo-600">
        <FontAwesomeIcon icon={faBell} />
      </button>
    </header>
  );
};

export default Header;
