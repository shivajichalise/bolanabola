import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { Provider } from "react-redux"
import { store } from "./store.ts"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ProtectRoute from "./utils/ProtectRoute.tsx"
import Login from "./pages/Login.tsx"
import Register from "./pages/Register.tsx"
import LandingPage from "./pages/LandingPage.tsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectRoute>
                <App />
            </ProtectRoute>
        ),
    },
    {
        path: "/home",
        element: <LandingPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
