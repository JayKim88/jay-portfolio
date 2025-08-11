import React, { useState, useRef, useEffect } from "react";

import { Header, Navigation } from "./sections/Header";
import { Home } from "./sections/Home";
import { DetailModal } from "./components/DetailModal";
import { DetailPage } from "./components/DetailPage";
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
import { experiences } from "./constants/data";
import { projects } from "./constants/data";
import { achievements } from "./constants/achievements";

function App() {
  const svgWrapperRef = useRef(null);
  const [itemData, setItemData] = useState(null);
  const [svgWidth, setSvgWidth] = useState(0);
  const [hoveredItem, setHoveredItem] = useState("");
  const [readyShow, setReadyShow] = useState(false);
  const [detailPage, setDetailPage] = useState(null);
  const [storedScrollY, setStoredScrollY] = useState(0);
  const { isMobileOrTablet } = useWindowSize();

  const allItems = [...experiences, ...projects];

  const handleHoverItem = (v) => setHoveredItem(v);
  const handleClickedItem = (data) => setItemData(data);

  const handleDetailClick = (title) => {
    const item = allItems.find((item) => item.title === title);
    const { achievements, ...rest } = item ?? {};
    const currentScrollY = window.scrollY;
    setStoredScrollY(currentScrollY);

    setDetailPage({
      data: achievements,
      metadata: rest,
    });

    window.history.pushState(
      { detailPage: title, scrollY: currentScrollY },
      "",
      `#detail/${encodeURIComponent(title)}`
    );
  };

  const handleDetailPageBack = () => {
    setDetailPage(null);
    window.history.back();
  };

  useEffect(() => {
    const checkURL = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#detail/")) {
        const title = decodeURIComponent(hash.replace("#detail/", ""));
        const item = allItems.find((item) => item.title === title);

        if (item) {
          const { achievements, ...rest } = item;
          setDetailPage((prev) => {
            if (prev?.metadata?.title !== title) {
              return {
                data: achievements,
                metadata: rest,
              };
            }
            return prev;
          });
        }
      } else {
        setDetailPage((prev) => (prev !== null ? null : prev));
      }
    };

    checkURL();

    const handlePopState = (event) => {
      const wasOnDetailPage = detailPage !== null;
      checkURL();

      if (wasOnDetailPage && !window.location.hash.startsWith("#detail/")) {
        setTimeout(() => {
          const scrollY = event.state?.scrollY || storedScrollY || 0;
          window.scrollTo({ top: scrollY, behavior: "instant" });
        }, 100);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [storedScrollY]);

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

  if (detailPage) {
    return <DetailPage {...detailPage} onBack={handleDetailPageBack} />;
  }

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
        <Experiences
          onHover={handleHoverItem}
          hoveredItem={hoveredItem}
          onDetailClick={handleDetailClick}
        />
        <Projects
          onClick={handleClickedItem}
          className="projects"
          onHover={handleHoverItem}
          hoveredItem={hoveredItem}
          onDetailClick={handleDetailClick}
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
