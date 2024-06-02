import express from "express"
import { isSignedIn } from "../controllers/authController"
import { fetch, fetchMessages } from "../controllers/conversationController"

const router = express.Router()

router.post("/", isSignedIn, fetch)
router.post("/messages", isSignedIn, fetchMessages)

export default router
