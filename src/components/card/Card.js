import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

import "./Card.css";
import { Link } from "react-router-dom";
import { genRandomNumber } from "../../utils/helper";
import ProgressiveImage from "../progressiveImage/ProgressiveImage";
import avatarPlaceHolder from "../../assets/images/profile_placeholder_small.gif";

const Card = props => {
  const {
    name,
    startDate,
    location,
    eventId,
    event,
    myEvent,
    invitees
  } = props;
  const { category } = event;

  let image = "";

  const randomImage = () => {
    // const randomNumber = Math.floor(Math.random() * Math.floor(6));
    const randomNumber = genRandomNumber(0, 6);
    const image = [
      "https://source.unsplash.com/755x182/?concert",
      "https://source.unsplash.com/755x182/?club",
      "https://source.unsplash.com/755x182/?party",
      "https://source.unsplash.com/755x182/?show",
      "https://source.unsplash.com/755x182/?drinks",
      "https://source.unsplash.com/755x182/?beach"
    ];
    return image[randomNumber];
  };

  const randomAteendingImage = () => {
    // const randomNumber = Math.floor(Math.random() * Math.floor(6));
    const randomNumber = genRandomNumber(0, 7);
    const image = [
      "https://source.unsplash.com/40x40/?lady",
      "https://source.unsplash.com/40x40/?girl",
      "https://source.unsplash.com/40x40/?women",
      "https://source.unsplash.com/40x40/?guy",
      "https://source.unsplash.com/40x40/?man",
      "https://source.unsplash.com/40x40/?boy",
      "https://source.unsplash.com/40x40/blackwomen"
    ];
    // return image[randomNumber];
    return [image[randomNumber], image[genRandomNumber(0, randomNumber)]];
  };

  const randomAttendes = invitees.length;
  const invite = invitees;

  const smallImage = randomAteendingImage();
  image = randomImage();

  if (typeof event.images[0] !== "undefined") {
    image = event.images[0].url;
  }


  const month = moment(startDate).format("MMM");
  const day = moment(startDate).format("D");

  let showInvite = "";

  if (invitees.length > 0) {
    showInvite = invitees.slice(0, 3).map((user, index) => {
      if (index === 3) {
        return;
      }
      const avatar = user.userId.avatar;
      return (
        <ProgressiveImage
          src={avatar ? avatar : avatarPlaceHolder}
          customClass="stat-image"
          alt="card"
        />
      );
    });
  }

  return (
    <div className="card-container">
      <Link to={`/event/${eventId}`} className="event-more-details">
        <div className="image-container">
          <img src={image} className="card-image" alt="card" />
          <div className="event-icon-container">
            <div className="card-icon-container">
              <FontAwesomeIcon className="card-icon" icon="share-alt" />
            </div>
            <div className="card-icon-container">
              <FontAwesomeIcon className="card-icon heart" icon="heart" />
            </div>
          </div>
          <p className="image-text-first">{category}</p>
        </div>

        <div className="event-body">
          <div className="event-info">
            <div className="mr-2">
              <p className="text-center card-month">{month.toUpperCase()}</p>
              <p className="card-day">{day || ""}</p>
            </div>
            <div>
              <div className="event-name">
                <p className="bold-600">{name || ""}</p>
              </div>
              <div className="event-card-location">
                <p>
                  <small>{location ? location.address : ""}</small>
                </p>
              </div>
            </div>
          </div>
          {myEvent ? (
            <Link to={`/event/${eventId}`} className="myevent-details">
              See details
            </Link>
          ) : (
            <div className="event-stat mt-2">
              <div className="attending-event-container">
                <div className="attending-event">
                  {showInvite}
                  {/* <ProgressiveImage
                    src={smallImage[0]}
                    customClass="stat-image"
                    alt="card"
                  />
                  <ProgressiveImage
                    src={smallImage}
                    customClass="stat-image"
                    alt="card"
                  />
                  <ProgressiveImage
                    src={smallImage[1]}
                    customClass="stat-image"
                    alt="card"
                  /> */}
                </div>
                {randomAttendes > 0 ? (
                  <div className="ml-4 number-attending">
                    <p>+{randomAttendes}</p>
                    <p>going</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {/* <div className="attend-button">
              <Button
                customClassName="event-button bold-600"
                onClick={() => {}}
                btndisabled={false}
              >
                Bloov
              </Button>
            </div> */}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  eventID: PropTypes.string,
  isPaid: PropTypes.bool,
  amount: PropTypes.number,
  category: PropTypes.string,
  location: PropTypes.object
};

export default Card;
