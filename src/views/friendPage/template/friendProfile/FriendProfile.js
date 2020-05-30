import React from "react";
import PropTypes from "prop-types";

import SideOverLayContainer from "../../../../components/sideOverLayContainer/SideOverLayContainer";
import FriendProfileHeader from "../../../../components/friendProfileHeader/FriendProfileHeader";

import "./FriendProfile.css";
import FriendProfileCard from "./templates/friendProfileCard/FriendProfileCard";

const FriendProfile = (props) => {
  const {
    openProfile,
    setOpenProfile,
    user,
    handleFollowUser,
    isFollowingAuthor,
  } = props;

  if (user.local) {
    user.name = `${user.local.firstName} ${user.local.lastName}`;
  }

  return (
    <div>
      <SideOverLayContainer
        openSide={openProfile}
        customClassName="friend-profile-side"
        toggleOpenSide={setOpenProfile}
      >
        <FriendProfileHeader
          user={user}
          handleFollowUser={handleFollowUser}
          isFollowingAuthor={isFollowingAuthor}
        />
        <section className="friend-profile-section">
          <h3 className="friend-profile-title">EVENTS CREATED</h3>
          <div className="friend-profile-card-wrapper">
            <FriendProfileCard />
            <FriendProfileCard />
            <FriendProfileCard />
            <FriendProfileCard />
          </div>
        </section>
      </SideOverLayContainer>
    </div>
  );
};

FriendProfile.propTypes = {};

export default FriendProfile;
