import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { RootState } from "../store"
import { Toaster } from "sonner"

const GuestPage = () => {
    const isSignedIn = useSelector((state: RootState) => state.auth.isSignedIn)

    if (isSignedIn) {
        return <Navigate to="/" />
    }

    return (
        <>
            <Outlet />
            <Toaster richColors />
        </>
    )
}

export default GuestPage
