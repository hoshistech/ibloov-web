import React, {  useReducer, useCallback, useState } from "react";

import "./CreateEvent.css";

import "./CreateEvent.css";
import Button from "../../components/button/Button";
import EventType from "./templates/EventType";
import EventDescription from "./templates/EventDescription";
import EventTime from "./templates/EventTime";
import EventRestriction from "./templates/EventRestriction";
import CreateEventSubmitBtn from "./templates/CreateEventSubmitBtn";
import { formReducer, FORM_INPUT_UPDATE } from "../../utils/formReducer";
import { useDispatch } from "react-redux";
import { createEvent } from "./createEvent.action";

const CreateEvent = (props) => {
  const [formCount, setFormCount] = useState(3);
  const [EventDetail, setEventDetail] = useState("");
  const [eventTime, setEventTime] = useState();

  const dispatch = useDispatch();

  const initilaState = {
    inputValues: {
      eventTitle: "",
      eventCode: "",
      location: "",
    },
    inputValidities: {
      eventTitle: false,
      eventCode: false,
      location: false,
    },
    formIsValid: false,
  };

  const [formState, dispatchFormState] = useReducer(formReducer, initilaState);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  const nextQuestionHandler = (e) => {
    e.preventDefault();
    if (formCount === 4) {
      setFormCount(4);
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

  const eventPriceHandler = (e) => {
    console.log(e.target.value);
  };

  const setEventDateHandler = useCallback(
    (startDate, endDate, isPrivate) => {
      setEventTime({ startDate, endDate, isPrivate });
    },
    [setEventTime]
  );

  const onsubmitEventHandler = () => {
    const newEvent = {
      name: formState.inputValues.eventTitle,
      eventCode: formState.inputValues.eventCode,
      category: "concert",
      address: formState.inputValues.location,
      ...eventTime,
    };

    console.log(222, formState.inputValues);
    console.log(555, eventTime);
    dispatch(createEvent(newEvent));
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
                <EventDescription inputChangeHandler={inputChangeHandler} />
              </div>
              <div className={formCount === 3 ? "show-question" : "question"}>
                <p>step {formCount}</p>
                <EventTime setEventDate={setEventDateHandler} />
              </div>
              <div className={formCount === 4 ? "show-question" : "question"}>
                <p>step {formCount}</p>
                <EventRestriction />
              </div>
              <CreateEventSubmitBtn
                nextQuestionHandler={nextQuestionHandler}
                previousQuestionHandler={previousQuestionHandler}
                formCount={formCount}
                submitEventHandler={onsubmitEventHandler}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


export default CreateEvent;
