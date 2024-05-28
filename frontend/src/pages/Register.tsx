import {
    IconBrandGoogleFilled,
    IconKeyFilled,
    IconMailFilled,
    IconUserFilled,
} from "@tabler/icons-react"
import InputText from "../components/InputText"
import Button from "../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import TRegisterFormValues, {
    registerUserSchema,
} from "../types/RegisterFormValues"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRegisterMutation } from "../reducers/userReducers"
import { toast } from "sonner"
import { useEffect } from "react"

const Register = () => {
    const theme = useSelector((state: RootState) => state.theme.mode)
    const [signup, { isLoading, error }] = useRegisterMutation()
    const navigate = useNavigate()

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<TRegisterFormValues>({
        resolver: zodResolver(registerUserSchema),
    })

    const onSubmit = async (data: TRegisterFormValues) => {
        const res = await signup(data)

        if (res.data) {
            toast.success(res.data.message, { duration: 1500 })
            setTimeout(() => {
                navigate("/login")
            }, 2000)
        }
    }

    useEffect(() => {
        if (error) {
            if ("status" in error) {
                // you can access all properties of `FetchBaseQueryError` here
                const errMsg =
                    typeof error.data === "string"
                        ? JSON.parse(error.data)
                        : error.data

                toast.error(errMsg.error)
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
                        type="text"
                        hasIcon={true}
                        icon={<IconUserFilled size={17} />}
                        placeholder="Name"
                        {...register("name", {
                            required: "Name is required",
                        })}
                        hasError={errors.name ? true : false}
                        error={errors.name?.message}
                    />
                    <InputText
                        type="email"
                        hasIcon={true}
                        icon={<IconMailFilled size={17} />}
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required!",
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
                            minLength: 8,
                        })}
                        hasError={errors.password ? true : false}
                        error={errors.password?.message}
                    />
                    <InputText
                        type="password"
                        hasIcon={true}
                        icon={<IconKeyFilled size={17} />}
                        placeholder="Confirm password"
                        {...register("password_confirmation", {
                            required: "Please confirm your password!",
                            minLength: 8,
                        })}
                        hasError={errors.password_confirmation ? true : false}
                        error={errors.password_confirmation?.message}
                    />

                    <Button
                        style="default"
                        type="submit"
                        size="sm"
                        text="Register"
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
                    <p className="">Already have an account?</p>
                    <Link
                        to="/login"
                        className="text-info hover:text-info-content hover:underline"
                    >
                        Login
                    </Link>
                </div>
            </div>
            <DevTool control={control} />
        </div>
    )
}

export default Register
