import styled from "styled-components";
import "./font.css";

export const Maincontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15%;
  a {
    text-decoration: none;
    font-size: 2em;
    color: black;
    font-family: sans-bold;
     font-weight: bold;
  }
  @media (max-width: 950px) {
    gap: 2%;
    flex-direction: column;
  }
`;
export const Textcontainer = styled.div`
  width: 40%;
  height: 80%;

  h3 {
    font-size: 2em;
    color: white;
    font-family: sans-medium;

  }

  h2 {
    font-size: 10em;
    color: white;
    font-family: sans-bold;

  }
  p {
    font-size: 1em;
    color: white;
  }

  @media (max-width: 950px) {
    height: 60%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h3 {
      font-size: 2em;
      color: white;
    }

    h2 {
      font-size: 3.5em;
      color: white;
    }
    p {
      font-size: 1em;
      color: white;
    }
  }
`;
export const Explore = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;

  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

 
  @media (max-width: 950px) {
    height: 300px;
    width: 300px;
  }
`;
