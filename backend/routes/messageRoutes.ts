import express from "express"
import { isSignedIn } from "../controllers/authController"
import {
    fetchMessages,
    storeMessage,
} from "../controllers/conversationController"

const router = express.Router()

router.post("/", isSignedIn, fetchMessages)

router.post("/create", isSignedIn, storeMessage)

export default router
