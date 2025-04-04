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
import { experiences } from "./constants/data";
import AudioPlayer from "./components/AudioPlayer";

const BackgroundImages = ({ svgWrapperRef, svgWidth }) => {
  return (
    <div
      ref={svgWrapperRef}
      style={{ height: "100%" }}
      className="absolute w-full -z-1 left-0"
    >
      <svg id="svg-container" className="absolute" width="100%" height="100%">
        {/* left */}
        <circle cx="570" cy="-30" r="150" fill="rgba(138, 133, 32, 0.3)" />
        <circle cx="100" cy="-30" r="500" fill="rgba(137, 255, 78, 0.1)" />
        <circle cx="30" cy="500" r="160" fill="rgba(35, 207, 8, 0.089)" />
        <circle cx="70" cy="2400" r="300" fill="rgba(137, 255, 78, 0.1)" />
        <circle cx="170" cy="2680" r="140" fill="rgba(182, 103, 12, 0.349)" />
        <circle
          cx={70}
          cy={document.documentElement.scrollHeight - 100}
          r="300"
          fill="rgba(84, 175, 18, 0.344)"
        />
        <circle
          cx={370}
          cy={document.documentElement.scrollHeight}
          r="120"
          fill="rgba(175, 159, 18, 0.344)"
        />
        {/* leaf */}
        <g
          style={{
            position: "absolute",
          }}
          transform="scale(0.5) rotate(80, 200, 200) translate(900, -0)"
        >
          <path
            id="svg_4"
            d="m256.83491,313.32544c6.40275,-18.52744 15.16636,-34.21825 23.4792,-42.03831c8.90587,-8.37795 4.95464,-12.01204 -4.23249,-3.89278c-3.86514,3.41584 -4.96946,0.93557 -4.96946,-11.16129c0,-28.86213 16.92941,-46.72118 57.66248,-60.82879c34.46622,-11.93719 59.87662,-25.36132 70.41232,-37.19839l8.58529,-9.6458l0,16.78273c0,20.7521 -7.28514,52.1035 -15.34912,66.05456c-8.55445,14.79964 -37.87587,42.11759 -52.26436,48.69328c-12.89082,5.89128 -40.42147,7.62564 -55.13531,3.4734c-7.33251,-2.06921 -9.65962,-0.48823 -13.45895,9.14367c-2.52645,6.40495 -4.59355,15.517 -4.59355,20.24892c0,5.37204 -2.43797,8.60346 -6.49089,8.60346c-4.81366,0 -5.75555,-2.12778 -3.64515,-8.23465l-0.00001,0z"
            fill="#04913196"
          />
        </g>
        <g
          style={{
            position: "absolute",
          }}
          transform="scale(0.4) rotate(100, 200, 200) translate(1230, -400)"
        >
          <path
            id="svg_4"
            d="m256.83491,313.32544c6.40275,-18.52744 15.16636,-34.21825 23.4792,-42.03831c8.90587,-8.37795 4.95464,-12.01204 -4.23249,-3.89278c-3.86514,3.41584 -4.96946,0.93557 -4.96946,-11.16129c0,-28.86213 16.92941,-46.72118 57.66248,-60.82879c34.46622,-11.93719 59.87662,-25.36132 70.41232,-37.19839l8.58529,-9.6458l0,16.78273c0,20.7521 -7.28514,52.1035 -15.34912,66.05456c-8.55445,14.79964 -37.87587,42.11759 -52.26436,48.69328c-12.89082,5.89128 -40.42147,7.62564 -55.13531,3.4734c-7.33251,-2.06921 -9.65962,-0.48823 -13.45895,9.14367c-2.52645,6.40495 -4.59355,15.517 -4.59355,20.24892c0,5.37204 -2.43797,8.60346 -6.49089,8.60346c-4.81366,0 -5.75555,-2.12778 -3.64515,-8.23465l-0.00001,0z"
            fill="#1fe01f37"
          />
        </g>
        {/* center */}
        <g
          style={{
            position: "absolute",
          }}
          transform="translate(900, 4000) scale(-0.7, 0.7) rotate(72, 200, 200)"
        >
          <path
            id="svg_4"
            d="m256.83491,313.32544c6.40275,-18.52744 15.16636,-34.21825 23.4792,-42.03831c8.90587,-8.37795 4.95464,-12.01204 -4.23249,-3.89278c-3.86514,3.41584 -4.96946,0.93557 -4.96946,-11.16129c0,-28.86213 16.92941,-46.72118 57.66248,-60.82879c34.46622,-11.93719 59.87662,-25.36132 70.41232,-37.19839l8.58529,-9.6458l0,16.78273c0,20.7521 -7.28514,52.1035 -15.34912,66.05456c-8.55445,14.79964 -37.87587,42.11759 -52.26436,48.69328c-12.89082,5.89128 -40.42147,7.62564 -55.13531,3.4734c-7.33251,-2.06921 -9.65962,-0.48823 -13.45895,9.14367c-2.52645,6.40495 -4.59355,15.517 -4.59355,20.24892c0,5.37204 -2.43797,8.60346 -6.49089,8.60346c-4.81366,0 -5.75555,-2.12778 -3.64515,-8.23465l-0.00001,0z"
            fill="#24a84e51"
          />
        </g>
        {/* right */}
        <circle
          cx={svgWidth - 20}
          cy="740"
          r="300"
          fill="rgba(106, 219, 94, 0.2)"
        />
        <circle
          cx={svgWidth - 6}
          cy="1100"
          r="150"
          fill="rgba(162, 246, 53, 0.186)"
        />
        <circle
          cx={svgWidth + 10}
          cy={document.documentElement.scrollHeight - 250}
          r="300"
          fill="rgba(162, 246, 53, 0.186)"
        />
        <circle
          cx={svgWidth - 290}
          cy={document.documentElement.scrollHeight - 100}
          r="300"
          fill="rgba(246, 236, 53, 0.186)"
        />
        <circle
          cx={svgWidth - 600}
          cy={document.documentElement.scrollHeight}
          r="140"
          fill="rgba(246, 156, 53, 0.344)"
        />
      </svg>
    </div>
  );
};

function App() {
  const svgWrapperRef = useRef(null);
  const [itemData, setItemData] = useState(null);
  const [svgWidth, setSvgWidth] = useState(0);
  const [hoveredItem, setHoveredItem] = useState("");

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

    return () => window.removeEventListener("resize", updateSizes);
  }, [svgWrapperRef]);

  const showNavigation = window.innerWidth < 1024;

  return (
    <>
      <div
        className={`relative h-full flex justify-center items-start mx-auto 
          px-10 lg:px-10 lg:gap-30 flex-col lg:flex-row`}
      >
        {showNavigation && (
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
        <AudioPlayer />
        <main className="flex flex-col gap-40 max-w-[700px]">
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
          <TheLastFootsteps className="contact" />
          {itemData && (
            <DetailModal
              data={itemData}
              handleItem={(data) => setItemData(data)}
            />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
