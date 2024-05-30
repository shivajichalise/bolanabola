import express from "express"
import { add } from "../controllers/friendController"
import { body } from "express-validator"
import { isSignedIn } from "../controllers/authController"

const router = express.Router()

router.post(
    "/add",
    [body("email").trim().isEmail().withMessage("Email is not valid.")],
    isSignedIn,
    add
)

export default router
