import { Request, Response } from "express"
import { validationResult } from "express-validator"
import { emailExists } from "./userController"
import Conversation from "../models/Conversation"
import User from "../models/User"
import TUserSchema from "../types/UserType"
import { Op } from "sequelize"

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

        if (sender.email == recipient.email) {
            return res.status(500).json({ error: "You cannot add yourself." })
        }

        const oldConversation = await Conversation.findOne({
            where: {
                [Op.or]: [
                    {
                        from_user: sender.id,
                        to_user: recipient.id,
                    },
                    {
                        from_user: recipient.id,
                        to_user: sender.id,
                    },
                ],
            },
        })

        if (oldConversation) {
            return res
                .status(500)
                .json({ error: "You've already added this friend." })
        }

        const conversation = await Conversation.create({
            from_user: sender.id,
            to_user: recipient.id,
        })

        const fromUser = await User.findByPk(sender.id, {
            attributes: ["id", "name", "email"],
        })
        const toUser = await User.findByPk(recipient.id, {
            attributes: ["id", "name", "email"],
        })

        conversation.setDataValue("FromUser", fromUser)
        conversation.setDataValue("ToUser", toUser)

        return res.status(200).json({
            conversation: conversation,
            message: "Conversation created.",
        })
    }

    return res
        .status(404)
        .json({ error: "User with given email do not exist." })
}
