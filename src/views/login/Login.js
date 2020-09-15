import React, { useEffect, useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useForm from "./useForm";

import "./Login.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useLocation } from "react-router-dom";
import { authLogin } from "./login.action";
import Logo from "../../components/logo/Logo";
import { getUserFollowing } from "../friendPage/friendPage.action";

const Login = props => {
  const history = useHistory();
  const location = useLocation();
  const { token, error,loading } = useSelector(state => state.login);
  const [previousLocation, setPreviousLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [btnDisabled, setBtndisabled] = useState(true);

  useEffect(() => {
    if (location.state) {
      setPreviousLocation(location.state.from);
    }
  }, []);

  const dispatch = useDispatch();

  const inputChangeHandler = event => {
    const value = event.target.value;
    const name = event.target.name;
    const values = {
      [name]: value
    };
    const validated = validate(values, name);
    setErrors({
      ...errors,
      ...validated
    });

    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }

    canSubmit();
  };

  const validate = (values, name) => {
    const errors = {};

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name === "email" && values.email === "") {
      errors.email = "Please enter your email";
    }
    if (name === "email" && !emailRegex.test(values.email?.toLowerCase())) {
      errors.email = "Please enter a valid email";
    } else {
      errors.email = "";
    }
    return errors;
  };

  const handleLogin = async e => {
    e.preventDefault();

    const newUser = {
      email,
      password
    };

    await dispatch(authLogin(newUser, history, previousLocation));
    dispatch(getUserFollowing());
  };

  const socialAuthHandler = (e, id) => {
    const socialAuth = `https://ibloov-backend.herokuapp.com/auth/${id}`;
    window.location = socialAuth;
  };

  const canSubmit = () => {
    if (errors.email === "" || errors.email === undefined) {
      setBtndisabled(false);
      return;
    }
    setBtndisabled(true);
  };

  if (token) {
    return <Redirect to="/" />;
  }
  return (
    <section className="banner login-section row">
      <div className="col-md-7 perfect-center">
        <Link to="/">
          <Logo customClassName="auth-page-logo" />
        </Link>
      </div>
      <div className="col-md-5 auth-form-container perfect-center">
        <div className="auth-container">
          <div>
            <h2>Sign in</h2>
            <div>
              <p className="small-info-text">
                Are you a new user?{" "}
                <Link to="/signup" className="font-bold">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
          <form className="auth-form">
            <input
              name="email"
              type="email"
              class="form-control auth-input"
              id="email"
              placeHolder="Email address"
              aria-describedby="emailHelp"
              errorText="Please enter a valid email."
              required
              onChange={inputChangeHandler}
            />
            <p className="input-error">{errors?.email}</p>

            <input
              name="password"
              type="password"
              class="form-control auth-input"
              id="password"
              placeHolder="Password"
              aria-describedby="password"
              errorText="Please enter a valid password."
              required
              onChange={inputChangeHandler}
            />
            <p className="input-error">{errors.password}</p>

            <p className="input-error auth-error">{error}</p>
            <div className="auth-button-container-login">
              <Button
                customClassName="auth-button bold-600"
                onClick={handleLogin}
                btndisabled={btnDisabled}
                // btndisabled={true}
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </Button>
            </div>
            <div className="divider-container mt-2">
              <div className="social-divider"></div>
              <p className="divider-content">Or Sign in with</p>
              <div className="social-divider"></div>
            </div>
            <div className="auth-button-container-social-login">
              <Button
                customClassName="btn-outline-secondary bold-600 auth-google mb-2"
                onClick={e => socialAuthHandler(e, "google")}
                // onClick={() => {}}
                btndisabled={false}
              >
                <FontAwesomeIcon className="" icon={["fab", "google-plus-g"]} />
              </Button>
              <Button
                customClassName="auth-facebook bold-600 mb-2"
                onClick={e => socialAuthHandler(e, "facebook")}
                btndisabled={false}
              >
                <FontAwesomeIcon className="" icon={["fab", "facebook-f"]} />
              </Button>
              {/* <Button
                customClassName="auth-twitter bold-600 mb-2"
                onClick={() => {}}
                btndisabled={false}
              >
                <FontAwesomeIcon className="" icon={["fab", "twitter"]} />
              </Button> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {};

export default Login;
