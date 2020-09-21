import React from "react";
import Button from "../../../../components/button/Button";

const CreateWishlistSubmitBtn = (props) => {
  const {
    nextQuestionHandler,
    previousQuestionHandler,
    formCount,
    submitEventHandler,
    formIsValid,
    isStepValid,
  } = props;

  const nextStep = isStepValid && formIsValid;
  // const nextStep = formIsValid;
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
        onClick={formCount === 2 ? submitEventHandler : nextQuestionHandler}
        btndisabled={!nextStep}
        // btndisabled={false}
      >
        {formCount === 2 ? "Finish" : "Next"}
      </Button>
    </div>
  );
};


export default CreateWishlistSubmitBtn;
