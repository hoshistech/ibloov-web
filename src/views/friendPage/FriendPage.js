import React, { useState, useEffect, useCallback } from "react";
import faker from "faker";
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
  createGroup
} from "./friendPage.action";
import FriendRequest from "./template/friendRequest/FriendRequest";
import Button from "../../components/button/Button";
import CreateGroup from "./template/createGroup/CreateGroup";

const FriendPage = props => {
  const [selectedTab, setSelectedTab] = useState("ibloov");
  const [selectedGroup, setSelectedGroup] = useState("Family");
  const [showDropDown, setShowDropDown] = useState(false);
  const [showCreate, setShowCreate] = useState(true);

  const dispatch = useDispatch();
  const history = useHistory()
  const location = useLocation();

  const { friendRequestList, userFollowing, friends } = useSelector(
    state => state.friend
  );

  let requestList;

  if (friendRequestList) {
    requestList = friendRequestList;
  }

  const fetchFriendRequest = useCallback(() => {    
    dispatch(getFriendRequestList());
    dispatch(getUserFriends());
  }, [dispatch]);

  useEffect(() => {
    if (location.state) {
      if (location.state.action === "group") {
        setSelectedTab(location.state.action);
        setShowCreate(false);
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

    if (tabSwitch === "request") {
      fetchFriendRequest();
    }
    setSelectedTab(tabSwitch);
  };

  const selectedGroupHandler = index => {
    setSelectedGroup(contactGroups[index - 1]);
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
   dispatch(createGroup(groupName, history))
  };

  const contactGroups = [
    "Family",
    "Church Friends",
    "Colleagues",
    "Mum's Family",
    "Dad's Family",
    "Italian Holida Friends"
  ];
  let aa = [];

  // 1 get the friend data and filter by the value of the selected group

  const randomFriends = Array(genRandomNumber(3, 9))
    .fill()
    .map((num, index) =>
      aa.push({
        image: faker.image.avatar(),
        _id: faker.random.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        // groups: ["family"],
        groups: contactGroups[genRandomNumber(0, 6)]
      })
    );

  const groundFriends = [
    {
      image:
        "https://pbs.twimg.com/profile_images/1113161698372927488/jvGhU8iU_400x400.jpg",
      name: "Damilola Adekoya",
      _id: faker.random.uuid(),
      phoneNumber: "+2348037145164",
      email: "dharmykoya38@gmail.com",
      groups: "family"
    },
    {
      image: faker.image.avatar(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      _id: faker.random.uuid(),
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      groups: "family"
    },
    {
      image: faker.image.avatar(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      _id: faker.random.uuid(),
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      groups: "friend"
    },
    ...aa
  ];

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
          <Button
            customClassName="mybloov-create-group-btn bold-600"
            onClick={createButtonHandler}
            btndisabled={false}
          >
            {showCreate ? "back to friends" : "Create New Group"}
          </Button>
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
                          ? "myibloov-nav-active mr-3"
                          : "myibloov-nav-link mr-3"
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
                          ? "myibloov-nav-active mr-3"
                          : "myibloov-nav-link mr-3"
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
              <div className="mr-5">
                <DropDown
                  toggleDropdownOption={toggleDropdownOptionHandler}
                  showDropDown={showDropDown}
                />
              </div>
            </div>
            <div>
              {selectedTab === "ibloov" ? (
                <FriendList
                  friendList={groundFriends}
                  handleFollowUser={followUserHandler}
                  friends={friends}
                />
              ) : (
                ""
              )}
              {selectedTab === "group" ? (
                <GroupList
                  friendList={groundFriends}
                  pickedGroup={selectedGroupHandler}
                  picked={selectedGroup}
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
          </>
        )}
      </section>
    </div>
  );
};

export default FriendPage;
