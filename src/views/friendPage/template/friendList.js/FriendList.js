import React, { useState } from "react";

import "./FriendList.css";
import ProgressiveImage from "../../../../components/progressiveImage/ProgressiveImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FriendProfile from "../friendProfile/FriendProfile";
import Loading from "../../../../components/loadingIndicator/Loading";
import avatarPlaceHolder from "../../../../assets/images/profile_placeholder_small.gif";

const FriendList = props => {
  const { handleFollowUser, friends } = props;

  const [openFriendProfile, setOpenFriendProfile] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const openFriendProfileHandler = user => {
    setOpenFriendProfile(!openFriendProfile);
    if (!openFriendProfile) {
      setCurrentUser(user);
    }
  };

  let friendData;
  if (friends) {
    friendData = friends.map(friend => (
      <tr
        className="friendlist-table-data"
        key={friend.id}
        onClick={() => openFriendProfileHandler(friend)}
      >
        <td className="friendlist-info-container">
          <div className="friendlist-info">
            <ProgressiveImage
              src={friend.avatar ? friend.avatar : avatarPlaceHolder}
              customClass="friendlist-image"
              alt="card"
            />
            <div className="friendlist-name">
              <p>{friend.fullName}</p>
              <small>optio sit in</small>
            </div>
          </div>
        </td>
        <td className="friendlist-phone-number">{friend.phoneNumber}</td>
        <td className="email">{friend.email}</td>
        <td className="group">
          <div>family</div>
          <div>friend</div>
        </td>
        <td className="action">
          <FontAwesomeIcon className="action-icon" icon="ellipsis-v" />
        </td>
      </tr>
    ));
  }

  return (
    <div className="ibloov-friendlist-container">
      <table className="table">
        <thead>
          <tr className="friendlist-table-header">
            <th scope="">NAME</th>
            <th scope="">PHONE</th>
            <th className="email" scope="col">
              EMAIL
            </th>
            <th className="group" scope="col">
              GROUPS
            </th>
            <th className="action" scope="col"></th>
          </tr>
        </thead>
        <tbody>{friendData}</tbody>
      </table>
      <FriendProfile
        openProfile={openFriendProfile}
        setOpenProfile={openFriendProfileHandler}
        user={currentUser}
        handleFollowUser={handleFollowUser}
      />
    </div>
  );
};

export default FriendList;
