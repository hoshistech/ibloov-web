import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "../../../utils/axiosConfig";

import CardSection from "./CardSection";
import { useEffect } from "react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [clientToken, setClientToken] = useState();

  useEffect(() => {
    const getToken = async () => {
      const order = await axios(true).post("v1/payment/stripe/token", {
        amount: 45,
        currency: "USD"
      });

      setClientToken(order.data.data);
    };

    getToken();
  }, []);

  const handleSubmit = async event => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const paymentMethod = await stripe.collectPaymentMethod(clientToken);

    if (paymentMethod.error) {
      alert(paymentMethod.error);
    } else {
      // Placeholder for processing result.paymentIntent

      const result = await stripe.processPayment(paymentMethod);
      if (result.error) {
        // Placeholder for handling result.error
        alert(paymentMethod.error);
      } else if (result.paymentIntent) {
        // Placeholder for notifying your backend to capture result.paymentIntent.id
        alert(paymentMethod.error);
        // const order = await axios(true).post("v1/payment/stripe/capture", {
        //   amount: selectedProduct.price.toString().replace(".", ""),
        //   source: token.id,
        //   receipt_email: "customer@example.com"
        // });

        // console.log(44, order);
      }
    }

    // setReceiptUrl(order.data.charge.receipt_url);

    /* const result = await stripe.confirmCardPayment("{sk_test_VQOCocJdPVxlWz0BH3YwrY0Q00j6sgZqtn}", {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Jenny Rosen"
        }
      }
    }); */

    // if (result.error) {
    //   // Show error to your customer (e.g., insufficient funds)
    //   console.log(result.error.message);
    // } else {
    //   // The payment has been processed!
    //   if (result.paymentIntent.status === "succeeded") {
    //     // Show a success message to your customer
    //     // There's a risk of the customer closing the window before callback
    //     // execution. Set up a webhook or plugin to listen for the
    //     // payment_intent.succeeded event that handles any business critical
    //     // post-payment actions.
    //   }
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button disabled={!stripe}>Confirm order</button>
    </form>
  );
}
