import fs from 'fs';
import path from 'path';
import { ApolloServer, ServerInfo } from 'apollo-server';

import { Query, Order, Mutation, Customer, Item } from './resolvers';

const resolvers = {
  Query,
  Mutation,
  Order,
  Customer,
  Item
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
})

const handleInitServerLogs = ({ port, subscriptionsPath, url }: ServerInfo): void => {
  console.log(`Server is running on port: ${port}`);
  console.log(`GraphQL enpoint: ${subscriptionsPath}`);
  console.log(`GraphQL Playground is running on ${url}`);
}

server
  .listen()
  .then(handleInitServerLogs);