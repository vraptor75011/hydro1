/**
 * Created by Olivier on 26/03/2017.
 */
import { createApolloServer } from 'meteor/apollo';

import { schema } from './makeSchema';

createApolloServer({
  schema,
});