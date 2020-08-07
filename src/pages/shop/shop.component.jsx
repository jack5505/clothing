import React from 'react';

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import CollectionPreview from '../../components/collection-preview/collection-preview';

import Collection from '../../components/collections-overview/collections.overview.component'
import {selectCollections} from "../../redux/shop/shop.selector";

const ShopPage = ({collections}) => (
      <div className='shop-page'>
        <Collection/>
      </div>
);


const maptStateToProps = createStructuredSelector({
    collections:selectCollections
});


export default connect(maptStateToProps)(ShopPage);
