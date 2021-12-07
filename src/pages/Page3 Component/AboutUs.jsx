import React from "react";
import NavbarV1 from "../../components/User/header/Navbar/Navbarv1/NavbarV1";
import { Page3 } from "../Page1 Component/Page3/Page3";

import { Page2Costume2 } from "../Page1 Component/Page2/Page2Costume2";
import { Endpage } from "../Page1 Component/Page4/Endpage";
import "./AboutUs.scss";
import { FloatingButtonSales } from "../../components/FloatingButtonSales/FloatingButtonSales";
export const AboutUs = () => {
  return (
    <div>
      <NavbarV1 />
      <FloatingButtonSales/>
      <div className="container-AboutUs">
        <div className="container">
          <div className="AboutHeader">
            <h1>About US</h1>

            {<Page2Costume2 />}
            
          </div>
          {/* <Page3 /> */}
        </div>
      </div>


      <Endpage />
    </div>
  );
};
