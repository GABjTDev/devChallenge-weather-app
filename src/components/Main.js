import { MainStyled, Temperature } from "./MainElements";
import WeatherBox from "./WeatherBox";
import HighLightsBox from "./HighLightsBox";

const Main = ({ weather, grades, handleGrades }) => {
  const daysWeather = weather.consolidated_weather.slice(1);
  const today = weather.consolidated_weather[0];

  return (
    <MainStyled>
      <main className="main">
        <Temperature>
          <div className="temperature temp-active">
            <p onClick={(e) => handleGrades(e, "C")}>C°</p>
          </div>
          <div className="temperature">
            <p onClick={(e) => handleGrades(e, "F")}>F°</p>
          </div>
        </Temperature>

        {daysWeather.map((day) => {
          return <WeatherBox key={day.id} day={day} grades={grades} />;
        })}
      </main>
      <div className="hightlights">
        <h2>Today’s Hightlights</h2>
        <div className="highlights-flex">
          <HighLightsBox
            wind={{
              wind_direction_compass: today.wind_direction_compass,
              wind_speed: today.wind_speed,
            }}
          />
          <HighLightsBox humidity={today.humidity} />
          <HighLightsBox visibility={today.visibility} />
          <HighLightsBox air={today.air_pressure} />
        </div>
      </div>
      <footer className="footer">
        <p>
          Created by{" "}
          <a
            href="https://github.com/GABjTDev"
            target="_blank"
            rel="noreferrer"
          >
            Gabriel Rea
          </a>{" "}
          -{" "}
          <a href="https://devchallenges.io/" target="_blank" rel="noreferrer">
            devChallenges.io
          </a>
        </p>
      </footer>
    </MainStyled>
  );
};

export default Main;
