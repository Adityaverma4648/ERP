import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaCalendar,
  FaSun,
  FaExclamationTriangle,
} from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div>
        <div className="profileList">A</div>
        <ul className="sidebarRouteBtn">
          <Link to="/">
            <li>
              <FaHome />
            </li>
          </Link>
          <Link to="/explore">
            <li>
              <FaCompass />
            </li>
          </Link>
          <Link to="/events">
            <li>
              <FaCalendar />
            </li>
          </Link>
          <Link to="/">
            <li>
              <FaHome />
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <Link to="/">
          <li>
            <FaExclamationTriangle />
          </li>
        </Link>
        <Link to="/">
          <li>
            <FaSun />
          </li>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
