import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {

    const navigate = useNavigate();

    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        console.log("Signout clicked")
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');

        }).catch((error) => {
            // An error happened.
            navigate('/error');

            console.log("Oh Shit")
        });
    };
    return (
        <div className="header">
            <div className="header-wrapper">
                <Link to="/">
                    <div className="logo">
                        <img src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVBEN9I57czDc_uW4ZnDTNTb9hWvK70hYAqf0VNv_dsufIxZqfNclKrp7ugn5j0DkKCYy_4ncEpi6fJk1wpPuLO61r5YUWiEbVjxFpCESIWdJwAAOvAX.svg" alt="Logo"></img>
                    </div>
                </Link>
                {user && <div className="user-account">
                    <button className='loggedin-user'>
                        <img src={user?.photoURL} alt="usericon" />
                    </button>
                    <button className='sign-out-btn' onClick={handleSignOut}> Sign out of Netflix</button>
                </div>

                }

            </div>
        </div>
    )
}

export default Header

