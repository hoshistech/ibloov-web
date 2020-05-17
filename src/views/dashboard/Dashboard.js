import React, { Fragment } from "react";

import Navbar from "../../components/navbar/Navbar";

import "./Dashboard.css";
import Card from "../../components/card/Card";
import DashboardJumbotron from "../../components/dashboardJumbotron/DashboardJumbotron";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/loadingIndicator/Loading";
import { fetchEvents } from "../homepage/homePage.action";

const Dashboard = (props) => {
  const { user } = useSelector((state) => state.login);
  const events = useSelector((state) => state.allEvents.events);

  let popularEvents = <Loading />;
  let selectedEvent;
  if (events) {
    selectedEvent = events[3];

    popularEvents = events.slice(0, 6).map((event, index) => {
      return (
        <Card
          key={event._id}
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

  return (
    <Fragment>
      <Navbar />
      <section className="dashboard">
        <DashboardJumbotron user={user} event={selectedEvent} />
        <div className="mt-4">
          <div className="second-row-tab">
            <h5>SUGGESTED EVENTS</h5>
            <div className="row suggest-event-active">
              <hr /> <hr />
            </div>
          </div>

          <div className="row suggest-event-card">{popularEvents}</div>
        </div>
      </section>
    </Fragment>
  );
};


export default Dashboard;
