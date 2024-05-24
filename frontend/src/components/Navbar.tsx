import { useSelector } from "react-redux"
import ThemeSwitcher from "./ThemeSwitcher"
import { RootState } from "../store"
import IconLink from "./IconLink"
import {
    IconBrandGithub,
    IconBrandGoogleFilled,
    IconBrandInstagram,
    IconBrandLinkedin,
} from "@tabler/icons-react"
import Button from "./Button"
import VerticalDivider from "./VerticalDivider"
import { useState } from "react"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn)

    const navLinks = [
        { label: "Home", link: "#home" },
        { label: "Features", link: "#features" },
        { label: "Details", link: "#details" },
    ]

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <div className="bg-base-300 flex justify-center items-center">
                <div className="navbar navbar-primary w-4/5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                role="button"
                                className="btn btn-sm btn-ghost lg:hidden mr-5"
                                onClick={toggleMobileMenu}
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
                        </div>
                        <a className="text-primary justify-center items-center hidden md:flex">
                            <span className="preeti text-6xl font-bold">a</span>
                            <span className="text-2xl font-bold">
                                bolanabola
                            </span>
                        </a>
                    </div>

                    <div className="navbar-center md:hidden">
                        <a className="text-primary flex justify-center items-center">
                            <span className="preeti text-6xl font-bold">a</span>
                            <span className="text-2xl font-bold">
                                bolanabola
                            </span>
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

                            <VerticalDivider className="hidden lg:flex" />

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

                            <VerticalDivider className="hidden lg:flex" />

                            {isSignedIn ? (
                                <div className="dropdown dropdown-end">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-ghost btn-circle avatar"
                                    >
                                        <div className="w-9 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary text-base-300 rounded-box w-52"
                                    >
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge badge-error text-neutral">
                                                    New
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>Settings</a>
                                        </li>
                                        <li>
                                            <a>Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`w-screen ${isMobileMenuOpen ? "sm:block" : "hidden"}`}
            >
                <ul className="menu bg-primary text-base-300 w-full flex justify-center items-center text-xl">
                    {navLinks.map((link) => (
                        <li key={link.link} className="">
                            <a
                                className="hover:bg-primary-content"
                                onClick={closeMobileMenu}
                                href={link.link}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Navbar
