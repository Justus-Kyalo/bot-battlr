import React, { useEffect, useState } from "react";
import "../components/css/FetchBot.css";
import { Link } from "react-router-dom";


function FetchBots() {
  const [bots, setBots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);
  return (
    <>
      {bots.map((bot) => {
        return (
          <div key={bot.id} className="card" style={{ width: "20rem" }}>
            <img src={bot.avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Name: {bot.name}</h5>

              <Link to="/Details" className="btn btn-primary">
                View Bot Details
              </Link>
              <button className="btn btn-success">Enlist</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FetchBots;
