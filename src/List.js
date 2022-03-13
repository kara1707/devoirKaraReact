import React from 'react'
import { Tache } from './Tache'

export const List = ( {taches , del} ) => {
  return (
    <table className='table table-striped'>
        <thead>
            <th>id</th>
            <th>Nom_Tache</th>
            <th>Etat</th>
            <th>User</th>
            <th>Color</th>
            <th>Action</th>
            
        </thead>

           {
             taches.map(t=><Tache id={t.id} nomTache={t.nomTache} etat={t.etat} user={t.user} color={t.color} del={del}/>)
           }

        
    </table>
  )
}
