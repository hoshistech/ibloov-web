import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NavbarJombotron from "../../components/navbarJombotron/NavbarJombotron";
import Card from "../../components/card/Card";
import FilterBar from "../../components/filterbar/FilterBar";
import Footer from "../../components/footer/Footer";

const Event = (props) => {
  return (
    <Fragment>
      <NavbarJombotron
        headerTitle="Life Events"
        headerDescription="Live events across various locations"
      />
      <FilterBar />

      <Card />
      <Card />
      <Footer />
    </Fragment>
  );
};

Event.propTypes = {};

export default Event;
