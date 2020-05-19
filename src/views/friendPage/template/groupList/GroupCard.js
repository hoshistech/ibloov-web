import React, { Fragment } from "react";
import ProgressiveImage from "../../../../components/progressiveImage/ProgressiveImage";
import { genRandomNumber } from "../../../../utils/helper";

const GroupCard = (props) => {
  const { groupName, numberContact, selected, name, selectGroup } = props;
  let selectedGroup = "";

  if (selected === name) selectedGroup = "list-item-active";
  return (
    <Fragment>
      <div
        className="group-list-item-container"
        name={name}
        onClick={(e) => selectGroup(e, name)}
      >
        {" "}
        <div className={`friendlist-info group-list-item ${selectedGroup}`}>
          <ProgressiveImage
            src={`https://source.unsplash.com/250x324/?${groupName}`}
            customClass="friendlist-image"
            alt="card"
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
