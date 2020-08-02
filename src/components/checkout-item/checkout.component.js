import React from 'react'
import './checkout.style.scss'
import {connect} from 'react-redux'

import {clearItem} from '../../redux/cart/cart.actions'

const CheckoutComponent = ({cartItem,remove}) => {
    const {name,quantity ,price,imageUrl} = cartItem;
    return(<div className='checkout-item'>
      <div className='image-container'>
          <img src={imageUrl} alt='item'  />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={()=>remove(cartItem)}>&#10005;</div>
  </div>);
};

const dispatchToProps = dispatch => ({
    remove: item => dispatch(clearItem(item))
});

export default connect(
    null,
    dispatchToProps)(CheckoutComponent);

