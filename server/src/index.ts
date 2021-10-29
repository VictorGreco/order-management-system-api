import fs from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';

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

server
  .listen()
  .then(({ url }: { url: any }) =>
    // tslint:disable-next-line:no-console
    console.log(`Server is running on ${url}`)
  );