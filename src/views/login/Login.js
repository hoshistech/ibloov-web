import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Login.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";


const Login = (props) => {
  const socialAuthHandler = (e, id) => {
    const googleAuth = "http://ibloov.xpasson.com:4000/auth/google";
    window.location = googleAuth;
    axios
      // .get("http://198.199.91.181:4000/auth/google/authurl")
      .get("http://ibloov.xpasson.com:4000/auth/google")
      .then((response) => {
        // handle success
        // console.log(response.data);
        // const { data } = response.data;
        // window.location = data;
      })
      .catch((error) => {
        // handle error
        // console.log(error);
      });
  };

  return (
    <section className="banner row">
      <div className="col-md-8 perfect-center">
        <h2 className="auth-logo  font-bold">ibloov LOGO</h2>
      </div>
      <div className="col-md-4 perfect-center">
        <div className="auth-container">
          <div>
            <h4 className="font-bold">Sign in</h4>
            <div>
              <p className="text-muted small-info-text">
                New User?{" "}
                <Link to="/signup" className="font-bold text-dark">
                  {" "}
                  Sign up now!
                </Link>
              </p>
            </div>
          </div>
          <form className="auth-form">
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
            <div className="auth-button-container-login">
              <Button
                customClassName="auth-button bold-600"
                // onclick={this.onButtonPress.bind(this)}
              >
                Continue
              </Button>
            </div>
            <div className="row divider-container mt-5">
              <hr className="col-md-3 col-sm-3 divider" />
              <p className="mr-3 ml-3">Or</p>
              <hr className="col-md-3 col-sm-3 divider" />
            </div>
            <div className="auth-button-container-social-login">
              <Button
                customClassName="btn-outline-secondary bold-600 auth-google mb-2"
                onClick={(e) => socialAuthHandler(e, "google")}
              >
                Continue with Google
              </Button>
              <Button
                customClassName="auth-facebook bold-600 mb-2"
                // onclick={this.onButtonPress.bind(this)}
              >
                Continue with Facebook
              </Button>
              <Button
                customClassName="auth-twitter bold-600 mb-2"
                // onclick={this.onButtonPress.bind(this)}
              >
                Continue with Twitter
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {};

export default Login;
