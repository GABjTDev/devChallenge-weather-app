import axios from "axios";

const CROSS_DOMAIN = "https://mycorsproxy-crossdomainyz.herokuapp.com/";
const API_URL = "https://www.metaweather.com/api/location/";

const api = axios.create({
  baseURL: `${CROSS_DOMAIN}${API_URL}`,
  headers: {
    "Access-Control-Allow-Headers": "X-Requested-With",
    "X-Requested-With": "XMLHttpRequest",
  },
});

export const useWeather = () => {
  const getWeather = async (woeid) => {
    const res = await api.get(`${woeid}`);
    const data = await res.data;

    return data;
  };

  const getLocation = async (location) => {
    const res = await api.get(
      `search/?lattlong=${location.latitude},${location.longitude}`
    );
    const data = await res.data;

    return data;
  };

  const getSearch = async (search) => {
    const res = await api.get(`search?query=${search}`);
    const data = await res.data;

    return data;
  };

  return {
    getWeather,
    getLocation,
    getSearch,
  };
};
