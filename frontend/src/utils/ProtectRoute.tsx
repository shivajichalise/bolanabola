import { PropsWithChildren, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { RootState } from "../store"
import { useSelector } from "react-redux"
import { useIsLoggedInMutation } from "../reducers/userReducers"
import { setCredentials } from "../reducers/authReducers"
import { useDispatch } from "react-redux"

type ProtectRouteProps = PropsWithChildren

export default function ProtectRoute({ children }: ProtectRouteProps) {
    const navigate = useNavigate()

    const [isLoggedIn] = useIsLoggedInMutation()
    const dispatch = useDispatch()

    const isSignedIn = useSelector((state: RootState) => state.auth.isSignedIn)

    useEffect(() => {
        isLoggedIn().then((res) => {
            if (res.error) {
                if ("data" in res.error) {
                    dispatch(setCredentials(res.error.data))
                }
            }

            if (res.data) {
                if ("data" in res.data) {
                    dispatch(setCredentials(res.data.data))
                }
            }
        })

        if (!isSignedIn) {
            navigate("/login", { replace: true })
        }
    }, [isSignedIn])

    return children
}
