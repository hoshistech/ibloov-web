import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./GroupList.css";
import ProgressiveImage from "../../../../components/progressiveImage/ProgressiveImage";
import GroupCard from "./GroupCard";
const GroupList = (props) => {
  const { friendList, pickedGroup, picked } = props;
  const [openSideBar, setOpenSideBar] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(1);

  const groupBy = (lists, key) => {
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
  };

  const grouped = groupBy(friendList, "groups");

  // const friendData = friendList.map((friend, index) => {
  //   if (picked === friend.groups) {
  //     return (
  //       <tr className="group-list-data" key={index}>
  //         <td className="friendlist-info-container">
  //           <div className="friendlist-info">
  //             <ProgressiveImage
  //               src={friend.image}
  //               customClass="friendlist-image"
  //               alt="card"
  //             />
  //             <div className="friendlist-name">
  //               <p>{friend.name}</p>
  //               <small>optio sit in</small>
  //             </div>
  //           </div>
  //         </td>
  //         <td className="friendlist-phone-number">{friend.phoneNumber}</td>
  //         <td className="email">{friend.email}</td>
  //         <td className="group">
  //           <div>family</div>
  //           <div>friend</div>
  //         </td>
  //         <td className="action">
  //           <FontAwesomeIcon className="action-icon" icon="ellipsis-v" />
  //         </td>
  //       </tr>
  //     );
  //   }
  // });

  const friendData = friendList.map((friend, index) => (
    <tr className="group-list-data" key={index}>
      <td className="friendlist-info-container">
        <div className="friendlist-info">
          <ProgressiveImage
            src={friend.image}
            customClass="friendlist-image"
            alt="card"
          />
          <div className="friendlist-name">
            <p>{friend.name}</p>
            <small>optio sit in</small>
          </div>
        </div>
      </td>
      <td className="friendlist-phone-number">{friend.phoneNumber}</td>
      <td className="email">{friend.email}</td>
      {/* <td className="group">
        <div>family</div>
        <div>friend</div>
      </td> */}
      <td className="action">
        <FontAwesomeIcon className="action-icon" icon="ellipsis-v" />
      </td>
    </tr>
  ));

  const openGroupSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const selectGroupHandler = useCallback(
    (e, index) => {
      setSelectedGroup(index);
      pickedGroup(index);
    },
    [pickedGroup, setSelectedGroup]
  );

  const openGroupMenu = openSideBar
    ? "group-list-container-open-menu-bar"
    : "group-list-container";

  const contactGroups = [
    "Family",
    "Church Friends",
    "Colleagues",
    "Mum's Family",
    "Dad's Family",
    "Italian Holida Friends",
  ];

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
          {contactGroups.map((group, index) => (
            <GroupCard
              key={index + 1}
              groupName={group}
              numberContact={index + 2 * 3}
              selected={selectedGroup}
              name={index + 1}
              selectGroup={selectGroupHandler}
            />
          ))}
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
