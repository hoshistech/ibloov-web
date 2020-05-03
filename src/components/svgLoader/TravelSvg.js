import React from "react";
import PropTypes from "prop-types";

const TravelSvg = (props) => {
  // <style>.a{fill:#d3d3d3;}.b{clip-path:url(#a);}</style>
  const { fill } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="50"
      height="70"
      viewBox="0 0 70 70"
    >
      <defs>
        <clipPath id="a">
          <rect className="a" width="70" height="70" transform="translate(70 43)" />
        </clipPath>
      </defs>
      <g className="b" transform="translate(-70 -43)">
        <g transform="translate(70 43)">
          <path
            className="a"
            fill={fill}
            d="M32.9,26.173a4.521,4.521,0,1,0-4.521,4.521A4.526,4.526,0,0,0,32.9,26.173Zm-6.992,0a2.472,2.472,0,1,1,2.472,2.472A2.474,2.474,0,0,1,25.91,26.173Z"
          />
          <path
            className="a"
            fill={fill}
            d="M56.279,44.441h-3.9V42.748a4.2,4.2,0,0,0-4.2-4.2H40.17a4.2,4.2,0,0,0-4.2,4.2v1.692h-3.9A7.587,7.587,0,0,0,24.5,52.019v10.4c0,.045,0,.09,0,.135H13.582a5.4,5.4,0,0,1-5.39-5.39V22.718a5.4,5.4,0,0,1,5.39-5.39H36.713a5.4,5.4,0,0,1,5.39,5.39V34.48a1.024,1.024,0,0,0,2.049,0V22.718a7.447,7.447,0,0,0-7.439-7.439H31.638V6.973H33.57a1.962,1.962,0,0,0,1.959-1.959V1.959A1.962,1.962,0,0,0,33.57,0H16.725a1.962,1.962,0,0,0-1.959,1.959V5.013a1.962,1.962,0,0,0,1.959,1.959h1.931v8.306H13.582a7.447,7.447,0,0,0-7.439,7.439V57.167a7.451,7.451,0,0,0,5.434,7.162,4.292,4.292,0,1,0,8.21.277h5.032A7.591,7.591,0,0,0,32.075,70h4.375a1.024,1.024,0,0,0,0-2.049H32.075a5.535,5.535,0,0,1-5.529-5.529v-10.4a5.535,5.535,0,0,1,5.529-5.529h24.2a5.535,5.535,0,0,1,5.529,5.529v10.4a5.535,5.535,0,0,1-5.529,5.529H42.071a1.025,1.025,0,0,0,0,2.049H56.279a7.587,7.587,0,0,0,7.578-7.578v-10.4a7.587,7.587,0,0,0-7.578-7.578ZM16.815,2.049H33.48V4.924H16.815Zm3.891,4.924h8.883v8.306H20.706ZM17.883,65.708a2.243,2.243,0,1,1-4.2-1.1h3.907A2.228,2.228,0,0,1,17.883,65.708ZM38.021,42.748A2.152,2.152,0,0,1,40.17,40.6h8.013a2.152,2.152,0,0,1,2.149,2.149v1.692H38.021V42.748Z"
          />
          <path
            className="a"
            fill={fill}
            d="M21.743,32.879a1.87,1.87,0,0,0-2.644,0l-7.378,7.379a1.87,1.87,0,0,0,0,2.644l2.934,2.934a1.872,1.872,0,0,0,2.644,0l7.379-7.379a1.872,1.872,0,0,0,0-2.644ZM15.977,44.26,13.3,41.58l7.125-7.125,2.68,2.68Z"
          />
        </g>
      </g>
    </svg>
  );
};

TravelSvg.propTypes = {};

export default TravelSvg;
