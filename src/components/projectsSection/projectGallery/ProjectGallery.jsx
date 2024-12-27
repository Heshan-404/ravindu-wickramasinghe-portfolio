import React from "react";
import "./ProjectGallery.css";
import img from "../../../assets/illustrator.png";
import img1 from "../../../assets/aboutImg.png";

function ProjectGallery() {
  return (
    <div className="project-gallery-container">
      <div className="gallery-item-container">
        <div className="gallery-item">
          <img src={img} alt="" className="gallery-item-image" />
        </div>
        <div className="gallery-item">
          <img src={img1} alt="" className="gallery-item-image" />
        </div>
        <div className="gallery-item">
          <img src={img} alt="" className="gallery-item-image" />
        </div>
        <div className="gallery-item">
          <img src={img1} alt="" className="gallery-item-image" />
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;