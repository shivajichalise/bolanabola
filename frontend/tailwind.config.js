import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: {
            "default-primary": "#577399",
            "default-primary-content": "#465C7A",
            "text-100": "#E0E0E2",
            "text-200": "#F7F7FF",
            "text-300": "#577399",
        },
    },
    plugins: [daisyui],

    daisyui: {
        themes: [
            {
                light: {
                    "base-300": "#FFFFFF",
                    primary: "#577399",
                    "primary-content": "#4E688A",
                    secondary: "#BDD5EA",
                    "secondary-content": "#A2C2DD",

                    "base-100": "#495867",
                    "base-200": "#3A4652",
                    "base-content": "#2C353E",

                    accent: "#81D2C7",
                    "accent-content": "#81D2C7",

                    neutral: "#F6F6F7",
                    "neutral-content": "#E7E8EC",
                    info: "#1C7293",
                    "info-content": "#1C7293",
                    success: "#52623A",
                    "success-content": "#fff",
                    warning: "#F19D5D",
                    "warning-content": "#F19D5D",
                    error: "#C95D63",
                    "error-content": "#C95D63",
                },
                dark: {
                    "base-300": "#2C353E",
                    primary: "#E7E8EC",
                    "primary-content": "#DDDDDE",
                    secondary: "#B9BABD",

                    "base-100": "#495867",
                    "base-200": "#3A4652",
                    "base-content": "#F6F6F7",
                    "secondary-content": "#E7E8EC",

                    accent: "#81D2C7",
                    "accent-content": "#81D2C7",

                    neutral: "#F6F6F7",
                    "neutral-content": "#E7E8EC",
                    info: "#1C7293",
                    "info-content": "#1C7293",
                    success: "#52623A",
                    "success-content": "#fff",
                    warning: "#F19D5D",
                    "warning-content": "#F19D5D",
                    error: "#C95D63",
                    "error-content": "#C95D63",
                },
            },
        ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "dracula", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root", // The element that receives theme color CSS variables
    },
}
