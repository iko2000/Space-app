
import { useState, useEffect, useContext } from "react";
import Planet from "../components/Planet";
import data from "../data/data.json";
import { objcontext } from "../App";
import backgrounddestination from "../assets/destination/background-destination-desktop.jpg";
import { Maincontainer, Head, Content, Imagebox, Main, Mainhead, Planetimg } from "../styled/styledDestination";

export default function Destination() {
  const [planet, setPlanet] = useState(0);

  const setActivebackground: any = useContext(objcontext);

  useEffect(() => {
    setActivebackground(backgrounddestination);
  }, []);

  return (
    <>
      <Maincontainer>
        <Head>
          <h1>01 PICK YOUR DESTINATION</h1>
        </Head>
        <Content>
          <Imagebox>
            <Planetimg src={data.destinations[planet].images.png} />{" "}
          </Imagebox>
          <Main>
            <Mainhead>
              <p
                style={{
                  borderBottom:
                    planet === 0 ? "1px solid white" : "0px solid black",
                }}
                onClick={() => setPlanet(0)}
              >
                MOON
              </p>

              <p
                style={{
                  borderBottom:
                    planet === 1 ? "1px solid white" : "0px solid black",
                }}
                onClick={() => setPlanet(1)}
              >
                MARS
              </p>
              <p
                style={{
                  borderBottom:
                    planet === 2 ? "1px solid white" : "0px solid black",
                }}
                onClick={() => setPlanet(2)}
              >
                EUROPA
              </p>
              <p
                style={{
                  borderBottom:
                    planet === 3 ? "1px solid white" : "0px solid black",
                }}
                onClick={() => setPlanet(3)}
              >
                TITAN
              </p>
            </Mainhead>

            <Planet
              name={data.destinations[planet].name}
              text={data.destinations[planet].description}
              time={data.destinations[planet].travel}
              distance={data.destinations[planet].distance}
            />
          </Main>
        </Content>
      </Maincontainer>
    </>
  );
}
