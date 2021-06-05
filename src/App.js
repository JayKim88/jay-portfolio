import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import defaultTheme from "./common/style/themes/default";
import MainNav from "./sections/MainNav";
import Home from "./sections/Home";
import About from "./sections/About";
import Modal from "./components/Modal";
import Works from "./sections/Works";
import Contact from "./sections/Contact";

function App() {
  const [ItemData, setItemData] = useState(null);

  const handleItem = (data) => {
    setItemData(data);
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Main>
          <MainNav />
          <Home />
          <About handleItem={handleItem} />
          <Works handleItem={handleItem} />
          <Contact />
          {ItemData && <Modal ItemData={ItemData} handleItem={handleItem} />}
        </Main>
      </ThemeProvider>
    </>
  );
}

const Main = styled.div`
  /* border: 3px solid green; */
  /* padding-top: 3.5rem; */
  height: 100%;
  background-color: ${defaultTheme.palette.lightGreen};
`;

export default App;
