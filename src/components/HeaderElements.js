import styled from "styled-components";
import BgCloud from "../images/Cloud-background-opacity.png";

export const HeaderStyled = styled.header`
  background: var(--backgroundMenu);
  height: 100vh;
  min-height: 730px;
  padding: 20px 0;
  position: relative;

  .active {
    transform: translateX(0);
  }

  @media screen and (min-width: 1024px) {
    height: auto;
  }
`;

export const BoxSearchStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 12px;
`;

export const BtnPlaceStyled = styled.button`
  background-color: var(--gray);
  border: none;
  color: white;
  outline: none;
  height: 100%;
  padding: 0 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const IconLocationStyled = styled.span`
  background-color: var(--gray);
  border-radius: 50%;
  color: white;
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const WeatherTodayStyled = styled.div`
  background: ${`url(${BgCloud}) no-repeat`};
  background-position: center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;

  img {
    width: 100%;
    max-width: 150px;
  }
`;

export const WeatherTextTodayStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .temperature {
    color: var(--white);
    font-size: 7rem;
    margin-bottom: 20px;
    font-weight: 500;

    span {
      color: var(--lightGray);
      font-size: 3rem;
    }
  }

  .weather {
    color: var(--lightGray);
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 40px;
  }

  .day {
    display: flex;
    color: var(--gray2);
    font-size: 1rem;
    font-weight: 500;
    line-height: 21px;
    margin-bottom: 23px;
  }

  .location {
    font-size: 1rem;
    font-weight: 500;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: var(--gray2);
  }
`;

export const BoxSearch = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  min-height: 730px;
  background-color: var(--backgroundMenu);
  top: 0;
  left: 0;
  padding: 20px 10px;
  z-index: 1000;
  transform: translateX(-600px);
  transition: all 0.3s linear;

  .close {
    display: flex;
    justify-content: flex-end;
    color: var(--white);
    cursor: pointer;
    margin-bottom: 30px;
  }

  .form {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  .input-box {
    border: 1px solid var(--gray);
    padding: 5px 15px;
    display: flex;
    align-items: center;
    color: var(--white);
    margin-right: 12px;
    width: 100%;

    input {
      color: var(--white);
      height: 100%;
      width: 100%;
      padding: 10px;
      background: transparent;
      outline: none;
      border: none;
    }
  }

  input[type="submit"] {
    background-color: var(--btn);
    color: var(--white);
    height: 100%;
    padding: 15px;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: "Raleway", sans-serif;
  }

  .country ul li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    border: 1px solid transparent;
    padding: 0 12px;
    color: var(--white);
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 0.95rem;
  }

  .country p {
    color: var(--gray);
  }

  .country ul li span {
    visibility: hidden;
    color: var(--gray);
  }

  .country ul li:hover {
    border: 1px solid var(--gray);
  }

  .country ul li:hover span {
    visibility: visible;
  }

  @media screen and (min-width: 624px) {
    position: absolute;
    width: 100%;
    transform: translateX(-1000px);
  }

  @media screen and (min-width: 1024px) {
    position: absolute;
    width: 100%;
    transform: translateX(-700px);
  }
`;
