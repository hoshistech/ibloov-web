import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavbarJombotron from "../../components/navbarJombotron/NavbarJombotron";
import Card from "../../components/card/Card";
import FilterBar from "../../components/filterbar/FilterBar";

import "./Event.css";
import Pagination from "../../components/pagination/Pagination";
import {
  fetchLiveEvents,
  filterByCategory,
  filterByLocation
} from "../homepage/homePage.action";
import Loading from "../../components/loadingIndicator/Loading";
const Event = props => {
  const { events, filteredEvents } = useSelector(state => state.allEvents);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLiveEvents());
  }, [dispatch]);

  const filterCategory = e => {
    const selectedCategory = e.target.value;
    if (selectedCategory === "") {
      return;
    }
    dispatch(filterByCategory(selectedCategory));
  };

  const filterLocation = location => {
    dispatch(filterByLocation(location));
  };

  let eventList = <Loading />;
  let popularEvents;
  if (filteredEvents || events) {
    if (filteredEvents === undefined || filteredEvents === null) {
      popularEvents = events;
    } else {
      popularEvents = filteredEvents;
    }
    if (popularEvents) {
      eventList = popularEvents
        .filter(event => event.isPrivate !== true)
        .map((event, index) => {
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
  }
  return (
    <Fragment>
      <NavbarJombotron
        headerTitle="Live Events"
        headerDescription="Live events across various locations"
      />
      <FilterBar
        selectedCategory={filterCategory}
        searchEventHandler={filterLocation}
      />

      {eventList.length === 0 || eventList === null ? (
        <section className="empty-search">
          <div className="text-center">
            <h4>There are no results for this search. </h4>
            <p>Check your spelling for typing errors </p>
            <p>Try searching with short and simple keywords</p>
            <p>
              Try searching more general terms - you can then filter the search
              results
            </p>
          </div>
        </section>
      ) : (
        <>
          <section className="row event-card-container">{eventList}</section>
          <div>
            <Pagination />
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Event;
