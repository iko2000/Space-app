import styled from "styled-components";
import "./font.css";

export const Maincontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1%;
`;

export const Head = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    color: white;
    font-size: 2em;
  }
  @media (max-width: 950px) {
    height: 5%;
    h1 {
      color: white;
      font-size: 1em;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const Textbox = styled.div`
  width: 42%;
  height: 100%;

  display: flex;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 950px) {
    height: 50%;
    width: 90%;
  }
`;

export const TextDiv = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  h2 {
    color: white;
    font-size: 2.5em;
  }
  h3 {
    color: wheat;
    font-family: sans-bold;
    font-size: 2.5em;
  }

  p {
    color: white;
    font-size: 1.2em;
  }
  @media (max-width: 950px) {
    h2 {
      color: white;
      font-size: 1.5em;
    }
    h3 {
      color: wheat;
      font-size: 1.5em;
    }

    p {
      color: white;
      font-size: 0.7em;
    }
  }
`;

export const Imagebox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 950px) {
    height: 40%;
  }
`;
export const Crewimg = styled.img`
  width: 80%;
  height: 100%;
`;

export const Balldivs = styled.div`
  width: 50%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  position: sticky;
`;
export const Balls = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid black;
  cursor: pointer;
`;
