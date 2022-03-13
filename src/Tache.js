import React from 'react'

export const Tache = ({id,nomTache ,etat,user,color,del}) => {
  return (

    <tbody>
      <tr>
        <td> {id} </td>
        <td> {nomTache} </td>
        <td> {etat} </td>
        <td> {user} </td>
        <td> {color} </td>
        <td>
          <button className='btn btn-dark'  >Editer</button>
          <button className='btn btn-danger' onClick={() => del(id)} >Supprimer</button>
          </td>
      </tr>
    </tbody>
  )
}
