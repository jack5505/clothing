import React from 'react'
import Collection from '../collection-item/collection-item.component'
import './previe-collection.scss'

const PreviewCollection = ({title, items}) => (
    <div className='collection-preview'>
         <h1 className='title'>{title.toUpperCase()}</h1>
         <div className='preview'>
             {
                 items.filter((item,idx) => idx < 4).map(({id,...other}) => (
                     <Collection key={id} {...other}/>
                 ))
             }
         </div>
    </div>
);

export default PreviewCollection;