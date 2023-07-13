
import { useContext, useEffect } from "react";
import { objcontext } from "../App";
import backgroundhome from "../assets/home/background-home-desktop.jpg";
import { Link } from "react-router-dom";
import { Maincontainer, Textcontainer, Explore } from "../styled/styledHomepage";
export default function Homepage() {
  const setActivebackground: any = useContext(objcontext);

  useEffect(() => {
    setActivebackground(backgroundhome);
  }, []);
  return (
    <>
      <Maincontainer>
        <Textcontainer>
          <h3>SO, YOU WANT TRAVEL TO </h3>
          <h2>SPACE</h2>
          <p>
            Let's face it: if you want to go to space, you might asw ell
            genuenely go to cuter space and not hover kind of the edge of it.
            Well sit back and relax because we'll give you the a truly out of
            this word experience.
          </p>
        </Textcontainer>
       
          <Link to="/destination"> <Explore>EXPLORE  </Explore></Link>
      
      </Maincontainer>
    </>
  );
}
