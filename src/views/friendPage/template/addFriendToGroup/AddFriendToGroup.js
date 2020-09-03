import React, { useState } from "react";
import Button from "../../../../components/button/Button";
import GroupDetails from "./templates/GroupDetails";
import "./AddFriendToGroup.css";

const AddFriendToGroup = props => {
  const [formCount, setFormCount] = useState(1);
  const [groupName, setGroupName] = useState("");
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");

  const { groups, friendList, AddFriendToGroupSubmit } = props;

  const inputChangeHandler = e => {
    const value = e.target.value;
    setGroupName(value);
  };

  const selectFriendHandler = (e, userId) => {
    const currentSelectedFriends = [...selectedFriends];
    const check = currentSelectedFriends.find(friendId => friendId === userId);

    let updatedSelectedFriends;

    if (check) {
      updatedSelectedFriends = currentSelectedFriends.filter(
        friendId => friendId !== userId
      );
    } else {
      updatedSelectedFriends = [...currentSelectedFriends, { userId }];
    }
    setSelectedFriends([...updatedSelectedFriends]);
  };

  const selectGroupHandler = e => {
    const groupId = e.target.value;
    setSelectedGroup(groupId);
  };

  const handleSubmit = () => {
    AddFriendToGroupSubmit(selectedGroup, selectedFriends);
  };

  return (
    <section className="mt-4 create-group">
      {/* <hr /> */}
      <div className="row createvent-container mt-3">
        <div className="col-md-auto create-event-first-row">
          <div className="step-number-row">
            <div className="step-container">
              <div
                className={
                  formCount === 1
                    ? "step-number-circle active"
                    : "step-number-circle"
                }
              >
                <div>
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-auto create-group-form">
            <form>
              <div className={formCount === 1 ? "show-question" : "question"}>
                {/* <p>step {formCount}</p> */}
                <GroupDetails
                  groups={groups}
                  friends={friendList}
                  selectFriend={selectFriendHandler}
                  selectGroup={selectGroupHandler}
                />
              </div>
              <Button
                onClick={handleSubmit}
                customClassName="btn mybloov-create-event-btn-2  bold-600 mt-3"
              >
                Add
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddFriendToGroup;
