import React from 'react'

import {connect} from 'react-redux'

import './collections.overview.style.scss'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from "../collection-preview/collection-preview";
import {selectCollections} from "../../redux/shop/shop.selector";

const CollectionsOverview = ({collections}) => (
 <div className='collections-overview'>
     {collections.map(({ id, ...otherCollectionProps }) => (
         <CollectionPreview key={id} {...otherCollectionProps} />
     ))}
 </div>
);

const  mapStateToProps  = createStructuredSelector({
    collections:selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
