import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

 import './cart.style.scss'

export  const Cart = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

