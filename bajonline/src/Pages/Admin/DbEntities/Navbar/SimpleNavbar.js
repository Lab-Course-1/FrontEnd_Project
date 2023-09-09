import React from "react";
import { NavLink } from "react-router-dom";
import "./SimpleNavbar.css";

const SimpleNavbar = () => {
  return (
    <div className="simple__navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shopall" >
              Shop All
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/dbentities" >
              Db Entities
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SimpleNavbar;
