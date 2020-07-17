import React from "react";
import axios from "../../../utils/axiosConfig";
import StripeCheckout from "react-stripe-checkout";

const CURRENCY = "USD";

const fromDollarToCent = amount => parseInt(amount * 100);

const successPayment = data => {
  alert("Payment Successful");
};

const errorPayment = data => {
  alert("Payment Error");
};

const onToken = (amount, description) => token =>
  axios(true)
    .post("v1/payment/stripe/token", {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={"pk_test_ZLXamYUP1Hp8QNf5b1B1d1fr00ycTYZS8e"}
    zipCode
    email
    allowRememberMe
  />
);

export default Checkout;
