import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "./Dropdown";
import "./Navbar.css";
import AuthorizedAxios from "../../../AuthorizedAxios";

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

  const token = localStorage.getItem("jwtToken");
  if (token && AuthorizedAxios.get("UserRole") === "Admin") {
    setIsAdmin(true);
  }

  return (
    <header>
      {isAdmin && (
        <NavLink to="/admin/dashboards" style={{ textDecoration: "none" }}>
          <h3>Administration</h3>
        </NavLink>
      )}
      <nav>
        <div className="upper__part">
          <input
            type="text"
            name="search"
            className="search"
            placeholder="Search..."
          />
          <h1 className="logo hide__on__small__screen">
            <i>SmartSupplies.</i>
          </h1>
          <div className="right__part">
            <div className="social__medias hide__on__small__screen">
              <FacebookIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
              <InstagramIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
              <TwitterIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
              <LinkedInIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
            </div>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              {token && (
                <div className="login">
                  <LoginIcon />
                  <p>Log In</p>
                </div>
              )}
              {token && 
                        <Dropdown />
                      }
            </NavLink>
            <div className="shopping__cart">
              <ShoppingCartIcon />
              <p>Cart (0)</p>
            </div>
          </div>
        </div>
        <div
          className={
            "bottom__part " + (isMobileMenuToggled ? " small__screen" : "")
          }
        >
          <h2
            className={
              "second__logo" + (isMobileMenuToggled ? " small__screen" : "")
            }
          >
            <i>SmartSupplies.</i>
          </h2>
          <ul>
            <li
              className={
                isMobileMenuToggled
                  ? " small__screen "
                  : " hide__on__small__screen"
              }
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className={
                isMobileMenuToggled
                  ? " small__screen "
                  : " hide__on__small__screen"
              }
            >
              <NavLink to="/shopall">Shop All</NavLink>
            </li>
            <li
              className={
                isMobileMenuToggled
                  ? " small__screen "
                  : " hide__on__small__screen"
              }
            >
              Our Story
            </li>
            <li
              className={
                isMobileMenuToggled
                  ? " small__screen "
                  : " hide__on__small__screen"
              }
            >
              Our Craft
            </li>
            <li
              className={
                isMobileMenuToggled
                  ? " small__screen "
                  : " hide__on__small__screen"
              }
            >
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <IconButton
                className="hamburger__bar"
                onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                sx={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                }}
              >
                <MenuIcon
                  sx={{
                    display: { xs: "block", sm: "block", md: "none" },
                    color: "black",
                    fontSize: "28px",
                  }}
                />
              </IconButton>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
