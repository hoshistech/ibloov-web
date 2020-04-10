import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NavbarJombotron from "../../components/navbarJombotron/NavbarJombotron";
import Card from "../../components/card/Card";

const Event = (props) => {
  return (
    <Fragment>
      <NavbarJombotron
        headerTitle="Life Events"
        headerDescription="Live events across various locations"
      />
      <Card />
      <Card />
    </Fragment>
  );
};

Event.propTypes = {};

export default Event;
