import { z } from "zod"

const registerUserSchema = z
    .object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(8, "Password must be at least 8 characters."),
        password_confirmation: z.string().min(8, "Password do not match."),
    })
    .refine((values) => values.password === values.password_confirmation, {
        message: "Passwords do not match!",
        path: ["password_confirmation"],
    })

type TRegisterFormValues = z.infer<typeof registerUserSchema>

export { registerUserSchema }
export default TRegisterFormValues
