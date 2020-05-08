import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

import Navbar from "../../components/navbar/Navbar";
import passport from "../../assets/images/passport.jpg";
import Button from "../../components/button/Button";

import "./Dashboard.css";
import Card from "../../components/card/Card";
import DashboardJumbotron from "../../components/dashboardJumbotron/DashboardJumbotron";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/loadingIndicator/Loading";
import { fetchEvents } from "../homepage/homePage.action";

const Dashboard = (props) => {
  const { user } = useSelector((state) => state.login);
  const events = useSelector((state) => state.allEvents.events);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  let popularEvents = <Loading />;
  if (events) {
    popularEvents = events.slice(0, 5).map((event, index) => {
      return (
        <Card
          key={event._id}
          name={event.name}
          startDate={event.startDate}
          location={event.location}
        />
      );
    });
  }

  return (
    <Fragment>
      <Navbar />
      <section className="dashboard">
        <DashboardJumbotron user={user} />
        <div className="mt-4">
          <h5>SUGGESTED EVENTS</h5>

          <div className="row suggest-event-card">
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
            {popularEvents}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
