import React from 'react'
import './checkout.style.scss'
import {connect} from 'react-redux'

import {clearItem,addItem,removeItems} from '../../redux/cart/cart.actions'

const CheckoutComponent = ({cartItem,remove,addItem,removeItem}) => {
    const {name,quantity ,price,imageUrl} = cartItem;
    return(<div className='checkout-item'>
      <div className='image-container'>
          <img src={imageUrl} alt='item'  />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
          <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
          <div className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</div>
          </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={()=>remove(cartItem)}>&#10005;</div>
  </div>);
};

const dispatchToProps = dispatch => ({
    remove: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItems(item))
});

export default connect(
    null,
    dispatchToProps)(CheckoutComponent);

