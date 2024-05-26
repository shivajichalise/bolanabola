import { forwardRef } from "react"
import InputTextProps from "../types/InputTextProps"

const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
    const { type, id, name, placeholder, onChange, hasIcon, icon, optional } =
        props

    return (
        <label className="input flex items-center gap-2 bg-neutral-content text-primary my-3">
            {hasIcon && icon}
            <input
                type={type}
                className=""
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
    )
})

export default InputText
