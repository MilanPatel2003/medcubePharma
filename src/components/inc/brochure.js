import React from "react";
import brochurePDF from "../images/brochure.pdf";
import downloadLogo from '../images/download-logo.png';
import "./brochure.css"

const BrochureContainer = () => {
  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = brochurePDF;

    const fileName = "brochure.pdf";
    link.download = fileName;

    link.click();
  };

  return (
    <div className="brochure-container">
    <h4>We also provide product as per this Brochure</h4>
    <div className="download-section">
      <img className="download-logo" src={downloadLogo} alt="Download Logo"/>
      <button className="download-button" onClick={handleDownload}>
        Download
      </button>
    </div>
  </div>
  );
};

export default BrochureContainer;
