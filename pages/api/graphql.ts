import { ApolloServer } from 'apollo-server-micro';
import { schema } from 'apollo/schema';
import createLoaders from 'apollo/loaders';
import { snakeCase } from 'lodash';
const apolloServer = new ApolloServer({
  fieldResolver: (source, args, contextValue, info) => (
    typeof source[snakeCase(info.fieldName)] !== 'undefined' ?
      source[snakeCase(info.fieldName)] : source[info.fieldName]
  ),
  schema,
  context (ctx) {
    return  { ...ctx, loaders: createLoaders };
  }
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: '/api/graphql' });
