import IconButtonProps from "../types/IconButtonProps"

const IconButton = (props: IconButtonProps) => {
    return (
        <button
            className={`bg-default-primary text-text-200 hover:bg-default-primary-content rounded-md p-2`}
            onClick={props.onClick}
            type="button"
        >
            {props.children}
        </button>
    )
}

export default IconButton
