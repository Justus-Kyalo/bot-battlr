import React from "react";
import "./App.css";
import FetchBots from "./components/FetchBots";
import { Routes, Route } from "react-router-dom";
import BotDetails from "./components/BotDetails";
import EnlistedBots from "./components/EnlistedBots";
import Navbar from "./components/Navbar";

function App() {
  return (<div className="App">
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<FetchBots />} />
      <Route path="/bot-details/:id" element={<BotDetails />} />
      <Route path="/enlistedbots" element={<EnlistedBots />} />
    </Routes>
    </div>);
}

export default App;
