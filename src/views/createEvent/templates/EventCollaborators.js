import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../components/button/Button";
import FriendSmallCard from "../../../components/friendSmallCard/FriendSmallCard";
import { useSelector } from "react-redux";
import ListDropdown from "../../../components/listDropdown/ListDropdown";

const EventCollaborators = (props) => {
  const { addCollaborator, addInvitee } = props;
  const [searchInput, setSearchInput] = useState("");

  const [filteredList, setFilteredList] = useState([]);
  const [selectedCollaborators, setSelectedCollaborators] = useState([]);

  const [filteredInviteeList, setFilteredInviteeList] = useState([]);
  const [selectedInvitees, setSelectedInvitees] = useState([]);

  const { friends } = useSelector((state) => state.friend);

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSearchInput(value.toLowerCase());
    if (value.length < 0) {
      setFilteredList([]);
      setFilteredInviteeList([]);
    }

    if (name === "collaborator") {
      searchFriends(name);
    } else {
      searchFriends(name);
    }
  };

  const searchFriends = (friendName) => {
    if (searchInput.length === 0) {
      setFilteredList([]);
      setFilteredInviteeList([]);
      return;
    }
    const currentList = friends;

    const newList = currentList.filter((friend) => {
      const name = friend.fullName.toLowerCase();

      return name.includes(searchInput);
    });

    if (friendName === "collaborator") {
      setFilteredList(newList);
    } else {
      setFilteredInviteeList(newList);
    }
  };

  const addfriendHandler = (friend, type) => {
    if (type === "collaborator") {
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
    } else {
      const currentList = selectedInvitees;
      const newList = [...currentList, friend];
      const itemIndex = selectedInvitees.findIndex(
        (pickedFriend) => pickedFriend.id === friend.id
      );
      if (itemIndex > -1) {
        return;
      }
      setSelectedInvitees(newList);
      addInvitee(friend);
    }
  };

  const removeCollaboratorHandler = (user, type) => {
    if (type === "collaborator") {
      const newList = selectedCollaborators.filter(
        (friend) => friend.id !== user.id
      );

      setSelectedCollaborators(newList);
      const remove = true;
      addCollaborator(user, remove);
    } else {
      const newList = selectedInvitees.filter(
        (friend) => friend.id !== user.id
      );
      setSelectedInvitees(newList);
      const remove = true;
      addInvitee(user, remove);
    }
  };
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
              name="collaborator"
              // onChange={inputChangeHandler}
              onKeyUp={inputChangeHandler}
              autocomplete="off"
            />
          </div>
        </div>
        <div>
          <ListDropdown
            customClassName="friend-dropdown-container"
            items={filteredList}
            handleClick={addfriendHandler}
            type="collaborator"
          />
        </div>
        <div className="row mt-2">
          {selectedCollaborators
            ? selectedCollaborators.map((friend) => (
                <FriendSmallCard
                  key={friend.id}
                  name={friend.fullName}
                  avatar={friend.avatar}
                  removeCollaborator={removeCollaboratorHandler}
                  user={friend}
                  type="collaborator"
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
          <div className="item-search-container">
            <FontAwesomeIcon className="items-search-icon" icon="search" />
            <input
              className="form-control mr-sm-2 items-search-input"
              type="search"
              placeholder="Search for friends to invite"
              aria-label="Search"
              name="invitee"
              onKeyUp={inputChangeHandler}
              autocomplete="off"
            />
          </div>
        </div>
        <div>
          <ListDropdown
            customClassName="friend-dropdown-container"
            items={filteredInviteeList}
            handleClick={addfriendHandler}
            type="invitee"
          />
        </div>
        <div className="row mt-2">
          <div className="row">
            {selectedInvitees
              ? selectedInvitees.map((friend) => (
                  <FriendSmallCard
                    key={friend.id}
                    name={friend.fullName}
                    avatar={friend.avatar}
                    removeCollaborator={removeCollaboratorHandler}
                    user={friend}
                    type="invitee"
                  />
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCollaborators;
