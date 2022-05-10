import styled from "styled-components";

const HighBox = styled.div`
  background-color: var(--backgroundMenu);
  color: var(--white);
  width: 100%;
  max-width: 320px;
  max-height: 204px;
  min-height: 140px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  justify-content: space-around;

  h3 {
    font-size: 0.95rem;
    line-height: 19px;
  }

  .number {
    font-size: 3rem;
    font-weight: bold;

    span {
      font-size: 2rem;
      font-weight: normal;
    }
  }

  .extra {
    display: flex;
    align-items: center;
    height: 50px;

    p {
      font-size: 0.9rem;
    }

    .material-icons {
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--gray);
      border-radius: 50%;
      width: 20px;
      height: 20px;
      transform: rotate(180deg);
      margin-right: 7px;
    }
  }

  .bar-humidity {
    width: 70%;
    color: var(--lightGray);

    .porcent {
      font-size: 0.75rem;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .bar {
      width: 100%;
      height: 8px;
      border-radius: 80px;
      background-color: var(--barColor);
      margin: 4px 0;
    }

    .progress {
      width: ${(props) => props.porcent + "%"};
      height: 8px;
      background-color: var(--yellow);
      border-radius: 80px;
    }

    .symbol-porcent {
      text-align: right;
    }
  }
`;

const HighLightsBox = ({ wind, humidity, visibility, air }) => {
  return (
    <HighBox porcent={humidity}>
      {wind && (
        <>
          <h3>Wind status</h3>

          <p className="number">
            {Math.floor(wind.wind_speed)}
            <span>mph</span>
          </p>

          <div className="extra">
            <span className="material-icons">near_me</span>
            <p>{wind.wind_direction_compass}</p>
          </div>
        </>
      )}

      {humidity && (
        <>
          <h3>Humidity</h3>
          <p className="number">
            {humidity}
            <span>%</span>
          </p>
          <div className="bar-humidity">
            <div className="porcent">
              <p>0</p>
              <p>50</p>
              <p>100</p>
            </div>
            <div className="bar">
              <div className="progress"></div>
            </div>
            <p className="symbol-porcent">%</p>
          </div>
        </>
      )}

      {visibility && (
        <>
          <h3>Visibility</h3>

          <p className="number">
            {Math.floor(visibility)}
            <span>miles</span>
          </p>
        </>
      )}

      {air && (
        <>
          <h3>Air Pressure</h3>
          <p className="number">
            {Math.floor(air)}
            <span>mb</span>
          </p>
        </>
      )}
    </HighBox>
  );
};

export default HighLightsBox;
