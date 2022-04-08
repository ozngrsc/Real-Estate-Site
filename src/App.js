import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import InteriorSection from "./components/InteriorSection";
import NewHomes from "./components/NewHomes";
import {
  InfoData,
  InfoDataThree,
  InfoDataTwo,
  InfoDataFour,
  InfoDataFive,
} from "./data/InfoData";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <NewHomes {...InfoDataThree} />
      <InteriorSection {...InfoDataFour} />
    </>
  );
}

export default App;
