import React, { useState } from "react";
import PropTypes from "prop-types";

import "./CreateGroup.css";
import GroupDescription from "./templates/GroupDescription";
import CreateGroupSubmitBtn from "./templates/CreateGroupSubmitBtn";

const CreateGroup = props => {
  const [formCount, setFormCount] = useState(1);
  const [groupName, setGroupName] = useState("");

  const { createGroupHandler } = props;

  const inputChangeHandler = e => {
    const value = e.target.value;
    setGroupName(value);
  };

  return (
    <section className="mt-3 create-group">
      <hr />
      <div className="row createvent-container">
        <div className="col-md-auto create-event-first-row">
          <div className="step-number-row">
            <div className="step-container">
              <div
                className={
                  formCount === 1
                    ? "step-number-circle active"
                    : "step-number-circle"
                }
              >
                <div>
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-auto create-group-form">
            <form>
              <div className={formCount === 1 ? "show-question" : "question"}>
                <p>step {formCount}</p>
                <GroupDescription
                  value={groupName}
                  onInputChangeHandler={inputChangeHandler}
                />
              </div>
              <div className={formCount === 2 ? "show-question" : "question"}>
                <p>step {formCount}</p>
                second step
              </div>
              <CreateGroupSubmitBtn
                submitEventHandler={createGroupHandler}
                formIsValid={groupName !== ""}
                groupName={groupName}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

CreateGroup.propTypes = {};

export default CreateGroup;
