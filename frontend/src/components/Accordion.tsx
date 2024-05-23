import AccordionProps from "../types/AccordionProps"

const Accordion = (props: AccordionProps) => {
    const contents = props.contents
    return (
        <div
            className="flex justify-center items-center w-full mt-12 lg:justify-between"
            id="features"
        >
            <div className="w-2/5 hidden lg:flex">
                <img
                    src="https://c.tenor.com/QfyyEKsk-G0AAAAd/tenor.gif"
                    className="rounded-lg"
                />
            </div>
            <div className="w-full lg:w-7/12">
                {contents.map((content) => (
                    <div className="my-2 collapse collapse-arrow bg-primary">
                        <input
                            type="radio"
                            name="my-accordion-2"
                            defaultChecked
                        />
                        <div className="collapse-title text-xl font-medium">
                            {content.title}
                        </div>
                        <div className="collapse-content">
                            <p>{content.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Accordion
