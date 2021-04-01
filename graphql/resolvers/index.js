const userResolvers = require('./userResolvers')
const messageResolvers = require('./messageResolvers')
const { User, Messages } = require('../../models')

module.exports = {
  Message: {
    createdAt: (parent) => parent.createdAt.toISOString(),
  },
  Reaction: {
    createdAt: (parent) => parent.createdAt.toISOString(),
    Message: async (parent) => await Messages.findByPk(parent.messageId),
    User: async (parent) =>
      await User.findByPk(parent.userId, {
        attributes: ['username', 'createdAt'],
      }),
  },
  User: {
    createdAt: (parent) => parent.createdAt.toISOString(),
  },
  Query: {
    ...userResolvers.Query,
    ...messageResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...messageResolvers.Mutation,
  },
  Subscription: {
    ...messageResolvers.Subscription,
  },
}