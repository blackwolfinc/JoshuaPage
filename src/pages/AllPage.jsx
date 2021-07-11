import React from "react";
import { Page12 } from "./Page1 Component/page1.2/Page12";





import { Page1 } from "./Page1 Component/Page1/Page1";
import { Page2 } from "./Page1 Component/Page2/Page2";
import { Page3 } from "./Page1 Component/Page3/Page3";
import { Endpage } from "./Page1 Component/Page4/Endpage";



export const AllPage = () => {
  return (
    <>
      <Page1/>
      <Page12/>
      <Page2/>
      <Page3/>
    <Endpage/>
    </>
  );
};
