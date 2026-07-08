import React, { useState, useRef } from 'react';
import validate from '../utils/validate';
import { auth } from '../utils/firebase';
import { updateProfile } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { PHOTO_URL } from '../utils/constants';
const Login = () => {
    // Sign In Form
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    // Validation of Sign In/Sign Up Form
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();
    const handleButtonClick = () => {
        const message = isSignInForm
            ? validate(email.current.value, password.current.value)
            : validate(
                email.current.value,
                password.current.value,
                name.current.value
            );
        setErrorMessage(message);

        if (!isSignInForm) {
            // Signed up Logic 
            // Firebase automatically signs in the user after successful sign up, so we can update the profile and dispatch the user to the store 

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                // userCredential is an object that contains the user object and other information about the sign up process
                // userCredential.user is the user object that contains the user's information such as uid, email, displayName, photoURL, etc.

                .then((userCredential) => {
                    const user = userCredential.user;
                    // updateProfile is a function that updates the user's profile information such as displayName and photoURL
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: PHOTO_URL
                    })
                        // then() is a function that is called after the updateProfile function is successful, and it dispatches the user to the store
                        .then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        }).catch((error) => {
                            setErrorMessage(error.message);
                        });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage, errorCode);
                });

        }

        else {
            // Sign In Logic 
            // signInWithEmailAndPassword is a function that signs in the user with the email and password provided, and it returns a promise that resolves with the userCredential object if the sign in is successful, or rejects with an error if the sign in fails
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage + '' + errorCode);

                });

        }
    };
    return (
        <div className='login'>
            <div className="login-wrapper">

                <h3>
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </h3>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    {!isSignInForm && (<input ref={name} type="text" placeholder='Full Name' />)}

                    <input ref={email} type="email" placeholder='Email' autoComplete="on" />
                    <input ref={password} type="password" placeholder='Password' autoComplete="on" />

                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <button onClick={handleButtonClick}>
                        {isSignInForm ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>

                <p className="cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? 'New to Netflix? Sign Up Now.' : 'Already registered? Sign In Now.'}
                </p>
            </div>
        </div>
    )
}

export default Login
