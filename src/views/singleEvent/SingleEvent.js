import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SingleEventHeader from "./templates/singleEventHeader/SingleEventHeader";

import "./SingleEvent.css";
import SingleComment from "../../components/singleComment/SingleComment";
import CreateComment from "../../components/createComment/CreateComment";
import ViewEventProfileCard from "../../components/viewEventProfileCard/ViewEventProfileCard";
import Button from "../../components/button/Button";
import HashTag from "../../components/hashTag/HashTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton
} from "react-share";
import {
  getEvent,
  followEvent,
  bloovEvent,
  likeEvent
} from "./singleEvent.action";
import Loading from "../../components/loadingIndicator/Loading";
import EventPay from "./templates/eventPay/EventPay";
import SideOverLayContainer from "../../components/sideOverLayContainer/SideOverLayContainer";
import FriendProfile from "../friendPage/template/friendProfile/FriendProfile";
import EventMap from "./templates/eventMap/EventMap";
import { followUser, getUserFollowing } from "../friendPage/friendPage.action";
import { getUserEvents } from "../homepage/homePage.action";
import Stripe from "./stripe/Stripe";
import Checkoutt from "./stripe/Checkout2";
import ApplePay from "./stripe/ApplePay";
import IbanPay from "./stripe/IbanPay";
import Checkout from "./stripe/Checkout";

