import React from "react";
import PropTypes from "prop-types";

const EventRestriction = (props) => {
  return (
    <div className="row">
      <div>
        <div>
          <h5>Any restriction to the event?</h5>
          <small>Set conditions to be met before attending the event</small>
        </div>
        <div className="restrict-options">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="eventFee"
              id="eventFree"
              value="free"
              // checked
              onChange={onToggleEventFeeHandler}
            />
            <label className="form-check-label" for="exampleRadios1">
              Free
            </label>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h5>Invite Collaborators</h5>
          <small>Invite other friends to plan the event</small>
        </div>
      </div>
    </div>
  );
};

EventRestriction.propTypes = {};

export default EventRestriction;
