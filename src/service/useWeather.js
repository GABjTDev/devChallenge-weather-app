import axios from "axios";

export const useWeather = () => {
  const getWeather = async (woeid) => {
    const res = await axios.get(
      `https://www.metaweather.com/api/location/${woeid}`
    );
    const data = await res.data;

    return data;
  };

  const getLocation = async (location) => {
    const res = await axios.get(
      `https://www.metaweather.com/api/location/search/?lattlong=${location.latitude},${location.longitude}`
    );
    const data = await res.data;

    return data;
  };

  const getSearch = async (search) => {
    const res = await axios.get(
      `https://www.metaweather.com/api/location/search?query=${search}`
    );
    const data = await res.data;

    return data;
  };

  return {
    getWeather,
    getLocation,
    getSearch,
  };
};
