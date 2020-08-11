import React, {
  useState,
  useReducer,
  useCallback,
  useEffect,
  Fragment,
} from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import PhoneNumberVerification from "../../components/phoneNumberVerification/PhoneNumberVerification";
import { formReducer, FORM_INPUT_UPDATE } from "../../utils/formReducer";

import "./VerifyPhoneNumber.css";
import {
  verifiyPhoneNumber,
  sendVerificationCode,
} from "./verifyPhoneNumber.action";
import { Link } from "react-router-dom";

const VerifyPhoneNumber = (props) => {
  const { history } = props;


  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.signup.userDetails);

  const handleSelectCountry = (e) => {
    setCountryCode(e.target.value);
  };

  useEffect(() => {
    if (userDetails) {
      const { phoneDetails } = userDetails;
      const { countryCode, phoneNumber } = phoneDetails;
      setCountryCode(countryCode);
      setPhoneNumber(phoneNumber);
    }
  }, [userDetails]);

  const initilaState = {
    inputValues: {
      verifyCode1: "",
      verifyCode2: "",
      verifyCode3: "",
      verifyCode4: "",
    },
    inputValidities: {
      email: false,
      password: false,
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

  const handleVerifyCode = async (e) => {
    e.preventDefault();

    const verifyCodes = {
      ...formState.inputValues,
    };

    const code = `${verifyCodes.verifyCode1}${verifyCodes.verifyCode2}${verifyCodes.verifyCode3}${verifyCodes.verifyCode4}`;
    // const userId = "5e9f5db5357c7c002a49a835";
    dispatch(verifiyPhoneNumber(code, userDetails.userId, history));
    // dispatch(verifiyPhoneNumber(code, userId, history));
  };

  const handleSendVerificationCode = (e) => {
    e.preventDefault();

    // const userId = "5e9f5db5357c7c002a49a835";
    // const userId = "5e9f5db5357c7c002a";
    dispatch(sendVerificationCode(userDetails.userId, history));
    // dispatch(sendVerificationCode(userId, history));
  };

  return (
    <Fragment>
      <section className="banner row verify-phone-page">
        <div className="row phone-number-verify-page">
          <PhoneNumberVerification
            phoneNumber={phoneNumber}
            selectedCountry={countryCode}
            onSelectCountry={handleSelectCountry}
            onInputChange={inputChangeHandler}
            verifyCodeHandler={handleVerifyCode}
            sendVerificationCodeHandler={handleSendVerificationCode}
          />
        </div>

        <Link className="skip-verify" to="/signin">
          Skip this step
        </Link>
      </section>
    </Fragment>
  );
};

VerifyPhoneNumber.propTypes = {
  history: PropTypes.object,
};

export default VerifyPhoneNumber;

//disadvantage
// what if I input another number different from the one I signedup with
