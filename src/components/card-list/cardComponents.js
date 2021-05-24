import React from 'react'

import './cardList.css'
import {Card} from './Card.js'

export  const CardList = (props) =>{
    return <div className="card-list">
        {
            props.monsters.map(i => <Card key={i.id} monster={i} />)
        }
    </div>
};

