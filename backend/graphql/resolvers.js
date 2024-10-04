const db = require('../config/db');

const resolvers = {
  Query: {
    users: async () => {
      const result = await db.query('SELECT * FROM Users');
      return result.rows;
    },
    discussions: async () => {
      const result = await db.query('SELECT * FROM Discussions');
      return result.rows;
    },
    discussion: async (_, { discussion_id }) => {
      const result = await db.query('SELECT * FROM Discussions WHERE discussion_id = $1', [discussion_id]);
      return result.rows[0];
    },
    replies: async (_, { discussion_id }) => {
      const result = await db.query('SELECT * FROM Replies WHERE discussion_id = $1', [discussion_id]);
      return result.rows;
    },
    subscriptions: async () => {
      const result = await db.query('SELECT * FROM Subscriptions');
      return result.rows;
    },
    resources: async () => {
      const result = await db.query('SELECT * FROM Resources');
      return result.rows;
    },
  },
  Mutation: {
    addUser: async (_, { name, email }) => {
      const result = await db.query('INSERT INTO Users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
      return result.rows[0];
    },
    createDiscussion: async (_, { user_id, topic, content }) => {
      const result = await db.query(
        'INSERT INTO Discussions (user_id, topic, content) VALUES ($1, $2, $3) RETURNING *',
        [user_id, topic, content]
      );
      return result.rows[0];
    },
    addReply: async (_, { discussion_id, user_id, content }) => {
      const result = await db.query(
        'INSERT INTO Replies (discussion_id, user_id, content) VALUES ($1, $2, $3) RETURNING *',
        [discussion_id, user_id, content]
      );
      return result.rows[0];
    },
    subscribe: async (_, { email }) => {
      const result = await db.query('INSERT INTO Subscriptions (email) VALUES ($1) RETURNING *', [email]);
      return result.rows[0];
    },
    uploadResource: async (_, { file_name, file_path, file_type }) => {
      const result = await db.query(
        'INSERT INTO Resources (file_name, file_path, file_type) VALUES ($1, $2, $3) RETURNING *',
        [file_name, file_path, file_type]
      );
      return result.rows[0];
    },
  },
};

module.exports = resolvers;
