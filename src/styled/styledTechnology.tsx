import styled from "styled-components";



export const Maincontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1%;
`;

export const Head = styled.div`
  width: 80%;
  height: 5%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    color: wheat;
    font-size: 2em;
  }
  @media (max-width: 950px) {
    height: 5%;
    h1 {
      color: wheat;
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

export const Navigation = styled.div`
  width: 50%;
  height: 80%;

  display: flex;
  justify-content: center;

  @media (max-width: 950px) {
    height: 60%;
    width: 100%;
  }
`;
export const Ballsdiv = styled.div`
  width: 30%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const Balls = styled.div`
  width: 60%;
  height: 25%;
  border: 2px dashed black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  h2 {
    font-size: 2em;
    color: white;
  }
`;

export const Textdiv = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  h4 {
    font-size: 1.5em;
    color: white;
  }

  h5 {
    font-size: 2em;
    color: wheat;
  }

  p {
    font-size: 1em;
    color: white;
  }
  @media (max-width: 950px) {
    h4 {
      font-size: 1em;
      color: white;
    }

    h5 {
      font-size: 1.4em;
      color: wheat;
    }

    p {
      font-size: 0.8em;
      color: white;
    }
  }
`;

export const Imagebox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 950px) {
  width: 60%:
  height: 40%;
}
  
`;
export const Rocketimg = styled.img`
  width: 70%;
  height: 85%;
  @media (max-width: 950px) {
    width: 300px;
    height: 100%;
  }
`;
