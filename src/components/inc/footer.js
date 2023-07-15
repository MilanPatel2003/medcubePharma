import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../images/logo.webp";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3 col-sm-6">
            <div className="footer-logo">
              <img src={logoImage} alt="Logo" height="60" width="60" />
              <h5 className="logo-text">MedcubePharmaciuticals</h5>
            </div>
          </div>
         
          <div className="col-md-3 col-sm-6">
            <h6 className="footer-title">Contact Us</h6>
            <ul className="footer-contact">
            
              <li>
                
              Info@medcubepharmaceuticals.com
              </li>
              <li>
               
              Medcubepharmaceuticals@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        &copy; {new Date().getFullYear()} MedcubePharmaceuticals. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
