import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = ({ activePage }) => {
  return (
    <div className="w-64 h-screen flex flex-col justify-between">
      {/* Logo */}
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold">SMART GARDEN</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2">
        {/* Dashboard Link */}
        <Link
          to="/dashboard"
          className={`flex items-center px-6 py-3 space-x-4 rounded-md ${
            activePage === "dashboard"
              ? "bg-green-700 text-white"
              : "hover:bg-green-800"
          }`}
        >
          <FontAwesomeIcon icon={faSeedling} size="lg" />
          <span className="font-medium">Dashboard</span>
        </Link>

        {/* Graphs Link */}
        <Link
          to="/graphs"
          className={`flex items-center px-6 py-3 space-x-4 rounded-md ${
            activePage === "graph"
              ? "bg-green-700 text-white"
              : "hover:bg-green-800"
          }`}
        >
          <FontAwesomeIcon icon={faChartPie} size="lg" />
          <span className="font-medium">Graphs</span>
        </Link>
      </nav>

      {/* Footer */}
      <footer className="px-6 py-4 text-sm">
        IOT CA2 Project by <span className="">I Owe Tea</span>
      </footer>
    </div>
  );
};

export default Sidebar;
