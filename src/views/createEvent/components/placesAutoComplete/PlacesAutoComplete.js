import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import PlacesInput from "./PlacesInput";

import "./PlacesAutoComplete.css";

const LocationSearchInput = (props) => {
  const { pickedLocation } = props;
  const [address, setAddress] = useState("");

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    setAddress(address);

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((point) => {
        const location = {
          address,
          coordinates: [point.lat, point.lng],
          type: "Point",
        };
        pickedLocation(location);
      })
      .catch((error) => console.error("Error", error));
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {PlacesInput}
    </PlacesAutocomplete>
  );
};

export default LocationSearchInput;
