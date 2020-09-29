import React from "react";

import ProgressiveImage from "../../../../../components/progressiveImage/ProgressiveImage";
import avatarPlaceHolder from "../../../../../assets/images/profile_placeholder_small.gif";

const FriendRow = props => {
  const { friend, selectFriend, toggleCheckBox } = props;

  return (
    <div>
      <div className="row add-friend-list-row mb-2 pl-3">
        <ProgressiveImage
          src={friend.avatar ? friend.avatar : avatarPlaceHolder}
          //   src={avatarPlaceHolder}
          customClass="nav-user-image mr-2"
          placeholder=""
          alt="card"
        />
        <div className="align-self-center add-friend-name mr-3">
          {friend.fullName}
        </div>
        <div
          className="align-self-center"
          onClick={e => selectFriend(e, friend.id)}
        >
          <input type="checkbox" className="addFriendCheck" id={friend.id} />
        </div>
      </div>
    </div>
  );
};

export default FriendRow;
