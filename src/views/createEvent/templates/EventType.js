import React from "react";
import PropTypes from "prop-types";
import CategoryCard from "../../../components/categoryCard/CategoryCard";
import NightLifeSvg from "../../../components/svgLoader/NightLifeSvg";
import ConcertsSvg from "../../../components/svgLoader/ConcertsSvg";
import ConferencesSvg from "../../../components/svgLoader/ConferencesSvg";
import CorporateSvg from "../../../components/svgLoader/CorporateSvg";
import EngagementSvg from "../../../components/svgLoader/EngagementSvg";
import HenNightSvg from "../../../components/svgLoader/HenNightSvg";
import PartiesSvg from "../../../components/svgLoader/PartiesSvg";
import PromSvg from "../../../components/svgLoader/PromSvg";
import SportsSvg from "../../../components/svgLoader/SportsSvg";
import TravelSvg from "../../../components/svgLoader/TravelSvg";
import WeddingSvg from "../../../components/svgLoader/WeddingSvg";
import ChristmasSvg from "../../../components/svgLoader/ChristmasSvg";

const EventType = (props) => {
  const categories = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  // const {svgFill} = props;
  const svgFill = "#ccc";
  return (
    <div className="event-type-container">
      <div>
        <h5>What Kind of event are you planning?</h5>
        <small>Please choose from the options so we can help</small>
      </div>
      <div className="row event-type-category-container">
        {/* {categories.map((category, index) => (
          <div className="single-category-card">
            <CategoryCard
              key={index}
              categoryTitle="Night Life"
              categoryCount="20"
              showCount={false}
            >
              <SVG />
            </CategoryCard>
          </div>
        ))} */}
        <div className="single-category-card">
          <CategoryCard
            categoryTitle="Night Life"
            categoryCount="20"
            showCount={false}
          >
            <NightLifeSvg fill={svgFill} />
          </CategoryCard>
        </div>
        <div className="single-category-card">
          <CategoryCard
            categoryTitle="Concerts"
            categoryCount="20"
            showCount={false}
          >
            <ConcertsSvg fill={svgFill} />
          </CategoryCard>
        </div>
        <div className="single-category-card">
          <CategoryCard
            categoryTitle="Conferences"
            categoryCount="20"
            showCount={false}
          >
            <ConferencesSvg fill={svgFill} />
          </CategoryCard>
        </div>
        <div className="single-category-card">
          <CategoryCard
            categoryTitle="Corporate"
            categoryCount="20"
            showCount={false}
          >
            <CorporateSvg fill={svgFill} />
          </CategoryCard>
        </div>
        <div className="single-category-card">
          <CategoryCard
            categoryTitle="Engagement"
            categoryCount="20"
            showCount={false}
          >
            <EngagementSvg fill={svgFill} />
          </CategoryCard>
        </div>
        <div className="single-category-card">
          <CategoryCard
            categoryTitle="Hen Night"
            categoryCount="20"
            showCount={false}
          >
            <HenNightSvg fill={svgFill} />
          </CategoryCard>
        </div>
        <div className="single-category-card">
          <CategoryCard
            categoryTitle="Parties"
            categoryCount="20"
            showCount={false}
          >
            <PartiesSvg fill={svgFill} />
          </CategoryCard>
        </div>
        <div className="single-category-card">
          <CategoryCard
            categoryTitle="Prom"
            categoryCount="20"
            showCount={false}
          >
            <PromSvg fill={svgFill} />
          </CategoryCard>
        </div>
        <div className="single-category-card">
          <CategoryCard
            categoryTitle="Sports"
            categoryCount="20"
            showCount={false}
          >
            <SportsSvg fill={svgFill} />
          </CategoryCard>
        </div>
        <div className="single-category-card">
          <CategoryCard
            categoryTitle="Travel"
            categoryCount="20"
            showCount={false}
          >
            <TravelSvg fill={svgFill} />
          </CategoryCard>
        </div>
        <div className="single-category-card">
          <CategoryCard
            categoryTitle="Wedding"
            categoryCount="20"
            showCount={false}
          >
            <WeddingSvg fill={svgFill} />
          </CategoryCard>
        </div>
        <div className="single-category-card">
          <CategoryCard
            categoryTitle="Christmas"
            categoryCount="20"
            showCount={false}
          >
            <ChristmasSvg fill={svgFill} />
          </CategoryCard>
        </div>
      </div>
    </div>
  );
};

EventType.propTypes = {};

export default EventType;
