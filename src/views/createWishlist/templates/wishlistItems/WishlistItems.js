import React, { useState, useEffect } from "react";
import headset from "../../../../assets/images/headset.png";
import ItemCard from "../../../../components/itemCard/ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./WishlistItems.css";
import Axios from "../../../../utils/axiosConfig";
import { getSearchedItems } from "../../createWishlist.action";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../components/loadingIndicator/Loading";
const wishlistItems = [
  { name: "Ladies watch", price: 50, currency: "$", image: headset },
  { name: "Iphone X", price: 150, currency: "$", image: headset },
  { name: "Beats Head Phone", price: 30, currency: "$", image: headset },
  { name: "Sun Glasses", price: 70, currency: "$", image: headset },
  { name: "Sun", price: 70, currency: "$", image: headset },
  { name: "Water bottle", price: 70, currency: "$", image: headset },
  { name: "sanitizers", price: 70, currency: "$", image: headset },
  { name: "camera", price: 70, currency: "$", image: headset },
  { name: "samsung s8", price: 70, currency: "$", image: headset },
];

const WishlistItems = (props) => {
  const { wishlistItemHandler } = props;
  const [searchInput, setSearchInput] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  // const [loading, setLoading] = useState(false);

  const { wishlistItems, loading } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    const value = e.target.value;

    setSearchInput(value);

    if (value.length > 2) {
      searchProduct(value);
    }
  };

  const addToSelectedItemsHandler = (
    id,
    name,
    price,
    currency,
    image,
    link
  ) => {
    // get the selected item from the array of items
    const newItem = {
      id,
      title: name,
      price,
      currency,
      link,
      image,
    };

    const itemIndex = selectedItems.findIndex((item) => item.link === link);
    if (itemIndex > -1) {
      return;
    }
    setSelectedItems([...selectedItems, newItem]);

    // send it as data to the create wishlist componenets
    wishlistItemHandler(newItem);
  };

  const searchProduct = async () => {
    dispatch(getSearchedItems(searchInput));
    return;
  };

  return (
    <div className="row wishlist-items-container">
      <div className="mb-3 wishlist-add-items ml-3">
        <div className="create-event-title-header">
          <h5>Add Items</h5>
          <small>Add different items to the list</small>
        </div>
        <div>
          <div className="item-search-container">
            <FontAwesomeIcon className="items-search-icon" icon="search" />
            <input
              className="form-control mr-sm-2 items-search-input"
              type="search"
              placeholder="Search for products to add"
              aria-label="Search"
              // onChange={inputChangeHandler}
              onKeyUp={inputChangeHandler}
            />
          </div>
          {loading && !wishlistItems ? (
            <div className="item-card-loading">
              <Loading />
            </div>
          ) : (
            ""
          )}

          {wishlistItems ? (
            <div className="row items-container">
              {wishlistItems.map((list) => (
                <ItemCard
                  key={list.id}
                  id={list.id}
                  image={list.image}
                  link={list.link}
                  name={list.title}
                  price={list.price}
                  priceRaw={list.price_raw.split(" ")[0]}
                  forSelectedItems={false}
                  handleSelectedItem={addToSelectedItemsHandler}
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="wishlist-selected mr-4">
        <div className="create-event-title-header">
          <h5>Wishlist Items</h5>
          <small>Items currently on the list</small>
        </div>
        {selectedItems ? (
          <div className="row selected-items-container">
            {selectedItems.map((list) => (
              <ItemCard
                key={list.id}
                id={list.id}
                image={list.image}
                name={list.title}
                price={list.price}
                priceRaw={list.currency}
                forSelectedItems={true}
                // handleSelectedItem={addToSelectedItemsHandler}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WishlistItems;
