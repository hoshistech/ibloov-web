import React, { useReducer, useCallback, useState, useEffect } from "react";

import "./CreateEvent.css";

import "./CreateEvent.css";
import Button from "../../components/button/Button";
import EventType from "./templates/EventType";
import EventDescription from "./templates/EventDescription";
import EventTime from "./templates/EventTime";
import EventRestriction from "./templates/EventRestriction";
import CreateEventSubmitBtn from "./templates/CreateEventSubmitBtn";
import { formReducer, FORM_INPUT_UPDATE } from "../../utils/formReducer";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, eventCreateEnd } from "./createEvent.action";
import EventSuccessSideBar from "../../components/eventSuccessSideBar/EventSuccessSideBar";

const CreateEvent = (props) => {
  const [formCount, setFormCount] = useState(3);
  const [EventDetail, setEventDetail] = useState("");
  const [eventTime, setEventTime] = useState();
  const [isCreatedEventSuccess, setIsCreatedEventSuccess] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [eventRestrictions, setEventRestrictions] = useState([]);
  const [notifyMe, setNotifyMe] = useState(false);
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const isEventCreated = useSelector((state) => state.createEvent.success);

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

  const categoryHandler = (category) => {
    setSelectedCategory(category);
  };

  const eventRestrictionsHandler = (restriction) => {
    const currentRestrictions = [...eventRestrictions];

    const check = currentRestrictions.find(
      (restrictionVal) => restrictionVal === restriction
    );

    let updatedRestrictions;

    if (check) {
      updatedRestrictions = currentRestrictions.filter(
        (restrictions) => restrictions !== restriction
      );
    } else {
      updatedRestrictions = [...currentRestrictions, restriction];
    }

    setEventRestrictions(updatedRestrictions);
  };

  const eventNotificationHandler = (e) => {
    const isNotifyMe = e.target.checked;

    setNotifyMe(isNotifyMe);
  };

  const imageUploadHandler = (image) => {
    const formData = new FormData();
    console.log(55, image);
    setImage(image);
  };

  const uplod = () => {
    console.log(55, image);
  };

  const onsubmitEventHandler = async () => {
    const newEvent = {
      name: formState.inputValues.eventTitle,
      eventCode: formState.inputValues.eventCode,
      category: selectedCategory,
      controls: eventRestrictions,
      address: formState.inputValues.location,
      notifyMe: notifyMe,
      ...eventTime,
    };

    console.log(222, formState.inputValues);
    console.log(555, newEvent);

    await dispatch(createEvent(newEvent, image));
    // await eventCreatedSuccesshandler();

    return;
  };

  useEffect(() => {
    eventCreatedSuccesshandler();
  }, [isEventCreated]);

  const eventCreatedSuccesshandler = () => {
    if (isEventCreated) {
      setIsCreatedEventSuccess(true);
      return;
    }
    setIsCreatedEventSuccess(false);
  };

  const closeEventCreatedMessage = (e) => {
    e.preventDefault();
    dispatch(eventCreateEnd());
    setIsCreatedEventSuccess(false);
  };

  return (
    <section className="mt-3">
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
              <span className="vertical-line"></span>
            </div>
            <div className="step-container">
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
              <span className="vertical-line"></span>
            </div>
            <div className="step-container">
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
              <span className="vertical-line"></span>
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
                <EventType categoryHandler={categoryHandler} />
              </div>
              <div className={formCount === 2 ? "show-question" : "question"}>
                <p>step {formCount}</p>
                <EventDescription
                  inputChangeHandler={inputChangeHandler}
                  imageUpload={imageUploadHandler}
                />
              </div>
              <div className={formCount === 3 ? "show-question" : "question"}>
                <p>step {formCount}</p>
                <EventTime setEventDate={setEventDateHandler} />
              </div>
              <div className={formCount === 4 ? "show-question" : "question"}>
                <p>step {formCount}</p>
                <EventRestriction
                  eventRestrictionsHandler={eventRestrictionsHandler}
                  notificationHandler={eventNotificationHandler}
                />
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
      {isEventCreated ? (
        <EventSuccessSideBar
          closeSuccessMessage={closeEventCreatedMessage}
          customClassName={isCreatedEventSuccess ? "show-create-success" : ""}
        />
      ) : (
        ""
      )}
      <Button
        onClick={uplod}
        customClassName="event-success-btn"
        btndisabled={false}
      >
        show event success
      </Button>
    </section>
  );
};

export default CreateEvent;
