import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Journal from "./components/Journal/Journal";
import MiniYoutube from "./components/MiniYoutube/MiniYoutube";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/journal">
          <Journal />
        </Route>
        <Route path="/miniyoutube">
          <MiniYoutube />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
