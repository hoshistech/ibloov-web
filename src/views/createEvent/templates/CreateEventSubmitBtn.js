import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/button/Button";

const CreateEventSubmitBtn = (props) => {
  const {
    nextQuestionHandler,
    previousQuestionHandler,
    formCount,
    submitEventHandler,
  } = props;
  return (
    <div className="myibloov-create-button-container">
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
        btndisabled={false}
      >
        {formCount === 4 ? "Create Event" : "Next"}
      </Button>
    </div>
  );
};

CreateEventSubmitBtn.propTypes = {};

export default CreateEventSubmitBtn;
