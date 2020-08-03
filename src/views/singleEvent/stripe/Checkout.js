import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { toastr } from "react-redux-toastr";
import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import axios from "../../../utils/axiosConfig";

import "./stripe.css";

// Custom styling can be passed to options when creating an Element.
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

const CheckoutForm = props => {
  const { email, amount, name, currency, description } = props;

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios(true)
      .post("v1/payment/stripe/token", {
        description: description,
        currency: "usd",
        amount: +amount
      })
      .then(res => {
        const result = res.data;
        setError(null);
        setClientSecret(result.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [description, email, amount]);

  // Handle real-time validation errors from the card Element.
  const handleChange = event => {
    if (event.error) {
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
    } else {
      setError(null);
    }
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: email,
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name
        }
      }
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      toastr.success("Payment Successful!!!", {
        timeOut: 0,
        type: "success",
        position: "top-right", // This will override the global props position.
        attention: true // This will add a shadow like the confirm method.
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div class="form-row">
        <label for="card-element" className="card-head">
          Credit or debit card
        </label>
        <CardElement
          id="card-element"
          options={CARD_ELEMENT_OPTIONS}
          onChange={handleChange}
        />
        <div className="card-errors" role="alert">
          {error}
        </div>
      </div>
      <button type="submit" className="btn btn-light mt-2">
        Submit Payment
      </button>
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}

      {succeeded ? (
        <p className="text-light mt-3 text-center">Payment Successful</p>
      ) : (
        ""
      )}
    </form>
  );
};

// Setup Stripe.js and the Elements provider
const stripePromise = loadStripe("pk_test_ZLXamYUP1Hp8QNf5b1B1d1fr00ycTYZS8e");

const App = props => {
  const { event, user } = props;


  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        amount={event ? event.amount : ""}
        email={user ? user.email : ""}
        name={event ? user.fullName : ""}
        currency={event ? event.currency : ""}
        description={"event"}
      />
    </Elements>
  );
};

export default App;
