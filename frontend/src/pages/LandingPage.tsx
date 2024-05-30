import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import ToolsUsed from "../components/ToolsUsed"

function LandingPage() {
    const navLinks = [
        { label: "Home", link: "#home" },
        { label: "Features", link: "#features" },
        { label: "Details", link: "#details" },
    ]
    return (
        <>
            <Navbar menus={navLinks} />
            <Hero />
            <ToolsUsed />
            <Footer />
        </>
    )
}

export default LandingPage
