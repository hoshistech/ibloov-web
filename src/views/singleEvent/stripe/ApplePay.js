import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  IdealBankElement,
  Elements,
  useElements,
  useStripe,
  Wrapper
} from "@stripe/react-stripe-js";
import Checkout from "./Checkout2";

// Custom styling can be passed to options when creating an Element.
const IDEAL_ELEMENT_OPTIONS = {
  style: {
    base: {
      padding: "10px 12px",
      color: "#32325d",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a"
    }
  }
};

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [name, setName] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  // Reset the demo.
  const handleReset = () => {
    setPaymentMethod(null);
    setIsLoading(false);
    setName("");
    setError(null);
    elements.getElement(IdealBankElement).clear();
  };

  // Handle form submission.
  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);

    const idealBankElement = elements.getElement(IdealBankElement);
    const result = await stripe.createPaymentMethod({
      type: "ideal",
      ideal: idealBankElement,
      billing_details: {
        name
      }
    });

    setIsLoading(false);

    if (result.error) {
      // Inform the user if there was an error.
      setError(result.error.message);
    } else {
      setError(null);
      // Normally you would send the PaymentMethod to your server.
      // In this demo we store it in state and display it.
      setPaymentMethod(result.paymentMethod);
    }
  };

  return (
    // Wrapper to handle display of loading spinner and demo result.
    <Wrapper
      isLoading={isLoading}
      paymentMethod={paymentMethod}
      onReset={handleReset}
    >
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label for="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="Jenny Rosen"
            required
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="form-row">
          <label for="ideal-bank-element">iDEAL Bank</label>
          <IdealBankElement
            id="ideal-bank-element"
            options={IDEAL_ELEMENT_OPTIONS}
          />
        </div>
        <button type="submit">Submit Payment</button>
        <div className="error-message" role="alert">
          {error}
        </div>
      </form>
    </Wrapper>
  );
};

// Setup Stripe.js and the Elements provider
const stripePromise = loadStripe("pk_test_ZLXamYUP1Hp8QNf5b1B1d1fr00ycTYZS8e");

const App = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default App;
