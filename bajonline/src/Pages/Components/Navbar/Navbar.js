import React, { useState, useEffect } from "react";
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
import { Variables } from "../../../Variables";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState("");
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [productsInCart, setProductsInCart] = useState(0);

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwtToken");
    if (jwtToken) {
      setToken(jwtToken);
      axios
        .get(Variables.API_URL + "user/UserRole", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then((response) => {
          if (response.data === "Admin") {
            setIsAdmin(true);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    numberOfProductsInCart();
  }, []);

  const numberOfProductsInCart = async () => {
    try {
      const response = await axios.get(
        Variables.API_URL + "ShoppingCart/NumberOfProducts",
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      const numberOfProducts = response.data;
      if (numberOfProducts > 0) {
        setProductsInCart(numberOfProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    navigate(`/shopall?searchTerm=${encodeURIComponent(searchTerm)}`);
  };
  return (
    <header>
      {isAdmin && (
        <NavLink to="/admin/dashboards" style={{ textDecoration: "none" }}>
          <h3>Administration</h3>
        </NavLink>
      )}
      <nav>
        <div className="upper__part">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              name="search"
              className="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </form>
          <h1 className="logo hide__on__small__screen">
            <i>SmartSupplies.</i>
          </h1>
          <div className="right__part">
            <div className="social__medias hide__on__small__screen">
              <NavLink
                to="https://www.facebook.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FacebookIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
              </NavLink>
              <NavLink
                to="https://www.instagram.com/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <InstagramIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
              </NavLink>

              <NavLink
                to="https://twitter.com/home"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <TwitterIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
              </NavLink>

              <NavLink
                to="https://www.linkedin.com/feed/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <LinkedInIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
              </NavLink>
            </div>
            {!token && (
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <div className="login">
                  <LoginIcon />
                  <p>Log In</p>
                </div>
              </NavLink>
            )}
            {token && <Dropdown />}
            <NavLink to="/shoppingCartPage" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="shopping__cart">
                <ShoppingCartIcon />
                <p>Cart ({productsInCart})</p>
              </div>
            </NavLink>
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
