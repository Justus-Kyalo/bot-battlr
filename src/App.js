import React, { useEffect, useState } from "react";
import "./App.css";
import FetchBots from "./components/FetchBots";
import { Routes, Route } from "react-router-dom";
import BotDetails from "./components/BotDetails";
import EnlistedBots from "./components/EnlistedBots";
import Navbar from "./components/Navbar";

function App() {
  const [bots, setBots] = useState([]);
  const [enlisted, setEnlisted] = useState([]);

  useEffect(() => {
    fetch("https://robots-api-1dpf.onrender.com/bots")
      .then((res) => res.json())
      .then((data) => {
        const newBots = data.map((bot) => {
          bot.isEnlisted = false;
          return bot;
        });
        setBots(newBots);
      });
  }, []);

  function handleEnlist(bot) {
    if (bot.isEnlisted) {
      // bot.isEnlisted = false;
      setEnlisted(enlisted.filter((b) => b.id !== bot.id));
    } else {
      bot.isEnlisted = true;

      setEnlisted([...enlisted, bot]);
      console.log(setEnlisted, "i was clicked");
    }
    setBots([...bots]);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid row">
        
      <EnlistedBots enlisted={enlisted} handleEnlist={handleEnlist} />
      </div>
      <h1>All Bots</h1>
      <Routes>
        
          <Route
            path="/"
            element={<FetchBots bots={bots} handleEnlist={handleEnlist} />}
          />
          
          <Route path="/bot-details/:id" element={<BotDetails />} />
        
      </Routes>
    </div>
  );
}

export default App;
