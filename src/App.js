import MainNav from "./sections/MainNav";
import styled, { ThemeProvider } from "styled-components";
import defaultTheme from "./common/style/themes/default";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Main>
          <MainNav />
        </Main>
      </ThemeProvider>
    </>
  );
}

const Main = styled.div`
  border: 3px solid green;
  height: 100%;
`;

export default App;
