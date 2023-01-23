import React, { useEffect, useState } from "react";
import "../components/css/FetchBot.css";
import { Link } from "react-router-dom";
import EnlistedBots from "./EnlistedBots";

function FetchBots() {
  const [bots, setBots] = useState([]);
  const [enlisted, setEnlisted] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    fetch("https://robots-api-1dpf.onrender.com/bots")
      .then((res) => res.json())
      .then((data) => {
        const newBots = data.map(bot => {
          bot.isEnlisted = false;
          return bot;
        });
        setBots(newBots);
      });
  }, []);


  function handleEnlist(bot) {
    if (bot.isEnlisted) {
      bot.isEnlisted = false;
      setEnlisted(enlisted.filter(b => b.id !== bot.id));
    } else {
      bot.isEnlisted = true;
      bot.id = counter;
      setCounter(counter + 1);
      setEnlisted([...enlisted, bot]);
    }
    setBots([...bots]);
  }


  return (
    < div className="body">
      <EnlistedBots enlisted={enlisted} />
      <div >
        {bots.map((bot) => {
          return (
            <div key={bot.id} className="card m-4" style={{ width: "20rem" }}>
              <img src={bot.avatar_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Name: {bot.name}</h5>

                <Link to={`/bot-details/${bot.id}`}>
                  <button className="btn btn-primary">View Bot Details</button>
                </Link>
                <button className="btn btn-success" onClick={() => { handleEnlist(bot) }}>
                  {bot.isEnlisted ? "Enlisted" : "Enlist"}
                </button>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FetchBots;
