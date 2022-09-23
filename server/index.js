import { ApolloServer } from 'apollo-server';
import queries from './typedefs-resolvers/_queries.js';
import mutation from './typedefs-resolvers/_mutations.js';
import books from './typedefs-resolvers/books.js';
import toDos from './typedefs-resolvers/toDos.js';
import date from './typedefs-resolvers/date.js';

const typeDefs = [
    queries,
    mutation,
    books.typeDefs,
    toDos.typeDefs,
    date.typeDefs,
];

const resolvers = [books.resolvers, toDos.resolvers, date.resolvers];

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});