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
        <div className="container"></div>



  
    )
}

export default Segment;