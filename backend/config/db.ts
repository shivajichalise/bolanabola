import { Sequelize } from "sequelize"

const HOST: string = process.env.DB_HOST!
const DATABASE: string = process.env.DB_DATABASE!
const USERNAME: string = process.env.DB_USERNAME!
const PASSWORD: string = process.env.DB_PASSWORD!

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    dialect: "postgres",
})

const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log("Connection has been established successfully.")
    } catch (error) {
        console.error("Unable to connect to the database:", error)
        process.exit(1)
    }
}

export { sequelize, connectDB }
