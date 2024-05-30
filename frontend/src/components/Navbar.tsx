import ThemeSwitcher from "./ThemeSwitcher"
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
import NavbarProps from "../types/NavbarProps"
import { useSelector } from "react-redux"
import { RootState } from "../store"

const Navbar = (props: NavbarProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const isSignedIn = useSelector((state: RootState) => state.auth.isSignedIn)

    const { menus: navLinks } = props

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <div className="bg-base-300 flex justify-center items-center">
                <div className="navbar navbar-primary w-4/5 h-10">
                    <div className="navbar-start">
                        <div className="dropdown">
                            {navLinks.length > 0 && (
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
                            )}
                        </div>
                        <a
                            className={`text-primary justify-center items-center ${navLinks.length > 0 ? "hidden md:flex" : "flex"}`}
                        >
                            <span className="preeti text-6xl font-bold">a</span>
                            <span className="text-2xl font-bold">
                                bolanabola
                            </span>
                        </a>
                    </div>

                    <div
                        className={`navbar-center ${navLinks.length <= 0 ? "hidden" : "md:hidden"}`}
                    >
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

                            <VerticalDivider
                                className={`${!isSignedIn && "hidden lg:flex"}`}
                            />

                            <IconLink
                                style="primary"
                                href="https://github.com/shivajichalise"
                                target="_blank"
                                className="hidden lg:flex"
                            >
                                <IconBrandGithub size={22} />
                            </IconLink>

                            <IconLink
                                style="primary"
                                href="https://linkedin.com/in/shivajichalise"
                                className="hidden lg:flex"
                                target="_blank"
                            >
                                <IconBrandLinkedin />
                            </IconLink>

                            <IconLink
                                style="primary"
                                href="https://instagram.com/shivajichalise"
                                className="hidden lg:flex"
                                target="_blank"
                            >
                                <IconBrandInstagram />
                            </IconLink>

                            <VerticalDivider className="hidden lg:flex" />

                            {isSignedIn ? (
                                <div className="dropdown dropdown-end">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-ghost btn-circle avatar"
                                    >
                                        <div className="w-8 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                    >
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">
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
            {navLinks.length > 0 && (
                <div
                    className={`w-screen ${isMobileMenuOpen ? "sm:block" : "hidden"}`}
                >
                    <ul className="absolute shadow-xl menu bg-primary text-base-300 w-full flex justify-center items-center text-xl">
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
            )}
        </>
    )
}

export default Navbar
