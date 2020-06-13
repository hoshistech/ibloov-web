import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavbarJombotron from "../../components/navbarJombotron/NavbarJombotron";
import Card from "../../components/card/Card";
import FilterBar from "../../components/filterbar/FilterBar";

import "./Event.css";
import Pagination from "../../components/pagination/Pagination";
import { fetchLiveEvents } from "../homepage/homePage.action";
import Loading from "../../components/loadingIndicator/Loading";
const Event = (props) => {
  const events = useSelector((state) => state.allEvents.events);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLiveEvents());
  }, [dispatch]);

  let popularEvents = <Loading />;
  if (events) {
    popularEvents = events.map((event, index) => {
      return (
        <Card
          key={event._id}
          name={event.name}
          eventId={event._id}
          startDate={event.startDate}
          location={event.location}
          event={event}
          splashImage="https://source.unsplash.com/250x182/?concert,party"
          invitees={event.invitees}
        />
      );
    });
  }
  return (
    <Fragment>
      <NavbarJombotron
        headerTitle="Live Events"
        headerDescription="Live events across various locations"
      />
      <FilterBar />

      <section className="row event-card-container">{popularEvents}</section>
      <div>
        <Pagination />
      </div>
    </Fragment>
  );
};

Event.propTypes = {};

export default Event;
