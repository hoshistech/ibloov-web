import React, { useState, useEffect } from "react";
import renderIf from "render-if";
import axios from "../../../../utils/axiosConfig";
import DropIn from "braintree-web-drop-in";
import util from "util";
import Loading from "../../../../components/loadingIndicator/Loading";
import "./EventPay.css";
import Button from "../../../../components/button/Button";
import ProgressiveImage from "../../../../components/progressiveImage/ProgressiveImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import creditCard from "../../../../assets/images/credit_card.svg";


const EventPay = (props) => {
  const { closePayView, eventPrice } = props;
  const [dropinInstance, setDropinInstance] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [message, setMessage] = useState("Loading...");

  const [formInstance, setFormInstance] = useState(false);
  const [paymentStart, setPaymentStart] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);

  useEffect(() => {
    registerMessageListener();
  }, [paymentFailed, paymentSuccess]);

  const registerMessageListener = () => {
    createCreditCardUI();
  };

  const handleGoBack = () => {
    closePayView();
    setPaymentStatus(null);
    setPaymentFailed(false);
    setPaymentSuccess(false);
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

      setFormInstance(true);
      setPaymentFailed(false);
      setDropinInstance(instance);
    } catch (error) {}
  };

  const handleSubmitPayment = () => {
    dropinInstance.requestPaymentMethod(async (error, response) => {
      setPaymentStatus("PAYMENT_PROCESSING");
      setPaymentStart(true);
      setMessage("Verifying...");
      if (error) {
        if (!dropinInstance.isPaymentMethodRequestable()) {
          setPaymentStatus(null);
          setPaymentStart(false);
          setPaymentFailed(true);
          return;
        }
        dropinInstance.clearSelectedPaymentMethod();
        setPaymentStatus("PAYMENT_FAILED");
        setPaymentStart(false);
        setPaymentFailed(true);
      } else {
        const { nonce } = response;

        let confirmPay;

        console.log(11, response)
        
        console.log(12, nonce);

        // try {
        //   confirmPay = await axios.post("/v1/payment/checkout", {
        //     amount: eventPrice,
        //     // amount: 1000,
        //     nonceFromTheClient: nonce,
        //   });
        // } catch (error) {
        //   setPaymentStatus("PAYMENT_FAILED");
        //   setPaymentFailed(true);
        //   return;
        // }
        setPaymentStart(false);
        setPaymentFailed(false);
        setPaymentSuccess(true);
        setPaymentStatus("PAYMENT_SUCCESSFUL");
      }
    });
  };

  return (
    <div>
      <div>
        {renderIf((dropinInstance === null || paymentStart) && !paymentFailed)(
          <div className="payment-loading">
            <Loading />
          </div>
        )}
        {renderIf((!paymentStart || !paymentFailed) && !paymentSuccess)(
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
        {renderIf(paymentSuccess)(
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
        {renderIf(paymentFailed || paymentStatus === "PAYMENT_FAILED")(
          <div className="payment-fail-container">
            <ProgressiveImage
              src={creditCard}
              customClass="payment-success-card"
              placeholder=""
              alt="credit-card"
            />
            <FontAwesomeIcon
              className="pt-1 payment-fail-icon"
              icon="times-circle"
            />
            <div>
              <h5>There was a problem with your payment, please try again</h5>
              <p>Return to select a payment method</p>
              <Button
                // onClick={closePayView}
                onClick={() => {
                  setPaymentFailed(false);
                  setPaymentStart(false);
                  setPaymentStatus(null);
                }}
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
      <div id="messages"></div>
    </div>
  );
};

export default EventPay;
