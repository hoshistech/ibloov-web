import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavbarJombotron from "../../components/navbarJombotron/NavbarJombotron";
import Card from "../../components/card/Card";
import FilterBar from "../../components/filterbar/FilterBar";

import "./SearchEvent.css";
import Pagination from "../../components/pagination/Pagination";
import {
  fetchLiveEvents,
  filterByCategory,
  filterByLocation
} from "../homepage/homePage.action";
import Loading from "../../components/loadingIndicator/Loading";
import { useLocation } from "react-router-dom";

const SearchEvent = props => {
  const { events, filteredEvents } = useSelector(state => state.allEvents);

  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchLiveEvents());
    if (location.state) {
      const event = { target: { value: location.state.category } };
      setCategory(location.state.category);
      filterCategory(event);
    }
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
    } else {
      eventList = null;
    }
  }
  return (
    <Fragment>
      <NavbarJombotron
        headerTitle="Search Anything"
        headerDescription="Search for any event according to category and location"
      />
      <FilterBar
        selectedCategory={filterCategory}
        searchEventHandler={filterLocation}
        selectedValue={category}
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

export default SearchEvent;
