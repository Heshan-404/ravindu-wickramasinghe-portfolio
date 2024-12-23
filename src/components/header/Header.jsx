import React from "react";
import "./header.css";
import logo from "../../assets/react.svg";

// Import Font Awesome components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faBehance,
  faLinkedin,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons"; // Assuming "printeress" means print icon

function Header() {
  return (
    <div>
      <a className="navbar-brand z-3  position-fixed  " href="#">
        <img src={logo} alt="" srcSet="" />
      </a>
      <nav className="navbar navbar-expand-lg  position-fixed z-2 w-100">
        <button
          className="navbar-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <a className="nav-item  active  " href="#">
              START
            </a>
            <a className="nav-item " href="#">
              ABOUT
            </a>
            <a className="nav-item  " href="#">
              PROJECTS
            </a>
            <a className="nav-item  disabled" href="#">
              CONTACT
            </a>
            <div className="navbar-contact justify-content-center align-items-end">
              <div className="d-flex justify-content-between w-50">
                <div className="social-icon-btn">
                  <FontAwesomeIcon icon={faFacebook} className="social-icon social-icon-1" />
                </div>
                <div className="social-icon-btn">
                  <FontAwesomeIcon icon={faBehance} className="social-icon social-icon-2" />
                </div>
                <div className="social-icon-btn">
                  <FontAwesomeIcon icon={faLinkedin} className="social-icon social-icon-3" />
                </div>
                <div className="social-icon-btn">
                  <FontAwesomeIcon icon={faInstagram} className="social-icon social-icon-4" />
                </div>
                <div className="social-icon-btn">
                  <FontAwesomeIcon icon={faPinterest} className="social-icon social-icon-5" />
                </div>  
                <div className="social-icon-btn">
                  <FontAwesomeIcon icon={faPrint} className="social-icon social-icon-6" />
                </div> 
                  </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
