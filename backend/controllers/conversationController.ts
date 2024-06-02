import { Request, Response } from "express"
import User from "../models/User"
import Conversation from "../models/Conversation"
import { Op } from "sequelize"
import TUserSchema from "../types/UserType"
import Message from "../models/Message"

// @desc    Fetch all conversations
// @route   Post /api/conversations
// @access  Private
export async function fetch(req: Request, res: Response) {
    const user = req.user as TUserSchema

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

// @desc    Fetch all messages of a conversation
// @route   Post /api/messages
// @access  Private
export async function fetchMessages(req: Request, res: Response) {
    const { conversation_id } = req.body

    const messages = await Message.findAll({
        where: {
            conversation_id: conversation_id,
        },
    })

    return res.status(200).json({ messages: messages })
}

// @desc    Store of a conversation
// @route   Post /api/messages/create
// @access  Private
export async function storeMessage(req: Request, res: Response) {
    const { conversation_id, message } = req.body
    const user = req.user as TUserSchema

    const messages = await Message.create({
        conversation_id: conversation_id,
        message: message,
        from_user: user.id,
    })

    return res.status(200).json({ message: messages })
}
