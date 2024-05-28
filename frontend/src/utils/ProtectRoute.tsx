import { PropsWithChildren, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { RootState } from "../store"
import { useSelector } from "react-redux"

type ProtectRouteProps = PropsWithChildren

export default function ProtectRoute({ children }: ProtectRouteProps) {
    const isSignedIn = useSelector((state: RootState) => state.auth.isSignedIn)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isSignedIn) {
            navigate("/login", { replace: true })
        }
    }, [isSignedIn])

    return children
}
