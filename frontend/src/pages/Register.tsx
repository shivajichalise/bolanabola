import {
    IconBrandGoogleFilled,
    IconKeyFilled,
    IconMailFilled,
    IconUserFilled,
} from "@tabler/icons-react"
import InputText from "../components/InputText"
import Button from "../components/Button"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../store"

const Register = () => {
    const theme = useSelector((state: RootState) => state.theme.mode)
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
                <form className="w-full">
                    <InputText
                        type="text"
                        name="name"
                        hasIcon={true}
                        icon={<IconUserFilled size={17} />}
                        placeholder="Name"
                    />
                    <InputText
                        type="email"
                        name="email"
                        hasIcon={true}
                        icon={<IconMailFilled size={17} />}
                        placeholder="Email"
                    />
                    <InputText
                        type="password"
                        name="password"
                        hasIcon={true}
                        icon={<IconKeyFilled size={17} />}
                        placeholder="Password"
                    />
                    <InputText
                        type="password"
                        name="password_confirmation"
                        hasIcon={true}
                        icon={<IconKeyFilled size={17} />}
                        placeholder="Confirm password"
                    />
                    <Button
                        style="default"
                        type="submit"
                        size="sm"
                        text="Register"
                        className="w-full"
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
        </div>
    )
}

export default Register
