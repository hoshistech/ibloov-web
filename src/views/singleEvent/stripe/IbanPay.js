import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  IbanElement,
  Elements,
  useElements,
  useStripe,
  Wrapper
} from "@stripe/react-stripe-js";

// Custom styling can be passed to options when creating an Element.
const IBAN_ELEMENT_OPTIONS = {
  supportedCountries: ["SEPA"],
  style: {
    base: {
      color: "#32325d",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      },
      ":-webkit-autofill": {
        color: "#32325d"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
      ":-webkit-autofill": {
        color: "#fa755a"
      }
    }
  }
};

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bankName, setBankName] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  // Reset the demo.
  const handleReset = () => {
    setPaymentMethod(null);
    setIsLoading(false);
    setName("");
    setEmail("");
    setBankName("");
    setError(null);
    elements.getElement(IbanElement).clear();
  };

  const handleChange = event => {
    // Handle real-time validation errors from the iban Element.
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }

    // Display bank name corresponding to IBAN, if available.
    if (event.bankName) {
      setBankName(event.bankName);
    } else {
      setBankName(null);
    }
  };

  // Handle form submission.
  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);

    const ibanElement = elements.getElement(IbanElement);
    const result = await stripe.createPaymentMethod({
      type: "sepa_debit",
      sepa_debit: ibanElement,
      billing_details: {
        name,
        email
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
        <div className="form-row inline">
          <div class="col">
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
          <div class="col">
            <label for="email">Email Address</label>
            <input
              id="email"
              name="name"
              type="email"
              placeholder="jenny.rosen@example.com"
              required
              value={email}
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-row">
          <label for="iban-element">IBAN</label>
          <IbanElement
            id="iban-element"
            options={IBAN_ELEMENT_OPTIONS}
            onChange={handleChange}
          />
        </div>
        <div id="bank-name" className={bankName ? "visible" : ""}>
          {bankName}
        </div>
        <button type="submit">Submit Payment</button>
        <div id="error-message" role="alert" className={error ? "visible" : ""}>
          {error}
        </div>

        {/* Display mandate acceptance text. */}
        <div id="mandate-acceptance">
          By providing your IBAN and confirming this payment, you authorise (A)
          Rocketship Inc. and Stripe, our payment service provider, to send
          instructions to your bank to debit your account and (B) your bank to
          debit your account in accordance with those instructions. You are
          entitled to a refund from your bank under the terms and conditions of
          your agreement with your bank. A refund must be claimed within 8 weeks
          starting from the date on which your account was debited.
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
