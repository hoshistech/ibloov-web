import React from "react";
import PropTypes from "prop-types";

import "./HashTag.css";

const HashTag = (props) => {
  const { tagValue } = props;
  return (
    <div className="hash-tag mr-2 mb-2">
      <p className="font-bold">#{tagValue}</p>
    </div>
  );
};

HashTag.propTypes = {};

export default HashTag;
