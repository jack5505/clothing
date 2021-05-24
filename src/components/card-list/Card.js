import React from  'react'

import './CardStyle.css'

export const Card = (props) => {
 return <div className="card-container">
     <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monsters"/>
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
  </div>
};