import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import renderIf from "render-if";
import axios from "../../../../utils/axiosConfig";
// import RNMessageChannel from "react-native-webview-messaging";
import DropIn from "braintree-web-drop-in";
import util from "util";
import Loading from "../../../../components/loadingIndicator/Loading";
import "./EventPay.css";
import Button from "../../../../components/button/Button";
import ProgressiveImage from "../../../../components/progressiveImage/ProgressiveImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import creditCard from "../../../../assets/images/credit_card.svg";

// print passed information in an html element; useful for debugging
// since console.log and debug statements won't work in a conventional way
const PrintElement = (data) => {
  if (typeof data === "object") {
    let el = document.createElement("pre");
    el.innerHTML = util.inspect(data, { showHidden: false, depth: null });
    document.getElementById("messages").appendChild(el);
  } else if (typeof data === "string") {
    let el = document.createElement("pre");
    el.innerHTML = data;
    document.getElementById("messages").appendChild(el);
  }
};

const EventPay = (props) => {
  const { closePayView, eventPrice } = props;
  const [dropinInstance, setDropinInstance] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [message, setMessage] = useState("Loading...");
  const [touchForm, setTouchForm] = useState(false);

  useEffect(() => {
    registerMessageListener();
  }, []);

  const registerMessageListener = () => {
    PrintElement();

    createCreditCardUI();
  };

  const handleGoBack = () => {
    closePayView();
    setPaymentStatus(null);
    createCreditCardUI();
  };

  const createCreditCardUI = async (clientToken) => {
    try {
      const response = await axios.get(
        "/v1/payment/braintree/generate/client_token"
      );

      const clientToken = response.data.data;
      const instance = await DropIn.create({
        authorization: clientToken,
        container: "#dropin-container",
        card: {
          cvv: {
            required: true,
          },
          overrides: {
            fields: {},
            styles: {
              input: {
                color: "blue",
                "font-size": "18px",
              },
              ".number": {
                "font-family": "monospace",
              },
              ".invalid": {
                color: "red",
              },
              ".valid": {
                color: "green",
              },
            },
          },
        },
      });
      setDropinInstance(instance);
    } catch (error) {}
  };

  const handleSubmitPayment = () => {
    dropinInstance.requestPaymentMethod(async (error, response) => {
      setPaymentStatus("PAYMENT_PROCESSING");
      setMessage("Verifying...");
      if (error) {
        if (!dropinInstance.isPaymentMethodRequestable()) {
          setPaymentStatus(null);
          return;
        }
        dropinInstance.clearSelectedPaymentMethod();
        setPaymentStatus("PAYMENT_FAILED");
      } else {
        const { nonce } = response;
        let confirmPay;

        try {

          confirmPay = await axios.post("/v1/payment/checkout", {
            amount: eventPrice,
            nonceFromTheClient: nonce,
          });
        } catch (error) {
          setPaymentStatus("PAYMENT_FAILED");
          return;
        }

        setPaymentStatus("PAYMENT_SUCCESSFUL");
      }
    });
  };

  return (
    <div>
      <div>
        {renderIf(
          (dropinInstance === null && paymentStatus === null) ||
            paymentStatus === "PAYMENT_PROCESSING"
        )(
          <div className="payment-loading">
            <Loading />
          </div>
        )}
        {renderIf(paymentStatus !== "PAYMENT_SUCCESSFUL")(
          <div>
            <h5 className="pay-event-title">Enter your card details</h5>
            <div id="dropin-container" />
            <Button
              customClassName="pay-event-submit-btn"
              btndisabled={false}
              onClick={handleSubmitPayment}
              id="submit-button"
            >
              Submit Payment
            </Button>
          </div>
        )}
      </div>
      <div>
        {renderIf(paymentStatus === null && typeof dropinInstance !== null)(
          <div>
            {/* <Button
              customClassName="pay-event-submit-btn"
              btndisabled={false}
              onClick={handleSubmitPayment}
              id="submit-button"
            >
              Submit Payment
            </Button> */}
          </div>
        )}
        {renderIf(paymentStatus === "PAYMENT_SUCCESSFUL")(
          <div className="payment-success-container">
            <ProgressiveImage
              src={creditCard}
              customClass="payment-success-card"
              placeholder=""
              alt="credit-card"
            />
            <FontAwesomeIcon
              className="pt-1 payment-success-icon"
              icon="check-circle"
            />
            <div>
              <h5>Payment Successful </h5>
              <p>
                Your payment was Successful! You can now prepare to attend the
                event.
              </p>
              <Button
                onClick={handleGoBack}
                btndisabled={false}
                customClassName="pay-event-submit-btn"
              >
                Close
              </Button>
            </div>
          </div>
        )}
        {renderIf(paymentStatus === "PAYMENT_FAILED")(
          <div className="payment-fail-container">
            <ProgressiveImage
              src={creditCard}
              customClass="payment-success-card"
              placeholder=""
              alt="credit-card"
            />
            <FontAwesomeIcon
              className="pt-1 payment-success-icon"
              icon="times-circle"
            />
            <div>
              <h5>There was a problem with your payment, please try again</h5>
              <p>Return to select a payment method</p>
              <Button
                // onClick={closePayView}
                onClick={handleGoBack}
                btndisabled={false}
                customClassName="pay-event-submit-btn"
              >
                Return
              </Button>
            </div>
          </div>
        )}
      </div>
      {/* this div is used to display the PrintElement data to the page*/}
      <div id="messages" />
    </div>
  );
};

export default EventPay;
