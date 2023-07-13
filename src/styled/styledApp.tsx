import styled from "styled-components";
import "./font.css";

export const Header = styled.header`
  width: 100%;
  height: 8em;
  font-family: Cosmic;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  @media (max-width: 950px) {
    justify-content: center;
  }
`;

export const Headerdiv = styled.div`
  width: 95%;
  height: 5em;
  display: flex;
  justify-content: space-between;

  align-items: center;
`;

export const Headerpic = styled.img`
  width: 50px;
  height: 50px;
`;

export const Burgerpic = styled.img`
  width: 30px;
  height: 30px;
  display: none;
  cursor: pointer;

  @media (max-width: 950px) {
    display: block;
  }
`;

export const Burgernavigation = styled.nav`
  width: 40%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 13%;
  right: 5%;
  background-color: transparent;
  backdrop-filter: blur(5px);

  a {
    font-size: 0.8em;
    text-decoration: none;
    color: white;
  }
`;

export const Nav = styled.nav`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  gap: 5%;
  align-items: center;
  backdrop-filter: blur(5px);
  @media (max-width: 950px) {
    display: none;
  }

  a {
    font-size: 1em;
    text-decoration: none;
    color: white;
  }
`;
export const Content = styled.section`
  width: 100%;
  height: 80vh;
`;
