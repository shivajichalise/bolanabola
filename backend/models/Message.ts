import { DataTypes } from "sequelize"
import { sequelize } from "../config/db"
import User from "./User"
import Conversation from "./Conversation"

const Message = sequelize.define(
    "Message",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        message: {
            type: DataTypes.TEXT("long"),
            allowNull: false,
        },
    },
    {
        tableName: "messages",
        hooks: {
            afterCreate: (record) => {
                delete record.dataValues.createdAt
                delete record.dataValues.updatedAt
            },
            afterUpdate: (record) => {
                delete record.dataValues.createdAt
                delete record.dataValues.updatedAt
            },
        },
    }
)

Message.belongsTo(User, {
    foreignKey: "from_user",
    as: "FromUser",
    constraints: false,
})
Message.belongsTo(Conversation, {
    foreignKey: "conversation_id",
    as: "Conversation",
    constraints: false,
})

Message.sync({ alter: true })
export default Message
