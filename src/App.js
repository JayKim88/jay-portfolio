import styled, { ThemeProvider } from "styled-components";
import defaultTheme from "./common/style/themes/default";
import MainNav from "./sections/MainNav";
import Home from "./sections/Home";
import About from "./sections/About";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Main>
          <MainNav />
          <Home />
          <About />
        </Main>
      </ThemeProvider>
    </>
  );
}

const Main = styled.div`
  border: 3px solid green;
  /* padding-top: 3.5rem; */
  height: 100%;
  background-color: ${defaultTheme.palette.lightGreen};
`;

export default App;
