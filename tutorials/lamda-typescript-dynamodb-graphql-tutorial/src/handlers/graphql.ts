import { Context, APIGatewayProxyResult, APIGatewayProxyEvent, Callback } from 'aws-lambda';

import { ApolloServer, gql } from 'apollo-server-lambda';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server: ApolloServer = new ApolloServer({ typeDefs, resolvers });

export const handler: (event: APIGatewayProxyEvent, context: Context, callback: Callback<APIGatewayProxyResult>) => void = server.createHandler();