import React, { useRef } from "react";
import PropTypes from "prop-types";
import Input from "../../../../components/input/Input";
import DragableImageUpload from "../../../../components/dragableImageUpload/DragableImageUpload";

import "./WishlistDescription.css";

const WishlistDescription = (props) => {
  const { inputChangeHandler, imageUpload } = props;
  const fileInputRef = useRef("");

  const onFilesAddedHandler = (image) => {
    imageUpload(image);
  };

  return (
    <div className="wishlist-desc-container">
      <div className="create-event-title-header">
        <h5>Tell us about your wishlist</h5>
        <small>Fill the information below</small>
      </div>
      <div>
        <div className="event-description-fist-row">
          <div className="">
            <label htmlFor="event-title">Wishlist Title</label>
            <Input
              name="wishilistName"
              type="text"
              customClassName="form-control auth-input"
              id="wishilistName"
              placeHolder="Name of the Wishlist"
              aria-describedby="wishilistName"
              errorText="Please enter a valid name"
              required
              onInputChange={inputChangeHandler}
            />
          </div>
          <div className="">
            <label htmlFor="upload">Choose Background Image</label>
            <DragableImageUpload
              fileInputRef={fileInputRef}
              filesAdded={onFilesAddedHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

WishlistDescription.propTypes = {};

export default WishlistDescription;
