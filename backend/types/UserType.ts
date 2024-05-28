import { z } from "zod"

const userSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
})

type TUserSchema = z.infer<typeof userSchema>

export { userSchema }
export default TUserSchema
