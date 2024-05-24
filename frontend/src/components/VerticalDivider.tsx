import VerticalDividerProps from "../types/VerticalDividerProps"

const VerticalDivider = (props: VerticalDividerProps) => {
    return (
        <div className="flex flex-1">
            <div
                className={`h-[25px] min-h-[1rem] w-px self-stretch bg-secondary opacity-80 mx-2.5 ${props.className}`}
            ></div>
        </div>
    )
}

export default VerticalDivider
