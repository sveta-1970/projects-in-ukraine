import React from "react";
import "./app.css";
import "../header/header";
import "../project/header";
import "../footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="promo"></div>
      <h2>Наші найбільші проекти</h2>
      <div className="projects">
        <Project />
        <Project />
        <Project />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
