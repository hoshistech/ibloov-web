import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NavbarJombotron from "../../components/navbarJombotron/NavbarJombotron";
import Card from "../../components/card/Card";
import FilterBar from "../../components/filterbar/FilterBar";
import Footer from "../../components/footer/Footer";

import "./Event.css";
import Pagination from "../../components/pagination/Pagination";
const Event = (props) => {
  return (
    <Fragment>
      <NavbarJombotron
        headerTitle="Life Events"
        headerDescription="Live events across various locations"
      />
      <FilterBar />

      <section className="row event-card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <div>
        <Pagination />
      </div>

      <Footer />
    </Fragment>
  );
};

Event.propTypes = {};

export default Event;
