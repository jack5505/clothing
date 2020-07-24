import React from 'react'
import Registration from '../../components/sign-in-out/sign-in.component'
import SignUp from '../../components/sign-in-out/sign-out.component'
import './SignInAndSignOut.scss'
const SignInOut = () => (
    <div className='sign-in-and-sign-up'>
        <Registration/>
        <SignUp/>
    </div>
);
export default SignInOut;