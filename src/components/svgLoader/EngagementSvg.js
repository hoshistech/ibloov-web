import React from "react";
import PropTypes from "prop-types";

const EngagementSvg = (props) => {
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
          <rect
            className="a"
            width="70"
            height="70"
            transform="translate(35 12)"
          />
        </clipPath>
      </defs>
      <g className="b" transform="translate(-35 -12)">
        <g transform="translate(35 12)">
          <path
            className="a"
            d="M54.845,21.884a25.04,25.04,0,0,0-19.836,0,24.825,24.825,0,0,0-5.53-1.66l5.688-4.74a1.166,1.166,0,0,0,.336-1.329L33.17,8.324a1.166,1.166,0,0,0-1.083-.734H16.925a1.166,1.166,0,0,0-1.083.734L13.51,14.155a1.166,1.166,0,0,0,.336,1.329l5.92,4.933A25.067,25.067,0,1,0,35,67.936a25.074,25.074,0,1,0,19.85-46.052ZM31.876,11.373l.816,2.049H30.647Zm-1.85-1.45-1.439,2.4-1.439-2.4Zm-5.074.872,1.576,2.626H22.851Zm-2.29-.872-2.1,2.626L18.985,9.923Zm-5.527,1.45,1.229,2.049H16.315Zm.679,4.382H31.2l-4.2,3.5H22.012Zm7.275,51.9a22.741,22.741,0,1,1,7.148-44.337,25.3,25.3,0,0,0-2.545,1.718,20.453,20.453,0,1,0,7.58,3.521,17.921,17.921,0,0,1,2.533-.971,22.734,22.734,0,0,1-14.717,40.07Zm2.322-40.662a25.023,25.023,0,0,0-.479,35.384q.222.228.45.451a18.07,18.07,0,1,1-2.293-35.991A18.377,18.377,0,0,1,27.411,26.989ZM35,60.008a18.043,18.043,0,0,1,0-30.2,18.044,18.044,0,0,1,0,30.2ZM42.62,27h0a18.068,18.068,0,1,1-.04,35.84,25.022,25.022,0,0,0,.493-35.384Q42.851,27.221,42.62,27ZM62.24,59.642a22.779,22.779,0,0,1-24.473,6.864,25.188,25.188,0,0,0,2.548-1.721,20.463,20.463,0,1,0-7.581-3.521,17.833,17.833,0,0,1-2.538.975,22.732,22.732,0,1,1,32.043-2.6Z"
            fill={fill}
          />
          <rect
            className="a"
            width="3.298"
            height="2.332"
            fill={fill}
            transform="translate(37.676 6.183) rotate(-45)"
          />
          <rect
            className="a"
            width="2.332"
            fill={fill}
            height="3.298"
            transform="translate(7.355 5.499) rotate(-45)"
          />
          <rect
            className="a"
            width="2.332"
            fill={fill}
            height="3.499"
            transform="translate(23.34 0.01)"
          />
        </g>
      </g>
    </svg>
  );
};

EngagementSvg.propTypes = {};

export default EngagementSvg;
