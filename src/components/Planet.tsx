import styled from "styled-components";

const Maincontainer = styled.section`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Namediv = styled.div`
  width: 100%;
  height: 30%;

  h1 {
    font-size: 5em;
    color: white;
  }
`;

const Textdiv = styled.div`
  width: 100%;
  height: 40%;
  border-bottom: 1px solid black;

  p {
    color: white;
    font-size: 1em;
  }
`;
const Specificationdiv = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Specdiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5%;

  h5 {
    font-size: 1.5em;
    color: white;
  }

  p {
    font-size: 2.7em;
    color: white;
  }
  @media (max-width: 950px) {
    h5 {
      font-size: 0.9em;
      color: white;
    }

    p {
      font-size: 1.3em;
      color: white;
    }
  }
`;
export default function Planet(props: any) {
  return (
    <>
      <Maincontainer>
        <Namediv>
          <h1>{props.name}</h1>
        </Namediv>
        <Textdiv>
          <p>{props.text}</p>
        </Textdiv>
        <Specificationdiv>
          <Specdiv>
            <h5>AVG.DISTANCE</h5>
            <p>{props.distance}</p>
          </Specdiv>
          <Specdiv>
            <h5>EST. ARRIVAL TIME</h5>
            <p>{props.time}</p>
          </Specdiv>
        </Specificationdiv>
      </Maincontainer>
    </>
  );
}
