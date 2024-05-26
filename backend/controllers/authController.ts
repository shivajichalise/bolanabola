import { Request, Response } from "express"

// @desc    Register a user
// @route   Post /api/register
// @access  Public
export async function registerUser(req: Request, res: Response) {
    console.log("Registered")
    console.log(req.body)
}

// @desc    Login a user
// @route   Post /api/login
// @access  Public
export async function loginUser(req: Request, res: Response) {
    console.log("Logged in")
}

// @desc    Logout a user
// @route   Post /api/logout
// @access  Protected
export async function logoutUser(req: Request, res: Response) {
    console.log("Logged out")
}
