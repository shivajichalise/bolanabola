import { forwardRef } from "react"
import InputTextProps from "../types/InputTextProps"

const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
    const {
        type,
        id,
        name,
        placeholder,
        onChange,
        hasIcon,
        icon,
        optional,
        className,
        hasError,
        error,
    } = props

    return (
        <div className="my-4">
            <label
                className={`input ${hasError && "input-error"} flex items-center gap-2 bg-neutral-content text-default-primary ${className}`}
            >
                {hasIcon && icon}
                <input
                    type={type}
                    className="w-full h-full"
                    placeholder={placeholder}
                    id={id}
                    name={name}
                    onChange={onChange}
                    ref={ref}
                />
                {optional && (
                    <span className="badge badge-sm badge-primary text-neutral text-xs">
                        OPT
                    </span>
                )}
            </label>
            {error && (
                <div className="label">
                    <span className="label-text-alt text-error">{error}</span>
                </div>
            )}
        </div>
    )
})

export default InputText
