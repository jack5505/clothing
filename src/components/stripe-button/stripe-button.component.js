import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const onToken = token =>{
    console.log(token);
    alert('Payment successfull')
}

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_CXkmJ4cc7Ap4BZJDGLDH8R3A00fs1ubI6N';
        return(
            <StripeCheckout
                label='Pay now'
                name='cloth store'
                billingAddress
                shippingAddress
                image='https://svshare.com/i/CUz.svg'
                description={`Your total price is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay now'
                token={onToken} stripeKey={publishableKey}/>
        )
};

export default StripeCheckoutButton;