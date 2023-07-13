import { objcontext } from "../App";
import backgroundtecno from "../assets/technology/background-technology-desktop.jpg";
import { useContext, useEffect, useState } from "react";
import data from "../data/data.json";
import { Maincontainer, Head, Content, Navigation, Ballsdiv, Balls, Textdiv, Imagebox, Rocketimg } from "../styled/styledTechnology";


export default function Technology() {
  const setActivebackground: any = useContext(objcontext);
  const [spacecraft, setSpacecraft] = useState(0);

  useEffect(() => {
    setActivebackground(backgroundtecno);
  }, []);
  return (
    <>
      <Maincontainer>
        <Head>
          <h1>03 TECHNOLOGY</h1>
        </Head>
        <Content>
          <Navigation>
            <Ballsdiv>
              <Balls
                style={{
                  backgroundColor: spacecraft === 0 ? "white" : "transparent",
                }}
                onClick={() => setSpacecraft(0)}
              >
                <h2
                  style={{
                    color: spacecraft === 0 ? "black" : "white",
                  }}
                >
                  1
                </h2>
              </Balls>
              <Balls
                style={{
                  backgroundColor: spacecraft === 1 ? "white" : "transparent",
                }}
                onClick={() => setSpacecraft(1)}
              >
                <h2
                  style={{
                    color: spacecraft === 1 ? "black" : "white",
                  }}
                >
                  2
                </h2>
              </Balls>
              <Balls
                style={{
                  backgroundColor: spacecraft === 2 ? "white" : "transparent",
                }}
                onClick={() => setSpacecraft(2)}
              >
                <h2
                  style={{
                    color: spacecraft === 2 ? "black" : "white",
                  }}
                >
                  3
                </h2>
              </Balls>
            </Ballsdiv>
            <Textdiv>
              <h4>THE TECHONOLGY....</h4>
              <h5>{data.technology[spacecraft].name}</h5>
              <p>{data.technology[spacecraft].description}</p>
            </Textdiv>
          </Navigation>
          <Imagebox>
            <Rocketimg src={data.technology[spacecraft].images.portrait} />
          </Imagebox>
        </Content>
      </Maincontainer>
    </>
  );
}
