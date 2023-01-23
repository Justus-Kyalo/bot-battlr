import React from "react";
import "./App.css";
import FetchBots from "./components/FetchBots";
import { Routes, Route } from "react-router-dom";
import BotDetails from "./components/BotDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FetchBots />} />
      <Route path="/bot-details/:id" element={<BotDetails />} />
    </Routes>
  );
}

export default App;
