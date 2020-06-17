import React from "react";
import passport from "../../assets/images/passport.jpg";

import "./FriendSmallCard.css";
import ProgressiveImage from "../progressiveImage/ProgressiveImage";
import avatarPlaceHolder from "../../assets/images/profile_placeholder_small.gif";

const FriendSmallCard = (props) => {
  const { name, avatar, user, removeCollaborator, type } = props;
  return (
    <div className="row friend-small-card">
      <div className="mr-1">
        <ProgressiveImage
          src={avatar ? avatar : avatarPlaceHolder}
          customClass="view-event-profile-img"
          placeholder=""
          alt="card"
        />
      </div>
      <p>{name}</p>
      <span
        onClick={() => removeCollaborator(user, type)}
        className="remove-friend-icon"
      >
        ×
      </span>
    </div>
  );
};

export default FriendSmallCard;
