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
import { Server } from "socket.io"
import { createServer } from "http"

type OnlineUsers = {
    userId: string
    socketId: string
}[]

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: process.env.APP_URL,
    },
})

let onlineUsers: OnlineUsers = []

io.on("connection", (socket) => {
    socket.on("new_user", (userId) => {
        !onlineUsers.some((user) => user.userId === userId) &&
            onlineUsers.push({ userId, socketId: socket.id })
    })

    socket.on("message_sent", (message) => {
        const user = onlineUsers.find(
            (onlineUser) =>
                onlineUser.userId === message.conversationRecipientId
        )

        if (user) {
            io.to(user.socketId).emit("message_received", message)
        }
    })

    socket.on("disconnect", () => {
        onlineUsers = onlineUsers.filter(
            (onlineUser) => onlineUser.socketId !== socket.id
        )
    })
})

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
        origin: process.env.APP_URL,
    })
)

connectDB()

app.get("/api", (_, res) => {
    return res
        .json({ message: `Running on port ${process.env.PORT}` })
        .status(200)
})

app.use("/api", authRoutes)
app.use("/api/friends", friendRoutes)
app.use("/api/conversations", conversationRoutes)
app.use("/api/messages", messageRoutes)

export default httpServer
