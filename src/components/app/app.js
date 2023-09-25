import React from "react";
import "./app.css";
import Header from "../header/header";
import Promo from "../promo/promo";
import Project from "../project/project";
import Footer from "../footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="promos">
        <Promo />
        <Promo />
        <Promo />
        <Promo />
      </div>
      <h2>Наші найбільші проекти</h2>
      <div className="projects">
        <Project />
        <Project />
        <Project />
      </div>
      <Footer />
    </div>
  );
}

export default App;
