import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'

import './category.style.scss'


const categoryPage = ({match}) => {
    console.log(match);
    return(
    <div className="category">
        <h2>CATEGORY PAGE</h2>
    </div>)
};

export default categoryPage;