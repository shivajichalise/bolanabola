import passport from "passport"
import { Strategy } from "passport-local"
import { emailExists } from "../controllers/userController"
import User from "../models/User"
import bcrypt from "bcryptjs"

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(user)
})

export default passport.use(
    new Strategy(
        { usernameField: "email" },
        async (username, password, done) => {
            try {
                const userExists = await emailExists(username)

                if (!userExists) {
                    throw new Error("Invalid credentials.")
                }

                let user = await User.findOne({
                    where: {
                        email: username,
                    },
                })

                if (user) {
                    const savedPassword = user.get("password") as string

                    const isPasswordValid = await bcrypt.compare(
                        password,
                        savedPassword
                    )

                    if (isPasswordValid) {
                        done(null, user)
                    } else {
                        throw new Error("Invalid credentialss.")
                    }
                }
            } catch (err) {
                done(err, false)
            }
        }
    )
)
