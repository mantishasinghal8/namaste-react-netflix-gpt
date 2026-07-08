import React, { useState, useRef } from 'react'
import validate from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
const Login2 = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    const handleButtonClick = () => {
        const message = isSignInForm ? validate(email.current.value, password.current.value) : validate(email.current.value, password.current.value, name?.current?.value);
        setErrorMessage(message)

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                })
                .then(() => {
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/-yCASO7j3DIs/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklqEtaFZW9BiVsNzC-yHnDQ2FCLPw/photo.jpg?sz=46"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage, errorCode);
                });
        }

        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage, errorCode);
                });
            // Sign In Logic
        }


    }
    return (
        <div className="login2" >

            <div className="login2-wrapper">
                <h1>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" />}
                    <input ref={email} type="text" placeholder="Username" />
                    <input ref={password} type="password" placeholder="Password" />
                    <button onClick={handleButtonClick} >
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

                    <p style={{ cursor: "pointer" }} onClick={toggleSignInForm}>
                        {isSignInForm
                            ? "New to sign in. Signup now"
                            : "Already have an account? Sign in"
                        }
                    </p>
                </form>
            </div >
        </div >
    );
};

export default Login2;