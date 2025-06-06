import React, { useState, useRef, useEffect, useMemo } from "react";

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
import { useScrollY } from "./hooks/useScrollY";
import { Language } from "./components/Language";

const dynamicRadius = ({
  initialRadius,
  yPosition,
  growthRate = 0.1,
  yRatio,
}) => {
  const screenYPosition = useScrollY({
    wait: 0,
    yRatio: yRatio ?? 3 / 4,
  });

  const isTablet = 640 < window.innerWidth && window.innerWidth <= 1024;
  const isMobile = window.innerWidth < 640;
  const base = 0;
  const max = 600;

  const formattedGrowthRate = isTablet
    ? growthRate * 0.7
    : isMobile
    ? growthRate * 0.5
    : growthRate;

  const growth = (screenYPosition - yPosition) * formattedGrowthRate;
  const readyGrowth = screenYPosition > yPosition;

  return readyGrowth ? initialRadius + growth : initialRadius;
};

const BackgroundImages = ({ svgWrapperRef, svgWidth }) => {
  return (
    <div
      ref={svgWrapperRef}
      style={{ height: "100%" }}
      className="absolute w-full -z-1 left-0"
    >
      <svg id="svg-container" className="relative" width="100%" height="100%">
        {/* left */}
        <circle
          cx="570"
          cy="-30"
          r={dynamicRadius({
            initialRadius: 110,
            yPosition: -30,
            growthRate: 0.14,
          })}
          fill="rgba(138, 133, 32, 0.3)"
        />
        <circle
          cx="100"
          cy="-30"
          r={dynamicRadius({
            initialRadius: 420,
            yPosition: -30,
            growthRate: 0.16,
          })}
          fill="rgba(137, 255, 78, 0.1)"
        />
        <circle
          cx="30"
          cy="500"
          r={dynamicRadius({
            initialRadius: 120,
            yPosition: 500,
            growthRate: 0.13,
          })}
          fill="rgba(35, 207, 8, 0.089)"
        />
        <circle
          cx="70"
          cy="1900"
          r={dynamicRadius({
            initialRadius: 250,
            yPosition: 1900,
            growthRate: 0.12,
            yRatio: 1.1,
          })}
          fill="rgba(137, 255, 78, 0.24)"
        />
        <circle
          cx="170"
          cy="2200"
          r={dynamicRadius({
            initialRadius: 120,
            yPosition: 2200,
            growthRate: 0.11,
            yRatio: 1.1,
          })}
          fill="rgba(182, 103, 12, 0.349)"
        />
        <circle
          cx="240"
          cy="5000"
          r={dynamicRadius({
            initialRadius: 120,
            yPosition: 4800,
            growthRate: 0.16,
            yRatio: 1.1,
          })}
          fill="rgba(85, 250, 35, 0.13)"
        />
        <circle
          cx="260"
          cy="6000"
          r={dynamicRadius({
            initialRadius: 120,
            yPosition: 6000,
            growthRate: 0.1,
            yRatio: 1.1,
          })}
          fill="rgba(195, 254, 85, 0.23)"
        />
        <circle
          cx="100"
          cy="6200"
          r={dynamicRadius({
            initialRadius: 230,
            yPosition: 6200,
            growthRate: 0.12,
            yRatio: 1.1,
          })}
          fill="rgba(7, 255, 94, 0.114)"
        />
        <circle
          cx={70}
          cy={document.documentElement.scrollHeight - 100}
          r={dynamicRadius({
            initialRadius: 250,
            yPosition: document.documentElement.scrollHeight - 100,
            growthRate: 0.7,
            yRatio: 1.1,
          })}
          fill="rgba(84, 175, 18, 0.344)"
        />
        <circle
          cx={370}
          cy={document.documentElement.scrollHeight}
          r={dynamicRadius({
            initialRadius: 80,
            yPosition: document.documentElement.scrollHeight,
            growthRate: 0.6,
            yRatio: 1.1,
          })}
          fill="rgba(175, 159, 18, 0.344)"
        />
        {/* leaf */}
        <g transform="scale(0.6) rotate(80, 200, 200) translate(2000, 20)">
          <path
            id="svg_4"
            d="m256.83491,313.32544c6.40275,-18.52744 15.16636,-34.21825 23.4792,-42.03831c8.90587,-8.37795 4.95464,-12.01204 -4.23249,-3.89278c-3.86514,3.41584 -4.96946,0.93557 -4.96946,-11.16129c0,-28.86213 16.92941,-46.72118 57.66248,-60.82879c34.46622,-11.93719 59.87662,-25.36132 70.41232,-37.19839l8.58529,-9.6458l0,16.78273c0,20.7521 -7.28514,52.1035 -15.34912,66.05456c-8.55445,14.79964 -37.87587,42.11759 -52.26436,48.69328c-12.89082,5.89128 -40.42147,7.62564 -55.13531,3.4734c-7.33251,-2.06921 -9.65962,-0.48823 -13.45895,9.14367c-2.52645,6.40495 -4.59355,15.517 -4.59355,20.24892c0,5.37204 -2.43797,8.60346 -6.49089,8.60346c-4.81366,0 -5.75555,-2.12778 -3.64515,-8.23465l-0.00001,0z"
            fill="#1fe01f37"
          />
        </g>
        <g
          transform={`translate(${svgWidth}, 2650) scale(-0.6, 0.6) rotate(72, 200, 200)`}
        >
          <path
            id="svg_4"
            d="m256.83491,313.32544c6.40275,-18.52744 15.16636,-34.21825 23.4792,-42.03831c8.90587,-8.37795 4.95464,-12.01204 -4.23249,-3.89278c-3.86514,3.41584 -4.96946,0.93557 -4.96946,-11.16129c0,-28.86213 16.92941,-46.72118 57.66248,-60.82879c34.46622,-11.93719 59.87662,-25.36132 70.41232,-37.19839l8.58529,-9.6458l0,16.78273c0,20.7521 -7.28514,52.1035 -15.34912,66.05456c-8.55445,14.79964 -37.87587,42.11759 -52.26436,48.69328c-12.89082,5.89128 -40.42147,7.62564 -55.13531,3.4734c-7.33251,-2.06921 -9.65962,-0.48823 -13.45895,9.14367c-2.52645,6.40495 -4.59355,15.517 -4.59355,20.24892c0,5.37204 -2.43797,8.60346 -6.49089,8.60346c-4.81366,0 -5.75555,-2.12778 -3.64515,-8.23465l-0.00001,0z"
            fill="#3bdc6e51"
          />
        </g>
        <g
          transform={`translate(${
            svgWidth - 130
          }, 5200) scale(-0.7, 0.7) rotate(80, 200, 200)`}
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
          r={dynamicRadius({
            initialRadius: 250,
            yPosition: 740,
            growthRate: 0.15,
            yRatio: 1,
          })}
          fill="rgba(106, 219, 94, 0.2)"
        />
        <circle
          cx={svgWidth - 6}
          cy="1100"
          r={dynamicRadius({
            initialRadius: 140,
            yPosition: 1100,
            growthRate: 0.14,
            yRatio: 1.1,
          })}
          fill="rgba(162, 246, 53, 0.186)"
        />
        <circle
          cx={svgWidth - 140}
          cy="3800"
          r={dynamicRadius({
            initialRadius: 200,
            yPosition: 3800,
            growthRate: 0.18,
            yRatio: 1,
          })}
          fill="rgba(133, 255, 67, 0.2)"
        />
        <circle
          cx={svgWidth - 200}
          cy={document.documentElement.scrollHeight - 2000}
          r={dynamicRadius({
            initialRadius: 140,
            yPosition: document.documentElement.scrollHeight - 2000,
            growthRate: 0.2,
            yRatio: 1,
          })}
          fill="rgba(16, 250, 137, 0.186)"
        />
        <circle
          cx={svgWidth + 10}
          cy={document.documentElement.scrollHeight - 250}
          r={dynamicRadius({
            initialRadius: 220,
            yPosition: document.documentElement.scrollHeight - 250,
            growthRate: 0.6,
            yRatio: 1,
          })}
          fill="rgba(162, 246, 53, 0.186)"
        />
        <circle
          cx={svgWidth - 290}
          cy={document.documentElement.scrollHeight - 100}
          r={dynamicRadius({
            initialRadius: 250,
            yPosition: document.documentElement.scrollHeight - 100,
            growthRate: 0.4,
            yRatio: 1.05,
          })}
          fill="rgba(246, 236, 53, 0.186)"
        />
        <circle
          cx={svgWidth - 600}
          cy={document.documentElement.scrollHeight}
          r={dynamicRadius({
            initialRadius: 100,
            yPosition: document.documentElement.scrollHeight,
            growthRate: 0.6,
            yRatio: 1.1,
          })}
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
  const [readyShow, setReadyShow] = useState(false);

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

  const showNavigation = window.innerWidth < 1024;

  return (
    <div
      className={`relative h-full flex justify-center items-start mx-auto 
          px-10 lg:px-10 lg:gap-30 flex-col lg:flex-row transition-opacity duration-200 
          ease-in ${readyShow ? "opacity-100" : "opacity-0"}`}
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
      <Language />
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
  );
}

export default App;
