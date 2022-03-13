import React from 'react'

export const Forms = ({tacheform, add,setTacheform}) => {
  return (
    <form className='col'>
        Nom_Tache : <input type="text" value={tacheform.nomTache} onChange={(e)=>setTacheform({...tacheform,nomTache:e.target.value})}/> 
        Etat : <input type="text" value={tacheform.etat} onChange={(e)=>setTacheform({...tacheform,etat:e.target.value})}/>
         User : <input type="text" value={tacheform.user} onChange={(e)=>setTacheform({...tacheform,user:e.target.value})}/> 
         Color : <input type="text" value={tacheform.color} onChange={(e)=>setTacheform({...tacheform,color:e.target.value})}/> 
        <button type='button' className='btn btn-primary' onClick={add}>Enregistrer</button>

    </form>
  )
}
