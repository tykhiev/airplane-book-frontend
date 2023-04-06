import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">AirLie</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/flight-list">Flight List</Link>
          </li>
          <li>
            <Link to="/book-ticket">Book</Link>
          </li>
          <li>
            <Link to="/register-passenger">Register</Link>
          </li>
          `
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
