import { z } from "zod"

const loginUserSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})

type TLoginFormValues = z.infer<typeof loginUserSchema>

export { loginUserSchema }
export default TLoginFormValues
