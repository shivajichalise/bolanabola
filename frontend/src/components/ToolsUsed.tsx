import {
    IconBrandGoogleBigQuery,
    IconBrandRedux,
    IconBrandSocketIo,
    IconBrandZwift,
    IconBrandReact,
    IconBrandTypescript,
} from "@tabler/icons-react"
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
                    link="Learn more about redux"
                    href="https://redux.js.org"
                />
                <Card
                    icon={<IconBrandGoogleBigQuery size={25} />}
                    title="Tanstack Query"
                    description="Declarative, always-up-to-date auto-managed queries and mutations"
                    link="Learn more about tanstack query"
                    href="https://tanstack.com/query/latest"
                />
                <Card
                    icon={<IconBrandZwift size={25} />}
                    title="Zod"
                    description="TypeScript-first schema declaration and validation"
                    link="Learn more about zod"
                    href="https://zod.dev"
                />
                <Card
                    icon={<IconBrandSocketIo size={25} />}
                    title="Socket.io"
                    description="Bidirectional and low-latency real time communication"
                    link="Learn more about socket.io"
                    href="https://socket.io"
                />
                <Card
                    icon={<IconBrandReact size={25} />}
                    title="React router"
                    description="Flawless client side routing"
                    link="Learn more about react router"
                    href="https://reactrouter.com"
                />
                <Card
                    icon={<IconBrandTypescript size={25} />}
                    title="Typescript"
                    description="Static type checking"
                    link="Learn more about typescript"
                    href="https://typescriptlang.org"
                />
            </div>
        </div>
    )
}

export default ToolsUsed
