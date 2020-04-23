import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Navbar from "../../components/navbar/Navbar";
import passport from "../../assets/images/passport.jpg";
import Button from "../../components/button/Button";

import "./Dashboard.css";
import Card from "../../components/card/Card";
import DashboardJumbotron from "../../components/dashboardJumbotron/DashboardJumbotron";

const Dashboard = (props) => {
 

  return (
    <Fragment>
      <Navbar />
      <section className="dashboard">
        <DashboardJumbotron />
        <div className="mt-4">
          <h5>SUGGESTED EVENTS</h5>

          <div className="row suggest-event-card">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
