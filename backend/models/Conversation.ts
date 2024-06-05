import { DataTypes } from "sequelize"
import { sequelize } from "../config/db"
import User from "./User"
import Message from "./Message"

const Conversation = sequelize.define(
    "Conversation",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
    },
    {
        tableName: "conversations",
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

Conversation.belongsTo(User, {
    foreignKey: "from_user",
    as: "FromUser",
    constraints: false,
})
Conversation.belongsTo(User, {
    foreignKey: "to_user",
    as: "ToUser",
    constraints: false,
})

User.hasMany(Conversation, {
    foreignKey: "from_user",
    as: "SentConversations",
    constraints: false,
})
User.hasMany(Conversation, {
    foreignKey: "to_user",
    as: "ReceivedConversations",
    constraints: false,
})

Conversation.sync({ alter: true })
export default Conversation
