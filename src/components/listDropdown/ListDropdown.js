import React from "react";

import "./ListDropdown.css";

const ListDropdown = (props) => {
  const { customClassName, items, handleClick, type } = props;

  let displayItem;

  if (items) {
    displayItem = items.map((item) => (
      <li
        class="list-group-item"
        key={item.id}
        onClick={() => handleClick(item, type)}
      >
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
