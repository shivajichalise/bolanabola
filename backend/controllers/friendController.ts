import { Request, Response } from "express"
import { validationResult } from "express-validator"
import { emailExists } from "./userController"
import Conversation from "../models/Conversation"
import User from "../models/User"
import TUserSchema from "../types/UserType"

// @desc    Add a friend
// @route   Post /api/friends/add
// @access  Private
export async function add(req: Request, res: Response) {
    const result = validationResult(req)

    if (!result.isEmpty()) {
        return res
            .status(403)
            .json({ error: "Validation failed.", errors: result.array() })
    }

    const { email } = req.body

    const doesEmailExist = await emailExists(email)

    if (doesEmailExist) {
        const recipient = (await User.findOne({
            where: {
                email: email,
            },
            attributes: ["id", "email"],
        })) as unknown as TUserSchema

        const sender = req.user as TUserSchema

        console.log(sender.email, recipient.email)

        if (sender.email == recipient.email) {
            return res.status(500).json({ error: "You cannot add yourself." })
        }

        const conversation = Conversation.create({
            from_user: sender.id,
            to_user: recipient.id,
        })

        return res.status(200).json({
            conversation: conversation,
            message: "Conversation created.",
        })
    }

    return res
        .status(404)
        .json({ error: "User with given email do not exist." })
}
