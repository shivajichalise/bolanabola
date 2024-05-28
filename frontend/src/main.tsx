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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import GuestPage from "./pages/GuestPage.tsx"

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
        path: "/",
        element: <GuestPage />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
)
