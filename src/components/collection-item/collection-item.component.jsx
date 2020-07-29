import React from 'react';
import {connect} from 'react-redux'
import {addItems} from "../../redux/cart/cart.actions";
import CustomButton from '../custom-button/custom-button.component'
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItems }) => {
  return(
    <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${item.imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{item.name}</span>
      <span className='price'>{item.price}</span>
    </div>
      <CustomButton inverted onClick={()=>addItems(item)}> ADD </CustomButton>
  </div>
  )
};

const mapDispatchToProps = dispatch => ({
   addItems: item => dispatch(addItems(item))
});

export default connect(null,mapDispatchToProps) (CollectionItem);
