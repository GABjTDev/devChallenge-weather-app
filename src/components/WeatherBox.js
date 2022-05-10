import styled from "styled-components";
import ImgWeather from "./ImgWeather";

const WeatherBoxStyled = styled.div`
  color: white;
  background: var(--backgroundMenu);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 140px;
  margin-bottom: 30px;
  justify-content: space-between;

  .next-days {
    font-size: 0.95rem;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    max-width: 56px;
    align-self: center;
    margin-bottom: 30px;
  }
`;

const MinMax = styled.div`
  display: flex;

  p {
    font-size: 0.95rem;
    font-weight: 500;
    margin: 0 5px;
  }

  .max {
    color: var(--white);
  }

  .min {
    color: var(--lightGray);
  }
`;

let options = {
  weekday: "short",
  month: "long",
  day: "numeric",
};

const WeatherBox = ({ day, grades }) => {
  return (
    <WeatherBoxStyled>
      <p className="next-days">
        {new Date(day.applicable_date.replace("-", "/")).toLocaleString(
          "en-GB",
          options
        )}
      </p>
      <ImgWeather day={day} />
      {grades === "C" && (
        <MinMax>
          <p className="max">{Math.floor(day.max_temp)}°C</p>
          <p className="min">{Math.floor(day.min_temp)}°C</p>
        </MinMax>
      )}

      {grades === "F" && (
        <MinMax>
          <p className="max">
            {Math.floor(Math.floor(day.max_temp) * 1.8 + 32)}°F
          </p>
          <p className="min">
            {Math.floor(Math.floor(day.min_temp) * 1.8 + 32)}°F
          </p>
        </MinMax>
      )}
    </WeatherBoxStyled>
  );
};

export default WeatherBox;
