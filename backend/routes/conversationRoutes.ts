import express from "express"
import { isSignedIn } from "../controllers/authController"
import { fetch } from "../controllers/conversationController"

const router = express.Router()

router.post("/", isSignedIn, fetch)

export default router
