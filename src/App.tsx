import React from "react";
import { Container } from "./components/container/Container";
import Header from "./components/header/Header";
import Start from "./components/start/Start";
import RentProcess from "./components/rent-process/RentProcess";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
      </Container>
      <Start />
      <RentProcess />
    </React.Fragment>
  );
}

export default App;
