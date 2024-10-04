const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    greeting: String
    users: [User]
    discussions: [Discussion]
    discussion(discussion_id: Int!): Discussion
    replies(discussion_id: Int!): [Reply]
    subscriptions: [Subscription]
    resources: [Resource]
  }

  type User {
    user_id: Int
    name: String
    email: String
  }

  type Discussion {
    discussion_id: Int
    user_id: Int
    topic: String
    content: String
    created_at: String
  }

  type Reply {
    reply_id: Int
    discussion_id: Int
    user_id: Int
    content: String
    created_at: String
  }

  type Subscription {
    subscription_id: Int
    email: String
    subscribed_at: String
  }

  type Resource {
    resource_id: Int
    file_name: String
    file_path: String
    file_type: String
    uploaded_at: String
  }

  type Mutation {
    createDiscussion(user_id: Int!, topic: String!, content: String!): Discussion
    addReply(discussion_id: Int!, user_id: Int!, content: String!): Reply
    addUser(name: String!, email: String!): User
    subscribe(email: String!): Subscription
    uploadResource(file_name: String!, file_path: String!, file_type: String!): Resource
  }
`;

module.exports = typeDefs;
