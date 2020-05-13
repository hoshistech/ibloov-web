import React from "react";
import PropTypes from "prop-types";
var client = require("braintree-web/client");
var hostedFields = require("braintree-web/hosted-fields");

client.create(
  {
    authorization: "CLIENT_AUTHORIZATION",
  },
  function (err, clientInstance) {
    hostedFields.create(/* ... */);
  }
);

var submitBtn = document.getElementById("my-submit");
var form = document.getElementById("my-sample-form");

// braintree.client.create(
//   {
//     authorization: CLIENT_AUTHORIZATION,
//   },
//   clientDidCreate
// );

// function clientDidCreate(err, client) {
//   braintree.hostedFields.create(
//     {
//       client: client,
//       styles: {
//         input: {
//           "font-size": "16pt",
//           color: "#3A3A3A",
//         },

//         ".number": {
//           "font-family": "monospace",
//         },

//         ".valid": {
//           color: "green",
//         },
//       },
//       fields: {
//         number: {
//           selector: "#card-number",
//         },
//         cvv: {
//           selector: "#cvv",
//         },
//         expirationDate: {
//           selector: "#expiration-date",
//         },
//       },
//     },
//     hostedFieldsDidCreate
//   );
// }

function hostedFieldsDidCreate(err, hostedFields) {
  submitBtn.addEventListener("click", submitHandler.bind(null, hostedFields));
  submitBtn.removeAttribute("disabled");
}

function submitHandler(hostedFields, event) {
  event.preventDefault();
  submitBtn.setAttribute("disabled", "disabled");

  hostedFields.tokenize(function (err, payload) {
    if (err) {
      submitBtn.removeAttribute("disabled");
      console.error(err);
    } else {
      form["payment_method_nonce"].value = payload.nonce;
      form.submit();
    }
  });
}

const EventPay = (props) => {
  return (
    <div>
      <form action="/" id="my-sample-form">
        <input type="hidden" name="payment_method_nonce" />
        <label htmlFor="card-number">Card Number</label>
        <div id="card-number"></div>

        <label htmlFor="cvv">CVV</label>
        <div id="cvv"></div>

        <label htmlFor="expiration-date">Expiration Date</label>
        <div id="expiration-date"></div>

        <input id="my-submit" type="submit" value="Pay" disabled />
      </form>
    </div>
  );
};
EventPay.propTypes = {};

export default EventPay;
