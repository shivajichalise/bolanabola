import Accordion from "./components/Accordion"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center p-5 w-full lg:w-4/5">
                <Navbar />
                <Hero />
                <div className="flex flex-col justify-center items-center mt-16">
                    <h1 className="text-4xl font-bold lg:text-5xl">
                        Tools used
                    </h1>
                    <p className="py-2 text-md lg:text-lg text-neutral text-center">
                        k k matrai garina ra timi sanga bolna lai....
                    </p>
                </div>
                <Accordion />
            </div>
        </div>
    )
}

export default App
