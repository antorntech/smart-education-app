import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <header className="flex justify-between items-center bg-white p-4 shadow-sm">
    <h2 className="text-xl font-semibold text-gray-800">
      Smart Education Dashboard
    </h2>
    <button className="p-2 text-gray-600 hover:text-indigo-600">
      <FontAwesomeIcon icon={faBell} />
    </button>
  </header>
);

export default Header;
