import React from "react";
import Header from "./components/Header";
import Contain from "./components/Contain"
function App() {
  return (
    <div className="App">
      <div className="Boder">
        <div className="Header">
          <Header />
        </div>
        <div className="Contain">
          <Contain />
        </div>
      </div>
    </div>
  );
}

export default App;
