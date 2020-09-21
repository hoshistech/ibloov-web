import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./GroupList.css";
import ProgressiveImage from "../../../../components/progressiveImage/ProgressiveImage";
import avatarPlaceHolder from "../../../../assets/images/profile_placeholder_small.gif";
import GroupCard from "./GroupCard";
import { isEmpty } from "../../../../utils/helper";
const GroupList = props => {
  const { pickedGroup, contactGroups } = props;
  const [openSideBar, setOpenSideBar] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(pickedGroup);
  const [selectedGroupContacts, setSelectedGroupContacts] = useState("");

/*   const groupBy = (lists, key) => {
    return lists.reduce(
      (result, currentValue) => {
        // (result[currentValue[key]] = result[currentValue[key]] || []).push(
        //   currentValue
        // );
        // This is how the above code in multiple line
        if (!result[currentValue[key]]) {
          result[currentValue[key]] = [];
        }
        result[currentValue[key]].push(currentValue);
        return result;
      },
      [{}]
    ); // empty object is the initial value for result object
  }; */

  let friendData = "";

  if (isEmpty(selectedGroupContacts)) {
    friendData = (
      <tr className="group-list-data text-center">No friends in this group</tr>
    );
  } else {
    friendData = selectedGroupContacts.map((friend, index) => (
      <tr className="group-list-data" key={index}>
        <td className="friendlist-info-container">
          <div className="friendlist-info">
            <ProgressiveImage
              src={friend.userId.avatar}
              customClass="friendlist-image"
              alt="card"
              placeholder={avatarPlaceHolder}
            />
            <div className="friendlist-name">
              <p>{friend.userId.fullName}</p>
              <small>optio sit in</small>
            </div>
          </div>
        </td>
        <td className="friendlist-phone-number">{friend.userId.phoneNumber}</td>
        <td className="email">{friend.userId.email}</td>
        {/* <td className="group">
          <div>family</div>
          <div>friend</div>
        </td> */}
        <td className="action">
          <FontAwesomeIcon className="action-icon" icon="ellipsis-v" />
        </td>
      </tr>
    ));
  }

  const openGroupSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const selectGroupHandler = useCallback(
    (e, index) => {
      setSelectedGroup(index);
      pickedGroup(index);

      const foundGroup = contactGroups.filter(group => group._id === index);
      const contacts = foundGroup.map(group => group.contacts);

      setSelectedGroupContacts(...contacts);
    },
    [pickedGroup, setSelectedGroup, contactGroups]
  );

  const openGroupMenu = openSideBar
    ? "group-list-container-open-menu-bar"
    : "group-list-container";

  // const contactGroups = [
  //   "Family",
  //   "Church Friends",
  //   "Colleagues",
  //   "Mum's Family",
  //   "Dad's Family",
  //   "Italian Holida Friends",
  // ];

  return (
    <div className="ibloov-friendlist-container">
      <div className="group-list">
        <FontAwesomeIcon
          className="pt-1 groups-menu"
          icon="bars"
          onClick={openGroupSideBar}
        />
        <div className={openGroupMenu}>
          <h3 className="group-list-name">GROUP NAME</h3>
          {contactGroups !== null
            ? contactGroups.map((group, index) => (
                <GroupCard
                  key={group.uuid}
                  groupName={group.name}
                  numberContact={group.contacts.length}
                  selected={selectedGroup}
                  name={group._id}
                  selectGroup={selectGroupHandler}
                />
              ))
            : ""}
        </div>

        <table className="table">
          <thead>
            <tr className="group-list-header">
              <th scope="">NAME</th>
              <th scope="">PHONE</th>
              <th className="email" scope="col">
                EMAIL
              </th>
              <th className="action" scope="col"></th>
            </tr>
          </thead>
          <tbody>{friendData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupList;
