import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import PricingCounter from "../../../components/pricingCounter/PricingCounter";

const EventPrice = (props) => {
  const [showPricing, setShowPricing] = useState(true);
  const onToggleEventFeeHandler = (e) => {
    const eventId = e.target.id;
    if (eventId === "eventFree") {
      setShowPricing(false);
      return;
    }
    setShowPricing(true);
  };
  return (
    <div>
      <div>
        <h5>What is the price?</h5>
        <small>How much does it cost for the event?</small>
      </div>
      <div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="eventFee"
            id="eventFree"
            value="free"
            // checked
            onChange={onToggleEventFeeHandler}
          />
          <label className="form-check-label" for="exampleRadios1">
            Free
          </label>
        </div>
        <div class="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="eventFee"
            id="eventPaid"
            value="paid"
            onChange={onToggleEventFeeHandler}
          />
          <label className="form-check-label" for="exampleRadios2">
            Paid
          </label>
        </div>
        {showPricing ? (
          <Fragment>
            <div>
              <div className="row">
                <p className="private-toggle">How many different pricing?</p>{" "}
                <PricingCounter />
              </div>
              <div className="row">
                <div className="ticket-names">
                  <p>Ticket Name</p>
                  <label htmlFor="standard" className="price-label">
                    Standard
                  </label>
                  <label htmlFor="premium" className="price-label">
                    Premium
                  </label>
                  <label htmlFor="vip" className="price-label">
                    VIP
                  </label>
                </div>
                <div className="ticket-prices">
                  <p>Price</p>
                  <input
                    type="number"
                    name="standard"
                    id="standard"
                    className="form-control price-input"
                  />
                  <input
                    type="number"
                    name="premium"
                    id="premium"
                    className="form-control price-input"
                  />
                  <input
                    type="number"
                    name="vip"
                    id="vip"
                    className="form-control price-input"
                  />
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

EventPrice.propTypes = {};

export default EventPrice;
