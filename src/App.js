import styled, { ThemeProvider } from "styled-components";
import defaultTheme from "./common/style/themes/default";
import MainNav from "./sections/MainNav";
import Home from "./sections/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Main>
          <MainNav />
          <Home />
        </Main>
      </ThemeProvider>
    </>
  );
}

const Main = styled.div`
  /* border: 3px solid green; */
  /* padding-top: 3.5rem; */
  height: 100%;
`;

export default App;
