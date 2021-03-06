import React from "react";
import { Link } from "react-router-dom";
import InfluencerCard from "../../components/influencerCard/InfluencerCard";
import HashTag from "../../components/hashTag/HashTag";
import ViewEventProfileCard from "../../components/viewEventProfileCard/ViewEventProfileCard";
import Card from "../../components/card/Card";
import SingleComment from "../../components/singleComment/SingleComment";
import CreateComment from "../../components/createComment/CreateComment";
import FriendProfileHeader from "../../components/friendProfileHeader/FriendProfileHeader";
import TelephoneInput from "../../components/telephoneInput/TelephoneInput";
import PhoneNumberVerification from "../../components/phoneNumberVerification/PhoneNumberVerification";

const TestPage = (props) => {
  return (
    <div>
      <h2>Pages Available</h2>
      <ul>
        <li>
          <Link to="/signin">SignIn Page</Link>
        </li>
        <li>
          <Link to="/signup">SignUp Page</Link>
        </li>
        <li>
          <Link to="/events">Live Event Page</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard Page</Link>
        </li>
        <li>
          <Link to="/myibloov">My iBloov Page</Link>
        </li>
      </ul>
      {/* <CategoryCard
        categoryTitle="Night Life"
        categoryCount="20"
        categoryImage={NigthLife}
      />
      <CategoryCard
        categoryTitle="Sport"
        categoryCount="40"
        categoryImage={NigthLife}
      /> */}

      <InfluencerCard
        customClassName="influencer-card most-influencer-image"
        cardTitle="Damilola Adekoya"
        userName="dharmykoya"
        followers="750000"
        events="1890"
      />
      <InfluencerCard
        customClassName="mt-3 mb-2 place-card  most-place-image"
        placesCard={true}
        cardTitle="East Yolanda"
        events="900"
      />

      <div className="mb-3">
        <Card />
      </div>

      <div className="mb-4">
        <HashTag tagValue="TiwaLiveOnStage" />
      </div>

      <ViewEventProfileCard />

      <div className="mt-3 mb-3">
        <SingleComment />
      </div>

      <div className="mt-3 mb-3">
        <CreateComment />
      </div>

      <div className="mb-2 mt-2">
        <FriendProfileHeader />
      </div>

      <TelephoneInput />

      <PhoneNumberVerification />

      {/* <div className="mb-3 mt-2">
        <PromotedEventCard />
      </div> */}
    </div>
  );
};

TestPage.propTypes = {};

export default TestPage;
