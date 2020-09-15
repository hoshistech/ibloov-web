import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FriendRow from "./FriendRow";

const GroupDetails = props => {
  const { groups, friends, selectFriend, selectGroup } = props;

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
            autocomplete="off"
          />
        </div>
        <div className="friendlist-container-1">
          {searchInput ? (
            <div className="friendlist-container">
              <div className="row add-friend-select-all">
                select all
                <div className="align-self-center">
                  <input type="checkbox" />
                </div>
              </div>
              {filteredList
                ? filteredList.map(friend => (
                    <FriendRow friend={friend} selectFriend={selectFriend} />
                  ))
                : ""}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
