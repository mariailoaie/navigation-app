import React from "react";
import styled from "styled-components";

import Content from "./components/Content";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 768px;
  width: 1024px;
`;
StyledApp.displayName = StyledApp;

function App() {
  return (
    <StyledApp>
      <NavBar />
      <Content />
      <Footer />
    </StyledApp>
  );
}

export default App;
