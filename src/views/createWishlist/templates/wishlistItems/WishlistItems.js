import React, { useState, useEffect } from "react";
import headset from "../../../../assets/images/headset.png";
import ItemCard from "../../../../components/itemCard/ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./WishlistItems.css";
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

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    // const foundItems = wishlistItems.filter(
    //   (item) =>
    //     item.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
    // );
    // const foundItems = wishlistItems.filter((item) =>
    //   item.name.toLowerCase().includes(searchInput.toLowerCase())
    // );
    // console.log(10023, foundItems);

    // setFilteredItems([...foundItems]);
  };

  useEffect(() => {
    setFilteredItems(
      wishlistItems.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    if (searchInput === "") {
      setFilteredItems([]);
    }
  }, [searchInput]);

  const addToSelectedItemsHandler = (name) => {
    // get the selected item from the array of items
    const selectedItem = filteredItems.find((item) => item.name === name);

    // get the unselected items fromt the array of items
    const remainingItem = filteredItems.filter((item) => item.name !== name);
    setFilteredItems([...remainingItem]);

    const itemIndex = selectedItems.findIndex((item) => item.name === name);
    if (itemIndex > -1) {
      return;
    }
    setSelectedItems([...selectedItems, selectedItem]);

    wishlistItemHandler(selectedItem);
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
              onChange={inputChangeHandler}
            />
          </div>
          <div className="row items-container">
            {filteredItems.map((list) => (
              <ItemCard
                key={list.name}
                image={headset}
                name={list.name}
                price={list.price}
                handleSelectedItem={addToSelectedItemsHandler}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="wishlist-selected mr-4">
        <div className="create-event-title-header">
          <h5>Wishlist Items</h5>
          <small>Items currently on the list</small>
        </div>
        <div className="row selected-items-container">
          {selectedItems.map((list) => (
            <ItemCard
              image={headset}
              name={list.name}
              price={list.price}
              handleSelectedItem={addToSelectedItemsHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistItems;
