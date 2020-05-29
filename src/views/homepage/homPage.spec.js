import React from "react";
import { createStore } from "redux";
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from "../../utils/testUtil";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import HomePage from "./HomePage";
import Login from "../login/Login";

describe("Landing Page", () => {
  it("should check for login button", () => {
    const history = createMemoryHistory();
    const { debug, container, getByText } = render(
      <Router history={history}>
        <HomePage />
      </Router>
    );
    const loginBtn = getByText("Login");

    expect(loginBtn.textContent).toBe("Login");
    expect(loginBtn.className).toBe(
      "btn header-button header-button-login bold-600"
    );
  });

  it("should check for register button", () => {
    const history = createMemoryHistory();
    const { debug, container, getByText } = render(
      <Router history={history}>
        <HomePage />
      </Router>
    );

    const signUpBtn = screen.getByText("Register");
    expect(signUpBtn.textContent).toBe("Register");
    expect(signUpBtn.className).toBe(
      "btn header-button header-button-register bold-600"
    );
  });
});
