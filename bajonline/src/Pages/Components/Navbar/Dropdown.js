import React, { useState } from "react";
import { showSuccessNotification } from "../../../NotificationUtils";
import "./Dropdown.css";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const logout = () => {
    sessionStorage.clear()
    showSuccessNotification(
      "You're logged out successfully",
      "The page will be refreshed",
      2000
    );
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div className="dropdown-header-title">
          <span>{`${sessionStorage.getItem("usersName") != null ? sessionStorage.getItem("usersName") : ""} ${sessionStorage.getItem("usersLastName") != null ? sessionStorage.getItem("usersLastName") : ""}`}</span>
        </div>
        <span className={`dropdown-header-icon ${isOpen ? "open" : ""}`}></span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item" onClick={handleItemClick}>
            <span>Profile</span>
          </li>
          <li className="dropdown-item" onClick={handleItemClick}>
            <NavLink
              to="/wishlist"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span >Wishlist</span>
            </NavLink>
          </li>
          <li className="dropdown-item" onClick={handleItemClick}>
            <span onClick={logout}>Log Out</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
