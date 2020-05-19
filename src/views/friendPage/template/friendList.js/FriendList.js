import React from "react";

import "./FriendList.css";
import PlaceImage from "../../../../assets/images/bg3.jpg";
import ProgressiveImage from "../../../../components/progressiveImage/ProgressiveImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../../../components/loadingIndicator/Loading";

const FriendList = (props) => {
  const { friendList } = props;

  const friendData = friendList.map((friend) => (
    <tr className="friendlist-table-data">
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
      <td className="group">
        <div>family</div>
        <div>friend</div>
      </td>
      <td className="action">
        <FontAwesomeIcon className="action-icon" icon="ellipsis-v" />
      </td>
    </tr>
  ));

  return (
    <div className="ibloov-friendlist-container">
      <table className="table">
        <thead>
          <tr className="friendlist-table-header">
            <th scope="">NAME</th>
            <th scope="">PHONE</th>
            <th className="email" scope="col">
              EMAIL
            </th>
            <th className="group" scope="col">
              GROUPS
            </th>
            <th className="action" scope="col"></th>
          </tr>
        </thead>
        <tbody>{friendData}</tbody>
      </table>
    </div>
  );
};

export default FriendList;
