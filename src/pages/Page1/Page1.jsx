import { Background } from "../../components/Background/Background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faMap,
  faNetworkWired,
  faUsersCog,
  faGlobeEurope,
  faServer,
  faMapMarkedAlt,
  faDatabase,
  faArrowRight,
 faUserCog
} from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
// import Page
import NavbarV1 from "../../components/User/header/Navbar/Navbarv1/NavbarV1";
// import Css
import "./Page1.scss";
import "./Responsive1016.scss";
import "./Responive826.scss";
import "./Responsive650.scss";
import "./Responsive510.scss";

// import Img
import { MDBContainer } from "mdbreact";
import { Vidio } from "../../components/User/Vidio/Vidio";

export const Page1 = () => {
  return (
    <div className="MainContainer">
      {/* <Background /> */}
    <NavbarV1 />
      <MDBContainer>
        <div className="BodyContainer">
          <div className="SecContainer">
       
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="SectionCard"
            >
              <div className="ImageSpeed">
                 {/* <img src={Handpone}></img> */}
                  <div className="SpeedWraper">       
                   {/* <GlobeGL/>  */}
                     <Vidio/>
                   </div>
              </div>
              {/* <img src={iconCard1} /> */}
            </div>
          </div>
          <div className="TrdContainer">
          <div className="TitelContainer">
              <h1>
              IMAGINE <span className="text-green "> CONNNECTIVITY </span>{" "}
                <br /> THAT WORKS
              </h1>
            </div>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
};
