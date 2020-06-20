import React, { Fragment } from "react";

import NavbarJombotron from "../../components/navbarJombotron/NavbarJombotron";

import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactUs = (props) => {
  return (
    <Fragment>
      <NavbarJombotron
        headerTitle="Get in Touch"
        headerDescription="Contact Us"
      />
      <section className="contact-section">
        <div>
          <div className="row contact-page-container">
            <div className="col-md-6 contact-info">
              <div className="first-col-header">
                <h3>Contact info</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea.
                </p>
              </div>
              <div>
                <div className="contact-icon">
                  <div>
                    <FontAwesomeIcon
                      className="pt-1 navbar-icon"
                      icon="phone-alt"
                    />
                  </div>
                  +234 803714 5164
                </div>
                <div className="contact-icon">
                  <div>
                    <FontAwesomeIcon
                      className="pt-1 navbar-icon"
                      icon="envelope"
                    />
                  </div>
                  contact@domain.com
                </div>
                <div className="contact-icon">
                  <div>
                    <FontAwesomeIcon
                      className="pt-1 navbar-icon"
                      icon="globe"
                    />
                  </div>
                  www.domain.com
                </div>
                <div className="contact-icon">
                  <div>
                    <FontAwesomeIcon
                      className="pt-1 navbar-icon"
                      icon="envelope"
                    />
                  </div>
                  Admiralty Way, Lekki Phase 1, Lagos
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3>Get in touch</h3>
              <div>
                <form>
                  <div className="form-group contact-form-group">
                    <div>
                      <FontAwesomeIcon
                        className="pt-1 contact-icon-form"
                        icon="user"
                      />
                    </div>
                    <input
                      type="text"
                      className="form-control contact-input"
                      id="name"
                      placeholder="Type your name here"
                    />
                  </div>
                  <div class="form-group contact-form-group">
                    <div>
                      <FontAwesomeIcon
                        className="pt-1 contact-icon-form"
                        icon="envelope"
                      />
                    </div>
                    <input
                      type="text"
                      class="form-control contact-input"
                      id="email"
                      placeholder="Type your email here"
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="6"
                    ></textarea>
                  </div>
                  <div className="text-right">
                    <button type="button" class="btn btn-send-message mr-auto">
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactUs;
