import React,{useState} from "react";

function EnlistedBots({ enlisted ,handleEnlist}) {
console.log({enlisted } );

const [myArray, setMyArray] = useState(enlisted);


function handleDelete(id) {
    fetch(`https://robots-api-1dpf.onrender.com/bots/${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedArray = myArray.filter((bot) => bot.id !== id);
        setMyArray(updatedArray);
      });
      alert("Discharged bot from your Army!!!,refresh page to confirm")
  }

const myBot = enlisted.map((bot) => {
return (

  
<div key={bot.id} className="card m-4" style={{ width: "20rem" }} onClick={() => { handleEnlist(bot) }}>
<img src={bot.avatar_url} className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">Name: {bot.name}</h5>
<button className="btn btn-danger" onClick={()=>{handleDelete(bot.id)}}>X</button>
</div>
</div>
);
});

return (
<div>
<h2>My Army</h2>
{myBot}
</div>
);
}

export default EnlistedBots;