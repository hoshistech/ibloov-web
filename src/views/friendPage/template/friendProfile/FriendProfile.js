import React from "react";

import SideOverLayContainer from "../../../../components/sideOverLayContainer/SideOverLayContainer";
import FriendProfileHeader from "../../../../components/friendProfileHeader/FriendProfileHeader";

import "./FriendProfile.css";
import FriendProfileCard from "./templates/friendProfileCard/FriendProfileCard";
import { useSelector } from "react-redux";
import Loading from "../../../../components/loadingIndicator/Loading";
import { Link, useHistory } from "react-router-dom";

const FriendProfile = (props) => {
  const {
    openProfile,
    setOpenProfile,
    user,
    handleFollowUser,
    isFollowingAuthor,
  } = props;


  const { userEvents } = useSelector((state) => state.allEvents);
  const { isAuthenticated } = useSelector((state) => state.login);
  if (user.local) {
    user.name = `${user.local.firstName} ${user.local.lastName}`;
  }

  const history = useHistory();

  let myEvents = <Loading />;
 

  if (userEvents) {
    myEvents = userEvents.map((event) => (
      <FriendProfileCard
        key={event._id}
        name={event.name}
        eventId={event._id}
        isPaid={event.isPaid}
        amount={event.amount}
        startDate={event.startDate}
        image={event.images[0]}
      />
    ));
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
          isUserAuthenticated={isAuthenticated}
        />
        <section className="friend-profile-section">
          <h3 className="friend-profile-title">EVENTS CREATED</h3>
          <div className="friend-profile-card-wrapper">
            {isAuthenticated ? (
              myEvents
            ) : (
              <p>
                Please{" "}
                <Link
                  to={{
                    pathname: "/signin",
                    state: { from: history.location.pathname },
                  }}
                >
                  login
                </Link>{" "}
                to view events created by {user.name}.
              </p>
            )}
          </div>
        </section>
      </SideOverLayContainer>
    </div>
  );
};

FriendProfile.propTypes = {};

export default FriendProfile;
