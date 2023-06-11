import React from "react";
import { NavLink } from "react-router-dom";
import "./SimpleNavbar.css";

const SimpleNavbar = () => {
  return (
    <div className="simple__navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shopall" activeClassName="active">
              Shop All
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/dbentities" activeClassName="active">
              Db Entities
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SimpleNavbar;
