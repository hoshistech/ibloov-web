import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/navbar/Navbar";
import SingleEventHeader from "./templates/singleEventHeader/SingleEventHeader";

import "./SingleEvent.css";
import SingleComment from "../../components/singleComment/SingleComment";
import CreateComment from "../../components/createComment/CreateComment";
import ViewEventProfileCard from "../../components/viewEventProfileCard/ViewEventProfileCard";
import Button from "../../components/button/Button";
import HashTag from "../../components/hashTag/HashTag";
const SingleEvent = (props) => {
  return (
    <Fragment>
      <Navbar />
      <section>
        <SingleEventHeader />
        <div className="row">
          <div className="col-md-8">
            <section>
              <div>
                <div className="single-event-name-container">
                  <h1 className="single-event-name">
                    Association of Freelancers
                  </h1>
                  <span>Johannafort, Ohio</span>
                </div>
                <p className="single-event-price">$10.00</p>
                <div>
                  <h2 className="single-event-header-title">Description</h2>
                  <div className="single-event-description">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. 
                    At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo.
                  </div>
                </div>
              </div>
              <div className="mt-3 mb-3">
                <h4 className="single-event-header-title">
                  How can I contact the organizer for any question?
                </h4>
                <div className="single-event-description">
                  Please fill the form below to contact the organizer
                </div>
              </div>
            </section>
            <section>
              event comments add comments
              <div>
                <h3 className="single-event-header-title">
                  Comments<span>(2)</span>
                </h3>
                <div className="mt-3 mb-3">
                  <SingleComment />
                </div>
                <div className="mt-3 mb-3">
                  <CreateComment />
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-4">
            <div>
              <ViewEventProfileCard />
            </div>
            <div className="mt-3 mb-3 single-event-date-container">
              <h4 className="single-event-header-title">Dates and Time</h4>
              <p>
                Start: <span>Mar 23, 2020 @ 9.00am</span>
              </p>
              <p>
                End: <span>Mar 23, 2020 @ 12.00pm</span>
              </p>
              <div>
                <Button
                  btndisabled={false}
                  onClick={() => {}}
                  customClassName="export-to-calendar-btn"
                >
                  Export to Calendar
                </Button>
              </div>
            </div>
            <div>
              <h4 className="single-event-header-title">Event Location</h4>
              <div>map</div>
              <div>
                79594 Felton Passage, Schmidtborough, Johannafort, Ohio British
                Indian Ocean Territory (Chagos Archipelago)
              </div>
            </div>
            <div>
              <h4 className="single-event-header-title">Tags</h4>
              <div className="single-comment-hashtag-container">
                <HashTag tagValue="TiwaLiveOnStage" />
                <HashTag tagValue="wizzy" />
                <HashTag tagValue="TiwaLiveOnStage" />
              </div>
            </div>
            <div>
              <h4 className="single-event-header-title">Share with friends</h4>
              <div>social icons</div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

SingleEvent.propTypes = {};

export default SingleEvent;
