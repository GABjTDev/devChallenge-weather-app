import { useEffect, useState } from "react";

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export const useUbication = () => {
  const [location, setLocation] = useState(null);

  function error(err) {
    console.warn("ERROR(" + err.code + "): " + err.message);
  }

  function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log("Latitude : " + crd.latitude);
    console.log("Longitude: " + crd.longitude);
    console.log("More or less " + crd.accuracy + " meters.");
    setLocation({
      latitude: crd.latitude,
      longitude: crd.longitude,
    });
  }

  const handleLocation = () => {
    window.navigator.geolocation.getCurrentPosition(success, error, options);
  };

  useEffect(() => {
    handleLocation();
  }, []);

  return {
    location,
    handleLocation,
  };
};
