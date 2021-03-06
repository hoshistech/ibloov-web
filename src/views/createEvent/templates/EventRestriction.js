import React, { useState } from "react";
import PropTypes from "prop-types";
import RadioInput from "../../../components/radioInput/RadioInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../components/button/Button";
import Toggle from "../../../components/Toggle/Toggle";
import EventCollaborators from "./EventCollaborators";
import SideOverLayContainer from "../../../components/sideOverLayContainer/SideOverLayContainer";
import GiftWishList from "../../giftWishList/GiftWishList";

const EventRestriction = props => {
  const {
    eventRestrictionsHandler,
    notificationHandler,
    addCollaborator,
    addInvitee,
       formCount,
    submitEventHandler,
    previousQuestionHandler
  } = props;
  const [womenOnly, setWomenOnly] = useState(false);
  const [childrenOnly, setChildrenOnly] = useState(false);
  const [adult, setAdult] = useState(false);
  const [seniorCitizen, setSeniorCitizen] = useState(false);
  const [none, setNone] = useState(false);
  const [noChildren, setNoChildren] = useState(false);
  const [openGiftWishList, setOpenGiftWishList] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState("");

  const openGiftwishListHandler = () => {
    setOpenGiftWishList(!openGiftWishList);
  };

  const selectOptionHandler = (e, name, id) => {
    e.preventDefault();

    eventRestrictionsHandler(id);
    setSelectedOpt(id)

    switch (name) {
      case "womenOnly":
        setWomenOnly(!womenOnly);
        return;
      case "childrenOnly":
        setChildrenOnly(!childrenOnly);
        return;
      case "adult":
        setAdult(!adult);
        return;
      case "seniorCitizen":
        setSeniorCitizen(!seniorCitizen);
        return;
      case "none":
        setNone(!none);
        return;
      case "noChildren":
        setNoChildren(!noChildren);
        return;

      default:
        return;
    }
  };
let validateNextBtn = !selectedOpt ? true : false;
  return (
    <div>
      <div className="row">
        <div>
          <div className="create-event-title-header mb-3">
            <h5>Any restriction to the event?</h5>
            <small>Set conditions to be met before attending the event</small>
          </div>
          <div className="row restrict-options">
            <RadioInput
              radioName="Women Only"
              customClass="form-check-input"
              name="womenOnly"
              labelName="womenOnly"
              id="women Only"
              selectedClass={womenOnly}
              onSelectOption={selectOptionHandler}
              checked={womenOnly}
            />
            <RadioInput
              radioName="None"
              customClass="form-check-input"
              name="none"
              labelName="none"
              id="none"
              selectedClass={none}
              onSelectOption={selectOptionHandler}
            />
            <RadioInput
              radioName="Senior Citizen"
              customClass="form-check-input"
              name="seniorCitizen"
              labelName="seniorCitizen"
              id="senior Citizen"
              selectedClass={seniorCitizen}
              onSelectOption={selectOptionHandler}
            />
            <RadioInput
              radioName="Children Only"
              customClass="form-check-input"
              name="childrenOnly"
              labelName="childrenOnly"
              id="children Only"
              selectedClass={childrenOnly}
              onSelectOption={selectOptionHandler}
            />
            <RadioInput
              radioName="No Children"
              customClass="form-check-input"
              name="noChildren"
              labelName="noChildren"
              id="no Children"
              // checked={}
              selectedClass={noChildren}
              onSelectOption={selectOptionHandler}
            />
            <RadioInput
              radioName="Event 18+"
              customClass="form-check-input"
              name="adult"
              labelName="adult"
              id="adult"
              selectedClass={adult}
              onSelectOption={selectOptionHandler}
              // onSelectOption={selectOptionHandler}
              // checkedClass={state.adult ? "restrict-selected" : ""}
            />
          </div>

          <div className="gift-wishlist mt-3">
            <FontAwesomeIcon className="" icon="gift" />
            <Button
              customClassName="wishlist-button bold-600"
              onClick={openGiftwishListHandler}
              btndisabled={false}
            >
              Add Gift Wishlist
            </Button>
          </div>
          {/* <div className="gift-wishlist mt-3">
          <FontAwesomeIcon className="" icon="gift" />
          <Button
            customClassName=" wishlist-button bold-600"
            onClick={() => {}}
            btndisabled={false}
          >
            Add Events to "FUND ME"
          </Button>
        </div> */}
          <div className="mt-4">
            <p className="private-toggle">Notify me when people join </p>
            <Toggle handleClick={notificationHandler} />
          </div>
        </div>
        <div>
          <EventCollaborators
            addCollaborator={addCollaborator}
            addInvitee={addInvitee}
          />
        </div>
        <SideOverLayContainer
          openSide={openGiftWishList}
          customClassName="wishlist-side-container"
          toggleOpenSide={openGiftwishListHandler}
        >
          <GiftWishList />
        </SideOverLayContainer>
      </div>

      <div
        // className="myibloov-create-button-container"
        className={
          formCount === 2
            ? "myibloov-create-button-container myibloov-description-btn"
            : "myibloov-create-button-container"
        }
      >
        <Button
          customClassName="mybloov-create-event-btn-2  bold-600"
          onClick={previousQuestionHandler}
          btndisabled={false}
        >
          {formCount === 1 ? "Cancel" : "Back"}
        </Button>
        <Button
          customClassName="mybloov-create-event-btn-2  bold-600"
          onClick={submitEventHandler}
          btndisabled={validateNextBtn}
        >
          {formCount === 4 ? "Create Event" : "Next"}
        </Button>
      </div>
    </div>
  );
};

EventRestriction.propTypes = {
  eventRestrictionsHandler: PropTypes.func.isRequired,
  notificationHandler: PropTypes.func.isRequired
};

export default EventRestriction;
