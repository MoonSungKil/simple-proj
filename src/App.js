import React from "react";
import Pages from "./components/Pages/Pages";
import InputModal from "./components/InputModal/InputModa";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <Card /> */}
      <InputModal />
      <Footer />
    </React.Fragment>
  );
}

export default App;
