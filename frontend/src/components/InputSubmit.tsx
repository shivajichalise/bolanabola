import InputSubmitProps from "../types/InputSubmitProps"

const InputSubmit = (props: InputSubmitProps) => {
    const { value } = props

    return (
        <div className="my-6">
            <button type="submit" className="btn btn-active btn-primary w-full">
                {value}
            </button>
        </div>
    )
}

export default InputSubmit
