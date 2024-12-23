import React from "react";
import "./AboutSection.css";
import photoShopImg from "../../assets/photoShop.png";
import illustrator from "../../assets/illustrator.png";
import premierPro from "../../assets/premierPro.png";
import maya from "../../assets/maya.png";
import pdfIcon from "../../assets/pdfIcon.png";

function AboutSection() {
  return (
    <div className="row about-container ">
      <div className="col-sm-12 col-md-6">
        <div>
          <div className="about-text dorsa-regular position-relative z-1 ">
            ABOUT
          </div>
          <div className="about-desc position-relative z-1  ">
            Hey, I'm Ravindu. Since I started my design journey, I've been
            dedicated to creating innovative and high-quality graphic designs.
            My expertise in branding, digital illustrations, and print media
            allows me to deliver impactful solutions. Let's work together to
            bring your vision to life.
          </div>
          <div className="skill-section">
            <div className="skills-text position-relative z-1 ">SKILLS</div>
            <div className="skills-list gap-4 d-flex position-relative z-1 ">
              <img src={photoShopImg} alt="" className="skill-img" />
              <img src={illustrator} alt="" className="skill-img" />
              <img src={premierPro} alt="" className="skill-img" />
              <img src={maya} alt="" className="skill-img" />
              <div className="ms-5 cv-download">
                <img src={pdfIcon} alt="" className="skill-img  " />
                <div className="cv-text">DOWNLOAD CV HERE</div>
              </div>
            </div>
          </div>
        </div>
        <div className="cliped-about-text dorsa-regular">ABOUT</div>
      </div>
      <div
        className="col-sm-12 col-md-6 position-relative  "
        id="about-img"
      ></div>
    </div>
  );
}
export default AboutSection;
