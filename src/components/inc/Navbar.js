import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../images/logo.webp"
import "./Navbar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavlinkClick = () => {
    setIsOpen(false); // Close the offcanvas menu
  };

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the offcanvas menu
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container mx-2">
        <Link className="navbar-brand" to="#">
          <img
            src={logoImage}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-center mx-2"
          />
          <span>MedcubePharmaceuticals</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`} style={{ width: "250px",backgroundColor:"#481161" }} tabIndex="-1" id="navbarNav">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close text-reset"
              onClick={handleToggle}
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto pe-3 text">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleNavlinkClick}>
                  <i className="bi bi-house-fill me-1"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products" onClick={handleNavlinkClick}>
                  <i className="bi bi-capsule me-1"></i>Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleNavlinkClick}>
                  <i className="bi bi-info-circle-fill me-1"></i>About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleNavlinkClick}>
                  <i className="bi bi-envelope-fill me-1"></i>Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
