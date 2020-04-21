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
        {/* <div className="row dashboard-first-row">
          <div className="col-md-4.3 dashboard-profile">
            <div className="row">
              <div className="col-md-6 dashboard-image-container mb-3">
                <img
                  src={passport}
                  className="friend-user-image dashboard-profile-image"
                  alt="card"
                />
              </div>
              <div className="col-md-6 dashboard-user-info">
                <div className="mb-3 dashboard-profile-name">
                  <h5>Damilola Adekoya</h5>
                  <p>Founder and CTO at iBloov</p>
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="row dashboard-stat-container">
                  <div className="mr-3">
                    <p>102</p>
                    <span>Friends</span>
                  </div>
                  <div className="mr-3">
                    <p>23</p>
                    <span>Events Created</span>
                  </div>
                  <div className="mr-3">
                    <p>21</p>
                    <span>Wishlists Created</span>
                  </div>
                  <div className="">
                    <p>13</p>
                    <span>FundMe Created</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3 dashboard-welcome-container">
            <div className="dashboard-profile-name">
              <h5>Welcome to ibloov</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="mt-3">
              <Button
                customClassName="dashboard-bloov-btn bold-600"
                // onClick={handleLogin}
                // disabled={!formState.formIsValid}
              >
                BLOOV NOW
              </Button>
            </div>
          </div>
        </div> */}
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
