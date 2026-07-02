import React, { useState } from 'react'


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
        console.log('toggleSignInForm')
    }
    return (
        <div className='login'>
            <div className="login-wrapper">

                <h3>
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </h3>
                <form action="">
                    {!isSignInForm && (<input type="text" placeholder='Full Name' />)}
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                </form>

                <p className="cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? 'New to Netflix? Sign Up Now.' : 'Already registered? Sign In Now.'}
                </p>
            </div>
        </div>
    )
}

export default Login
