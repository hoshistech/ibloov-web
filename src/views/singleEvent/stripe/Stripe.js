import React, { useEffect } from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");
const stripePromise = loadStripe("pk_test_ZLXamYUP1Hp8QNf5b1B1d1fr00ycTYZS8e");

const Stripe = props => {
  const {} = props;
  const history = useHistory();
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        selectedProduct={45}
        stripe={stripePromise}
        history={history}
      />
    </Elements>
  );
};

export default Stripe;
