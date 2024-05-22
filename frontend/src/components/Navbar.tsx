import { useSelector } from "react-redux"
import ThemeSwitcher from "./ThemeSwitcher"
import { RootState } from "../store"

const Navbar = () => {
    const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn)

    const navLinks = [
        { label: "Home", link: "#home" },
        { label: "Features", link: "#features" },
        { label: "Details", link: "#details" },
    ]

    return (
        <div className="navbar bg-primary rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
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
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks.map((link) => (
                            <li key={link.link}>
                                <a href={link.link}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <a
                    className="text-2xl ml-3 nanum cursor-pointer lg:text-3xl"
                    id="handwritten"
                >
                    Bola na bola
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks.map((link) => (
                        <li key={link.link}>
                            <a href={link.link}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="navbar-end">
                <div className="flex-none">
                    {isSignedIn ? (
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
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
                        <div className="navbar-end">
                            <a
                                href="/login"
                                className="btn btn-sm btn-outline btn-neutral"
                            >
                                Login
                            </a>
                        </div>
                    )}
                </div>
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Navbar
