import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/navbar/Navbar";

import "./Myibloov.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import PromotedEventCard from "../../components/promotedEventCard/PromotedEventCard";
import CreateEvent from "../createEvent/CreateEvent";
import SelectInput from "../../components/selectInput/SelectInput";
const Myibloov = (props) => {
  const event = false;

  const [selectedTab, setSelectedTab] = useState("event");
  // const [myCreatedEvent, setMyCreatedEvent] = useState(true);
  // const [showCreate, setShowCreate] = useState(false);

  // testing purpose
  const [myCreatedEvent, setMyCreatedEvent] = useState(false);
  const [showCreate, setShowCreate] = useState(true);

  const selectedTabHandler = (e) => {
    const tabSwitch = e.target.name;
    e.preventDefault();
    setSelectedTab(tabSwitch);
    setShowCreate(false);
  };

  const selectMyEventHandler = (e) => {
    e.preventDefault();
    setMyCreatedEvent(!myCreatedEvent);
  };

  const createButtonHandler = (e) => {
    e.preventDefault();
    console.log("creating ");
    setShowCreate(!showCreate);
  };

  return (
    <div className="myibloov-container">
      <div>
        <Navbar />
      </div>
      <section className="myibloov">
        <div className="myibloov-nav-container row mt-3">
          <div className="myibloov-nav-first">
            <div className="myibloov-nav-header mr-5">My iBloov</div>
            <div>
              <div className="myibloov-nav-links">
                <div
                  className={
                    selectedTab === "event"
                      ? "myibloov-nav-active mr-3"
                      : "myibloov-nav-link mr-3"
                  }
                >
                  <Link
                    to=""
                    className="create-event-tab-link"
                    name="event"
                    onClick={selectedTabHandler}
                  >
                    Events
                  </Link>
                </div>
                <div
                  className={
                    selectedTab === "wishlist"
                      ? "myibloov-nav-active"
                      : "myibloov-nav-link"
                  }
                >
                  <Link
                    to=""
                    className="create-event-tab-link"
                    name="wishlist"
                    onClick={selectedTabHandler}
                  >
                    Wishlist
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="create-event-btn-container">
              {selectedTab === "event" ? (
                <Button
                  customClassName="mybloov-create-event-btn bold-600"
                  onClick={createButtonHandler}
                  btndisabled={false}
                >
                  {showCreate ? "back to events" : "Create New Event"}
                </Button>
              ) : (
                <Button
                  customClassName="mybloov-create-event-btn bold-600"
                  onClick={createButtonHandler}
                  btndisabled={false}
                >
                  {showCreate ? "back to wishlist" : "Create Wishlist"}
                </Button>
              )}
            </div>
          </div>
        </div>
        {!showCreate ? (
          <Fragment>
            <div className="row myibloov-second-row mt-3 mb-3">
              {selectedTab === "event" ? (
                <div className="row mybloo-event-tab mb-2">
                  <div
                    className={
                      myCreatedEvent
                        ? "mr-3 myibloov-event-link-active"
                        : "mr-3 myibloov-event-link"
                    }
                  >
                    <Link
                      to=""
                      onClick={selectMyEventHandler}
                      name="myEvent"
                      className=""
                    >
                      Events I have created
                    </Link>
                    <div>4</div>
                  </div>

                  <div
                    className={
                      myCreatedEvent
                        ? "mr-1 myibloov-event-link"
                        : "mr-1 myibloov-event-link-active"
                    }
                  >
                    <Link
                      to=""
                      onClick={selectMyEventHandler}
                      name="eventAttending"
                      className=""
                    >
                      Events I am attending
                    </Link>
                    <div>6</div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="sort-container">Sort: most recent </div>
            </div>
            <div className="row mt-2 my-created-event">
              {selectedTab === "event" ? (
                <Fragment>
                  {myCreatedEvent ? (
                    <Fragment>
                      <Card />
                      <Card />
                      <Card />
                      <Card />
                    </Fragment>
                  ) : (
                    <Fragment>
                      <PromotedEventCard />
                      <Card />
                    </Fragment>
                  )}
                </Fragment>
              ) : (
                <PromotedEventCard />
              )}
            </div>
          </Fragment>
        ) : (
          <Fragment>
            {selectedTab === "event" ? (
              <CreateEvent handleCreateButton={createButtonHandler} />
            ) : (
              <div>create wishlist</div>
            )}
          </Fragment>
        )}
      </section>
    </div>
  );
};

Myibloov.propTypes = {};

export default Myibloov;
