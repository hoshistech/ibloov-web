import React, { useState } from "react";
import PropTypes from "prop-types";

import "./CreateEvent.css";
import { Link } from "react-router-dom";

import "./CreateEvent.css";
import Button from "../../components/button/Button";
import EventType from "./templates/EventType";
import EventDescription from "./templates/EventDescription";

const CreateEvent = (props) => {
  const [formCount, setFormCount] = useState(2);

  const nextQuestionHandler = (e) => {
    e.preventDefault();
    if (formCount === 5) {
      setFormCount(5);
    } else {
      setFormCount(formCount + 1);
    }
  };

  const previousQuestionHandler = (e) => {
    e.preventDefault();
    if (formCount === 1) {
      setFormCount(1);
    } else {
      setFormCount(formCount - 1);
    }
  };

  return (
    <section className="mt-3">
      <div className="row createvent-container">
        <div className="col-md-auto create-event-first-row">
          <div className="step-number-row">
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
            <div
              className={
                formCount === 2
                  ? "step-number-circle active"
                  : "step-number-circle"
              }
            >
              <div>
                <p>2</p>
              </div>
            </div>
            <div
              className={
                formCount === 3
                  ? "step-number-circle active"
                  : "step-number-circle"
              }
            >
              <div>
                <p>3</p>
              </div>
            </div>
            <div
              className={
                formCount === 4
                  ? "step-number-circle active"
                  : "step-number-circle"
              }
            >
              <div>
                <p>4</p>
              </div>
            </div>
            <div
              className={
                formCount === 5
                  ? "step-number-circle active"
                  : "step-number-circle"
              }
            >
              <div>
                <p>5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-auto">
            <form>
              <div className={formCount === 1 ? "show-question" : "question"}>
                <p>step {formCount}</p>
                <EventType />
              </div>
              <div className={formCount === 2 ? "show-question" : "question"}>
                <p>step {formCount}</p>
                <EventDescription />
              </div>
              <div className={formCount === 3 ? "show-question" : "question"}>
                <p>step {formCount}</p>
                when will the event happen
              </div>
              <div className={formCount === 4 ? "show-question" : "question"}>
                <p>step {formCount}</p>
                restriction to the event
              </div>
              <div className={formCount === 5 ? "show-question" : "question"}>
                submitEvent
              </div>
              <div className="myibloov-create-button-container">
                <Button
                  customClassName="mybloov-create-event-btn-2  bold-600"
                  onClick={previousQuestionHandler}
                  //   disabled={!formState.formIsValid}
                >
                  cancel
                </Button>
                <Button
                  customClassName="mybloov-create-event-btn-2  bold-600"
                  onClick={nextQuestionHandler}
                  //   disabled={!formState.formIsValid}
                >
                  Next
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

CreateEvent.propTypes = {};

export default CreateEvent;