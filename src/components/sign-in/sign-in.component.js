import React from 'react'
import './sign-in.styles.scss'
import InputForm from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
class SignIn extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
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
                    <CustomButton type="submit" >Sign in</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;