import styled from "styled-components";

export const MainStyled = styled.div`
  background: var(--backgroundMain);
  padding: 22px;

  .main {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .hightlights {
    margin-bottom: "40px";

    h2 {
      color: var(--white);
      font-style: normal;
      font-weight: bold;
      font-size: 1.25rem;
      line-height: 28px;
      margin: 30px 0;
    }
  }

  footer {
    text-align: center;
    padding-bottom: 40px;
    color: var(--gray);
  }

  footer a {
    color: #f2f2f2;
    font-weight: bold;
    text-decoration: none;
  }

  .highlights-flex {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 20px;
  }

  @media screen and (min-width: 1024px) {
    .main {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      justify-content: space-between;
    }

    .hightlights {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      margin-bottom: "40px";
    }

    .highlights-flex {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      gap: 20px;
    }
  }
`;

export const Temperature = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 70px;

    .temperature {
      background-color: var(--Color);
      color: var(--white);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 12px;
      cursor: pointer;
      transition: all 0.5s ease;

      p {
        font-weight: bold;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .temp-active {
      background-color: var(--ColorActive);
      color: var(--backgroundMenu);
    }
  }
`;
