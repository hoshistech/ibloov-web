import React from "react";
import ProgressiveImage from "../../../../components/progressiveImage/ProgressiveImage";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../../../components/loadingIndicator/Loading";
import Button from "../../../../components/button/Button";

import avatarPlaceHolder from "../../../../assets/images/profile_placeholder_small.gif";

import "./FriendRequest.css";

const FriendRequest = (props) => {
  const { friendRequestList, acceptFriendRequest, rejectFriendrequest } = props;


  let friendRequestData;
  let loading = <Loading />;

  if (friendRequestList) {
    friendRequestData = friendRequestList.map((friend, index) => (
      <tr
        // className="friendlist-table-data friendRequest-table-data"
        className="friendRequest-table-data"
        key={index}
        //   onClick={() => openFriendProfileHandler(friend)}
      >
        <td className="friendlist-info-container">
          <div className="friendlist-info">
            <ProgressiveImage
              src={
                friend.requesteeId.avatar
                  ? friend.requesteeId.avatar
                  : avatarPlaceHolder
              }
              customClass="friendlist-image"
              alt="card"
            />
            <div className="friendlist-name">
              <p>{friend.requesteeId.fullName}</p>
              <small>optio sit in</small>
            </div>
          </div>
        </td>
        <td className="date">
          {moment(friend.createdAt).format("MMMM Do, YYYY @ h:mm a")}
        </td>
        <td className="group">
          <Button
            btndisabled={false}
            onClick={() => acceptFriendRequest(friend._id)}
            customClassName="accept-btn"
          >
            Accept
          </Button>

          <Button
            btndisabled={false}
            onClick={() => rejectFriendrequest(friend._id)}
            customClassName="cancel-btn"
          >
            Cancel
          </Button>
        </td>
      </tr>
    ));
    if (friendRequestList.length === 0) {
      return <h2 className="mt-3">You have no request pending!!!</h2>;
    }
  }

  return (
    <div className="ibloov-friendlist-container">
      {friendRequestList ? (
        <table className="table">
          <thead>
            {/* <tr className="friendlist-table-header friendRequest-table-header"> */}
            <tr className="friendRequest-table-header">
              <th scope="">NAME</th>
              <th scope="" className="request-date">
                DATE
              </th>
              <th className="action" scope="col"></th>
            </tr>
          </thead>
          <tbody>{friendRequestData}</tbody>
        </table>
      ) : (
        loading
      )}
    </div>
  );
};

export default FriendRequest;
