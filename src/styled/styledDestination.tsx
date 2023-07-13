import styled from "styled-components";
import "./font.css";

export const Maincontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;

export const Head = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: sans-bold;

  h1 {
    color: white;
    font-size: 2em;
  }
  @media (max-width: 950px) {
    height: 5%;
    h1 {
      font-size: 1em;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 85%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;
 

  @media (max-width: 950px) {
    gap: 1%;
    flex-direction: column;
  }
`;
export const Imagebox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 950px) {
    height: 30%;
  }
`;
export const Planetimg = styled.img`
  width: 70%;
  height: 85%;
`;

export const Main = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2%;

  @media (max-width: 950px) {
    width: 90%;
    height: 70%;
  }
`;
export const Mainhead = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;

  gap: 5%;
  align-items: center;

  p {
    color: white;
    font-size: 1.2em;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }
`;
