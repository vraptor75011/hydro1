/**
 * Created by Olivier on 31/12/2016.
 */
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
