import React, { useEffect, useState } from 'react';
import './App.css';
import { Forms } from './Forms';
import { List } from './List';

function App ()  {
  const [taches, setTaches] = useState([
    {id:1, nomTache:"ranger", etat: "En cours", user:"ibou", color:"red"},
    {id:2, nomTache:"black", etat: "terminée", user:"sene", color:"green"},
    {id:3, nomTache:"push", etat: "En cours", user:"diedhiou", color:"green"}
  ]);
  ///const URL='http://localhost:3004/taches/'; /*pour se connecter a db.json*/
  const URL='http://localhost:8000/taches/';


  const all=()=>{
 fetch(URL).then(res=>res.json()).then(data=>setTaches(data))
  }

const del=(id)=>{
  setTaches(taches.filter(t=>t.id!==id));
  fetch(URL+id,{
    method:'DELETE'
  })
}

const count=(etat)=>{
  const compt=taches.filter((e)=>e.etat===etat);
  return compt.length;
}

  useEffect(() => {
    all();
  
    return () => {
      
    }
  }, []);

  const [tacheform, setTacheform] = useState({id:0, nomTache:"...", etat: "....", user:"....", color:"......"})
  const add =()=>{
    setTaches([...taches, tacheform]);
    fetch(URL,{
      headers:{
        'content-type':'application/json'
      },
      method:'POST',
      body:JSON.stringify(tacheform)
    });
  }

  return (
    <div className='container'>
      <Forms tacheform={tacheform} setTacheform={setTacheform} add = {add} />
      <List taches={taches} del={del}/>


    <h3>nombre de taches en cours est : {count("En cours")}</h3> <br/>
     <h3>nombre de taches terminer est : {count("terminée")}</h3>
    </div>
  );
}

export default App;
