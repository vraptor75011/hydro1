import userSchema from "./users/typeDefs.graphqls";
import userQueries from "./users/queries.graphqls";
import siteSchema from "./sites/typeDefs.graphqls";
import siteQueries from "./sites/queries.graphqls";
import siteMutations from "./sites/mutations.graphqls";
import Schema from "./schema.graphqls";

const GraphqlSchema = [
  Schema,
  userSchema,
  userQueries,
  siteSchema,
  siteQueries,
  siteMutations
];

export default GraphqlSchema;