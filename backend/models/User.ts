import { DataTypes } from "sequelize"
import { sequelize } from "../config/db"

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "users",
        hooks: {
            afterCreate: (record) => {
                delete record.dataValues.password
                delete record.dataValues.createdAt
                delete record.dataValues.updatedAt
            },
            afterUpdate: (record) => {
                delete record.dataValues.password
                delete record.dataValues.createdAt
                delete record.dataValues.updatedAt
            },
        },
    }
)

User.sync({ alter: true })
export default User
