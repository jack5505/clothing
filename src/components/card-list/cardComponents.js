import React from 'react'

import './cardList.css'

export  const CardList = (props) =>{
    console.log(props.children);
  return <div className="card-list">{props.children}</div>
};

