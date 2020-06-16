import React from "react";
import Loading from "../loadingIndicator/Loading";

import "./ListDropdown.css";

const ListDropdown = (props) => {
  const { customClassName, items, handleClick } = props;

  let displayItem;

  if (items) {
    displayItem = items.map((item) => (
      <li class="list-group-item" onClick={() => handleClick(item)}>
        {item.fullName}
      </li>
    ));
  }

  return (
    <div className={`row ${customClassName}`}>
      <ul class="list-group list-group-flush friend-drop-down">
        {displayItem}
      </ul>
    </div>
  );
};

export default ListDropdown;
