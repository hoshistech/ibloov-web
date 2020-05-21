import React from "react";

import "./SideOverLayContainer.css";
import Button from "../button/Button";

const SideOverLayContainer = (props) => {
  const { openSide, toggleOpenSide, children, customClassName } = props;

  let classNames = "ibloov-sidenav close-ibloov-side";

  if (openSide) {
    classNames = "ibloov-sidenav open-ibloov-side";
  }

  return (
    <div id="ibloov-sidenav" className={`${customClassName} ${classNames}`}>
      <Button
        customClassName="ibloove-side-close-btn"
        btndisabled={false}
        onClick={toggleOpenSide}
      >
        &times;
      </Button>
      {children}
    </div>
  );
};

export default SideOverLayContainer;
