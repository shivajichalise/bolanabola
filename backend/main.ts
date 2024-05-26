import "dotenv/config"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import authRoutes from "./routes/authRoutes"

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173",
    })
)

app.get("/api", (_, res) => {
    return res.json({ message: "Running" }).status(200)
})

app.use("/api", authRoutes)

export default app
