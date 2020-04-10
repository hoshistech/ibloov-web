import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NavbarJombotron from "../../components/navbarJombotron/NavbarJombotron";
import Card from "../../components/card/Card";
import FilterBar from "../../components/filterbar/FilterBar";

const Event = (props) => {
  return (
    <Fragment>
      <div>
        <NavbarJombotron
          headerTitle="Life Events"
          headerDescription="Live events across various locations"
        />
        <FilterBar />
      </div>

      <Card />
      <Card />
    </Fragment>
  );
};

Event.propTypes = {};

export default Event;
