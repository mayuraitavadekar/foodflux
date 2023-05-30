import React, { Children } from "react"
import ReactDOM from "react-dom/client";

import "../index.css"

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            }
        ]
        
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
