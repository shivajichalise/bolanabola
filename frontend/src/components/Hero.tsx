const Hero = () => {
    return (
        <div
            className="hero mt-14 h-80 rounded-lg"
            style={{
                backgroundImage:
                    "url(https://gifdb.com/images/high/sad-man-crying-meme-ewgjulv950crqr8m.webp)",
            }}
        >
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full">
                    <h1 className="text-4xl font-bold lg:text-6xl">
                        Boldeu na hou.. boldeu &#128557;
                    </h1>
                    <p className="py-2 text-lg lg:text-xl">
                        k saro bhau khakoo ?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
