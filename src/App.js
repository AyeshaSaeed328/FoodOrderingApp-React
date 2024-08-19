import React,{Suspense, lazy} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import ResInfo from "./components/ResInfo"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

const Grocery = lazy(() =>import("./components/Grocery") )


const App = () => (
    <div className="app">
        <Header />
        <Outlet />
    </div>
)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [

            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<div> <div className="space"></div><h1>Loading</h1></div>
                } ><Grocery /></Suspense> 
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path:"/restaurants/:resId",
                element: <ResInfo />
            }
        ],
        errorElement: <Error />
    },


])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)