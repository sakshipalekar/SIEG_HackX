import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree} from "./Data";
import { InfoSection, Pricing } from "../../components";

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      
{/* 
      <Pricing />

      <InfoSection {...homeObjFour} /> */}
      
    </>
  );
}

export default Home;
