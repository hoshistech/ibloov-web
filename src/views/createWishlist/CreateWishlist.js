import React, { useState, useReducer, useCallback } from "react";
import WishlistDescription from "./templates/wishlistDescription/WishlistDescription";
import { formReducer, FORM_INPUT_UPDATE } from "../../utils/formReducer";
import CreateWishlistSubmitBtn from "./templates/createWishlistSubmitBtn/CreateWishlistSubmitBtn";
import WishlistItems from "./templates/wishlistItems/WishlistItems";

const CreateWishlist = (props) => {
  const [formCount, setFormCount] = useState(2);
  const [image, setImage] = useState("");

  const imageUploadHandler = (image) => {
    setImage(image);
  };

  const initilaState = {
    inputValues: {
      eventTitle: "",
      eventCode: "",
      eventDetail: "",
    },
    inputValidities: {
      eventTitle: false,
      eventCode: false,
      eventDetail: false,
    },
    formIsValid: true,
  };

  const [formState, dispatchFormState] = useReducer(formReducer, initilaState);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  const nextQuestionHandler = (e) => {
    e.preventDefault();
    if (formCount === 4) {
      setFormCount(4);
    } else {
      setFormCount(formCount + 1);
    }
  };

  const previousQuestionHandler = (e) => {
    e.preventDefault();
    if (formCount === 1) {
      setFormCount(1);
    } else {
      setFormCount(formCount - 1);
    }
  };

  const onsubmitEventHandler = () => {};

  return (
    <section className="mt-3">
      <div className="row createvent-container">
        <div className="col-md-auto create-event-first-row">
          <div className="step-number-row">
            <div className="step-container">
              <div
                className={
                  formCount === 1
                    ? "step-number-circle active"
                    : "step-number-circle"
                }
              >
                <div>
                  <p>1</p>
                </div>
              </div>
              <span className="vertical-line"></span>
            </div>
            <div className="step-container">
              <div
                className={
                  formCount === 2
                    ? "step-number-circle active"
                    : "step-number-circle"
                }
              >
                <div>
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-auto">
            <form>
              <div className={formCount === 1 ? "show-question" : "question"}>
                <p>step {formCount}</p>
                <WishlistDescription
                  inputChangeHandler={inputChangeHandler}
                  imageUpload={imageUploadHandler}
                />
              </div>
              <div className={formCount === 2 ? "show-question" : "question"}>
                <p>step {formCount}</p>
                <WishlistItems />
              </div>
              <CreateWishlistSubmitBtn
                nextQuestionHandler={nextQuestionHandler}
                previousQuestionHandler={previousQuestionHandler}
                formCount={formCount}
                submitEventHandler={onsubmitEventHandler}
                // isStepValid={isStepValid}
                formIsValid={formState.formIsValid}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateWishlist;
