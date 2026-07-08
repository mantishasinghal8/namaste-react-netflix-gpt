import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App'
const Body = () => {
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

    return (
        <div className='body'>
            <RouterProvider router={appRouter}>
            </RouterProvider>
        </div>
    )
}

export default Body
