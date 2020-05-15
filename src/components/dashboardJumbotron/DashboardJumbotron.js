import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/navbar/Navbar";
import passport from "../../assets/images/passport.jpg";
import Button from "../../components/button/Button";

import "./DashboardJumbotron.css";

const DashboardJumbotron = (props) => {
  const { user, event } = props;

  let image = "https://source.unsplash.com/900x600/?birthday&fm=png";

  if (event) {
    if (typeof event.images[0] !== "undefined") {
      image = event.images[0].url;
    }
  }

  

  const { firstName, lastName } = user;
  return (
    <div className="row dashboard-first-row">
      {/* <img src={image} alt="popular event" className="dashboard-image" /> */}
      <div className="col-md-4.3 dashboard-profile">
        <div className="row">
          <div className="col-md-4 dashboard-image-container mb-3">
            <img
              src={passport}
              className="friend-user-image dashboard-profile-image"
              alt="card"
            />
          </div>
          <div className="col-md-6 dashboard-user-info">
            <div className="mb-3 dashboard-profile-name">
              <h5>{`${firstName} ${lastName}`}</h5>
              <p>Founder and CTO at iBloov</p>
              <p>Lagos, Nigeria</p>
            </div>
            <div className="row dashboard-stat-container">
              <div className="mr-3">
                <p>102</p>
                <p className="stat-label">Friends</p>
              </div>
              <div className="mr-3">
                <p>23</p>
                <p className="stat-label">Events Created</p>
              </div>
              <div className="mr-3">
                <p>21</p>
                <p className="stat-label">Wishlists Created</p>
              </div>
              <div className="">
                <p>13</p>
                <p className="stat-label">FundMe Created</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4.3 mt-3 dashboard-welcome-container">
        <div className="dashboard-profile-name">
          <h2>Welcome to</h2>
          <span>ibloov</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
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
    </div>
  );
};

DashboardJumbotron.propTypes = {
  user: PropTypes.object.isRequired,
};

export default DashboardJumbotron;
