const Accordion = () => {
    return (
        <div className="flex justify-center items-center w-full mt-12 lg:justify-between">
            <div className="w-2/5 hidden lg:flex">
                <img
                    src="https://c.tenor.com/QfyyEKsk-G0AAAAd/tenor.gif"
                    className="rounded-lg"
                />
            </div>
            <div className="w-full lg:w-7/12">
                <div className="my-2 collapse collapse-arrow bg-primary">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Redux
                    </div>
                    <div className="collapse-content">
                        <p>for state management</p>
                    </div>
                </div>
                <div className="my-2 collapse collapse-arrow bg-info">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Tanstack
                    </div>
                    <div className="collapse-content">
                        <p>for data fetching and caching</p>
                    </div>
                </div>
                <div className="my-2 collapse collapse-arrow bg-accent">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Sockets.io
                    </div>
                    <div className="collapse-content">
                        <p>for real time communication</p>
                    </div>
                </div>
                <div className="my-2 collapse collapse-arrow bg-error">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Zod
                    </div>
                    <div className="collapse-content">
                        <p>for runtime type validation</p>
                    </div>
                </div>
                <div className="my-2 collapse collapse-arrow bg-error">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        React router
                    </div>
                    <div className="collapse-content">
                        <p>for client side routing</p>
                    </div>
                </div>
                <div className="my-2 collapse collapse-arrow bg-error">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Typescript
                    </div>
                    <div className="collapse-content">
                        <p>for static type checking</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
