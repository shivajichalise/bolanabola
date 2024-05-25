import { IconArrowRight } from "@tabler/icons-react"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { useEffect, useState } from "react"
import CardProps from "../types/CardProps"

const Card = (props: CardProps) => {
    const { icon, title, description, link, href } = props

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
        <div
            className={`${isThemeDark ? "bg-neutral" : "bg-secondary"} max-w-sm p-6 rounded-lg shadow`}
        >
            <div
                className={`${isThemeDark ? "bg-neutral-content text-base-300" : "bg-secondary-content text-base-content"} w-fit p-2 rounded-lg mb-5`}
            >
                {icon}
            </div>
            <a href="#">
                <h5
                    className={`mb-2 text-2xl font-semibold ${isThemeDark ? "text-base-300" : "text-base-content"}`}
                >
                    {title}
                </h5>
            </a>
            <p
                className={`mb-3 font-normal ${isThemeDark ? "text-base-300" : "text-base-content"}`}
            >
                {description}
            </p>
            <a
                href={href}
                className="inline-flex font-medium items-center text-info hover:underline gap-1"
            >
                {link}
                <IconArrowRight size={18} />
            </a>
        </div>
    )
}

export default Card
