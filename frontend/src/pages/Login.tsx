import {
    IconBrandGoogleFilled,
    IconKeyFilled,
    IconMailFilled,
} from "@tabler/icons-react"
import InputText from "../components/InputText"
import Button from "../components/Button"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { useLoginMutation } from "../reducers/userReducers"
import TLoginFormValues, { loginUserSchema } from "../types/LoginFormValues"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { setCredentials } from "../reducers/authReducers"
import { useEffect } from "react"

const Login = () => {
    const theme = useSelector((state: RootState) => state.theme.mode)

    const [login, { isLoading, error }] = useLoginMutation()
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TLoginFormValues>({
        resolver: zodResolver(loginUserSchema),
    })

    const onSubmit = async (data: TLoginFormValues) => {
        const res = await login(data).unwrap()
        dispatch(setCredentials({ user: res.user, isSignedIn: res.isSignedIn }))
    }

    useEffect(() => {
        if (error) {
            if ("status" in error) {
                // you can access all properties of `FetchBaseQueryError` here
                console.log(error)
            }
        }
    }, [error])

    return (
        <div
            className={`flex justify-center items-center h-screen ${theme === "dark" && "bg-base-300"}`}
        >
            <div
                className={`h-fit w-10/12 lg:w-1/4 bg-neutral p-5 flex flex-col justify-center items-center rounded-xl`}
            >
                <Link
                    to="/home"
                    className={`text-default-primary flex justify-center items-center cursor-pointer`}
                >
                    <span className="preeti text-6xl font-bold">a</span>
                    <span className="text-2xl font-bold">bolanabola</span>
                </Link>
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <InputText
                        type="email"
                        hasIcon={true}
                        icon={<IconMailFilled size={17} />}
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required",
                        })}
                        hasError={errors.email ? true : false}
                        error={errors.email?.message}
                    />
                    <InputText
                        type="password"
                        hasIcon={true}
                        icon={<IconKeyFilled size={17} />}
                        placeholder="Password"
                        {...register("password", {
                            required: "Password is required!",
                        })}
                        hasError={errors.password ? true : false}
                        error={errors.password?.message}
                    />
                    <Button
                        style="default"
                        type="submit"
                        size="sm"
                        text="Login"
                        className="w-full"
                        isLoading={isLoading}
                    />
                    <Button
                        style="default"
                        size="sm"
                        type="link"
                        href="https://google.com"
                        hasIcon={true}
                        icon={<IconBrandGoogleFilled size={20} />}
                        text="Login with Google"
                        className="w-full mt-2"
                    />
                </form>
                <div
                    className={`flex flex-col justify-center items-center text-xs ${theme === "dark" ? "text-default-primary" : "text-base-content"} my-3`}
                >
                    <p className="">Don't have an account?</p>
                    <Link
                        to="/register"
                        className="text-info hover:text-info-content hover:underline"
                    >
                        Create one
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
