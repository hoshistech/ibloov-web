import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Input from "../input/Input";
import Button from "../button/Button";
import confirm from "../../assets/svgs/confirm_code.svg";
import message from "../../assets/svgs/message.svg";
import TelephoneInput from "../telephoneInput/TelephoneInput";

import "./PhoneNumberVerification.css";

const PhoneNumberVerification = (props) => {
  const {
    phoneNumber,
    selectedCountry,
    onSelectCountry,
    onInputChange,
    verifyCodeHandler,
    sendVerificationCodeHandler,
  } = props;
  return (
    // <div className="test-phone">
    <Fragment>
      <div className=" verify-container">
        <div className="verify-form-container">
          <div className="mb-4">
            <img
              className="verification-image"
              src={message}
              alt="verify code"
            />
          </div>
          <div className="text-center">
            <h5 className="font-bold">Verifiy Your Number</h5>
            <div>
              <p className="text-muted small-info-text">
                Please provide your phone number to verify your account
              </p>
            </div>
          </div>

          <form>
            <div className="auth-form verify-form">
              <div className="auth-input-container telephone-container verify-number">
                <TelephoneInput
                  phoneNumber={phoneNumber}
                  selectedCountry={selectedCountry}
                  onSelectCountry={onSelectCountry}
                  onInputChange={onInputChange}
                />
              </div>
            </div>
            <div className="verify-button-container">
              <Button
                customClassName="auth-button bold-600"
                onClick={sendVerificationCodeHandler}
                // disabled={!formState.formIsValid}
              >
                Resend
              </Button>
            </div>
          </form>
        </div>
        <hr className="verify-phone-line" />
      </div>

      <div className="verify-container">
        <div className="verify-form-container">
          <div className="mb-4">
            <img
              className="verification-image"
              src={confirm}
              alt="verify code"
            />
          </div>
          <div className="text-center">
            <h5 className="font-bold">Verification Code</h5>
            <div>
              <p className="text-muted small-info-text">
                Please Provide the code sent to you mobile number
              </p>
            </div>
          </div>

          <form>
            <div className="auth-form verify-form">
              <Input
                name="verifyCode1"
                type="text"
                customClassName="form-control auth-input"
                id="verifyCode1"
                aria-describedby="verification code"
                errorText=""
                maxlength="1"
                // required
                onInputChange={onInputChange}
              />

              <Input
                name="verifyCode2"
                type="text"
                customClassName="form-control auth-input"
                id="verifyCode2"
                aria-describedby="verification code"
                errorText=""
                required
                maxlength="1"
                onInputChange={onInputChange}
              />

              <Input
                name="verifyCode3"
                type="text"
                customClassName="form-control auth-input"
                id="verifyCode3"
                aria-describedby="verification code"
                errorText=""
                required
                maxlength="1"
                onInputChange={onInputChange}
              />

              <Input
                name="verifyCode4"
                type="text"
                customClassName="form-control auth-input"
                id="verifyCode4"
                aria-describedby="verification code"
                errorText=""
                required
                maxlength="1"
                onInputChange={onInputChange}
              />
            </div>

            <div className="verify-button-container">
              <Button
                customClassName="auth-button bold-600"
                onClick={verifyCodeHandler}
                // disabled={!formState.formIsValid}
              >
                Verify
              </Button>
            </div>
          </form>
        </div>
        <hr className="verify-phone-line" />
      </div>
    </Fragment>
  );
};

PhoneNumberVerification.propTypes = {
  phoneNumber: PropTypes.string,
  selectedCountry: PropTypes.string,
  onSelectCountry: PropTypes.func,
  onInputChange: PropTypes.func,
  verifyCodeHandler: PropTypes.func,
  sendVerificationCodeHandler: PropTypes.func,
};

export default PhoneNumberVerification;
