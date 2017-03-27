/**
 * Created by Olivier on 04/12/2016.
 */
import { Random } from 'meteor/random';

const resolvers = {
  Query: {
    user(root, args, context) {
      // Only return the current user, for security
      if (context.userId === args.id) {
        return context.user;
      }
    },
  },
  User: {
    emails: ({emails}) => emails,
    randomString: () => Random.id(),
  }
};

export default resolvers;

