import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/navbar/Navbar";
import SingleEventHeader from "./templates/singleEventHeader/SingleEventHeader";

import "./SingleEvent.css";
import SingleComment from "../../components/singleComment/SingleComment";
import CreateComment from "../../components/createComment/CreateComment";
import ViewEventProfileCard from "../../components/viewEventProfileCard/ViewEventProfileCard";
import Button from "../../components/button/Button";
import HashTag from "../../components/hashTag/HashTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getEvent } from "./singleEvent.action";
import Loading from "../../components/loadingIndicator/Loading";
import EventPay from "./templates/eventPay/EventPay";
const SingleEvent = (props) => {
  const { eventId } = useParams();

  const dispatch = useDispatch();

  const event = useSelector((state) => state.singleEvent.event);

  let foundEvent;
  let startDate;
  if (event) {
    foundEvent = event;
    startDate = moment(foundEvent.startDate).format("MMMM Do, YYYY @ h:mm a");
  }

  console.log(44, event);

  useEffect(() => {
    dispatch(getEvent(eventId));
  }, [dispatch, eventId]);

  return (
    <Fragment>
      <Navbar />
      <section>
        <SingleEventHeader />

        {!event ? (
          <div className="single-event-loading">
            <Loading />
          </div>
        ) : (
          <div className="row single-event-body">
            <div className="col-md-8 single-event-first-col">
              <section>
                <div>
                  <div className="single-event-name-container">
                    <h1 className="single-event-name">{foundEvent.name}</h1>
                    <span>{foundEvent.location.address}</span>
                  </div>
                  <div className="single-event-price">
                    {foundEvent.isPaid ? (
                      <div>
                        <p>
                          foundEvent.amount <EventPay />
                        </p>
                        <Button btndisabled={false} onClick={() => {}}>
                          PAY
                        </Button>
                      </div>
                    ) : (
                      "FREE"
                    )}
                  </div>
                  <div>
                    <h2 className="single-event-header-title">Description</h2>
                    <div className="single-event-description">
                      {foundEvent.description
                        ? foundEvent.description
                        : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore na aliquyam erat, sed diam voluptua. "}
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
                <div>
                  <h3 className="single-event-header-title">
                    Comments<span>(1)</span>
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
                <ViewEventProfileCard user={foundEvent.userId} />
              </div>
              <div className="mt-3 mb-3 single-event-date-container">
                <h4 className="single-event-header-title">Dates and Time</h4>
                <p>
                  Start: <span className="event-start-date">{startDate}</span>
                </p>
                <p>
                  End:{" "}
                  <span className="event-end-date">Mar 23, 2020 @ 12.00pm</span>
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
              <div className="mt-3 mb-3 single-event-second-col-container">
                <h4 className="single-event-header-title">Event Location</h4>
                <div>map</div>
                <div>{foundEvent.location.address}</div>
              </div>
              <div className="mt-3 mb-3 single-event-second-col-container">
                <h4 className="single-event-header-title">Tags</h4>
                <div className="single-comment-hashtag-container">
                  <HashTag tagValue="TiwaLiveOnStage" />
                  <HashTag tagValue="wizzy" />
                  <HashTag tagValue="TiwaLiveOnStage" />
                </div>
              </div>
              <div className="mt-3 mb-3 single-event-second-col-container">
                <h4 className="single-event-header-title">
                  Share with friends
                </h4>
                <div className="row share-icon-container">
                  <div className="share-icon-facebook">
                    <FontAwesomeIcon
                      className="share-icon"
                      icon={["fab", "facebook-f"]}
                    />
                  </div>

                  <div className="share-icon-twitter">
                    <FontAwesomeIcon
                      className="share-icon"
                      icon={["fab", "twitter"]}
                    />
                  </div>
                  {/* <div className="share-icon-instagram">
                  <FontAwesomeIcon
                    className="share-icon"
                    icon={["fab", "instagram"]}
                  />
                </div> */}
                  <div className="share-icon-linkedin">
                    <FontAwesomeIcon
                      className="share-icon"
                      icon={["fab", "linkedin-in"]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Fragment>
  );
};

SingleEvent.propTypes = {};

export default SingleEvent;
