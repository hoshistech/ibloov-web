import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Signup.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Signup = (props) => {
  return (
    <section className="banner row">
      <div className="col-md-8 perfect-center">
        <h2 className="auth-logo  font-bold">ibloov LOGO</h2>
      </div>
      <div className="col-md-4 perfect-center">
        <div className="auth-container">
          <div>
            <h4 className="font-bold">Create an account</h4>
            <div>
              <p className="text-muted small-info-text">
                Already Registered?{" "}
                <Link to="/signin" className="font-bold text-dark">
                  {" "}
                  Sign in now!
                </Link>
              </p>
            </div>
          </div>
          <form className='auth-form'>
            <Input
              name="email"
              type="email"
              customClassName="form-control auth-input"
              id="email"
              placeHolder="Email address"
              aria-describedby="emailHelp"
              required
              // value={this.state.email}
              // handleChange={this.emailChange.bind(this)}
            />
            <Input
              name="name"
              type="text"
              customClassName="form-control auth-input"
              id="name"
              placeHolder="Full Name"
              aria-describedby="nameHelp"
              required
              // value={this.state.email}
              // handleChange={this.emailChange.bind(this)}
            />
            <Input
              name="phone_number"
              type="tel"
              customClassName="form-control auth-input"
              id="phone_number"
              placeHolder="Phone Number"
              aria-describedby="phoneNumberHelp"
              required
              // value={this.state.email}
              // handleChange={this.emailChange.bind(this)}
            />
            <Input
              name="password"
              type="password"
              customClassName="form-control auth-input"
              id="password"
              placeHolder="Password"
              aria-describedby="passwordHelp"
              required
              // value={this.state.email}
              // handleChange={this.emailChange.bind(this)}
            />

            <div className="form-check">
              <input
                className="form-check-input terms-checkbox"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label
                className="form-check-label terms-condition"
                htmlFor="invalidCheck"
              >
                I agree to the Terms and conditions and Privacy policy
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>

            <div className="auth-button-container">
              <Button
                customClassName="auth-button bold-600"
                // onclick={this.onButtonPress.bind(this)}
              >
                Continue
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Signup.propTypes = {};

export default Signup;
