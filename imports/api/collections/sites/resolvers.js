import { Sites } from './collection';

const resolvers = {
  Query: {
    sites(root, { limit }) {
      return Sites.find({}, { limit: limit }).fetch();
    },
  },
  Mutation: {
    async insertSite(root,  {userId, name} , context) {
      if (context.user._id === userId) {
        const _id = Sites.insert({ name: name, owner: userId });
        return {_id: _id};
      }
    },
    async updateSite(root, { userId, siteId, name }, context) {
      if (context.user._id === userId) {
        return Sites.update(siteId, { $set: { name: name } });
      }
    },
    async removeSite(root, { userId, siteId }, context) {
      if (context.user._id === userId) {
        return Posts.remove(siteId);
      }
    }
  }
};

export default resolvers;
