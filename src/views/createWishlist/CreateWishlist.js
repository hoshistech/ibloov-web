import React, { useState, useReducer, useCallback, useEffect } from "react";
import WishlistDescription from "./templates/wishlistDescription/WishlistDescription";
import { formReducer, FORM_INPUT_UPDATE } from "../../utils/formReducer";
import CreateWishlistSubmitBtn from "./templates/createWishlistSubmitBtn/CreateWishlistSubmitBtn";
import WishlistItems from "./templates/wishlistItems/WishlistItems";
import { useDispatch, useSelector } from "react-redux";
import { createWishlist, endCreateWishlist } from "./createWishlist.action";
import EventSuccessSideBar from "../../components/eventSuccessSideBar/EventSuccessSideBar";
import Modal from "../../components/modal/Modal";

import "./CreateWishlist.css";
const CreateWishlist = (props) => {
  const [formCount, setFormCount] = useState(1);
  const [image, setImage] = useState("");
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isCreatedWishlistSuccess, setIsWishlistSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const {
    success: isWishlistCreated,
    createError: error,
    loading,
  } = useSelector((state) => state.wishlist);

  const imageUploadHandler = (image) => {
    setImage(image);
  };

  const initilaState = {
    inputValues: {
      wishilistName: "",
    },
    inputValidities: {
      wishilistName: false,
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

  const addWishlistItemsHandler = (item) => {
    setWishlistItems([...wishlistItems, item]);
  };

  const onsubmitEventHandler = () => {
    const newWishlist = {
      name: formState.inputValues.wishilistName,
      items: wishlistItems,
    };

    dispatch(createWishlist(newWishlist, image));
  };

  const wishlistCreatedSuccesshandler = useCallback(() => {
    if (isWishlistCreated) {
      setIsWishlistSuccess(true);
      return;
    }
    setIsWishlistSuccess(false);
  }, [isWishlistCreated]);

  const closeWishlistCreatedMessage = (e) => {
    e.preventDefault();
    // dispatch(eventCreateEnd());
    setIsWishlistSuccess(false);
    window.location.reload();
  };

  const closeModalHandler = () => {
    dispatch(endCreateWishlist());
    setShowModal(false);
  };

  useEffect(() => {
    wishlistCreatedSuccesshandler();
    // dispatch(fetchEvents());
  }, [isWishlistCreated, error, wishlistCreatedSuccesshandler]);

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
                <WishlistItems wishlistItemHandler={addWishlistItemsHandler} />
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
      {isWishlistCreated ? (
        <EventSuccessSideBar
          closeSuccessMessage={closeWishlistCreatedMessage}
          message="Your wishlist has been created"
          customClassName={
            isCreatedWishlistSuccess ? "show-create-success" : ""
          }
        />
      ) : (
        ""
      )}
      <div className={error ? "wishlist-error-container" : ""}>
        {error ? (
          <div onClick={closeModalHandler} className="back-drop"></div>
        ) : null}

        <Modal
          showModal={error ? true : false}
          handleCloseModal={closeModalHandler}
          modalHeader="Create Wishlist Error"
        >
          Something went wrong, Please fill all the wishlist details and try
          again
        </Modal>
      </div>
    </section>
  );
};

export default CreateWishlist;
