import React from "react";

import { useHistory, Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemCard from "../../../../components/itemCard/ItemCard";
import { chunkArray, genRandomNumber } from "../../../../utils/helper";

const SingleWishlistItems = (props) => {
  const { wishlistItems } = props;

  if (wishlistItems === undefined || wishlistItems.length == 0) {
    return (
      <div className="single-wishlist-item-container">
        <p>No items on this wishlist</p>
      </div>
    );
  }

  const randomImage = () => {
    // const randomNumber = Math.floor(Math.random() * Math.floor(6));
    const randomNumber = genRandomNumber(0, 10);
    const image = [
      "https://source.unsplash.com/2250x2282/?concert",
      "https://source.unsplash.com/1250x882/?club",
      "https://source.unsplash.com/3250x1282/?party",
      "https://source.unsplash.com/850x782/?show",
      "https://source.unsplash.com/950x2182/?drinks",
      "https://source.unsplash.com/1350x1082/?beach",
      "https://source.unsplash.com/1250x382/?club",
      "https://source.unsplash.com/950x2182/?food",
      "https://source.unsplash.com/850x1782/?games",
      "https://source.unsplash.com/1950x820/?umbrella",
      "https://source.unsplash.com/550x1082/?plates",
    ];
    return image[randomNumber];
  };

  return (
    <div className="single-wishlist-item-container">
      <div className="wilshlist-item-col">
        {wishlistItems
          ? wishlistItems[0].map((list) => (
              <Link>
                <ItemCard
                  key={list.id}
                  id={list.id}
                  image={randomImage()}
                  link={list.link}
                  name={list.title}
                  price={list.price}
                  currency={list.currency}
                  // priceRaw={list.price_raw.split(" ")[0]}
                  forSelectedItems={true}
                  handleSelectedItem={() => {}}
                />
              </Link>
            ))
          : ""}
      </div>
      <div className="wilshlist-item-col">
        {wishlistItems
          ? wishlistItems[1].map((list) => (
              <Link>
                <ItemCard
                  key={list.id}
                  id={list.id}
                  image={randomImage()}
                  link={list.link}
                  name={list.title}
                  price={list.price}
                  currency={list.currency}
                  // priceRaw={list.price_raw.split(" ")[0]}
                  forSelectedItems={true}
                  handleSelectedItem={() => {}}
                />
              </Link>
            ))
          : ""}
      </div>
      <div className="wilshlist-item-col">
        {wishlistItems
          ? wishlistItems[2].map((list) => (
              <Link>
                <ItemCard
                  key={list.id}
                  id={list.id}
                  image={randomImage()}
                  link={list.link}
                  name={list.title}
                  price={list.price}
                  currency={list.currency}
                  // priceRaw={list.price_raw.split(" ")[0]}
                  forSelectedItems={true}
                  handleSelectedItem={() => {}}
                />
              </Link>
            ))
          : ""}
      </div>
      <div className="wilshlist-item-col">
        {wishlistItems
          ? wishlistItems[3].map((list) => (
              <Link>
                <ItemCard
                  key={list.id}
                  id={list.id}
                  image={randomImage()}
                  link={list.link}
                  name={list.title}
                  price={list.price}
                  currency={list.currency}
                  // priceRaw={list.price_raw.split(" ")[0]}
                  forSelectedItems={true}
                  handleSelectedItem={() => {}}
                />
              </Link>
            ))
          : ""}
      </div>
    </div>
  );
};

export default SingleWishlistItems;
