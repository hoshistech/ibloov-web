import React from "react";
import Button from "../../../../../components/button/Button";
const CreateGroupSubmitBtn = props => {
  const { submitEventHandler, formIsValid, groupName } = props;

  return (
    <div className="myibloov-create-button-container">
      <Button
        customClassName="mybloov-create-event-btn-2  bold-600"
        onClick={() => submitEventHandler(groupName)}
        btndisabled={!formIsValid}
      >
        Submit
      </Button>
    </div>
  );
};

export default CreateGroupSubmitBtn;
