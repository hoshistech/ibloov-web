import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import "./EventMap.css";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

const SimpleMap = () => {
  const [center, setCenter] = useState({ lat: 59.95, lng: 30.33 });
  const [zoom, setZoom] = useState(11);
  //   static defaultProps = {
  //     center: {
  //       lat: 59.95,
  //       lng: 30.33,
  //     },
  //     zoom: 11,
  //   };

  console.log(111, center);

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    console.log(112, map);
    console.log(113, maps);

    const direction = new maps.DirectionsService();

    const dd = direction.route(
      {
        origin: new maps.LatLng({ lat: -34, lng: 151 }),
        destination: new maps.LatLng({ lat: -34, lng: 151 }),
        travelMode: maps.TravelMode.DRIVING,
      },
      (DirectionsResult, DirectionsStatus) => {
        if (DirectionsStatus === maps.DirectionsStatus.OK) {
          console.log(12, DirectionsResult);
          const directionDisplay = new maps.DirectionRenderer();
          directionDisplay.setOptions();
          directionDisplay.setMap(maps);

          const b = directionDisplay.getDirections();
          console.log(11, b);
        } else {
          console.log(`error fetching directions ${DirectionsResult}`);
        }
      }
    );
  };

  return (
    // Important! Always set the container height explicitly
    <div className="single-event-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
        defaultCenter={center}
        defaultZoom={zoom}
        // yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="Event" />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
