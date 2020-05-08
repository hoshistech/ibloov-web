import React, { useState } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateEventCategory from "../../../components/createEventCategory/CreateEventCategory";

const EventType = (props) => {
  const { categoryHandler } = props;
  const [selected, setSelected] = useState("");
  const [svgFill, setSvgFill] = useState("#ccc");
  const [selectedCategories, setSelectedCategories] = useState();

  // const onSelectEventType = (category) => {
  //   let newCategory;

  //   const checkIfExist = selectedCategories.find(
  //     (categoryName) => categoryName === category
  //   );

  //   if (checkIfExist) {
  //     const categories = selectedCategories;
  //     newCategory = categories.filter(
  //       (categoryName) => categoryName !== category
  //     );
  //   } else {
  //     newCategory = [...selectedCategories, category];
  //   }

  //   setSelectedCategories(newCategory);
  // };

  const onSelectEventType = (e, category, name) => {
    setSelected(name);
    categoryHandler(category);
    return;
  };

  return (
    <div className="event-type-container">
      <div>
        <h5>What Kind of event are you planning?</h5>
        <small>Please choose from the options so we can help</small>
      </div>
      <div className="row event-type-category-container">
        <CreateEventCategory
          categoryTitle="Night Life"
          categoryCount={20}
          showCount={false}
          selectHandler={onSelectEventType}
          selected={selected}
          name="nightLife"
          red={<NightLifeSvg fill="red" className="create-event-svg" />}
        >
          <NightLifeSvg fill={svgFill} className="create-event-svg" />
        </CreateEventCategory>

        <CreateEventCategory
          categoryTitle="Concerts"
          categoryCount={20}
          showCount={false}
          selectHandler={onSelectEventType}
          selected={selected}
          name="concerts"
          red={<ConcertsSvg fill="red" className="create-event-svg" />}
        >
          <ConcertsSvg fill={svgFill} />
        </CreateEventCategory>
        <CreateEventCategory
          categoryTitle="Conferences"
          categoryCount={20}
          showCount={false}
          selectHandler={onSelectEventType}
          selected={selected}
          name="conferences"
          red={<ConferencesSvg fill="red" className="create-event-svg" />}
        >
          <ConferencesSvg fill={svgFill} />
        </CreateEventCategory>

        <CreateEventCategory
          categoryTitle="Corporate"
          categoryCount={20}
          showCount={false}
          selectHandler={onSelectEventType}
          selected={selected}
          name="corporate"
          red={<CorporateSvg fill="red" className="create-event-svg" />}
        >
          <CorporateSvg fill={svgFill} />
        </CreateEventCategory>

        <CreateEventCategory
          categoryTitle="Engagement"
          categoryCount={20}
          showCount={false}
          selectHandler={onSelectEventType}
          selected={selected}
          name="engagement"
          red={<EngagementSvg fill="red" className="create-event-svg" />}
        >
          <EngagementSvg fill={svgFill} />
        </CreateEventCategory>
        <CreateEventCategory
          categoryTitle="Hen Night"
          categoryCount={20}
          showCount={false}
          selectHandler={onSelectEventType}
          selected={selected}
          name="henNight"
          red={<HenNightSvg fill="red" className="create-event-svg" />}
        >
          <HenNightSvg fill={svgFill} />
        </CreateEventCategory>
        <CreateEventCategory
          categoryTitle="Parties"
          categoryCount={20}
          showCount={false}
          selectHandler={onSelectEventType}
          selected={selected}
          name="parties"
          red={<PartiesSvg fill="red" className="create-event-svg" />}
        >
          <PartiesSvg fill={svgFill} />
        </CreateEventCategory>

        <CreateEventCategory
          categoryTitle="Prom"
          categoryCount={20}
          showCount={false}
          selectHandler={onSelectEventType}
          selected={selected}
          name="prom"
          red={<PromSvg fill="red" className="create-event-svg" />}
        >
          <PromSvg fill={svgFill} />
        </CreateEventCategory>

        <CreateEventCategory
          categoryTitle="Sports"
          categoryCount={20}
          showCount={false}
          selectHandler={onSelectEventType}
          selected={selected}
          name="sport"
          red={<SportsSvg fill="red" className="create-event-svg" />}
        >
          <SportsSvg fill={svgFill} />
        </CreateEventCategory>

        <CreateEventCategory
          categoryTitle="Travel"
          categoryCount={20}
          showCount={false}
          selectHandler={onSelectEventType}
          selected={selected}
          name="travel"
          red={<TravelSvg fill="red" className="create-event-svg" />}
        >
          <TravelSvg fill={svgFill} />
        </CreateEventCategory>

        <CreateEventCategory
          categoryTitle="Wedding"
          categoryCount={20}
          showCount={false}
          selectHandler={onSelectEventType}
          selected={selected}
          name="wedding"
          red={<WeddingSvg fill="red" className="create-event-svg" />}
        >
          <WeddingSvg fill={svgFill} />
        </CreateEventCategory>

        <CreateEventCategory
          categoryTitle="Christmas"
          categoryCount={20}
          showCount={false}
          selectHandler={onSelectEventType}
          selected={selected}
          name="christmas"
          red={<ChristmasSvg fill="red" className="create-event-svg" />}
        >
          <ChristmasSvg fill={svgFill} />
        </CreateEventCategory>
      </div>
    </div>
  );
};

EventType.propTypes = {
  categoryHandler: PropTypes.func.isRequired,
};

export default EventType;
