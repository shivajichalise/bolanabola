import {
    IconBrandGoogleFilled,
    IconKeyFilled,
    IconMailFilled,
} from "@tabler/icons-react"
import InputText from "../components/InputText"
import Button from "../components/Button"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="h-fit w-10/12 lg:w-1/4 bg-neutral p-5 flex flex-col justify-center items-center rounded-xl">
                <a className="text-primary flex justify-center items-center">
                    <span className="preeti text-6xl font-bold">a</span>
                    <span className="text-2xl font-bold">bolanabola</span>
                </a>
                <form className="w-full">
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
                    <Button
                        style="primary"
                        type="submit"
                        size="sm"
                        text="Login"
                        className="w-full"
                    />
                    <Button
                        style="primary"
                        size="sm"
                        type="link"
                        href="https://google.com"
                        hasIcon={true}
                        icon={<IconBrandGoogleFilled size={20} />}
                        text="Login with Google"
                        className="w-full mt-2"
                    />
                </form>
                <div className="flex flex-col justify-center items-center text-xs text-base-content my-3">
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