const SingleEvent = props => {
  const [openPay, setOpenPay] = useState(false);
  const [openFriendProfile, setOpenFriendProfile] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [like, setLike] = useState();

  const { eventId } = useParams();

  const dispatch = useDispatch();

  const { event, eventFollowers, eventLikes } = useSelector(
    state => state.singleEvent
  );

  // const { _id: authUser } = useSelector((state) => state.login.user);
  const authenticated = useSelector(state => state.login.user);

  let authUser;

  const { userFollowing } = useSelector(state => state.friend);

  let foundEvent;
  let startDate;
  let eventTags;
  let isFollowingAuthor;
  let isUserFollowingEvent;
  let isUserAttendingEvent;
  let attendingEvents;

  if (authenticated) {
    authUser = authenticated._id;
  }

  if (event) {
    foundEvent = event;

    startDate = moment(foundEvent.startDate).format("MMMM Do, YYYY @ h:mm a");

    attendingEvents = event.invitees.filter(event => event.accepted === "YES");

    if (foundEvent.eventCode.length > 0) {
      eventTags = foundEvent.eventCode[0]
        .split(", ")
        .map((code, index) => <HashTag key={index} tagValue={code} />);
    }
    if (authenticated && eventFollowers) {
      isUserFollowingEvent = eventFollowers.find(
        user => user.userId._id === authUser || user.userId === authUser
      );
      isUserAttendingEvent = foundEvent.invitees.find(
        user => user.accepted === "YES" && user.userId._id === authUser
      );

      dispatch(getUserEvents(event.userId._id));
    }

    if (userFollowing) {
      isFollowingAuthor = userFollowing.find(
        user => user.id === event.userId._id
      );
    }
    // setCurrentUser(foundEvent.userId);
  }

  useEffect(() => {
    dispatch(getEvent(eventId));
    if (authenticated) {
      dispatch(getUserFollowing());
    }
  }, [dispatch, eventId, authenticated]);

  const closePayView = () => {
    setOpenPay(false);
  };

  const togglePayView = () => {
    setOpenPay(!openPay);
  };

  const openFriendProfileHandler = user => {
    setOpenFriendProfile(!openFriendProfile);
    // if (!openFriendProfile) {
    //   setCurrentUser(user);
    // }
  };

  const handleFollowUserHandler = userId => {
    dispatch(followUser(userId));
  };

  const followEventHandler = () => {
    dispatch(followEvent(eventId));
  };

  const bloovEventHandler = () => {
    dispatch(bloovEvent(eventId));
  };

  const likeEventHandler = () => {
    dispatch(likeEvent(eventId));
  };

  const shareText = "Hey, checkout this awesome event coming up:";
  const eventUrl = window.location.href;
  return (
    <Fragment>
      <Navbar />
      <section>
        <SingleEventHeader category={event ? foundEvent.category : ""} />

        {!event ? (
          <div className="single-event-loading">
            <Loading />
          </div>
        ) : (
          <div className="row single-event-body">
            <div className="col-md-8 single-event-first-col">
              <section>
                <div>
                  <div className="single-event-name-container">
                    <h1 className="single-event-name">{foundEvent.name}</h1>
                    <span>{foundEvent.location.address}</span>
                    <div className="event-start-date">{startDate}</div>
                  </div>
                  <div className="single-event-price">
                    {foundEvent.isPaid && authenticated ? (
                      <div>
                        <p>
                          {foundEvent.currency} {foundEvent.amount}
                          <Button
                            btndisabled={false}
                            onClick={togglePayView}
                            customClassName="single-event-pay-btn"
                          >
                            PAY
                          </Button>
                        </p>
                        {/* <Checkoutt
                          name={"Your Company Name"}
                          description={"Item that you sold"}
                          amount={4.99}
                        /> */}
                      </div>
                    ) : (
                      "FREE"
                    )}
                  </div>
                  <div>
                    <h3 className="single-event-header-title mt-5">
                      Description
                    </h3>
                    <div className="single-event-description">
                      {foundEvent.description
                        ? foundEvent.description
                        : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore na aliquyam erat, sed diam voluptua. "}
                    </div>
                  </div>
                </div>
                {/* <div className="mt-3 mb-3">
                  <h4 className="single-event-header-title">
                    How can I contact the organizer for any question?
                  </h4>
                  <div className="single-event-description">
                    Please fill the form below to contact the organizer
                  </div>
                </div> */}
              </section>
              <section>
                <div>
                  <h5 className="single-event-header-title mt-5">
                    Comments<span>(1)</span>
                  </h5>
                  <div className="mt-3 mb-3">
                    <SingleComment />
                  </div>
                  <div className="mt-3 mb-3">
                    <CreateComment />
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-4">
              <div>
                <ViewEventProfileCard
                  user={foundEvent.userId}
                  openFriendProfile={openFriendProfileHandler}
                  authUser={authUser}
                  handleFollowEvent={followEventHandler}
                  handleBloovEvent={bloovEventHandler}
                  isFollowing={isUserFollowingEvent}
                  isUserAuthenticated={authenticated ? true : false}
                  numberAttendingEvents={attendingEvents.length}
                  numberEventLikes={eventLikes.length}
                  isAttending={isUserAttendingEvent}
                  handleLikeEvent={likeEventHandler}
                />
              </div>
              <div className="mt-5 mb-3 single-event-date-container">
                {/* <h4 className="single-event-header-title">Dates and Time</h4>
                <p>
                  Start: <span className="event-start-date">{startDate}</span>
                </p> */}
                <div>
                  <Button
                    btndisabled={false}
                    onClick={() => {}}
                    customClassName="export-to-calendar-btn"
                  >
                    Export to Calendar
                  </Button>
                </div>
              </div>
              <div className="mt-5 mb-3 single-event-second-col-container">
                <h4 className="single-event-header-title">Event Location</h4>
                <div>
                  <EventMap />
                </div>
                {/* <div>{foundEvent.location.address}</div> */}
              </div>
              <div className="mt-5 mb-3 single-event-second-col-container">
                <h4 className="single-event-header-title">Tags</h4>
                <div className="single-comment-hashtag-container">
                  {eventTags ? eventTags : "No tags for this event"}
                </div>
              </div>
              <div className="mt-5 mb-3 single-event-second-col-container">
                <h4 className="single-event-header-title">
                  Share with friends
                </h4>
                <div className="row share-icon-container">
                  <FacebookShareButton
                    className="share-icon-facebook"
                    quote={shareText}
                    url={eventUrl}
                  >
                    <FontAwesomeIcon
                      className="share-icon"
                      icon={["fab", "facebook-f"]}
                    />
                  </FacebookShareButton>

                  <TwitterShareButton
                    className="share-icon-twitter"
                    quote={shareText}
                    url={eventUrl}
                  >
                    <FontAwesomeIcon
                      className="share-icon"
                      icon={["fab", "twitter"]}
                    />
                  </TwitterShareButton>
                  <LinkedinShareButton
                    className="share-icon-linkedin"
                    quote={shareText}
                    url={eventUrl}
                  >
                    <FontAwesomeIcon
                      className="share-icon"
                      icon={["fab", "linkedin-in"]}
                    />
                  </LinkedinShareButton>
                </div>
              </div>
            </div>
          </div>
        )}

        <Fragment>
          {authUser ? (
            <SideOverLayContainer
              openSide={openPay}
              customClassName="event-pay-side"
              toggleOpenSide={() => setOpenPay(!openPay)}
            >
              <div className="event-pay-form-container">
                {/* <EventPay
                  closePayView={closePayView}
                  eventPrice={foundEvent ? foundEvent.amount : ""}
                  currency={foundEvent ? foundEvent.currency : ""}
                  eventId={foundEvent ? foundEvent._id : ""}
                /> */}
                {/* <Stripe /> */}
                <Checkout />
                {/* <IbanPay /> */}
                {/* <ApplePay /> */}
              </div>
            </SideOverLayContainer>
          ) : (
            ""
          )}
          <FriendProfile
            openProfile={openFriendProfile}
            setOpenProfile={openFriendProfileHandler}
            user={foundEvent ? foundEvent.userId : ""}
            handleFollowUser={handleFollowUserHandler}
            isFollowingAuthor={isFollowingAuthor ? true : false}
            isUserAuthenticated={authenticated ? true : false}
            // userEvents={}
          />
        </Fragment>
      </section>
    </Fragment>
  );
};

SingleEvent.propTypes = {};

export default SingleEvent;
