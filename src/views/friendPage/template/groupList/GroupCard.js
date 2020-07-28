import React, { Fragment } from "react";
import Avatar from "react-avatar";
import ProgressiveImage from "../../../../components/progressiveImage/ProgressiveImage";

const GroupCard = props => {
  const { groupName, numberContact, selected, name, selectGroup } = props;
  let selectedGroup = "";

  if (selected === name) selectedGroup = "list-item-active";
  return (
    <Fragment>
      <div
        className="group-list-item-container"
        name={name}
        onClick={e => selectGroup(e, name)}
      >
        {" "}
        <div className={`friendlist-info group-list-item ${selectedGroup}`}>
          {/* <ProgressiveImage
            src={`https://source.unsplash.com/250x324/?${groupName}`}
            customClass="friendlist-image"
            alt="card"
          /> */}
          <Avatar
            size={40}
            round={true}
            className="mr-2"
            name={groupName}
          />
          <div className="friendlist-name">
            <p>{groupName}</p>
            <small>{numberContact} contacts</small>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GroupCard;
