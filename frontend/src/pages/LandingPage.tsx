import { IconBrandRedux } from "@tabler/icons-react"
import Accordion from "../components/Accordion"
import Card from "../components/Card"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import ToolsUsed from "../components/ToolsUsed"

function LandingPage() {
    const accordionData = [
        { title: "Redux", description: "for state management" },
        { title: "Tanstack", description: "for data fetching and caching" },
        { title: "Socket.io", description: "for real time communication" },
        { title: "Zod", description: "for runtime type validation" },
        { title: "React router", description: "for client side routing" },
        { title: "Typescript", description: "for static type checking" },
    ]

    return (
        <>
            <Navbar />
            <Hero />
            <ToolsUsed />
        </>
    )
}

export default LandingPage
