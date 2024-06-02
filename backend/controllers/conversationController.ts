import { Request, Response } from "express"
import User from "../models/User"
import Conversation from "../models/Conversation"
import { Op } from "sequelize"
import TUserSchema from "../types/UserType"

// @desc    Fetch all conversations
// @route   Post /api/conversations
// @access  Private
export async function fetch(req: Request, res: Response) {
    const user = req.user as TUserSchema

    console.log(user)
    const conversations = await Conversation.findAll({
        where: {
            [Op.or]: [
                {
                    from_user: user.id,
                },
                {
                    to_user: user.id,
                },
            ],
        },
        include: [
            {
                model: User,
                as: "FromUser",
                attributes: ["id", "name", "email"],
            },
            {
                model: User,
                as: "ToUser",
                attributes: ["id", "name", "email"],
            },
        ],
    })

    return res.status(200).json({ conversations: conversations })
}
