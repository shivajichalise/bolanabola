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
        conversation_id: {
            type: DataTypes.UUIDV4,
            references: {
                model: User,
                key: "id",
            },
            allowNull: false,
        },
        from_user: {
            type: DataTypes.UUIDV4,
            references: {
                model: User,
                key: "id",
            },
            allowNull: false,
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

Message.belongsTo(Conversation, {
    foreignKey: "conversation_id",
    as: "Conversation",
})

Message.sync({ alter: true })
export default Message
