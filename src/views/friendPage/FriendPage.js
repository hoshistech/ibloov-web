import React, { Fragment, useState } from "react";
import faker from "faker";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";

import "./FriendPage.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import PromotedEventCard from "../../components/promotedEventCard/PromotedEventCard";
import CreateEvent from "../createEvent/CreateEvent";
import Loading from "../../components/loadingIndicator/Loading";
import Input from "../../components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FriendList from "./template/friendList.js/FriendList";
import GroupList from "./template/groupList/GroupList";
import { genRandomNumber } from "../../utils/helper";

const FriendPage = (props) => {
  const [selectedTab, setSelectedTab] = useState("group");
  const [myCreatedEvent, setMyCreatedEvent] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("Family");

  // testing purpose
  // const [myCreatedEvent, setMyCreatedEvent] = useState(false);
  // const [showCreate, setShowCreate] = useState(true);

  const selectedTabHandler = (e) => {
    const tabSwitch = e.target.name;

    e.preventDefault();
    setSelectedTab(tabSwitch);
    setShowCreate(false);
  };

  const selectedGroupHandler = (index) => {
    setSelectedGroup(contactGroups[index - 1]);
  };

  const selectMyEventHandler = (e) => {
    e.preventDefault();
    setMyCreatedEvent(!myCreatedEvent);
  };

  const createButtonHandler = (e) => {
    e.preventDefault();
    setShowCreate(!showCreate);
  };
  const contactGroups = [
    "Family",
    "Church Friends",
    "Colleagues",
    "Mum's Family",
    "Dad's Family",
    "Italian Holida Friends",
  ];
  let aa = [];

  // 1 get the friend data and filter by the value of the selected group

  const randomFriends = Array(genRandomNumber(3, 9))
    .fill()
    .map((num, index) =>
      aa.push({
        image: faker.image.avatar(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        // groups: ["family"],
        groups: contactGroups[genRandomNumber(0, 6)],
      })
    );


  const friends = [
    {
      image:
        "https://pbs.twimg.com/profile_images/1113161698372927488/jvGhU8iU_400x400.jpg",
      name: "Damilola Adekoya",
      phoneNumber: "+2348037145164",
      email: "dharmykoya38@gmail.com",
      groups: "family",
    },
    {
      image: faker.image.avatar(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      groups: "family",
    },
    {
      image: faker.image.avatar(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      groups: "friend",
    },
    ...aa,
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
        </div>
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
          <div>
            <div className="">Sort: most recent </div>
          </div>
        </div>
        <div>
          {selectedTab === "ibloov" ? <FriendList friendList={friends} /> : ""}
          {selectedTab === "group" ? (
            <GroupList
              friendList={friends}
              pickedGroup={selectedGroupHandler}
              picked={selectedGroup}
            />
          ) : (
            ""
          )}
          {selectedTab === "request" ? "request" : ""}
        </div>
      </section>
    </div>
  );
};

export default FriendPage;
