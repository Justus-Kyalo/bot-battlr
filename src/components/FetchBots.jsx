import React from "react";
import "../components/css/FetchBot.css";
import { Link } from "react-router-dom";


function FetchBots({bots,handleEnlist}) {
 

  return (
    < div className="body">
      
      <br />
      <div >
        {bots.map((bot) => {
          return (
            <div key={bot.id} className="card m-4" style={{ width: "20rem" }} >
              <img src={bot.avatar_url} className="card-img-top" alt="..." onClick={() => { handleEnlist(bot) }} />
              <div className="card-body">
                <h5 className="card-title">Name: {bot.name}</h5>

                <Link to={`/bot-details/${bot.id}`}>
                  <button className="btn btn-primary">View Bot Details</button>
                </Link>
                {/* <button className="btn btn-success" >
                  {bot.isEnlisted ? "Enlisted" : "Enlist"}
                </button> */}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FetchBots;
