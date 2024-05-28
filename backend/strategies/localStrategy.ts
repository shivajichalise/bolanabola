import passport from "passport"
import { Strategy } from "passport-local"
import { emailExists } from "../controllers/userController"
import User from "../models/User"
import bcrypt from "bcryptjs"
import TUserSchema from "../types/UserType"

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user)
    })
})

passport.deserializeUser(function (user: TUserSchema, cb) {
    process.nextTick(function () {
        return cb(null, user)
    })
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
                    attributes: ["id", "name", "email", "password"],
                })

                if (user) {
                    const savedPassword = user.get("password") as string

                    const isPasswordValid = await bcrypt.compare(
                        password,
                        savedPassword
                    )

                    if (isPasswordValid) {
                        delete user.dataValues.password
                        done(null, user)
                    } else {
                        throw new Error("Invalid credentials.")
                    }
                }
            } catch (err) {
                done(err, false)
            }
        }
    )
)
