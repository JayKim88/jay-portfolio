import React, { useState, useRef, useEffect } from "react";
import { Header } from "./sections/Header";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { DetailModal } from "./components/DetailModal";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Skills } from "./sections/Skills";
import { Experiences } from "./sections/Experiences";
import { Educations } from "./sections/Educations";
import { Studies } from "./sections/Studies";
import { experiences } from "./constants/data";

const BACKGROUND_COLOR = "#38035e";

function App() {
  const [itemData, setItemData] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [pageHeight, setPageHeight] = useState(0);

  const skillsRef = useRef(null);

  const handleClickedItem = (data) => {
    setItemData(data);
  };

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: window.scrollY + e.clientY });
  };

  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(document.documentElement.scrollHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <div
        className={`h-full flex justify-center items-start mx-auto gap-50`}
        onMouseMove={handleMouseMove}
      >
        <div
          class="h-full pointer-events-none fixed inset-0 z-30 transition 
          duration-300 lg:absolute"
          style={{
            height: `${pageHeight}px`,
            background: `radial-gradient(400px at ${position.x}px ${position.y}px, 
            rgba(58, 58, 58, 0.583), transparent 50%)`,
          }}
        ></div>
        <Header />
        <main className="flex flex-col gap-28 max-w-[800px]">
          <Home />
          <Skills />
          <Experiences />
          <Projects onClick={handleClickedItem} className="projects" />
          <Educations />
          <Studies />
          <Contact className="contact" />
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
