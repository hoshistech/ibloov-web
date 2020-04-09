import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NavbarJombotron from "../../components/navbarJombotron/NavbarJombotron";

const Event = (props) => {
  return (
    <Fragment>
      <NavbarJombotron
        headerTitle="Life Events"
        headerDescription="Live events across various locations"
      />
    </Fragment>
  );
};

Event.propTypes = {};

export default Event;
