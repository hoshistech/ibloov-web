import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Avatar from "react-avatar";
import Button from "../../../components/button/Button";
import FriendSmallCard from "../../../components/friendSmallCard/FriendSmallCard";
import { useSelector } from "react-redux";
import ListDropdown from "../../../components/listDropdown/ListDropdown";
import Modal from "../../../components/modal/Modal";

const EventCollaborators = props => {
  const { addCollaborator, addInvitee } = props;
  const [searchInput, setSearchInput] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [filteredList, setFilteredList] = useState([]);
  const [selectedCollaborators, setSelectedCollaborators] = useState([]);

  const [filteredInviteeList, setFilteredInviteeList] = useState([]);
  const [selectedInvitees, setSelectedInvitees] = useState([]);

  const { friends } = useSelector(state => state.friend);

  useEffect(() => {
    if (friends) {
      setFilteredList(friends.slice(0,5));      
    }

  }, [friends]);

  const inputChangeHandler = e => {
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

  const searchFriends = friendName => {
    if (searchInput.length === 0) {
      setFilteredList([]);
      setFilteredInviteeList([]);
      return;
    }
    const currentList = friends;

    const newList = currentList.filter(friend => {
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
        pickedFriend => pickedFriend.id === friend.id
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
        pickedFriend => pickedFriend.id === friend.id
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
        friend => friend.id !== user.id
      );

      setSelectedCollaborators(newList);
      const remove = true;
      addCollaborator(user, remove);
    } else {
      const newList = selectedInvitees.filter(friend => friend.id !== user.id);
      setSelectedInvitees(newList);
      const remove = true;
      addInvitee(user, remove);
    }
  };

  const onCloseModal = () => {
    setShowModal(!showModal);
  };

  let peopleGoing;
  if (selectedCollaborators) {
    peopleGoing = selectedCollaborators.length - 3;
    if (peopleGoing <= 0) {
      peopleGoing = "";
    } else {
      peopleGoing = `+${peopleGoing}`;
    }
  }

  let friendAttending;
  if (selectedInvitees) {
    friendAttending = selectedInvitees.length - 3;
    if (friendAttending <= 0) {
      friendAttending = "";
    } else {
      friendAttending = `+${friendAttending}`;
    }
  }
  return (
    <div className="collaborators-container">
      <div>
        <div className="create-event-title-header">
          <h5>Invite Collaborators</h5>
          <small>Invite other friends to plan the event</small>
        </div>
        <div className="row">
          <div className="invite-friend-container">
            <Modal
              modalButton="Invite friends"
              buttonClass="btn mybloov-create-event-btn bold-600"
              modalHeading="Invite Collaborators"
              openButtonClass="btn wishlist-button bold-600"
            >
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
              <div className="friend-dropdown-list">
                <ListDropdown
                  customClassName="friend-dropdown-container"
                  items={filteredList}
                  handleClick={addfriendHandler}
                  type="collaborator"
                />
              </div>
              <div className="row mx-0 mt-2  mb-3">
                {selectedCollaborators
                  ? selectedCollaborators.map(friend => (
                      <Avatar
                        key={friend.id}
                        size={40}
                        round={true}
                        className="mr-2 friend-avatar"
                        name={friend.fullName}
                        showSave={false}
                        onClick={() =>
                          removeCollaboratorHandler(friend, "collaborator")
                        }
                      />
                      // <FriendSmallCard
                      //   key={friend.id}
                      //   name={friend.fullName}
                      //   avatar={friend.avatar}
                      //   removeCollaborator={removeCollaboratorHandler}
                      //   user={friend}
                      //   type="collaborator"
                      // />
                    ))
                  : ""}
              </div>
            </Modal>
          </div>
        </div>

        <div className="row mt-2  mb-3">
          {selectedCollaborators
            ? selectedCollaborators.slice(0, 3).map(friend => (
                // <FriendSmallCard
                //   key={friend.id}
                //   name={friend.fullName}
                //   avatar={friend.avatar}
                //   removeCollaborator={removeCollaboratorHandler}
                //   user={friend}
                //   type="collaborator"
                // />
                <Avatar
                  size={40}
                  key={friend.id}
                  round={true}
                  className="mr-2 friend-avatar"
                  name={friend.fullName}
                  onClick={() =>
                    removeCollaboratorHandler(friend, "collaborator")
                  }
                />
              ))
            : ""}
          <div className="number-going">{peopleGoing}</div>
        </div>
      </div>

      <div className="invite-friends">
        <div className="create-event-title-header">
          <h5>Invite friends</h5>
          <small>Invite other friends to attend the event</small>
        </div>
        <div className="row">
          <div className="invite-friend-container">
            <Modal
              modalButton="Add friends"
              buttonClass="btn mybloov-create-event-btn bold-600"
              modalHeading="Invite friends"
              openButtonClass="btn wishlist-button bold-600"
            >
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
              <div className="friend-dropdown-list">
                <ListDropdown
                  customClassName="friend-dropdown-container"
                  items={filteredInviteeList}
                  handleClick={addfriendHandler}
                  type="invitee"
                />
              </div>
              <div className="row  mx-0 mt-3">
                <div className="">
                  {selectedInvitees
                    ? selectedInvitees.map(friend => (
                        <Avatar
                          size={40}
                          key={friend.id}
                          round={true}
                          className="mr-2 friend-avatar"
                          name={friend.fullName}
                          showSave={false}
                          onClick={() =>
                            removeCollaboratorHandler(friend, "invitee")
                          }
                        />
                        // <FriendSmallCard
                        //   key={friend.id}
                        //   name={friend.fullName}
                        //   avatar={friend.avatar}
                        //   removeCollaborator={removeCollaboratorHandler}
                        //   user={friend}
                        //   type="invitee"
                        // />
                      ))
                    : ""}
                </div>
              </div>
            </Modal>
          </div>
        </div>

        <div className="row mt-3">
          <div className="row">
            {selectedInvitees
              ? selectedInvitees.slice(0, 3).map(friend => (
                  <Avatar
                    size={40}
                    round={true}
                    key={friend.id}
                    className="mr-2 friend-avatar"
                    name={friend.fullName}
                    onClick={removeCollaboratorHandler}
                    showSave={false}
                    onClick={() => removeCollaboratorHandler(friend, "invitee")}
                  />
                  // <FriendSmallCard
                  //   key={friend.id}
                  //   name={friend.fullName}
                  //   avatar={friend.avatar}
                  //   removeCollaborator={removeCollaboratorHandler}
                  //   user={friend}
                  //   type="invitee"
                  // />
                ))
              : ""}
            <div className="number-going">{friendAttending}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCollaborators;
