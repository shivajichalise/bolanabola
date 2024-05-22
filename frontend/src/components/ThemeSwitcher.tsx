import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { toggleTheme } from "../reducers/themeReducers"
import { useEffect } from "react"
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react"

const ThemeSwitcher = () => {
    const theme = useSelector((state: RootState) => state.theme.mode)
    const dispatch = useDispatch()

    const toggleThemeHandler = () => {
        dispatch(toggleTheme())
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    return (
        <div className="p-2">
            {theme === "emerald" ? (
                <IconMoonFilled
                    size={20}
                    className="cursor-pointer"
                    onClick={toggleThemeHandler}
                />
            ) : (
                <IconSunFilled
                    size={20}
                    className="cursor-pointer"
                    onClick={toggleThemeHandler}
                />
            )}
        </div>
    )
}

export default ThemeSwitcher
