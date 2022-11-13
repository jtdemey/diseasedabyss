import fastify from "fastify";
import fs from "fs";
import path from "path";
import db from "../scripts/db.js";

const server = fastify({ logger: true });

server.get("/", async (request, reply) => {
  const stream = fs.createReadStream(path.join(process.cwd(), "index.html"));
  reply.type("text/html").send(stream);
});

server.get("/docs", async (request, reply) => {
  const docs = db.prepare("SELECT * FROM gamedocs").all();
  return {
    docs
  };
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
