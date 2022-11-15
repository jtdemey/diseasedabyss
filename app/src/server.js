import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";
import db from "../scripts/db.js";

const server = fastify({ logger: true });

server.register(fastifyStatic, {
  root: path.join(process.cwd(), "dist")
});

server.get("/", (_, reply) => {
  reply.sendFile("index.html");
});

server.get("/docs", (_, reply) => {
  const docs = db.prepare("SELECT * FROM gamedocs").all();
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({ docs });
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
