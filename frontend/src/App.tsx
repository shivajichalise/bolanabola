import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center p-5 w-full lg:w-4/5">
                <Navbar />
                <Hero />
            </div>
        </div>
    )
}

export default App
