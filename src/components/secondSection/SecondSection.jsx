import React from "react";
import "./SecondSection.css";

function SecondSection() {
  return (
    <div>
      <div className="row p-0 m-0 pt-5">
        <div
          className="col-sm-12 col-md-6 position-relative z-1  "
          id="passion-img"
        ></div>
        <div className="col-sm-12 col-md-6 passion-details">
          <div className="passion-text dorsa-regular z-3 position-relative">
            PASSION
          </div>
          <div className="passion-text dorsa-regular z-3 position-relative">
            AND PRECISION
          </div>
          <div className="passion-desc position-relative z-3">
            Hey, I'm Ravindu. Since I started my design journey, I've been
            dedicated to creating innovative and high-quality graphic designs.
            My expertise in branding, digital illustrations, and print media
            allows me to deliver impactful solutions. Let's work together to
            bring your vision to life.
          </div>
          <div className="cliped-text dorsa-regular">PASSION</div>
          <div className="cliped-text dorsa-regular">PRECISION</div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
