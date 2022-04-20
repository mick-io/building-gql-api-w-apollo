const fs = require("fs");

const { ApolloServer, ApolloError } = require("apollo-server");

const resolvers = require("./resolvers");
const typeDefs = fs.readFileSync("./src/typedefs.gql", "utf8");

const SessionAPI = require("./datasources/sessions");
const SpeakerAPI = require("./datasources/speakers");

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  debug: false,
  formatError: (err) => {
    if (err.extensions.console === "INTERNAL_SERVER_ERROR") {
      return new ApolloError("We are having some trouble", "ERROR", {
        token: "uniquetoken",
      });
    }
    return err;
  },
});

server.listen({ port: process.env.PORT || 4001 }).then(({ url }) => {
  console.log(`GraphQL running at: ${url}`);
});
