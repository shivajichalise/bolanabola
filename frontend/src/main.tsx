import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { Provider } from "react-redux"
import { store } from "./store.ts"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ProtectRoute from "./utils/ProtectRoute.tsx"

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
        path: "/login",
        element: <h1>login</h1>,
    },
    {
        path: "/register",
        element: <h1>Register</h1>,
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
