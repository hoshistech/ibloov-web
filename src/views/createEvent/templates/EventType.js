import React, { useState } from "react";
import PropTypes from "prop-types";
import NightLifeSvg from "../../../components/svgLoader/NightLifeSvg";
import ConcertsSvg from "../../../components/svgLoader/ConcertsSvg";
import ConferencesSvg from "../../../components/svgLoader/ConferencesSvg";
import EngagementSvg from "../../../components/svgLoader/EngagementSvg";
import Button from "../../../components/button/Button";
import PartiesSvg from "../../../components/svgLoader/PartiesSvg";
import PromSvg from "../../../components/svgLoader/PromSvg";
import CreateEventCategory from "../../../components/createEventCategory/CreateEventCategory";

const EventType = props => {
  const {
    categoryHandler,
    formCount,
    nextQuestionHandler,
    previousQuestionHandler
  } = props;
  const [selected, setSelected] = useState("");
  const [svgFill, setSvgFill] = useState("#ccc");

  const onSelectEventType = (e, category, name) => {
    setSelected(name);
    categoryHandler(category);
    return;
  };

  return (
    <div className="event-type-container">
      <div className="create-event-title-header mb-3">
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
          categoryTitle="Festival & Concerts"
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
          categoryTitle="Outdoors"
          categoryCount={20}
          showCount={false}
          selectHandler={onSelectEventType}
          selected={selected}
          name="outdoors"
          red={<ConferencesSvg fill="red" className="create-event-svg" />}
        >
          <ConferencesSvg fill={svgFill} />
        </CreateEventCategory>

        <CreateEventCategory
          categoryTitle="Online"
          categoryCount={20}
          showCount={false}
          selectHandler={onSelectEventType}
          selected={selected}
          name="online"
          red={<EngagementSvg fill="red" className="create-event-svg" />}
        >
          <EngagementSvg fill={svgFill} />
        </CreateEventCategory>

        <CreateEventCategory
          categoryTitle="House Parties"
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
          categoryTitle="Private Event"
          categoryCount={20}
          showCount={false}
          selectHandler={onSelectEventType}
          selected={selected}
          name="prom"
          red={<PromSvg fill="red" className="create-event-svg" />}
        >
          <PromSvg fill={svgFill} />
        </CreateEventCategory>
      </div>

      <div
        // className="myibloov-create-button-container"
        className={
          formCount === 2
            ? "myibloov-create-button-container myibloov-description-btn"
            : "myibloov-create-button-container"
        }
      >
        <Button
          customClassName="mybloov-create-event-btn-2  bold-600"
          onClick={previousQuestionHandler}
          btndisabled={false}
        >
          {formCount === 1 ? "Cancel" : "Back"}
        </Button>
        <Button
          customClassName="mybloov-create-event-btn-2  bold-600"
          onClick={nextQuestionHandler}
          btndisabled={!selected ? true : false}
        >
          {formCount === 4 ? "Create Event" : "Next"}
        </Button>
      </div>
    </div>
  );
};

EventType.propTypes = {
  categoryHandler: PropTypes.func.isRequired
};

export default EventType;
