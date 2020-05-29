import React from "react";
import PropTypes from "prop-types";
import Input from "../../../../components/input/Input";

const PlacesInput = ({
  getInputProps,
  getSuggestionItemProps,
  suggestions,
  loading,
}) => {
  return (
    <div>
      <div>
        <input
          {...getInputProps({
            placeholder: "Event Location",
            className: "location-search-input form-control",
          })}
        />
        <div
          className={
            suggestions.length > 1
              ? "autocomplete-dropdown-container"
              : "no-suggestion"
          }
        >
          {loading && <div>Loading...</div>}
          {suggestions.map((suggestion) => {
            const className = suggestion.active
              ? "suggestion-item--active"
              : "suggestion-item";
            return (
              <div
                {...getSuggestionItemProps(suggestion, {
                  className,
                })}
              >
                <span className="location-text">{suggestion.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
PlacesInput.propTypes = {};

export default PlacesInput;
