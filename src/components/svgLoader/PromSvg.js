import React from "react";
import PropTypes from "prop-types";

const PromSvg = (props) => {
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
          <rect className="a" width="70" height="70" transform="translate(35 12)" />
        </clipPath>
      </defs>
      <g className="b" transform="translate(-35 -12)">
        <g transform="translate(35 12)">
          <path
            className="a"
            fill={fill}
            d="M67.675,22.9,39.771,9.271a11.428,11.428,0,0,0-8.9,0L2.325,22.9C.321,23.865,0,25.228,0,25.949s.321,2,2.325,3.047l2.325,1.123V42.948a3.929,3.929,0,0,0-2.486,3.608A3.981,3.981,0,0,0,4.57,50.165L.962,61.631h10.1L7.457,50.165a3.885,3.885,0,0,0-.08-7.216V31.482l4.25,2.085V50.245a1.293,1.293,0,0,0,.241.722A29.121,29.121,0,0,0,34.96,61.631,28.955,28.955,0,0,0,57.973,50.966a1.293,1.293,0,0,0,.241-.722v-16.6L67.675,29c2-.962,2.325-2.325,2.325-3.047A3.584,3.584,0,0,0,67.675,22.9ZM55.647,49.844a26.813,26.813,0,0,1-20.687,9.3,26.813,26.813,0,0,1-20.687-9.3V34.689l16.6,7.938a10.813,10.813,0,0,0,4.41.882,9.764,9.764,0,0,0,4.49-.962l15.876-7.778Zm10.9-23.093L56.93,31.482a.921.921,0,0,0-.882.481l-17.4,8.419a8.9,8.9,0,0,1-6.735,0L10.5,30.119,35.12,27.232a1.249,1.249,0,1,0-.241-2.486L6.334,28.114,3.448,26.751a1.617,1.617,0,0,1-.882-.722c0-.08.16-.4.882-.722L31.993,11.6a8.283,8.283,0,0,1,3.288-.641,8.128,8.128,0,0,1,3.368.641l27.9,13.631c.722.321.882.641.882.8A2.2,2.2,0,0,1,66.552,26.751Z"
          />
        </g>
      </g>
    </svg>
  );
};

PromSvg.propTypes = {fill: PropTypes.string};

export default PromSvg;
