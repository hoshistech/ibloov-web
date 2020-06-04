import React from "react";
import PropTypes from "prop-types";
import ProgressiveImage from "../progressiveImage/ProgressiveImage";

import "./ItemCard.css";

const ItemCard = (props) => {
  const { image, name, price, handleSelectedItem } = props;
  return (
    <div className="row item-card" onClick={() => handleSelectedItem(name)}>
      <div className="item-details">
        <h5>{name}</h5>
        <p>${price}</p>
      </div>
      <div>
        <ProgressiveImage src={image} customClass="item-card-image" />
      </div>
    </div>
  );
};

export default ItemCard;
