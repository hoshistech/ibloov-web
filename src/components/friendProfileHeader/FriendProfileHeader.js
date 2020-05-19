import React from "react";

import passport from "../../assets/images/passport.jpg";
import location from "../../assets/images/location.png";

import "./FriendProfileHeader.css";
import Button from "../button/Button";
const FriendProfileHeader = (props) => {
  return (
    <div className="row friend-profile-info">
      <div className="col-md-4">
        <img src={passport} className="friend-user-image" alt="card" />
      </div>
      <div className="col-md-6 friend-details">
        <h3 className="friend-name font-bold">Damilola Adekoya</h3>
        <p className="friend-profile mb-2">
          Product designer, Party Planner, Event Promoter
        </p>
        <div className="mb-2">
          <img src={location} className="" alt="card" />
          <span className="friend-profile">Akoka, Lagos</span>
        </div>
        <div className="row friend-follow-stat-container">
          <div className="row friend-follow-stat mb-2 mr-3">
            <div className="mr-2">
              <p className="follow-number">1200</p>
              <span className="friend-profile">followers</span>
            </div>
            <div className="ml-2">
              <p className="follow-number">200</p>
              <span className="friend-profile">following</span>
            </div>
          </div>

          <div className="friend-follow-btn-container">
            <Button
              customClassName="friend-follow-btn bold-600"
              //   onClick={handleLogin}
              //   disabled={!formState.formIsValid}
            >
              following
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FriendProfileHeader;
