import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../images/logo1.png";
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
      <div className="container-fluid">
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
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto pe-3 text">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavlinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={isOpen ? "true" : "false"}
              >
                Products
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/Pharmaceutical" onClick={handleNavlinkClick}>
                    Pharmaceutical
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Nutraceutical" onClick={handleNavlinkClick}>
                     Nutraceutical
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Surgical" onClick={handleNavlinkClick}>
                     Surgical
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About" onClick={handleNavlinkClick}>
                 About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact" onClick={handleNavlinkClick}>
                 Contact us
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
