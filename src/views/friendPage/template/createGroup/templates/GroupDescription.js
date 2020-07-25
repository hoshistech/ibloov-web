import React from "react";
import PropTypes from "prop-types";

const GroupDescription = props => {
  const { value, onInputChangeHandler } = props;
  return (
    <div>
      <div className="create-event-title-header">
        <h5>New group</h5>
        <small>Fill the information below</small>
      </div>
      <div className="mt-4">
        <label for="groupName">Group Name</label>
        <input
          type="text"
          className="form-control auth-input"
          required
          name="groupName"
          value={value}
          id="groupName"
          onChange={onInputChangeHandler}
        />
      </div>
    </div>
  );
};

export default GroupDescription;
