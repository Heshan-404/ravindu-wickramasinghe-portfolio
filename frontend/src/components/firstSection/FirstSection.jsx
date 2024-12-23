import React from "react";
import imgOne from "../../assets/imgOne.jpg";
import "./FirstSection.css";

function FirstSection() {
  return (
    <div className="pt-5 container-first">
      <div id="imgOne">
        <div className="first-section-container d-flex justify-content-center align-items-center">
            <div className="text">
               <div className="iam-text">I am,</div>
               <div className="ravindu-text">RAVINDU</div>
               <div className="wickramasinghe-text">WICKRAMASINGHE</div>
               <div className="graphic-designer-text">GRAPHIC DESIGNER</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
