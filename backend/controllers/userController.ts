import User from "../models/User"

// @desc    Find an email
// @route   Post /api/users/:email
// @access  Public
export async function emailExists(email: string) {
    const user = await User.findAll({
        where: {
            email: email,
        },
    })

    if (user.length > 0) {
        return true
    }

    return false
}
