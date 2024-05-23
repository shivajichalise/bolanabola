import { useSelector } from "react-redux"
import ThemeSwitcher from "./ThemeSwitcher"
import { RootState } from "../store"
import IconLink from "./IconLink"
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandGoogleFilled,
    IconBrandGoogleFit,
    IconBrandInstagram,
    IconBrandLinkedin,
} from "@tabler/icons-react"
import Button from "./Button"
import VerticalDivider from "./VerticalDivider"

const Navbar = () => {
    const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn)

    const navLinks = [
        { label: "Home", link: "#home" },
        { label: "Features", link: "#features" },
        { label: "Details", link: "#details" },
    ]

    return (
        <div className="bg-base-300 flex justify-center items-center">
            <div className="navbar w-4/5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-sm btn-ghost lg:hidden mr-5"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary text-neutral rounded-box w-52"
                        >
                            {navLinks.map((link) => (
                                <li key={link.link}>
                                    <a href={link.link}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a className="text-primary justify-center items-center hidden md:flex">
                        <span className="preeti text-6xl font-bold">a</span>
                        <span className="text-2xl font-bold">bolanabola</span>
                    </a>
                </div>

                <div className="navbar-center md:hidden">
                    <a className="text-primary flex justify-center items-center">
                        <span className="preeti text-6xl font-bold">a</span>
                        <span className="text-2xl font-bold">bolanabola</span>
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="flex justify-center items-center">
                        <ul className="hidden lg:flex">
                            {navLinks.map((link) => (
                                <li
                                    key={link.link}
                                    className="text-primary font-semibold mx-1.5"
                                >
                                    <a href={link.link}>{link.label}</a>
                                </li>
                            ))}
                        </ul>

                        <VerticalDivider />

                        <ThemeSwitcher />

                        <VerticalDivider />

                        <IconLink
                            href="https://instagram.com"
                            className="hidden lg:flex"
                        >
                            <IconBrandGithub size={22} />
                        </IconLink>

                        <IconLink
                            href="https://instagram.com"
                            className="hidden lg:flex"
                        >
                            <IconBrandInstagram />
                        </IconLink>

                        <IconLink
                            href="https://instagram.com"
                            className="hidden lg:flex"
                        >
                            <IconBrandLinkedin />
                        </IconLink>

                        <VerticalDivider />

                        <Button
                            style="default"
                            size="sm"
                            type="link"
                            href="https://google.com"
                            hasIcon={true}
                            icon={<IconBrandGoogleFilled size={20} />}
                            text="Login with Google"
                            className="hidden lg:flex"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
