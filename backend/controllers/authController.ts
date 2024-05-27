import { NextFunction, Request, Response } from "express"
import { emailExists } from "./userController"
import bcrypt from "bcryptjs"
import User from "../models/User"
import { validationResult } from "express-validator"

// @desc    Register a user
// @route   Post /api/register
// @access  Public
export async function registerUser(req: Request, res: Response) {
    const result = validationResult(req)

    if (!result.isEmpty()) {
        return res
            .status(403)
            .json({ message: "Validation failed.", errors: result.array() })
    }

    const { name, email, password } = req.body

    const userExists = await emailExists(email)

    if (userExists) {
        return res.status(409).json({ message: "Email already exists." })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword: string = await bcrypt.hash(password, salt)

    const user = await User.create({
        name: name,
        email: email,
        password: hashedPassword,
    })

    return res.json({
        message: "Registered successfully.",
        user: user.toJSON(),
    })
}

// @desc    Login a user
// @route   Post /api/login
// @access  Public
export async function loginUser(req: Request, res: Response) {
    res.sendStatus(200)
}

// @desc    Logout a user
// @route   Post /api/logout
// @access  Protected
export async function logoutUser(req: Request, res: Response) {
    if (!req.user) {
        return res.status(200).json({ message: "Logged out." })
    }

    req.logout((err) => {
        if (err) {
            return res.status(400)
        }
        return res.status(200).json({ message: "Logged out." })
    })
}

export function validateLoginRequest(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const result = validationResult(req)

    if (!result.isEmpty()) {
        return res
            .status(403)
            .json({ message: "Validation failed.", errors: result.array() })
    }

    next()
}
