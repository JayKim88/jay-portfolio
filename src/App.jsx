import React, { useState } from "react";
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

function App() {
  const [itemData, setItemData] = useState(null);

  const handleClickedItem = (data) => {
    setItemData(data);
  };

  return (
    <>
      <div className="h-full flex justify-center items-start mx-auto gap-50">
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
