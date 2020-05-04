import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/button/Button";
import FriendSmallCard from "../../../components/friendSmallCard/FriendSmallCard";

const EventCollaborators = (props) => {
  return (
    <div className="collaborators-container">
      <div>
        <div>
          <h5>Invite Collaborators</h5>
          <small>Invite other friends to plan the event</small>
        </div>
        <div className="row">
          <div>
            <FriendSmallCard />
          </div>
          <Button
            customClassName="add-friend-btn ml-2"
            onClick={() => {}}
            btndisabled={false}
          >
            Add
          </Button>
        </div>
      </div>
      <div>
        <div>
          <h5>Invite friends</h5>
          <small>Invite other friends to plan the event</small>
        </div>
        <div className="row">
          <div className="row">
            <FriendSmallCard />
            <FriendSmallCard />
          </div>
          <Button
            customClassName="add-friend-btn ml-2"
            onClick={() => {}}
            btndisabled={false}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

EventCollaborators.propTypes = {};

export default EventCollaborators;
