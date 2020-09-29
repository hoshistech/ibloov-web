import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FriendRow from "./FriendRow";

const GroupDetails = props => {
  const { groups, friends, selectFriend, selectGroup, toggleSelectAllFriends} = props;

  const [searchInput, setSearchInput] = useState("");

  const [filteredList, setFilteredList] = useState(friends);
  // const [selectedFriends, setSelectedFriends] = useState([]);

  const searchFriends = friendName => {
    if (searchInput.length <= 1 || !searchInput) {
      setFilteredList(friends);
      // setSelectedFriends([]);
      return;
    }
    const currentList = friends;

    const newList = currentList.filter(friend => {
      const name = friend.fullName.toLowerCase();

      return name.includes(searchInput);
    });

    setFilteredList(newList);
  };

  const inputChangeHandler = e => {
    const value = e.target.value;
    setSearchInput(value);
    searchFriends(value);
  };

  const selectAllHandler = (e) => {
    const value = e.target.checked;
    toggleSelectAllFriends(value)
    const checkbox = document.querySelectorAll('.addFriendCheck')
    checkbox.forEach(checkbox => checkbox.checked = value)
  }

  return (
    <div>
      <div className="select-container mb-3">
        <label className="filter-select-label">
          <FontAwesomeIcon className="card-icon" icon="chevron-down" />
        </label>
        <select
          id="cars"
          className="form-control filter-select"
          onChange={selectGroup}
        >
          <option value="">Select Group</option>
          {groups
            ? groups.map(group => (
                <option key={group._id} value={group._id}>
                  {group.name}
                </option>
              ))
            : ""}
        </select>
      </div>
      <div className="friends">
        <div className="mt-4">
          <label htmlFor="friendName">friend Name</label>
          <input
            type="search"
            className="form-control auth-input"
            required
            name="friendName"
            value={searchInput}
            id="friendName"
            onChange={inputChangeHandler}
            placeholder="input friend name"
            autoComplete="off"
          />
        </div>
        <div className="friendlist-container-1">
            <div className="friendlist-container">
              <div className="row add-friend-select-all">
                select all
                <div className="align-self-center">
                  <input onClick={selectAllHandler} type="checkbox" name="selectAllFriends" />
                </div>
              </div>
              {filteredList
                ? filteredList.map(friend => (
                    <FriendRow key={friend._id} friend={friend} selectFriend={selectFriend} toggleCheckBox={selectAllHandler} />
                  ))
                : ""}
            </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
