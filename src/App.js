import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import InteriorSection from "./components/InteriorSection";
import ModernDesign from "./components/ModernDesignSection";
import Footer from "./components/Footer";
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
      <ModernDesign {...InfoDataTwo} />
      <Footer {...InfoDataFive} />
    </>
  );
}

export default App;
