import React, { useRef } from "react";
import PropTypes from "prop-types";
import Input from "../../../components/input/Input";
import DragableImageUpload from "../../../components/dragableImageUpload/DragableImageUpload";
import LocationSearchInput from "../components/placesAutoComplete/PlacesAutoComplete";

const EventDescription = (props) => {
  const { inputChangeHandler, imageUpload, pickedLocation } = props;
  const fileInputRef = useRef("");

  const onFilesAddedHandler = (image) => {
    imageUpload(image);
  };

  return (
    <div className="event-desc-container">
      <div className="create-event-title-header">
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
              <textarea
                className="form-control"
                name="eventDetail"
                id="eventDetail"
                placeholder="Tell us about he event"
                rows="4"
              ></textarea>
            </div>
            <div className="event-location">
              <label htmlFor="location">Location</label>
              {/* <Input
                name="location"
                type="text"
                customClassName="form-control"
                id="location"
                placeHolder="Lagos, Nigeria"
                aria-describedby="location"
                errorText="Please enter a valid location."
                required
                onInputChange={inputChangeHandler}
              /> */}
              <LocationSearchInput pickedLocation={pickedLocation} />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="upload">Add Image</label>
            <DragableImageUpload
              fileInputRef={fileInputRef}
              //   openFileDialog={openFileDialogHandler}
              filesAdded={onFilesAddedHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

EventDescription.propTypes = {
  inputChangeHandler: PropTypes.func.isRequired,
  imageUpload: PropTypes.func.isRequired,
};

export default EventDescription;
