import { useState, createContext} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Homepage from "./pages/Homepage";
import styled from "styled-components";
import backgroundhome from "./assets/home/background-home-desktop.jpg";
import backgrounddestination from "./assets/destination/background-destination-desktop.jpg";
import backgroundcrew from "./assets/crew/background-crew-desktop.jpg";
import backgroundtecno from "./assets/technology/background-technology-desktop.jpg";
import star from "./assets/shared/logo.svg";
import GlobalStyle from "./styled/Globalstyle";
import burger from "./assets/shared/icon-hamburger.svg";
import { Header, Headerdiv, Burgerpic, Burgernavigation, Nav, Content, Headerpic } from "./styled/styledApp";


export const objcontext = createContext<any>(" ");
function App() {
  const [activebackground, setActivebackground] = useState(backgroundhome);


  const [activeburger, setActiveburger] = useState(false);

  const Maincontainer = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
    height: 100vh;
    background-image: url(${activebackground});

    
  `;

  return (
    <>
      <objcontext.Provider value={setActivebackground}>
        <GlobalStyle />
        <Maincontainer>
          <Header>
            <Headerdiv>
             <Link to="/"> <Headerpic src={star} /></Link>
              <Burgerpic
                onClick={() => setActiveburger(!activeburger)}
                src={burger}
              />
              {activeburger ? (
                <Burgernavigation>
                  <Link
                    onClick={() => {
                      setActivebackground(backgroundhome)
                      setActiveburger(false)
                    }}
                    to="/"
                  >
                    00 HOME{" "}
                  </Link>
                  <Link
                    onClick={() => { 
                      setActivebackground(backgrounddestination)
                      setActiveburger(false)
                    
                    }}
                    to="/destination"
                  >
                    01 Destination{" "}
                  </Link>
                  <Link
                    onClick={() => {
                      setActivebackground(backgroundcrew) 
                      setActiveburger(false)}}
                    to="/crew"
                  >
                    02 Crew{" "}
                  </Link>
                  <Link
                    onClick={() => {
                      setActivebackground(backgroundtecno) 
                      setActiveburger(false)
                    }}
                    to="/technology"
                  >
                    03 Technology{" "}
                  </Link>
                </Burgernavigation>
              ) : null}
              <Nav>
                <Link
                  onClick={() => setActivebackground(backgroundhome)}
                  to="/"
                >
                  00 HOME{" "}
                </Link>
                <Link
                  onClick={() => setActivebackground(backgrounddestination)}
                  to="/destination"
                >
                  01 Destination{" "}
                </Link>
                <Link
                  onClick={() => setActivebackground(backgroundcrew)}
                  to="/crew"
                >
                  02 Crew{" "}
                </Link>
                <Link
                  onClick={() => setActivebackground(backgroundtecno)}
                  to="/technology"
                >
                  03 Technology{" "}
                </Link>
              </Nav>
            </Headerdiv>
          </Header>
          <Content onClick={() => setActiveburger(false)}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="/crew" element={<Crew />} />
              <Route path="/technology" element={<Technology />} />
            </Routes>
          </Content>
        </Maincontainer>
      </objcontext.Provider>
    </>
  );
}

export default App;
