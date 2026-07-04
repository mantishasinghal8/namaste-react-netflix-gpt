import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import App from '../App'
const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Login />,
                },
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "browse",
                    element: <Browse />,
                },
            ],
        },
    ]);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            } else {
                // User is signed out
                dispatch(removeUser());
            }
        });

    }, []);
    return (
        <div className='body'>
            <RouterProvider router={appRouter}>

            </RouterProvider>
        </div>
    )
}

export default Body
