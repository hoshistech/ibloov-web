import React, { Fragment, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import passport from "../../assets/images/passport.jpg";
import "./ViewEventProfileCard.css";
import Button from "../button/Button";
import avatarPlaceHolder from "../../assets/images/profile_placeholder_small.gif";
import ProgressiveImage from "../progressiveImage/ProgressiveImage";
import { useHistory } from "react-router-dom";

const ViewEventProfileCard = (props) => {
  const {
    user,
    openFriendProfile,
    authUser,
    handleFollowEvent,
    isAttending,
    isFollowing,
    isUserAuthenticated,
    numberAttendingEvents,
    numberEventLikes,
    handleBloovEvent,
    handleLikeEvent,
  } = props;


  const history = useHistory();
  let name;
  let profileImage;
  let eventUserId;

  const toggleFollowingEvent = () => {
    if (!isUserAuthenticated) {
      history.push({
        pathname: "/signin",
        state: { from: history.location.pathname },
      });
      return;
    }
    handleFollowEvent();
  };

  const bloovEvent = () => {
    if (!isUserAuthenticated) {
      history.push({
        pathname: "/signin",
        state: { from: history.location.pathname },
      });
      return;
    }
    handleBloovEvent();
  };

  useEffect(() => {}, [numberEventLikes]);

  if (user) {
    const firstName = user.local.firstName ? user.local.firstName : "";
    const lastName = user.local.lastName ? user.local.lastName : "";
    eventUserId = user._id;
    name = `${firstName} ${lastName}`;
    profileImage = user.avatar ? user.avatar : avatarPlaceHolder;
  }

  let followButton = "Follow Event";
  if (isFollowing) {
    followButton = "Unfollow Event";
  }

  let bloovButton = "Bloov Event";

  return (
    <div>
      <div className="view-event-profile-container prof-cont">
        {eventUserId === authUser ? (
          <div className="single-event-edit">EDIT EVENT</div>
        ) : (
          <div className="row view-event-profile-container">
            <div className="mr-2">
              <ProgressiveImage
                src={profileImage}
                customClass="view-event-profile-img"
                alt="card"
              />
            </div>
            <div className="view-event-profile-detail">
              <p>{name}</p>
              {isUserAuthenticated ? (
                <small onClick={openFriendProfile}>View Profile</small>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
      <div className="mt-3 view-event-stat-container">
        <div className="view-event-profile-button-container">
          {eventUserId === authUser ? (
            ""
          ) : (
            <Fragment>
              {isAttending ? (
                <div className="text-center">Attendance Confirmed</div>
              ) : (
                <Button
                  customClassName="view-event-btn bloove-event-now-btn"
                  onClick={bloovEvent}
                  btndisabled={false}
                >
                  {/* {isUserAuthenticated ? bloovButton : "Bloov Event"} */}
                  Bloov Event
                </Button>
              )}
              <Button
                customClassName="mt-2 view-event-btn bloove-event-follow-btn"
                onClick={toggleFollowingEvent}
                btndisabled={false}
              >
                {isUserAuthenticated ? followButton : "Follow Event"}
              </Button>
            </Fragment>
          )}

          <Button
            customClassName="mt-2 view-event-btn bloove-promote-event-btn"
            onClick={() => {}}
            btndisabled={false}
          >
            Promote Event
          </Button>
        </div>
        <div>
          <div className="mt-4 attending-event-container">
            {numberAttendingEvents < 1 ? (
              ""
            ) : (
              <Fragment>
                <div className="attending-event">
                  <img src={passport} className="stat-image" alt="card" />
                  <img src={passport} className="stat-image" alt="card" />
                  <img src={passport} className="stat-image" alt="card" />
                </div>
                <div className="ml-4 mr-4 number-attending">
                  <p className="no-margin-p">+{numberAttendingEvents} going</p>
                </div>
              </Fragment>
            )}

            <div className="view-event-card-icon-container">
              <FontAwesomeIcon
                className="view-event-card-icon heart"
                icon="heart"
                onClick={handleLikeEvent}
              />
              <span className="no-margin-p">{numberEventLikes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ViewEventProfileCard.propTypes = {
  user: PropTypes.object,
};

export default ViewEventProfileCard;
