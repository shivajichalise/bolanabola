import { forwardRef } from "react"
import InputTextProps from "../types/InputTextProps"

const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
    const {
        type,
        id,
        name,
        placeholder,
        onChange,
        hasLabel,
        inputLabel,
        required,
    } = props

    return (
        <div className="w-full">
            {hasLabel && (
                <div className="m-1">
                    <label className="text-xs"></label>
                </div>
            )}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">
                        {inputLabel ?? name.toUpperCase()}{" "}
                        {required && (
                            <span className="text-error text-md">*</span>
                        )}
                    </span>
                </div>
                <input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    ref={ref}
                    className="input input-bordered"
                />
            </label>
        </div>
    )
})

export default InputText
