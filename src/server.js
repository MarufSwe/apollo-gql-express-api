const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const mongoose = require("mongoose");

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (error) => {
      console.error("GraphQL Error:", error.message);
      return error;
    },
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });

  app.use((req, res) => {
    res.send("Hello from express apollo server");
  });

  try {
    // await mongoose.connect("mongodb://localhost:27017/mydb", {
    await mongoose.connect("mongodb://0.0.0.0:27017/post_db", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Mongoose connected.....");
  } catch (error) {
    console.log("MongoDB Error", error.message);
  }

  app.listen(4000, () => console.log("server running on 4000"));
}

startServer();
