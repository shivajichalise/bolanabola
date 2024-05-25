import { useSelector } from "react-redux"
import { RootState } from "../store"
import { useEffect, useState } from "react"
import IconLink from "./IconLink"
import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
} from "@tabler/icons-react"

const Footer = () => {
    const [isThemeDark, setIsThemeDark] = useState(false)

    const theme = useSelector((state: RootState) => state.theme.mode)

    useEffect(() => {
        if (theme === "dark") {
            setIsThemeDark(true)
        } else {
            setIsThemeDark(false)
        }
    }, [theme])
    return (
        <footer
            className={`${isThemeDark ? "bg-base-300" : "bg-primary"} flex justify-center items-center p-10 text-primary-content`}
        >
            <div className="w-4/5 flex flex-col justify-center items-center gap-3 lg:flex-row lg:justify-between">
                <p className="preeti text-9xl text-neutral">a</p>
                <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-lg text-neutral text-center">
                        Bola na hauuu, k saro bhau khako ?
                    </h3>
                    <p className="text-sm font-light text-neutral text-center">
                        Copyright &copy; {new Date().getFullYear()} Shivaji
                        Chalise
                    </p>
                </div>
                <div className="flex">
                    <IconLink
                        style="neutral"
                        href="https://github.com/shivajichalise"
                        target="_blank"
                    >
                        <IconBrandGithub size={22} />
                    </IconLink>

                    <IconLink
                        style="neutral"
                        href="https://linkedin.com/in/shivajichalise"
                        target="_blank"
                    >
                        <IconBrandLinkedin />
                    </IconLink>

                    <IconLink
                        style="neutral"
                        href="https://instagram.com/shivajichalise"
                        target="_blank"
                    >
                        <IconBrandInstagram />
                    </IconLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer
