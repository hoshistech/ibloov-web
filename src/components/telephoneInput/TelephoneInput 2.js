import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../button/Button";
import Input from "../input/Input";
import CountryCode from "../../data/countryCodes";
import "./TelephoneInput.css";

const TelephoneInput = (props) => {
  const {
    onInputChange,
    onSelectCountry,
    selectedCountry,
    phoneNumber,
  } = props;
  return (
    <Fragment>
      <div className="select-container">
        <label className="filter-select-label">
          <FontAwesomeIcon className="card-icon" icon="chevron-down" />
        </label>
        <select
          id="countryCode"
          name="countryCode"
          // onChange={(e) => onSelectCountry(e)}
          onChange={onSelectCountry}
          defaultValue={selectedCountry}
          value={selectedCountry}
          className="form-control filter-select"
        >
          {CountryCode.map((country) => (
            <option
              data-countryCode={country.code}
              value={country.dial_code}
              selected
            >
              ({country.dial_code}) {country.name}
            </option>
          ))}
        </select>
      </div>

      <Input
        name="phoneNumber"
        type="tel"
        customClassName="form-control auth-input"
        id="phoneNumber"
        placeHolder="Phone number"
        aria-describedby="telephone"
        errorText="Please enter a valid telephone number"
        required
        pattern="[0-9]{7,}"
        value={phoneNumber}
        onInputChange={onInputChange}
        initiallyValid={true}
      />
    </Fragment>
  );
};

TelephoneInput.propTypes = {};

export default TelephoneInput;
