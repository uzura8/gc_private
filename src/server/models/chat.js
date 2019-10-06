import db from './db'

class Chat extends db.Sequelize.Model {
  static findById(id) {
    const params = { where: { id: id }}
    return this.findOne(params)
  }

  static getChatByUserId(userId, type = '') {
    let params = { where: { userId: userId }}
    if (type) params.where.type = type
    return this.findAll(params)
  }
}

Chat.init(
  {
    id: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    type: {
      type: db.Sequelize.ENUM,
      values: ['private', 'public', 'support'],
      allowNull: false,
      defaultValue: 'public',
    },
    userId: {
      type: db.Sequelize.INTEGER,
      allowNull: false
    },
    name: {
      type: db.Sequelize.STRING,
      allowNull: false
    },
    body: {
      type: db.Sequelize.TEXT,
      allowNull: false
    },
  }, {
    sequelize: db.sequelize,
    modelName: 'Chat',
    tableName: 'chat',
    freezeTableName: true, // not changed table name
    underscored: true,
    timestamps: true, // Add updatedAt, createdAt
  }
)

export default Chat

