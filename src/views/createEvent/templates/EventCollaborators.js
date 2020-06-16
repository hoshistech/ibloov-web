import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../components/button/Button";
import FriendSmallCard from "../../../components/friendSmallCard/FriendSmallCard";
import { useSelector } from "react-redux";
import ListDropdown from "../../../components/listDropdown/ListDropdown";

const EventCollaborators = (props) => {
  const { addCollaborator } = props;
  const [searchInput, setSearchInput] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [selectedInvitees, setSelectedInvitees] = useState();
  const [selectedCollaborators, setSelectedCollaborators] = useState([]);

  const { friends } = useSelector((state) => state.friend);

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setSearchInput(value.toLowerCase());

    if (value.length < 0) {
      setFilteredList([]);
    }

    searchFriends();
  };

  const searchFriends = () => {
    // const itemIndex = friends.indexOf(
    //   (friend) => friend.fullName === searchInput
    // );
    // const itemIndex = friends.map((friend) =>
    //   friend.fullName.indexOf(searchInput)
    // );

    if (searchInput.length === 0) {
      setFilteredList([]);
      return;
    }
    const currentList = friends;

    const newList = currentList.filter((friend) => {
      const name = friend.fullName.toLowerCase();

      return name.includes(searchInput);
    });

    setFilteredList(newList);
  };

  const addCollaboratorHandler = (friend) => {
    const currentList = selectedCollaborators;

    const newList = [...currentList, friend];
    const itemIndex = selectedCollaborators.findIndex(
      (pickedFriend) => pickedFriend.id === friend.id
    );
    if (itemIndex > -1) {
      return;
    }
    setSelectedCollaborators(newList);
    addCollaborator(friend);
  };

  const removeCollaboratorHandler = (user) => {
    const newList = selectedCollaborators.filter(
      (friend) => friend.id !== user.id
    );

    setSelectedCollaborators(newList);
    const remove = true;
    addCollaborator(user, remove);
  };

  const addInviteeHandler = () => {};
  return (
    <div className="collaborators-container">
      <div>
        <div className="create-event-title-header">
          <h5>Invite Collaborators</h5>
          <small>Invite other friends to plan the event</small>
        </div>
        <div className="row">
          <div className="item-search-container">
            <FontAwesomeIcon className="items-search-icon" icon="search" />
            <input
              className="form-control mr-sm-2 items-search-input"
              type="search"
              placeholder="Search for friends to add"
              aria-label="Search"
              // onChange={inputChangeHandler}
              onKeyUp={inputChangeHandler}
            />
          </div>
        </div>
        <div>
          <ListDropdown
            customClassName="friend-dropdown-container"
            items={filteredList}
            handleClick={addCollaboratorHandler}
          />
        </div>
        <div className="row mt-2">
          {selectedCollaborators
            ? selectedCollaborators.map((friend) => (
                <FriendSmallCard
                  name={friend.fullName}
                  avatar={friend.avatar}
                  removeCollaborator={removeCollaboratorHandler}
                  user={friend}
                />
              ))
            : ""}
        </div>
      </div>
      <div>
        <div>
          <h5>Invite friends</h5>
          <small>Invite other friends to plan the event</small>
        </div>
        <div className="row">
          <div className="row">
            <FriendSmallCard name="Luiz Albert" />
            <FriendSmallCard name="Heinze Shaw" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCollaborators;
