import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CategoryCard from "../../components/categoryCard/CategoryCard";

import NigthLife from "../../assets/images/Home/MaskGroup1.svg";
import InfluencerCard from "../../components/influencerCard/InfluencerCard";

const HomePage = (props) => {
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
      </ul>
      <CategoryCard
        categoryTitle="Night Life"
        categoryCount="20"
        categoryImage={NigthLife}
      />
      <CategoryCard
        categoryTitle="Sport"
        categoryCount="40"
        categoryImage={NigthLife}
      />

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
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
