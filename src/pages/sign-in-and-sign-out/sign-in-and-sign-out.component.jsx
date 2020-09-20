import React from 'react';
import './sign-in-and-sign-out.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className='login'>
        <div className='sign-in-and-sign-out'>
        <SignIn/>
        <SignUp/>
    </div>
    </div>
);

export default SignInAndSignUpPage;