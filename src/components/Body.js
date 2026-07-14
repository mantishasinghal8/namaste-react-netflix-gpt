import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App'
import GptSearch from './GptSearch';


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
                {
                    path: "gptsearch",
                    element: <GptSearch />,
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
