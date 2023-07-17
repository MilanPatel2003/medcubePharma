import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from '../images/hero2.png';
import "./hero.css"
import AOS from 'aos';
import "aos/dist/aos.css";


function Hero() {
    useEffect(() => {
        AOS.init({
          duration:2000,
        });
      }, []);

   
        return(
            <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img data-aos="fade-left" src={heroImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="600" height="150"/>
              </div>
              <div className="col-lg-6" data-aos="fade-right">
                <h1 className="header mb-3">Supplier, Exporter & Third Party Manufacturer</h1>
                <p className="para"> "Your Trusted Source for Third-Party Pharma Manufacturing"
            We provide <strong className="fw-bold">WHO-GMP Certified</strong> third-party manufacturing services at the best and competitive rates. 
            With our state-of-the-art facilities and experienced team, we deliver high-quality pharmaceutical products for your business.
            Partner with us for reliable and efficient manufacturing solutions.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <Link className="btn btn-outline-secondary btn-lg px-4" to="/contact">Contact Us</Link>
                   
                </div>
              </div>
            </div>
          </div>

          
        )
    }

export default Hero;