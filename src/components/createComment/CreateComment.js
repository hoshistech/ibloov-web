import React from "react";
import PropTypes from "prop-types";
import StarRatingComponent from "react-star-rating-component";

import Input from "../input/Input";
import Button from "../button/Button";

import "./CreateComment.css";
const CreateComment = (props) => {
  return (
    <div className="create-comment-container">
      <h3 className="font-bold">Add Comment</h3>
      <div>
        <form>
          <div className="row create-comment-star">
            <label className="mr-3 font-bold" htmlFor="commentRate">
              Rating
            </label>
            <StarRatingComponent
              name="commentRate"
              editing={false}
              starColor="#FCC1BA"
              starCount={5}
              value={4.5}
            />
          </div>

          <div className="row">
            <div className="col-md-7">
              <label className="font-bold" htmlFor="name">
                Name
              </label>
              <Input
                name="name"
                type="name"
                customClassName="form-control"
                id="name"
                placeHolder="Type your name here"
                aria-describedby="nameHelp"
                required
                // value={this.state.email}
                // handleChange={this.emailChange.bind(this)}
              />
            </div>
            <div className="col-md-5">
              <label className="font-bold" htmlFor="email">
                Email
              </label>
              <Input
                name="email"
                type="email"
                customClassName="form-control"
                id="email"
                placeHolder="Your Email"
                aria-describedby="emailHelp"
                required
                // value={this.state.email}
                // handleChange={this.emailChange.bind(this)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="font-bold" for="commentText">
              Comment/Message
            </label>
            <textarea
              className="form-control"
              id="commentText"
              placeholder="Your comment/message..."
              rows="4"
            ></textarea>
          </div>
          <div className="create-comment-btn-container">
            <Button
              customClassName="create-comment-btn bold-600"
              // onclick={this.onButtonPress.bind(this)}
            >
              POST
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

CreateComment.propTypes = {};

export default CreateComment;
