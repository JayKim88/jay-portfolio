import React, { useState, useRef, useEffect } from "react";

import { Header, Navigation } from "./sections/Header";
import { Home } from "./sections/Home";
import { DetailModal } from "./components/DetailModal";
import { Projects } from "./sections/Projects";
import { TheLastFootsteps } from "./sections/TheLastFootsteps";
import { Skills } from "./sections/Skills";
import { Experiences } from "./sections/Experiences";
import { Educations } from "./sections/Educations";
import { Studies } from "./sections/Studies";
import AudioPlayer from "./components/AudioPlayer";
import { Language } from "./components/Language";
import { BackgroundImages } from "./components/BackgroundImages";
import { useWindowSize } from "./hooks/useWindowSize";

function App() {
  const svgWrapperRef = useRef(null);
  const [itemData, setItemData] = useState(null);
  const [svgWidth, setSvgWidth] = useState(0);
  const [hoveredItem, setHoveredItem] = useState("");
  const [readyShow, setReadyShow] = useState(false);
  const { isMobileOrTablet } = useWindowSize();

  const handleHoverItem = (v) => setHoveredItem(v);
  const handleClickedItem = (data) => setItemData(data);

  useEffect(() => {
    const updateSizes = () => {
      if (svgWrapperRef.current) {
        setSvgWidth(svgWrapperRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", updateSizes);
    updateSizes();
    setReadyShow(true);

    return () => window.removeEventListener("resize", updateSizes);
  }, [svgWrapperRef]);

  return (
    <div
      className={`relative h-full flex justify-center items-start mx-auto 
          px-10 lg:px-10 lg:gap-30 flex-col lg:flex-row transition-opacity duration-200 
          ease-in ${readyShow ? "opacity-100" : "opacity-0"}`}
    >
      {isMobileOrTablet && (
        <Navigation
          isTop
          customStyle="fixed flex z-20 p-1 px-4 text-black bg-gray-100 
            rounded-2xl w-[80%] max-w-[550px] transition-all duration-500 ease-in-out flex-wrap
            opacity-50 top-4 left-10 flex-row 
            gap-x-5 justify-start"
        />
      )}
      <BackgroundImages svgWrapperRef={svgWrapperRef} svgWidth={svgWidth} />
      <Header />
      <Language />
      <AudioPlayer />
      <main className="flex flex-col gap-40 max-w-[700px] pb-[96px]">
        <Home />
        <Skills />
        <Experiences onHover={handleHoverItem} hoveredItem={hoveredItem} />
        <Projects
          onClick={handleClickedItem}
          className="projects"
          onHover={handleHoverItem}
          hoveredItem={hoveredItem}
        />
        <Educations />
        <Studies onHover={handleHoverItem} hoveredItem={hoveredItem} />
        {/* <TheLastFootsteps className="contact" /> */}
        {itemData && (
          <DetailModal
            data={itemData}
            handleItem={(data) => setItemData(data)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
