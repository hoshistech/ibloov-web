import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";

import "./Myibloov.css";
import Button from "../../components/button/Button";
import { Link, useLocation } from "react-router-dom";
import Card from "../../components/card/Card";
import PromotedEventCard from "../../components/promotedEventCard/PromotedEventCard";
import CreateEvent from "../createEvent/CreateEvent";
import Loading from "../../components/loadingIndicator/Loading";
import DropDown from "../../components/dropDown/DropDown";
import { getUserEvents } from "../homepage/homePage.action";

const Myibloov = (props) => {
  const [selectedTab, setSelectedTab] = useState("event");
  const [myCreatedEvent, setMyCreatedEvent] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const dispatch = useDispatch();

  const { events, userEvents } = useSelector((state) => state.allEvents);
  const { _id: userId } = useSelector((state) => state.login.user);

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      if (location.state.action === "newEvent") setShowCreate(true);
    }
    dispatch(getUserEvents());
  }, [location, dispatch]);

  let myEvents = <Loading />;
  let attendingEvents = "";

  if (events) {
    // const userEvents = events.filter((event) => event.userId._id === userId);
    myEvents = userEvents.map((event) => {
      if (event.userId._id === userId) {
        return (
          <Card
            key={event._id}
            name={event.name}
            eventId={event._id}
            startDate={event.startDate}
            location={event.location}
            event={event}
            myEvent={true}
            splashImage="https://source.unsplash.com/250x182/?concert,party"
          />
        );
      }
      return;
    });

    attendingEvents = events.slice(0, 4).map((event) => {
      return (
        <Card
          key={event._id}
          name={event.name}
          eventId={event._id}
          startDate={event.startDate}
          location={event.location}
          event={event}
          splashImage="https://source.unsplash.com/250x182/?concert,party"
        />
      );
    });
  }

  // testing purpose
  // const [myCreatedEvent, setMyCreatedEvent] = useState(false);
  // const [showCreate, setShowCreate] = useState(true);

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
    setShowCreate(!showCreate);
  };

  const toggleDropdownOptionHandler = (id) => {
    if (id === "dropdownId") {
      setShowDropDown(!showDropDown);
      return;
    }
    setShowDropDown(false);
  };

  return (
    <div className="myibloov-container">
      <div>
        <Navbar />
      </div>
      <section className="myibloov">
        <div
          className="myibloov-nav-container row mt-3"
          onClick={() => toggleDropdownOptionHandler("")}
        >
          <div className="myibloov-nav-first">
            <div className="myibloov-nav-header">My iBloov</div>
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
                    <div>{myEvents ? myEvents.length : ""}</div>
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
                    <div>4</div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="sort-container">
                <DropDown
                  toggleDropdownOption={toggleDropdownOptionHandler}
                  showDropDown={showDropDown}
                />
              </div>
            </div>
            <div
              className="row mt-2 my-created-event"
              onClick={() => toggleDropdownOptionHandler("")}
            >
              {selectedTab === "event" ? (
                <Fragment>
                  {myCreatedEvent ? myEvents : attendingEvents}
                </Fragment>
              ) : (
                <PromotedEventCard />
              )}
            </div>
          </Fragment>
        ) : (
          <Fragment onClick={() => toggleDropdownOptionHandler("")}>
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

export default Myibloov;
