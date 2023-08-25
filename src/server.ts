import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";
import mongoose, { ConnectOptions } from "mongoose";

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

  apolloServer.applyMiddleware({ app: app, path: "/apis" });

  app.use((req, res) => {
    res.send("Hello from express apollo server");
  });

  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/post_db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log("Mongoose connected.....");
  } catch (error: any) {
    console.log("MongoDB Error", error.message);
  }

  app.listen(4000, () => console.log("server running on 4000"));
}

startServer();
