import React, { Fragment } from "react";
import PropTypes from "prop-types";
import PricingCounter from "../../../components/pricingCounter/PricingCounter";

const PriceTicket = () => {
  return (
    <div className="row">
      <label htmlFor="vip" className="price-label">
        VIP
      </label>
      <input
        type="number"
        name="vip"
        id="vip"
        className="form-control price-input"
      />
    </div>
  );
};

const EventPrice = (props) => {
  const {
    showPriceHandler,
    showPricing,
    ticketNumber,
    increaseTicketType,
    decreaseTicketType,
    changeTicketTypeNumber,
    onSelectCurrency,
    setEventPrice,
    eventPrice,
  } = props;

  return (
    <div>
      <div className="create-event-title-header">
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
            checked={!showPricing}
            onChange={showPriceHandler}
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Free
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="eventFee"
            id="eventPaid"
            value="paid"
            checked={showPricing}
            onChange={showPriceHandler}
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Paid
          </label>
        </div>
        {showPricing ? (
          <div className="mt-4">
            <div className="form-group">
              <label htmlFor="inputState">Currency</label>
              <select
                id="inputState"
                className="form-control"
                onChange={onSelectCurrency}
              >
                <option value="">select currency</option>
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
                <option value="EURO">EURO</option>
              </select>
            </div>
            <div className="row mt-3">
              <label htmlFor="standard" className="price-label">
                Amount
              </label>
              <input
                type="number"
                name="ticketAmount"
                id="ticketAmount"
                className="form-control price-input"
                onChange={setEventPrice}
                value={eventPrice}
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {false ? (
          <Fragment>
            <div>
              <div className="row">
                <p className="private-toggle">How many different pricing?</p>{" "}
                <PricingCounter
                  ticketNumber={ticketNumber}
                  increaseTicketType={increaseTicketType}
                  decreaseTicketType={decreaseTicketType}
                  changeTicketNumber={changeTicketTypeNumber}
                />
              </div>
              <div>
                <div className="row ticket-header">
                  <div className="ticket-name-header">
                    <p>Ticket Name</p>
                  </div>
                  <div className="ticket-price-header">
                    <p>Price</p>
                  </div>
                </div>
                <div className="price-list-container">
                  <div className="row">
                    <label htmlFor="standard" className="price-label">
                      Standard
                    </label>
                    <input
                      type="number"
                      name="standard"
                      id="standard"
                      className="form-control price-input"
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="premium" className="price-label">
                      Premium
                    </label>
                    <input
                      type="number"
                      name="premium"
                      id="premium"
                      className="form-control price-input"
                    />
                  </div>

                  <div className="row">
                    <label htmlFor="vip" className="price-label">
                      VIP
                    </label>
                    <input
                      type="number"
                      name="vip"
                      id="vip"
                      className="form-control price-input"
                    />
                  </div>

                  {Array(ticketNumber)
                    .fill()
                    .map((_, i) => (
                      <PriceTicket key={i} />
                    ))}
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

EventPrice.propTypes = {
  showPricing: PropTypes.bool,
  showPriceHandler: PropTypes.func,
  increaseTicketType: PropTypes.func,
  decreaseTicketType: PropTypes.func,
};

export default EventPrice;
