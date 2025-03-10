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

function App() {
  const [itemData, setItemData] = useState(null);

  const handleClickedItem = (data) => {
    console.log("?????", data);

    setItemData(data);
  };

  return (
    <>
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "0 auto",
          columnGap: "1rem",
        }}
      >
        <Header />
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "96px",
            maxWidth: "800px",
          }}
        >
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
