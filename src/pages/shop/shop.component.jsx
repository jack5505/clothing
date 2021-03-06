import React from 'react';

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { Route } from 'react-router-dom'

import CollectionPreview from '../../components/collection-preview/collection-preview';

import Collection from '../../components/collections-overview/collections.overview.component'
import {selectCollections} from "../../redux/shop/shop.selector";
import CollectionPage from '../collection/collection.component'

const ShopPage = ({match}) => {
    console.log(match);

    return(
      <div className='shop-page'>
            <Route exact path={`${match.path}`} component={Collection}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>)
};


const maptStateToProps = createStructuredSelector({
    collections:selectCollections
});


export default connect(maptStateToProps)(ShopPage);
