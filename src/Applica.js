import React from 'react'

const Applica = () => {
    const movie=[
        {id:1 ,
        texte:"Suis en classe",
       time:"18h"
       }
    ]
   
  return (
    <div>
      <ul>
          {movie.map((el,index)=>(
             <li key={index}>{el}</li>
          ))} 
      </ul>
    </div>
  )
}

export default Applica
