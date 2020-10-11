import React, { useRef } from "react";
import PropTypes from "prop-types";
import Input from "../../../components/input/Input";
import DragableImageUpload from "../../../components/dragableImageUpload/DragableImageUpload";
import LocationSearchInput from "../components/placesAutoComplete/PlacesAutoComplete";
import Button from "../../../components/button/Button";

const EventDescription = props => {
  const {
    inputChangeHandler,
    imageUpload,
    pickedLocation,
    formCount,
    nextQuestionHandler,
    previousQuestionHandler,
    form,
    location
  } = props;
  const fileInputRef = useRef("");

  const onFilesAddedHandler = image => {
    imageUpload(image);
  };
  const { eventTitle, eventCode, eventDetail } = form;
  const validateNextBtn =
    !eventTitle || !eventCode || !eventDetail || !location ? true : false;

  return (
    <div className="event-desc-container">
      <div className="create-event-title-header mb-3">
        <h5>Tell us about the event</h5>
        <small>Fill the details and give information about the event</small>
      </div>
      <div>
        <div className="row event-description-fist-row">
          <div className="col-md-6">
            <label htmlFor="event-title">Event Title</label>
            <Input
              name="eventTitle"
              type="text"
              customClassName="form-control auth-input"
              id="eventTitle"
              placeHolder="Name of the event"
              aria-describedby="eventTitle"
              errorText="Please enter a valid name"
              required
              onInputChange={inputChangeHandler}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="eventCode">Event Code / Hashtag</label>
            <Input
              name="eventCode"
              type="text"
              customClassName="form-control auth-input"
              id="eventCode"
              placeHolder="Enter the code or hashtag for your event"
              aria-describedby="eventCode"
              errorText="Please enter a valid code."
              required
              onInputChange={inputChangeHandler}
            />
          </div>
        </div>
        <div className="row event-description-fist-row">
          <div className="col-md-6">
            <div>
              <label htmlFor="eventDetail">Event Detail</label>
              <Input
                textArea={true}
                id="eventDetail"
                name="eventDetail"
                onInputChange={inputChangeHandler}
                errorText="Please describe the event."
              />
            </div>
            <div className="event-location">
              <label htmlFor="location">Location</label>
              <LocationSearchInput pickedLocation={pickedLocation} />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="upload">Add Image</label>
            <DragableImageUpload
              fileInputRef={fileInputRef}
              filesAdded={onFilesAddedHandler}
            />
          </div>
        </div>
      </div>
      <div
        // className="myibloov-create-button-container"
        className={
          formCount === 2
            ? "myibloov-create-button-container myibloov-description-btn"
            : "myibloov-create-button-container"
        }
      >
        <Button
          customClassName="mybloov-create-event-btn-2  bold-600"
          onClick={previousQuestionHandler}
          btndisabled={false}
        >
          {formCount === 1 ? "Cancel" : "Back"}
        </Button>
        <Button
          customClassName="mybloov-create-event-btn-2  bold-600"
          onClick={nextQuestionHandler}
          btndisabled={validateNextBtn}
        >
          {formCount === 4 ? "Create Event" : "Next"}
        </Button>
      </div>
    </div>
  );
};

EventDescription.propTypes = {
  inputChangeHandler: PropTypes.func.isRequired,
  imageUpload: PropTypes.func.isRequired
};

export default EventDescription;
