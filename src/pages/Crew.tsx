import { objcontext } from "../App";
import backgroundcrew from "../assets/crew/background-crew-desktop.jpg";
import { useContext, useEffect, useState } from "react";
import data from "../data/data.json";
import { Maincontainer, Head, Content, Textbox, TextDiv, Balls, Balldivs, Imagebox, Crewimg } from "../styled/styledCrew";
export default function Crew() {
  const setActivebackground: any = useContext(objcontext);
  const [activecrew, setActivecrew] = useState(0);

  useEffect(() => {
    setActivebackground(backgroundcrew);
  }, []);
  return (
    <>
      <Maincontainer>
        <Head>
          <h1>02 MEET YOUR CREW</h1>
        </Head>
        <Content>
          <Textbox>
            <TextDiv>
              <h2>{data.crew[activecrew].role}</h2>
              <h3>{data.crew[activecrew].name}</h3>
              <p>{data.crew[activecrew].bio}</p>
            </TextDiv>
            <Balldivs>
              <Balls
                style={{
                  backgroundColor: activecrew === 0 ? "white" : "transparent",
                }}
                onClick={() => setActivecrew(0)}
              ></Balls>
              <Balls
                style={{
                  backgroundColor: activecrew === 1 ? "white" : "transparent",
                }}
                onClick={() => setActivecrew(1)}
              ></Balls>
              <Balls
                style={{
                  backgroundColor: activecrew === 2 ? "white" : "transparent",
                }}
                onClick={() => setActivecrew(2)}
              ></Balls>
              <Balls
                style={{
                  backgroundColor: activecrew === 3 ? "white" : "transparent",
                }}
                onClick={() => setActivecrew(3)}
              ></Balls>
            </Balldivs>
          </Textbox>
          <Imagebox>
            <Crewimg src={data.crew[activecrew].images.png} />
          </Imagebox>
        </Content>
      </Maincontainer>
    </>
  );
}
