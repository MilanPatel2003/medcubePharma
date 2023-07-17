import {React, useEffect }from "react";
import heroImage1 from "../images/quesionmark.png";
import heroImage2 from "../images/vision.jpg";
import approach from "../images/approach.png";
import gmpLogo from "../images/gmp.png";
import "./About.css"
import AOS from 'aos';
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        AOS.init({
          duration:2000,
        });
      }, []);

  return (
    <div className="about-container">
     <div className="container">
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img src={heroImage1} alt="Hero1" height="350px" width="310px"/>
            </div>
            <div className="col-md-8" >
              <h2>What We Do?</h2>
              <p className="lead">
At Medcube Pharmaceuticals, we specialize in trusted third-party pharma manufacturing. With state-of-the-art facilities and a dedicated team, we deliver high-quality pharmaceutical products. Our comprehensive manufacturing capabilities cover formulation development, production, and packaging. Partner with us for reliable and efficient manufacturing solutions that meet the highest industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>

      <div className="px-4 py-5 my-5 text-center" data-aos="fade">
    <img className="d-block mx-auto mb-4" src={gmpLogo} alt="gmp-logo" height={"150px"}/>
    <h1>WHO-GMP Certified</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">We take pride in being WHO-GMP certified, ensuring that our manufacturing processes adhere to the highest industry standards. Our state-of-the-art facilities and dedicated team of experts enable us to deliver pharmaceutical products of the highest quality.
      </p>
    </div>
  </div>



<div className="container">
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <img src={heroImage2} alt="Hero2" className="img-fluid"  />
            </div>
            <div className="col-md-6 order-md-1">
              <h2>Our Vision</h2>
              <p className="lead">
              To become a global leader in the pharmaceutical industry by continuously innovating and delivering advanced healthcare solutions. We strive to improve the quality of life for individuals worldwide by providing safe, effective, and affordable medications. With a focus on research and development, we aim to address unmet medical needs and contribute to the well-being of communities globally.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>

      <div className="px-4 py-5 my-5 text-center" data-aos="fade">
    <img className="d-block mx-auto mb-4" src={approach} alt="gmp-logo" height={"180px"}/>
    <h1>Our Approach</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">At Medcube Pharmaceuticals, we are dedicated to making a positive impact on global healthcare. By combining scientific expertise, innovation, and a passion for improving lives, we are committed to driving positive change and creating a healthier future for all.
      </p>
    </div>
  </div>

    </div>
  );
}

export default About;
