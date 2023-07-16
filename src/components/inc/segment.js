import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import "./segment.css";
import thumbnail1 from "../images/Thumbnail1.jpg";
import thumbnail2 from "../images/Thumbnail2.jpg";
import thumbnail3 from "../images/Thumbnail3.jpg";



function Segment() {
  useEffect(() => {
    AOS.init({
      duration:2000,
    });
  }, []);
    return(
        <div className="container"> 

        <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Products Segment</h1>
      </div>
    </div>
  </section>

  <div className="container mb-4">
      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <Link to="/pharmaceuticals">
              <img src={thumbnail1} alt="Thumbnail 1" data-aos="fade-right" />
              <div className="caption">
                <h3>Pharmaceuticals</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4" >
          <div className="thumbnail">
            <Link to="/nutraceuticals">
              <img src={thumbnail2} alt="Thumbnail 2" data-aos="fade"  />
              <div className="caption">
                <h3>Nutraceuticals</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4" >
          <div className="thumbnail">
            <Link to="/surgical">
              <img src={thumbnail3} alt="Thumbnail 3" data-aos="fade-left"/>
              <div className="caption">
                <h3>Surgical</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>










  </div>
    )
}

export default Segment;