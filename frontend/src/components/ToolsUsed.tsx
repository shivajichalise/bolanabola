import { IconBrandRedux } from "@tabler/icons-react"
import Card from "../components/Card"

const ToolsUsed = () => {
    return (
        <div
            className={`flex flex-col justify-center items-center py-10 bg-base-300`}
        >
            <div className="my-5 flex flex-col justify-center items-center">
                <h1 className="text-6xl text-default-primary font-bold">
                    Tools used
                </h1>
                <p className="text-md md:text-lg">
                    Powered by latest and widely preferred tech stack
                </p>
            </div>

            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
                <Card
                    icon={<IconBrandRedux size={25} />}
                    title="Redux"
                    description="Flawless statemanagement using redux"
                    link="Learn more abut redux"
                    href="https://redux.js.org"
                />
                <Card
                    icon={<IconBrandRedux size={25} />}
                    title="Redux"
                    description="Flawless statemanagement using redux"
                    link="Learn more abut redux"
                    href="https://redux.js.org"
                />
                <Card
                    icon={<IconBrandRedux size={25} />}
                    title="Redux"
                    description="Flawless statemanagement using redux"
                    link="Learn more abut redux"
                    href="https://redux.js.org"
                />
                <Card
                    icon={<IconBrandRedux size={25} />}
                    title="Redux"
                    description="Flawless statemanagement using redux"
                    link="Learn more abut redux"
                    href="https://redux.js.org"
                />
                <Card
                    icon={<IconBrandRedux size={25} />}
                    title="Redux"
                    description="Flawless statemanagement using redux"
                    link="Learn more abut redux"
                    href="https://redux.js.org"
                />
                <Card
                    icon={<IconBrandRedux size={25} />}
                    title="Redux"
                    description="Flawless statemanagement using redux"
                    link="Learn more abut redux"
                    href="https://redux.js.org"
                />
            </div>
        </div>
    )
}

export default ToolsUsed
