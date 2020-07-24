import React from 'react'
import './sign-in.styles.scss'
import InputForm from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        }catch (e) {
            console.log(e);
        }
        this.setState({email:'',password:''})
    };

    handleChange = event =>{
        const {value , name} = event.target;
        this.setState({[name]:value});
    };

    render() {
        return (
            <div className='sign-in'>
                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <InputForm name='email'
                           type='email' handleChange={this.handleChange}
                           label='email'
                           value={this.state.email} required/>
                    <InputForm name='password'
                           type='password' handleChange={this.handleChange} label='password'
                           value={this.state.password} required/>
                    <div className='buttons'>
                        <CustomButton type="submit" >Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign in with google{' '}</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;