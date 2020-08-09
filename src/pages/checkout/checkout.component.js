import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal} from "../../redux/user/cart.selectors";
import './checkout.style.scss'
import CheckoutComponent from '../../components/checkout-item/checkout.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const CheckOutPage = ({total,cartItems}) =>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(carItem =>
                <CheckoutComponent key={carItem.id} cartItem={carItem}/>
            )
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>

            <div className='test-warning'>
                please use following credit card for testing
            </div>
            <StripeCheckoutButton price={total}/>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
   cartItems:selectCartItems,
   total:selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);