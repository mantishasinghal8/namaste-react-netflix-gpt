import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGE } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const user = useSelector((store) => store.user);

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');

        }).catch((error) => {
            // An error happened.
            navigate('/error');
        });
    };

    const handleLanguageChange = (e) => {
        // const lang = useSelector((store) => store.changLanguage);


        dispatch(changeLanguage(e.target.value))

    }
    const handleGptSearchClick = () => {
        // Toggle Gpt Page
        dispatch(toggleGptSearchView())

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate('/browse');

            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/');
            }
        });


        return () => unsubscribe();
        // Cleanup function to unsubscribe from the auth state change listener
        // This prevents memory leaks and ensures that the listener is removed when the component unmounts
        // The unsubscribe function is returned by onAuthStateChanged and can be called to remove the listener
        // unsubscribe when component unmounts


    }, []);


    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="header-left">
                    <Link to={user ? "/browse" : "/"}>
                        <div className="logo">
                            <img src={LOGO} alt="Logo"></img>
                        </div>
                    </Link>
                </div>
                <div className="header-right">
                    {showGptSearch && <select name="gptLang" id="gptLang" onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGE.map(lang =>
                            <option key={lang.identifier} value={lang.identifier}>
                                {lang.name}
                            </option>)}
                    </select>}
                    {
                        user && <button className="gpt-search" onClick={handleGptSearchClick}>{showGptSearch ? "HomePage" : "GPT Search"}</button>
                    }

                    {user && <div className="user-account"  >
                        <button className='loggedin-user'>
                            <img src={user?.photoURL} alt="usericon" />
                        </button>
                        <button className='sign-out-btn' onClick={handleSignOut}> Sign out of Netflix</button>
                    </div>

                    }

                </div>
            </div>
        </div>
    )
}

export default Header

