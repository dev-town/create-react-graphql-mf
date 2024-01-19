import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';

import { config, PORT } from './config';

const serverConfig = {
    typeDefs: config.typeDefs,
    resolvers: config.resolvers,
};

const server = new ApolloServer({
    schema: buildSubgraphSchema(serverConfig),
});

const startServer = async() => {
    const { url } = await startStandaloneServer(server, {
        listen: {
            port: PORT,
        },
        context: async () => {
            return {
    
            }
        },
    });

    console.log(`Server running on ${url}`);
}


startServer();