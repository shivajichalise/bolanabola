import "dotenv/config"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import authRoutes from "./routes/authRoutes"
import friendRoutes from "./routes/friendRoutes"
import conversationRoutes from "./routes/conversationRoutes"
import messageRoutes from "./routes/messageRoutes"
import { connectDB } from "./config/db"
import session, { SessionOptions } from "express-session"
import passport from "passport"
import cookieParser from "cookie-parser"
import "dotenv/config"

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

let sessionOptions: SessionOptions = {
    secret: process.env.SESSION_SECRET || "wild_bhau_khani_yar",
    cookie: { maxAge: 24 * 60 * 60 * 1000, secure: false }, // expires after 1day
    saveUninitialized: false,
    resave: false,
}

if (process.env.ENV === "production") {
    app.set("trust proxy", 1) // trust first proxy

    if (sessionOptions.cookie) {
        sessionOptions.cookie.secure = true // serve secure cookies
    }
}

app.use(session(sessionOptions))

app.use(passport.initialize())
app.use(passport.session())

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173",
    })
)

connectDB()

app.get("/api", (_, res) => {
    return res.json({ message: "Running on port 3000" }).status(200)
})

app.use("/api", authRoutes)
app.use("/api/friends", friendRoutes)
app.use("/api/conversations", conversationRoutes)
app.use("/api/messages", messageRoutes)

export default app
