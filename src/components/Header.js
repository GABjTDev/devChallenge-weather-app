import { useState } from "react";
import { useWeather } from "../service/useWeather";

// Estilos
import {
  HeaderStyled,
  BoxSearchStyled,
  BtnPlaceStyled,
  IconLocationStyled,
  WeatherTodayStyled,
  WeatherTextTodayStyled,
  BoxSearch,
} from "./HeaderElements";
import ImgWeather from "./ImgWeather";
import Loader from "./Loader";

let options = {
  weekday: "short",
  month: "long",
  day: "numeric",
};

const Header = ({ weather, setWeather, grades, setGrades, woeid }) => {
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(false);
  const [countries, setCountries] = useState([]);
  const { getWeather, getSearch } = useWeather();
  const days = weather ? weather.consolidated_weather : [];

  const activeSearch = () => {
    !active ? setActive(true) : setActive(false);
  };

  const handleSearch = (e) => setSearch(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);

    getSearch(search)
      .then((res) => {
        setLoad(false);
        setCountries(res.slice(0, 7));
      })
      .catch((err) => console.log(err));
    setSearch("");
  };

  const handleWoeid = (id) => {
    setActive(false);
    setCountries([]);
    setWeather(null);
    setGrades("C");
    getWeather(id)
      .then((res) => setWeather(res))
      .catch((err) => console.log(err));
  };

  return (
    <HeaderStyled className="header">
      <BoxSearchStyled>
        <BtnPlaceStyled onClick={activeSearch}>
          Search for places
        </BtnPlaceStyled>
        <IconLocationStyled
          className="material-icons"
          onClick={() => {
            handleWoeid(woeid);
          }}
        >
          my_location
        </IconLocationStyled>
      </BoxSearchStyled>

      <WeatherTodayStyled>
        <ImgWeather day={days[0]} />
      </WeatherTodayStyled>

      <WeatherTextTodayStyled>
        <p className="temperature">
          {grades === "C"
            ? Math.floor(days[0].the_temp)
            : Math.floor(Math.floor(days[0].min_temp) * 1.8 + 32)}
          <span>°{grades}</span>
        </p>
        <p className="weather">{days[0].weather_state_name}</p>
        <div className="day">
          <p>
            Today -{" "}
            {new Date(days[0].applicable_date.replace("-", "/")).toLocaleString(
              "en-GB",
              options
            )}
          </p>
        </div>
        <div className="location">
          <span className="material-icons">place</span>
          <p className="location-name">{weather.title}</p>
        </div>
      </WeatherTextTodayStyled>

      <BoxSearch className={active ? "active" : ""}>
        <span className="material-icons close" onClick={activeSearch}>
          close
        </span>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-box">
            <span className="material-icons">search</span>
            <input
              type="text"
              placeholder="search location"
              value={search}
              onChange={handleSearch}
            />
          </div>
          <input type="submit" value="Search" />
        </form>

        <div className="country">
          <ul>
            {countries.length === 0 && <p>Not search</p>}
            {load && <Loader />}
            {countries.map((c) => {
              return (
                <li
                  key={c.woeid}
                  onClick={() => {
                    handleWoeid(c.woeid);
                  }}
                >
                  {c.title}{" "}
                  <span className="material-icons">chevron_right</span>
                </li>
              );
            })}
          </ul>
        </div>
      </BoxSearch>
    </HeaderStyled>
  );
};

export default Header;
