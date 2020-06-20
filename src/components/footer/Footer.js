import React, { Fragment } from "react";

import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PicA from "../../assets/images/bg2.jpg";
import PicB from "../../assets/images/passport.jpg";
import PicC from "../../assets/images/background.jpg";

const Footer = (props) => {
  return (
    <Fragment>
      <footer className="footer-content-container">
        <div className="row footer-container">
          <div className="col-md-3 mt-4">
            <h5>ibloov</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div>
              <FontAwesomeIcon
                className="footer-icon"
                icon={["fab", "facebook-f"]}
              />
              <FontAwesomeIcon
                className="footer-icon"
                icon={["fab", "twitter"]}
              />
              <FontAwesomeIcon
                className="footer-icon"
                icon={["fab", "instagram"]}
              />
              <FontAwesomeIcon
                className="footer-icon"
                icon={["fab", "linkedin-in"]}
              />
            </div>
          </div>
          <div className="col-md-2.3 pl-3 mt-4">
            <h5>About us</h5>
            <ul className="footer-ul">
              <Link to="#">
                <p>About us</p>
              </Link>
              <Link to="#">
                <p>Team</p>
              </Link>
              <Link to="#">
                <p>Career</p>
              </Link>
              <Link to="#">
                <p>Services</p>
              </Link>
              <Link to="/contact">
                <p>Contact</p>
              </Link>
              <Link to="/privacy">
                <p>Privacy policy</p>
              </Link>
            </ul>
          </div>

          <div className="col-md-2 pl-3 mt-4">
            <h5>Contact us</h5>
            <p>50, Lagos Street, VI, Lagos Nigeria.</p>
          </div>
          <div className="col-md-3.5 pl-3 mt-4">
            <h5>Instagram</h5>
            <div className="footer-image-container">
              <img src={PicA} className="footer-image" alt="logo" />
              <img src={PicB} className="footer-image" alt="logo" />
              <img src={PicC} className="footer-image" alt="logo" />
              <img src={PicA} className="footer-image" alt="logo" />
              <img src={PicB} className="footer-image" alt="logo" />
              <img src={PicC} className="footer-image" alt="logo" />
              <img src={PicB} className="footer-image" alt="logo" />
              <img src={PicC} className="footer-image" alt="logo" />
            </div>
          </div>
        </div>
        <div className="mt-4 footer-courtesy">
          <p>(c) 2020 iBloov. All rights reserved</p>
        </div>
      </footer>
    </Fragment>
  );
};

Footer.propTypes = {};

export default Footer;
