import { useSelector } from "react-redux"
import phone from "../assets/phone_mockup.webp"
import Button from "./Button"
import { RootState } from "../store"

const Hero = () => {
    const theme = useSelector((state: RootState) => state.theme.mode)

    return (
        <div
            className={`flex justify-center items-center pt-10 ${theme === "dark" && "bg-base-300"}`}
        >
            <div className="w-4/5 flex flex-wrap-reverse justify-around items-center">
                <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start max-w-3/5 my-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-default-primary">
                        Bola na bola...
                    </h1>
                    <h2 className="text-3xl md:text-6xl font-bold text-base-content">
                        Real time chat app
                    </h2>
                    <p className="mt-3 text-sm md:text-xl font-medium text-base-content w-2/3 md:w-5/6 text-center lg:text-left">
                        Double, triple or even quadruple text your crush with NO
                        SHAME!
                    </p>
                    <Button
                        style="default"
                        size="sm"
                        type="link"
                        href="https://google.com"
                        hasIcon={false}
                        text="Get started"
                        className="my-5"
                    />
                </div>
                <div className="max-w-1/3 flex justify-center items-center">
                    <img src={phone} />
                </div>
            </div>
        </div>
    )
}

export default Hero
