import InputSubmit from "../components/InputSubmit"
import InputText from "../components/InputText"
import LoginWithGoogleButton from "../components/LoginWithGoogleButton"

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex w-4/6 bg-base-300 rounded-lg">
                <div className="hidden xl:block xl:w-1/2 min-h-full">
                    <img
                        className="h-full w-full object-cover rounded-l-lg"
                        src="https://c.tenor.com/mXKb6EMxOjEAAAAC/tenor.gif"
                        alt="Login page gif"
                    />
                </div>
                <div className="flex flex-col justify-center items-center w-full xl:w-1/2 p-8">
                    <h1 className="font-bold text-2xl">Login</h1>
                    <form className="w-full">
                        <InputText
                            type="text"
                            name="email"
                            placeholder="Email"
                            inputLabel="Email"
                            required={true}
                        />

                        <InputText
                            type="password"
                            name="password"
                            placeholder="Password"
                            inputLabel="Password"
                            required={true}
                        />

                        <InputSubmit value="Submit" />

                        <LoginWithGoogleButton />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
