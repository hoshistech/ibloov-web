import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/button/Button";

const CreateEventSubmitBtn = (props) => {
  const {
    nextQuestionHandler,
    previousQuestionHandler,
    formCount,
    submitEventHandler,
    formIsValid,
    isStepValid,
    dateTimeValid,
  } = props;
  const nextStep = isStepValid && formIsValid && dateTimeValid;
  return (
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
        onClick={formCount === 4 ? submitEventHandler : nextQuestionHandler}
        btndisabled={!nextStep}
        // btndisabled={false}
      >
        {formCount === 4 ? "Create Event" : "Next"}
      </Button>
    </div>
  );
};

CreateEventSubmitBtn.propTypes = {
  nextQuestionHandler: PropTypes.func,
  previousQuestionHandler: PropTypes.func,
  formCount: PropTypes.number,
  submitEventHandler: PropTypes.func,
  formIsValid: PropTypes.bool,
};

export default CreateEventSubmitBtn;
