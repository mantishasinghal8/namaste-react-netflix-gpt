import React, { useState, useRef } from 'react';
import validate from '../utils/validate';
import { auth } from '../utils/firebase';
import { updateProfile } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
const Login = () => {
    // Sign In Form
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
        console.log('toggleSignInForm')
    }

    // Validation of Sign In/Sign Up Form
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
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
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABS8sWFjSyj1zyfgcnGamqyJ1E2ZubZGo8dndCM_ipf_5UpmVlkuf8IXzQlmPZQqTMWNjWukESRdLkFGHnf7zbY3MJCO3r4s.png?r=229"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        navigate('/browse');
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                    console.log('user', user)

                    navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage, errorCode);
                });

        }

        else {
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log('user', user)
                    navigate('/browse');
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
