import React from "react";

import { Link } from "react-router-dom";
import ItemCard from "../../../../components/itemCard/ItemCard";
import SingleWishlistItemCard from "../singleWishlistItemCard/SingleWishlistItemCard";

const SingleWishlistItems = props => {
  const { wishlistItems } = props;


  if (wishlistItems === undefined || wishlistItems.length == 0) {
    return (
      <div className="single-wishlist-item-container">
        <p>No items on this wishlist</p>
      </div>
    );
  }
  return (
    <div className="single-wishlist-item-container">
      {wishlistItems
        ? wishlistItems.map(wishlist => (
            <Link>
              <SingleWishlistItemCard
                key={wishlist._id}
                title={wishlist.title}
                price={wishlist.price}
                image={wishlist.images}
                pledges={wishlist.pledges}
                wishlistId={wishlist._id}
                quantity={wishlist.quantity}
                currency={wishlist.currency}
                link={wishlist.link}
              />
            </Link>
          ))
        : ""}
    </div>
  );
};

export default SingleWishlistItems;
