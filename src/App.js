import React from "react";
import "./App.css";
import FetchBots from "./components/FetchBots";
import { Routes, Route } from "react-router-dom";
import BotDetails from "./components/BotDetails";

function App() {
  return (
    <div className="App">
      <FetchBots />
      <Routes>
        <Route path="/Details" element = {<BotDetails />}/>
          
        
      </Routes>
    </div>
  );
}

export default App;
