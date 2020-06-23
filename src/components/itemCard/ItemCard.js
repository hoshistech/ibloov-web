import React from "react";
import ProgressiveImage from "../progressiveImage/ProgressiveImage";

import "./ItemCard.css";

const ItemCard = (props) => {
  const {
    id,
    image,
    name,
    price,
    handleSelectedItem,
    priceRaw,
    link,
    forSelectedItems,
  } = props;

  let currency = "NGN";
  if (!forSelectedItems) {
    // currency = priceRaw.split("")[0];
  } else {
  }

  return (
    <div
      className="item-card"
      onClick={() => handleSelectedItem(id, name, price, currency, image, link)}
    >
      <div className="item-details">
        <h5>{name}</h5>
        <p>{forSelectedItems ? `${currency} ${price}` : priceRaw}</p>
      </div>
      <div className="item-image-container">
        <ProgressiveImage src={image} customClass="item-card-image" />
      </div>
    </div>
  );
};

export default ItemCard;
