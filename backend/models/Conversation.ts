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
        from_user: {
            type: DataTypes.UUID,
            references: {
                model: User,
                key: "id",
            },
        },
        to_user: {
            type: DataTypes.UUID,
            references: {
                model: User,
                key: "id",
            },
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

Conversation.belongsTo(User, { foreignKey: "from_user", as: "FromUser" })
Conversation.belongsTo(User, { foreignKey: "to_user", as: "ToUser" })

User.hasMany(Conversation, { foreignKey: "from_user", as: "SentConversations" })
User.hasMany(Conversation, {
    foreignKey: "to_user",
    as: "ReceivedConversations",
})

Message.belongsTo(Conversation, {
    foreignKey: "conversation_id",
    as: "Conversation",
})

Conversation.sync({ alter: true })
export default Conversation
