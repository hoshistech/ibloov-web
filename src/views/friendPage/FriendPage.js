import React, { useState, useEffect, useCallback } from "react";
import faker from "faker";
import { toastr } from "react-redux-toastr";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./FriendPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FriendList from "./template/friendList.js/FriendList";
import GroupList from "./template/groupList/GroupList";
import { genRandomNumber } from "../../utils/helper";
import DropDown from "../../components/dropDown/DropDown";
import { useDispatch, useSelector } from "react-redux";
import {
  followUser,
  getFriendRequestList,
  acceptFriendRequest,
  denyFriendRequest,
  getUserFriends,
  createGroup,
  getUserGroup,
  addFriendToGroupAction
} from "./friendPage.action";
import FriendRequest from "./template/friendRequest/FriendRequest";
import Button from "../../components/button/Button";
import CreateGroup from "./template/createGroup/CreateGroup";
import AddFriendToGroup from "./template/addFriendToGroup/AddFriendToGroup";
import Modal from "../../components/modal/Modal";

const FriendPage = props => {
  const [selectedTab, setSelectedTab] = useState("ibloov");
  const [selectedGroup, setSelectedGroup] = useState("Family");
  const [showDropDown, setShowDropDown] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showAddFriendToGroup, setShowAddFriendToGroup] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { friendRequestList, userFollowing, friends, groups } = useSelector(
    state => state.friend
  );

  let requestList;

  if (friendRequestList) {
    requestList = friendRequestList;
  }

  const fetchFriendRequest = useCallback(() => {
    // if (selectedTab === "group") {
    dispatch(getUserGroup());
    // }
    dispatch(getFriendRequestList());
    dispatch(getUserFriends());
  }, [dispatch, selectedTab]);

  useEffect(() => {
    if (location.state) {
      if (location.state) {
        setSelectedTab(location.state.action);
        setShowCreate(false);
        setShowAddFriendToGroup(false);
      }
    }
    fetchFriendRequest();
  }, [location]);

  const acceptFriendRequestHandler = async requestId => {
    await dispatch(acceptFriendRequest(requestId));
    // dispatch(getUserFriends());
  };

  const rejectFriendRequestHandler = requestId => {
    dispatch(denyFriendRequest(requestId));
    // dispatch(fetchFriendRequest());
  };

  const selectedTabHandler = e => {
    const tabSwitch = e.target.name;
    e.preventDefault();
    fetchFriendRequest();
    setSelectedTab(tabSwitch);
  };

  const selectedGroupHandler = index => {
    setSelectedGroup(index);
  };

  const followUserHandler = userId => {
    dispatch(followUser(userId));
  };

  const toggleDropdownOptionHandler = id => {
    if (id === "dropdownId") {
      setShowDropDown(!showDropDown);
      return;
    }
    setShowDropDown(false);
  };

  const createButtonHandler = e => {
    e.preventDefault();
    setShowCreate(!showCreate);
  };

  const createGroupHandler = groupName => {
    dispatch(createGroup(groupName, history));
  };

  const toggleAddFriendToGroup = () => {
    setShowAddFriendToGroup(!showAddFriendToGroup);
  };

  const handleAddFriendToGroup = (groupId, friends) => {
    if (groupId === "") {
      toastr.error("Please select a group", {
        timeOut: 0,
        type: "error",
        position: "top-right", // This will override the global props position.
        attention: true // This will add a shadow like the confirm method.
      });
    }
    dispatch(addFriendToGroupAction(groupId, friends, history));
  };

  let contactGroups;
  let aa = [];

  if (groups) {
    const randomFriends = Array(genRandomNumber(3, 9))
      .fill()
      .map((num, index) =>
        aa.push({
          image: faker.image.avatar(),
          _id: faker.random.uuid(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          phoneNumber: faker.phone.phoneNumber(),
          email: faker.internet.email(),
          groups: groups[genRandomNumber(0, 6)]
        })
      );
  }

  // 1 get the friend data and filter by the value of the selected group

  const groundFriends = [...aa];

  return (
    <div className="myfriends-container">
      <div>
        <Navbar />
      </div>
      <section className="myfriends">
        <div className="row myfriends-first-row">
          <div className="myfriends-title">
            <h2>My friends</h2>
          </div>
          <div className="myfriends-search">
            <input
              className="form-control mr-sm-2 friendlist-search-input"
              type="search"
              placeholder="Search friends list"
              aria-label="Search"
            />
            <span>
              <FontAwesomeIcon className="friend-search-icon" icon="search" />
            </span>
          </div>
          {/* <Button
            customClassName="bold-600 add-friend-btn ml-auto"
            onClick={toggleAddFriendToGroup}
            btndisabled={false}
          >
            {showAddFriendToGroup ? "cancel" : "Add friend to group"}
          </Button> */}

          <Modal
            modalButton="Add friend to group"
            buttonClass="btn mybloov-create-event-btn bold-600"
            modalHeading="Add Friends to Group"
            openButtonClass="bold-600 add-friend-btn ml-auto btn"
          >
            <AddFriendToGroup
              groups={groups}
              friendList={friends}
              AddFriendToGroupSubmit={handleAddFriendToGroup}
            />
          </Modal>

          <Modal
            modalButton="Create group"
            buttonClass="btn mybloov-create-event-btn bold-600"
            modalHeading="Create Group"
            openButtonClass="mybloov-create-group-btn bold-600 btn"
          >
            <CreateGroup createGroupHandler={createGroupHandler} />
          </Modal>
          {/* 
          <Button
            customClassName="mybloov-create-group-btn bold-600"
            onClick={createButtonHandler}
            btndisabled={false}
          >
            {showCreate ? "back to friends" : "Create New Group"}
          </Button> */}
        </div>

        {showCreate ? (
          <CreateGroup createGroupHandler={createGroupHandler} />
        ) : (
          <>
            {" "}
            <div className="myibloov-nav-container row mt-3">
              <div className="myibloov-nav-first">
                <div>
                  <div className="myibloov-nav-links">
                    <div
                      className={
                        selectedTab === "ibloov"
                          ? "myibloov-nav-active mr-5"
                          : "myibloov-nav-link mr-5"
                      }
                    >
                      <Link
                        to=""
                        className="create-event-tab-link"
                        name="ibloov"
                        onClick={selectedTabHandler}
                      >
                        iBloov friends
                      </Link>
                    </div>
                    <div
                      className={
                        selectedTab === "group"
                          ? "myibloov-nav-active mr-5"
                          : "myibloov-nav-link mr-5"
                      }
                    >
                      <Link
                        to=""
                        className="create-event-tab-link"
                        name="group"
                        onClick={selectedTabHandler}
                      >
                        Groups
                      </Link>
                    </div>
                    <div
                      className={
                        selectedTab === "request"
                          ? "myibloov-nav-active"
                          : "myibloov-nav-link"
                      }
                    >
                      <Link
                        to=""
                        className="create-event-tab-link"
                        name="request"
                        onClick={selectedTabHandler}
                      >
                        Requests
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="mr-5">
                <DropDown
                  toggleDropdownOption={toggleDropdownOptionHandler}
                  showDropDown={showDropDown}
                />
              </div> */}
            </div>
            {showAddFriendToGroup ? (
              <AddFriendToGroup
                groups={groups}
                friendList={friends}
                AddFriendToGroupSubmit={handleAddFriendToGroup}
              />
            ) : (
              <div>
                {selectedTab === "ibloov" ? (
                  <FriendList
                    handleFollowUser={followUserHandler}
                    friends={friends}
                  />
                ) : (
                  ""
                )}
                {selectedTab === "group" ? (
                  <GroupList
                    friendList={friends}
                    pickedGroup={selectedGroupHandler}
                    picked={selectedGroup}
                    contactGroups={groups}
                  />
                ) : (
                  ""
                )}
                {selectedTab === "request" ? (
                  <FriendRequest
                    friendRequestList={requestList}
                    acceptFriendRequest={acceptFriendRequestHandler}
                    rejectFriendrequest={rejectFriendRequestHandler}
                  />
                ) : (
                  ""
                )}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default FriendPage;
