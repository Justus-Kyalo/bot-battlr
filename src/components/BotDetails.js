import React, { useEffect, useState } from "react";

function BotDetails() {
  const [botsDetails, setBotsDetails] = useState([]);
  useEffect (
    () =>{fetch("http://localhost:3000/bots")
    .then((res) => res.json())
    .then((data) => setBotsDetails(data))
   },[] );
  return (
    <div>
      {botsDetails.map((bot) => {
        return (
          <div key={bot.id}>
            <ul >
              <li>{bot.avatar_url}</li>
              <li>{bot.name}</li>
              <li>{bot.health}</li>
              <li>{bot.damage}</li>
              <li>{bot.armor}</li>
              <li>{bot.bot_class}</li>
              <li>{bot.catchphrase}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default BotDetails;
