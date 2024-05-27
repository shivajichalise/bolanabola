import { z } from "zod"

const userSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
})

type TUserSchema = z.infer<typeof userSchema>

export { userSchema }
export default TUserSchema
