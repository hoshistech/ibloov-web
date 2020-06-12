import React, { useReducer, useCallback, useState, useEffect } from "react";

import "./CreateEvent.css";

import "./CreateEvent.css";
import EventType from "./templates/EventType";
import EventDescription from "./templates/EventDescription";
import EventTime from "./templates/EventTime";
import EventRestriction from "./templates/EventRestriction";
import CreateEventSubmitBtn from "./templates/CreateEventSubmitBtn";
import { formReducer, FORM_INPUT_UPDATE } from "../../utils/formReducer";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, eventCreateEnd } from "./createEvent.action";
import EventSuccessSideBar from "../../components/eventSuccessSideBar/EventSuccessSideBar";
import { fetchEvents } from "../homepage/homePage.action";

const CreateEvent = (props) => {
  const [formCount, setFormCount] = useState(1);
  const [eventDetail, setEventDetail] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [isCreatedEventSuccess, setIsCreatedEventSuccess] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [eventRestrictions, setEventRestrictions] = useState([]);
  const [notifyMe, setNotifyMe] = useState(true);
  const [image, setImage] = useState("");
  const [isStepValid, setIsStepValid] = useState(false);
  const [eventPrice, setEventPrice] = useState();
  const [isPrivateEvent, setIsPrivateEvent] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [location, setLocation] = useState("");

  const dispatch = useDispatch();

  const isEventCreated = useSelector((state) => state.createEvent.success);

  const initilaState = {
    inputValues: {
      eventTitle: "",
      eventCode: "",
      eventDetail: "",
    },
    inputValidities: {
      eventTitle: false,
      eventCode: false,
      eventDetail: false,
    },
    formIsValid: true,
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

  const eventPriceHandler = (e) => {};

  const setEventDateHandler = useCallback(
    // (startDate, isPrivate) => {
    (startDate) => {
      // setEventTime({ startDate, isPrivate });
      setEventTime(startDate);
    },
    [setEventTime]
  );

  const isEventPrivateHandler = useCallback(
    (isPrivate) => {
      setIsPrivateEvent(isPrivate);
    },
    [setIsPrivateEvent]
  );

  const isEventPaidHandler = useCallback(
    (isPaid) => {
      setIsPaid(isPaid);
    },
    [setIsPaid]
  );

  const eventPriceDataHandler = useCallback(
    (currency, amount) => {
      setEventPrice({ currency, amount });
    },
    [setEventPrice]
  );

  const categoryHandler = (category) => {
    setSelectedCategory(category);
    setIsStepValid(true);
  };

  // const eventDetailHandler = (e) => {
  //   e.preventDefault();
  //   const value = e.target.value;
  //   setEventDetail(value);
  // };

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
    setImage(image);
  };

  const locationhandler = (address) => {
    setLocation(address);
  };

  const onsubmitEventHandler = async () => {
    const eventTicket = {
      currency: isPaid ? eventPrice.currency : "",
      amount: isPaid ? eventPrice.amount : "",
    };

    const newEvent = {
      name: formState.inputValues.eventTitle,
      eventCode: formState.inputValues.eventCode,
      description: formState.inputValues.eventDetail,
      category: selectedCategory,
      controls: eventRestrictions,
      address: location.address,
      notifyMe: notifyMe,
      ...eventTicket,
      startDate: eventTime,
      isPrivate: isPrivateEvent,
      isPaid,
    };

    await dispatch(createEvent(newEvent, image));

    return;
  };

  useEffect(() => {
    eventCreatedSuccesshandler();
    dispatch(fetchEvents());
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
    window.location.reload();
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
                  pickedLocation={locationhandler}
                />
              </div>
              <div className={formCount === 3 ? "show-question" : "question"}>
                <p>step {formCount}</p>
                <EventTime
                  setEventDate={setEventDateHandler}
                  setPriceData={eventPriceDataHandler}
                  isEventPrivate={isEventPrivateHandler}
                  isEventPaid={isEventPaidHandler}
                />
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
                isStepValid={isStepValid}
                formIsValid={formState.formIsValid}
                dateTimeValid={
                  eventTime.length <= 6 && formCount === 3 ? false : true
                }
              />
            </form>
          </div>
        </div>
      </div>
      {isEventCreated ? (
        <EventSuccessSideBar
          closeSuccessMessage={closeEventCreatedMessage}
          customClassName={isCreatedEventSuccess ? "show-create-success" : ""}
          message="Your event has been registered"
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default CreateEvent;
