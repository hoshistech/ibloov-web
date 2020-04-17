import React from "react";
import PropTypes from "prop-types";
import StarRatingComponent from "react-star-rating-component";

import passport from "../../assets/images/passport.jpg";
import "./SingleComment.css";

const SingleComment = (props) => {
  return (
    <div className="row single-comment-container">
      <div className="mr-3">
        <img src={passport} className="view-event-profile-img" alt="card" />
      </div>
      <div>
        <div className="user-comment-details">
          <div>
            <p className="comment-name">Damilola Adekoya</p>
            <p className="comment-date">Jan 14, 2020 at 5:03pm</p>
          </div>
          <div>
            <StarRatingComponent
              name="rate2"
              editing={false}
              starColor="#FCC1BA"
              starCount={5}
              emptyStarColor="black"
              renderStarIconHalf='half' 
              value={4.5}
            />
          </div>
        </div>
        <div>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </div>
      </div>
    </div>
  );
};

SingleComment.propTypes = {};

export default SingleComment;
