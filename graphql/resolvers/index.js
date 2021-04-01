const userResolvers = require('./userResolvers')
const messageResolvers = require('./messageResolvers')
const { User, Messages } = require('../../models')

module.exports = {
  Message: {
    createdAt: (parent) => parent.createdAt.toISOString(),
  },
  Reaction: {
    createdAt: (parent) => parent.createdAt.toISOString(),
    message: async (parent) => await Messages.findByPk(parent.messageId),
    user: async (parent) =>
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